---
title: "Building user sign-up flow in Remix, Prisma and Superbase - part 1"
description: "Building user authenthication part 1"
date: "May 1 2024"
draft: false
---

Since December 2023, I have been building my very first software business, Screenly. It is a saas product with the mission of making candidate screening easier and faster for businesses.

Whilst building Screenly I come across certain technical issues that I wish more people had written in more depth about. I am writing this series (#buildingScreenly) as I come across some common problems in the hope that it would be helpful to someone else in the future. 

---

####  Prerequisities

My tech stack of choice is: Prisma, Remix and Supabase. I will also be deploying on Cloudflare Pages. You don't need to know any of these in a lot of details, if you have used Nextjs before then you should be comfortable with Remix.


 **Set up your remix application**

Use the create-cloudflare to create your new remix project

```
npm create cloudflare@latest my-remix-app -- --framework=remix
```




**Set up Supabase Authenthication**




```

//lib/supabase.server.ts

import { createServerClient, parse, serialize } from "@supabase/ssr";
import type { AppLoadContext } from '@remix-run/cloudflare';

export const createSupabaseServerClient = (request: Request, context: AppLoadContext) => {
  const cookies = parse(request.headers.get('Cookie') ?? '')
  const headers = new Headers()
  const supabaseClient = createServerClient(
  context.cloudflare.env.SUPABASE_URL!,
  context.cloudflare.env.SUPABASE_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key]
        },
        set(key, value, options) {
          headers.append('Set-Cookie', serialize(key, value, options))
        },
        remove(key, options) {
          headers.append('Set-Cookie', serialize(key, '', options))
        },
      },
    },
  )
  return { supabaseClient, headers }
}

```



```
//.dev.vars

SUPABASE_URL=*********************
SUPABASE_KEY=*********************

```

**Create up /register page**


```
// routes/register.tsx

import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
export default function RegisterPage(){
    return (
        <div>
<Form>
           <Input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Max"
                    autoCapitalize="none"
                    autoComplete="given-name"
                    autoCorrect="off"
                  />

                             <Input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Max"
                    autoCapitalize="none"
                    autoComplete="family-name"
                    autoCorrect="off"
                  />

                             <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Max@gmail.com"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                  />
                      <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                  />

                  <button>
Sign up
                  </button>

</Form>
        

        </div>
    )
}

```



```

export const action = async ({ request, context }: ActionFunctionArgs<GetLoadContext>) => {
 
  const formData = await request.formData();

  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;


  const { supabaseClient, headers } = createSupabaseServerClient(request, context)

 
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,

      }
    }

  })

  if (error) {
    return json({ message: error.message }, { status: 400 });

  }

  // if you want to expand this tutorial you can return a specific authnethicated page like /on-boarding or /dashboard instead
  return redirect("/");
}


```
