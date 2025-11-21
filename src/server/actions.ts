"use server";

import { db } from "~/server/db";
import { files_table } from "./db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { UTApi } from "uploadthing/server";
import { cookies } from "next/headers";

export async function deleteFile(fileId: number) {
  const session = await auth();
  if (!session.userId) {
    throw new Error("Unauthorized");
  }

  const utApi = new UTApi();

  const fileToDelete = await db
    .select()
    .from(files_table)
    .where(
      and(eq(files_table.id, fileId), eq(files_table.ownerId, session.userId))
    );

  if (!fileToDelete) {
    return { error: "File not found" };
  }

  // const file = await db
  //   .delete(files_table)
  //   .where(
  //     and(eq(files_table.id, fileId), eq(files_table.ownerId, session.userId))
  //   )
  //   .then((res) => res[1]);

  // if (!file) {
  //   return { error: "File not found" };
  // }

  const utapiResult = await utApi.deleteFiles([
    fileToDelete[0]!.url.replace("https://utfs.io/f/", ""),
  ]);

  console.log(utapiResult);

  const dbDeleteResult = await db
    .delete(files_table)
    .where(eq(files_table.id, fileId));

  console.log(dbDeleteResult);

  const c = await cookies();

  c.set("force-refresh", JSON.stringify(Math.random()));

  return { success: true };
}
