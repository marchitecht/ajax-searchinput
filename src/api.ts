import type { HNItem, HNSearchResponse } from "./types/types";

export async function searchHN(query: string): Promise<HNItem[]> {
  const response = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }

  const data: HNSearchResponse = await response.json();
  console.log(data);
  
  return data.hits;
}
