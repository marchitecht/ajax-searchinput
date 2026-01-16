import { searchHN } from "@/api";
import type { HNItem } from "@/types/types";
import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

interface HNComboboxProps {
  onSelect: (item: HNItem) => void;
  onQueryChange?: (query: string) => void; 
}
export function HNCombobox({ onSelect, onQueryChange }: HNComboboxProps) {
  const [query, setQuery] = React.useState("");
  const [items, setItems] = React.useState<HNItem[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // уведомляем родителя о изменении query
    if (onQueryChange) onQueryChange(query);

    if (!query) {
      setItems([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);
      const data = await searchHN(query);      
      setItems(data.slice(0, 10));
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, onQueryChange]);

  return (
    <div className="relative w-full">
      <Command shouldFilter={false}>
        {/* Input */}
        <CommandInput
          className="w-full px-6 py-4 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
          value={query}
          onValueChange={setQuery}
        />

        {/* Popover */}
        {query && (items.length > 0 || loading) && (
          <CommandList className="absolute top-full left-0 z-50 mt-1 max-h-60 w-full overflow-y-auto border border-gray-300 rounded-md bg-white shadow-lg">
            {loading && <CommandEmpty>Loading...</CommandEmpty>}
            {!loading && items.length === 0 && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}

            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.objectID}
                  value={item.objectID}
                  onSelect={() => onSelect(item)}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer rounded-md"
                >
                  {item.title ?? "Untitled"}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}
