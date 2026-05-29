import Link from "next/link";
import { newsSource } from "@/lib/source";

export default function NewsListingPage() {
  const posts = newsSource.getPages().sort((a, b) => {
    const dateA = (a.data as { date?: string }).date ?? "";
    const dateB = (b.data as { date?: string }).date ?? "";
    return dateB.localeCompare(dateA);
  });

  return (
    <div className="flex flex-col flex-1 max-w-3xl mx-auto w-full px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">News</h1>
      <p className="text-muted-foreground mb-8">
        Latest updates from the Combograph team.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No news posts yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => {
            const data = post.data as { date?: string; author?: string };
            const date = data.date ?? "";
            const author = data.author ?? "";
            const formattedDate = date
              ? new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "";

            return (
              <div
                key={post.url}
                className="group rounded-lg border p-6 transition-colors hover:bg-muted/50"
              >
                <Link href={post.url} className="block">
                  <div className="flex flex-row items-baseline justify-between gap-4 mb-2">
                    <h2 className="text-xl font-semibold group-underline">
                      {post.data.title}
                    </h2>
                    <span className="text-sm text-muted-foreground shrink-0">
                      {formattedDate}
                    </span>
                  </div>

                  {author && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {author}
                    </p>
                  )}

                  {post.data.description && (
                    <p className="text-muted-foreground">
                      {post.data.description}
                    </p>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "News — Combo Graph",
    description: "Latest updates and announcements from Combograph.",
  };
}
