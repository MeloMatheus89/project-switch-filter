import React, { useState, useMemo } from "react";
import { Network } from "lucide-react";
import { FilterPanel } from "./components/FilterPanel";
import { SwitchCard } from "./components/SwitchCard";
import { mockSwitches } from "./types";

function App() {
  const [portCount, setPortCount] = useState(1);
  const [hasPoe, setHasPoe] = useState(false);
  const [hasManagement, setHasManagement] = useState(false);

  const filteredSwitches = useMemo(() => {
    return mockSwitches.filter(
      (sw) =>
        sw.ports >= portCount && (!hasPoe || sw.hasPoe) && (!hasManagement || sw.hasManagement)
    );
    //to do: Implement the sort function here
  }, [portCount, hasPoe, hasManagement]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-navy-900 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center space-x-3">
          <Network className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Switch Finder</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel
              portCount={portCount}
              setPortCount={setPortCount}
              hasPoe={hasPoe}
              setHasPoe={setHasPoe}
              hasManagement={hasManagement}
              setHasManagement={setHasManagement}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSwitches.length > 0 ? (
                filteredSwitches.map((sw) => <SwitchCard key={sw.id} switch={sw} />)
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Nenhum switch encontrado com os critérios selecionados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-navy-900 text-white py-4 px-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">Desenvolvido por: Matheus Ferreira de Melo</p>
          <p className="text-sm text-navy-200">Contato: matheusmelo@hotmail.com.br</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
