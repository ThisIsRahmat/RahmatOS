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

  // validate form input
  const result = await validator.validate(formData);
  if (result.error) {
    return validationError(result.error);

  }

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

  //you can return a specific authnethicated page like /on-boarding or /dashboard instead
  return redirect("/onboarding");
}


```
**Create database schema**

Prisma is an ORM 

```
❯ npm install --save-dev prisma

❯ npm install @prisma/client

❯ npx prisma init --datasource-provider PostgreSQL

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore. Don't forget to exclude .env to not commit any secret.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started

```



```
import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var db: PrismaClient | undefined;
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
  db.$connect();
} else {
  if (!global.db) {
    global.db = new PrismaClient();
    global.db.$connect();
  }

  db = global.db;
}

export default db;

```


```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")

}

model UserProfile {
  id            String      @id @default(autoincrement())
  first_name    String?
  last_name     String?
  email         String?     @unique
  emailVerified Boolean     @default(false)
  companyName   String?
  avatar        String?
  createdAt     DateTime    @default(now())
  subscribed    Boolean     @default(false)

}

```

**Deploy to Cloudflare Pages** 


```

```

