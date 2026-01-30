"use server";

import { getServerSession } from "next-auth";
import { User } from "@/models/User";
import { dbConnect } from "@/lib/db";
import { authOptions } from "@/lib/auth";

export async function toggleFavorite(slug: string) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);
    if (session?.user?.email) {
      const existingUser = await User.findOne({ email: session?.user?.email });
      if (existingUser.maclearnArticles.includes(slug)) {
        await User.findOneAndUpdate(
          { email: session.user.email },
          { maclearnArticles: existingUser.maclearnArticles.filter((article: string) => article !== slug) },
        );
      } else {
        await User.findOneAndUpdate(
          { email: session.user.email },
          { maclearnArticles: [...existingUser.maclearnArticles, slug] },
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
}
