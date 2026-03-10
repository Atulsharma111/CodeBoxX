import {NextRequest,NextResponse} from "next/server";
import {currentUser} from "@clerk/nextjs/server";
import {db} from "@/config/db"
import {usersTable} from "@/config/schema";
import {eq} from "drizzle-orm";


 export async function POST (req: NextRequest){


  const user  = await currentUser();
  //  if user already exist 

  const users = await db.select().from(usersTable)
  // @ts-ignore
  .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress))

  // if not create the new user record 
  if (users.length<=0)
    {
      const newuser={
        name:user?.fullName ??'',
        email:user?.primaryEmailAddress?.emailAddress ??'',
        points :0

      }

      const result=await db.insert(usersTable)
      .values(newuser).returning()
      return NextResponse.json(result[0])
    }
// return user info 
    return NextResponse.json(users[0])
 }