import { useState } from "react";
import { HNCombobox } from "./components/Views/HNCombobox";
import type { HNItem } from "./types/types";
import { DetailsCard } from "./components/DetailsCard";
import CustomLogo from "./components/CustomLogo";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<HNItem | null>(null);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col items-center mt-24">
        <CustomLogo className="mb-6" />

        <div className="w-[500px]">
          <HNCombobox
            onSelect={(item) => setSelectedItem(item)}
            onQueryChange={(q) => {
              if (!q) setSelectedItem(null);
            }}
          />
        </div>
      </div>

      {selectedItem && (
        <div className="mt-72 w-[500px]">
          <DetailsCard item={selectedItem} />
        </div>
      )}
    </main>
  );
}
