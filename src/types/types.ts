// src/types/HNItem.ts

export interface HNItem {
  objectID: string;

  title: string | null;
  url: string | null;
  author: string;

  points: number | null;
  num_comments: number | null;

  created_at: string;
  created_at_i: number;
  updated_at: string;

  story_id: number | null;
  children: number[];

  _tags: string[];
  _highlightResult?: HighlightResult;
}

export interface HighlightField {
  value: string;
  matchLevel: "none" | "partial" | "full";
  matchedWords: string[];
}

export interface HighlightResult {
  author?: HighlightField;
  title?: HighlightField;
  url?: HighlightField;
}

export interface HNSearchResponse {
  // Общие флаги
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;

  // Результаты
  hits: HNItem[];
  hitsPerPage: number;

  // Пагинация
  nbHits: number;
  nbPages: number;
  page: number;

  // Метаданные запроса
  query: string;
  params: string;

  // Тайминги
  processingTimeMS: number;
  serverTimeMS: number;
  processingTimingsMS?: {
    _request?: Record<string, number>;
    fetch?: Record<string, number>;
    total?: number;
  };
}
