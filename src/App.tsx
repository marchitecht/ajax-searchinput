import { useState } from "react";
import { HNCombobox } from "./components/Views/HNCombobox";
import type { HNItem } from "./types/types";
import { DetailsCard } from "./components/DetailsCard";
import CustomLogo from "./components/CustomLogo";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<HNItem | null>(null);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Логотип */}
      <CustomLogo className="mb-8" />

      {/* Input / Combobox */}
      <div className="w-[500px]">
        <HNCombobox onSelect={setSelectedItem} />
      </div>

      {/* Детали выбранного элемента */}
      {selectedItem && (
        <div className="mt-6 w-[500px]">
          <DetailsCard item={selectedItem} />
        </div>
      )}
    </main>
  );
}
