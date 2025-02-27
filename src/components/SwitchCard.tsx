import React from "react";
import { Network, Power, ArrowUp } from "lucide-react";
import type { Switch } from "../types";

interface SwitchCardProps {
  switch: Switch;
}

export function SwitchCard({ switch: switchData }: SwitchCardProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  /* Aqui começa o retorno do DOM na página. Esse DOM necessita de buscar informações no arquivo types.ts. Nele existe uma estrutura em TypeScript que possui os dados.
Existe também uma lógica para apresentar as informações básicas de cada switch.
A biblioteca Lucide-react é responsável pelos ícones da página. Para esse módulo, foram usados apenas 3 itens. */
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-102 relative">
      <button
        onClick={scrollToTop}
        className="absolute top-2 right-2 bg-navy-600 text-white p-2 rounded-full shadow-md hover:bg-navy-700 transition-colors z-10"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
      {/* Início da exibição dos dados do switch */}
      <img src={switchData.imageUrl} alt={switchData.model} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-navy-900 mb-2">{switchData.model}</h3>
        <p className="text-gray-600 text-sm mb-4">{switchData.description}</p>
        <div className="flex flex-wrap gap-2">
          {/* Quantidade de portas */}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-navy-100 text-navy-800">
            <Network className="w-4 h-4 mr-1" />
            {switchData.ports} Portas
          </span>
          {/* Possui PoE?  */}
          {switchData.hasPoe && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              <Power className="w-4 h-4 mr-1" />
              PoE
            </span>
          )}
          {/* Possui gerenciamento? */}
          {switchData.hasManagement && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
              <Network className="w-4 h-4 mr-1" />
              Gerenciável
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
