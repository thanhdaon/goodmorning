import { sql } from "drizzle-orm";
import { unstable_noStore } from "next/cache";
import { CopyToClipBoard } from "~/components/copy-to-clipboard";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { db } from "~/db";
import { goodmornings } from "~/db/schema";

export default async function Home() {
  unstable_noStore();

  const [{ content }] = await db
    .select({ content: goodmornings.content })
    .from(goodmornings)
    .orderBy(sql`RAND()` as any)
    .limit(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="w-full flex justify-between  items-center">
            <div className="underline"> Good Morning</div>
            <CopyToClipBoard content={content} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </Card>
    </main>
  );
}
