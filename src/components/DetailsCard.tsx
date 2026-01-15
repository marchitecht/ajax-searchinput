import type { HNItem } from "@/types/types";

export function DetailsCard({ item }: { item: HNItem }) {
  return (
    <div className="mt-6 p-4 border rounded-md bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
      <p>
        <strong>Author:</strong> {item.author}
      </p>
      <p>
        <strong>Points:</strong> {item.points}
      </p>
      <p>
        <strong>Comments:</strong> {item.num_comments}
      </p>
      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Open source
        </a>
      )}
    </div>
  );
}
