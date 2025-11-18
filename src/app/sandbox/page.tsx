import { mockFiles, mockFolders } from "~/lib/mock-data";
import { db } from "~/server/db";
import { files_table, folders_table } from "~/server/db/schema";

export default function SandboxPage() {
  return (
    <form
      className="flex items-center justify-center min-h-screen"
      action={async () => {
        "use server";

        await db.insert(folders_table).values(
          mockFolders.map((folder, index) => ({
            id: index + 1,
            name: folder.name,
            parent: index !== 0 ? 1 : null,
          }))
        );

        await db.insert(files_table).values(
          mockFiles.map((file, index) => ({
            id: index + 1,
            name: file.name,
            size: 5000,
            url: file.url,
            parent: index,
          }))
        );
      }}
    >
      <button type="submit">Seed</button>
    </form>
  );
}
