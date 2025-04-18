import React, { useState, useMemo } from 'react';
import { Network, Wifi } from 'lucide-react';
import { FilterPanel } from './components/FilterPanel';
import { AccessPointFilterPanel } from './components/AccessPointFilterPanel';
import { SwitchCard } from './components/SwitchCard';
import { AccessPointCard } from './components/AccessPointCard';
import { mockSwitches, mockAccessPoints } from './types';

function App() {
  // Switch filters
  const [portCount, setPortCount] = useState(4);
  const [hasPoe, setHasPoe] = useState(false);
  const [hasManagement, setHasManagement] = useState(false);

  // Access Point filters
  const [wifiStandard, setWifiStandard] = useState('All');
  const [environment, setEnvironment] = useState('All');
  const [minDevices, setMinDevices] = useState(50);

  // Toggle between switches and access points
  const [showAccessPoints, setShowAccessPoints] = useState(false);

  const filteredSwitches = useMemo(() => {
    return mockSwitches
      .filter(sw => 
        sw.ports >= portCount &&
        (!hasPoe || sw.hasPoe) &&
        (!hasManagement || sw.hasManagement)
      )
      .sort((a, b) => a.ports - b.ports);
  }, [portCount, hasPoe, hasManagement]);

  const filteredAccessPoints = useMemo(() => {
    return mockAccessPoints
      .filter(ap => 
        (wifiStandard === 'All' || ap.wifiStandard === wifiStandard) &&
        (environment === 'All' || ap.environment === environment) &&
        ap.maxDevices >= minDevices
      )
      .sort((a, b) => b.maxThroughput - a.maxThroughput);
  }, [wifiStandard, environment, minDevices]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-navy-900 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            {showAccessPoints ? (
              <Wifi className="w-8 h-8" />
            ) : (
              <Network className="w-8 h-8" />
            )}
            <h1 className="text-2xl font-bold">
              {showAccessPoints ? 'Localizador de Access Points' : 'Localizador de Switches'}
            </h1>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowAccessPoints(false)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                !showAccessPoints ? 'bg-white text-navy-900' : 'text-white hover:bg-navy-800'
              }`}
            >
              <Network className="w-4 h-4 inline mr-2" />
              Switches
            </button>
            <button
              onClick={() => setShowAccessPoints(true)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                showAccessPoints ? 'bg-white text-navy-900' : 'text-white hover:bg-navy-800'
              }`}
            >
              <Wifi className="w-4 h-4 inline mr-2" />
              Access Points
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            {showAccessPoints ? (
              <AccessPointFilterPanel
                wifiStandard={wifiStandard}
                setWifiStandard={setWifiStandard}
                environment={environment}
                setEnvironment={setEnvironment}
                minDevices={minDevices}
                setMinDevices={setMinDevices}
              />
            ) : (
              <FilterPanel
                portCount={portCount}
                setPortCount={setPortCount}
                hasPoe={hasPoe}
                setHasPoe={setHasPoe}
                hasManagement={hasManagement}
                setHasManagement={setHasManagement}
              />
            )}
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {showAccessPoints ? (
                filteredAccessPoints.length > 0 ? (
                  filteredAccessPoints.map(ap => (
                    <AccessPointCard key={ap.id} accessPoint={ap} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500 text-lg">
                      Nenhum access point encontrado com os critérios selecionados.
                    </p>
                  </div>
                )
              ) : (
                filteredSwitches.length > 0 ? (
                  filteredSwitches.map(sw => (
                    <SwitchCard key={sw.id} switch={sw} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500 text-lg">
                      Nenhum switch encontrado com os critérios selecionados.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-navy-900 text-white py-4 px-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            Desenvolvido por: Matheus Ferreira de Melo
          </p>
          <p className="text-sm text-navy-200">
            Contato: matheusmelo@hotmail.com.br
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;