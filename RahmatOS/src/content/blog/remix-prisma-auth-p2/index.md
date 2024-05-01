---
title: "Building a user sign-up flow in Remix, Prisma and Superbase - part 2"
description: "Sign up flow part 2"
date: "May 1 2024"
draft: false
---

Since December 2023, I have been building my very first software business, Screenly. It is a saas product with the mission of making candidate screening easier and faster for businesses.

Whilst building Screenly I come across certain technical issues that I wish more people had written in more depth about. I am writing this series (#buildingScreenly) as I come across some common problems in the hope that it would be helpful to someone else in the future. 

---

#### Recap

In the first part of the tutorial we created a basic /register authenthication page, if you have not completed the first stag I strongly recommend it. 


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
  jobTitle      String?
  avatar        String?
  createdAt     DateTime    @default(now())
  subscribed    Boolean     @default(false)

}

```

Create database 


**Saving user profile details in database**

In supabase create a trigger so when a new user is registered their details get registered in the UserProfile database

```
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table "User" enable row level security;

-- alter table "table_name" enable row level security;


create policy "Public profiles are viewable by everyone." on  "User"
  for select using (true);

create policy "Users can insert their own profile." on  "User"
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own profile." on  "User"
  for update using ((select auth.uid()) = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into "User" (id, email, first_name, last_name)
  values (new.id, new.raw_user_meta_data->>'email', new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();



```



**Deploy to Cloudflare Pages** 


```

```

