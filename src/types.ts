export interface Switch {
  id: string | number;
  model: string;
  ports: number;
  hasPoe: boolean;
  hasManagement: boolean;
  imageUrl: string;
  description: string;
}

export interface AccessPoint {
  id: string | number;
  model: string;
  wifiStandard: "Wi-Fi 4" | "Wi-Fi 5" | "Wi-Fi 6" | "Wi-Fi 6E";
  environment: "Indoor" | "Outdoor";
  frequencyBands: ("2.4GHz" | "5GHz" | "6GHz")[];
  maxDevices: number;
  maxThroughput: number; // in Mbps
  coverage: {
    indoor: number; // in square meters
    outdoor: number; // in square meters
  };
  poe: boolean;
  imageUrl: string;
  description: string;
}

export const mockSwitches: Switch[] = [
  {
    id: "1",
    model: "S1105G-P",
    ports: 4,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-07/s1105g-p-01.png",
    description:
      "Switch não gerenciável com 4 portas PoE para poucos dispositivos PoE e com 1 porta Uplink",
  },
  {
    id: "2",
    model: "S1105F-P",
    ports: 4,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-07/s1105f-p-frontal-01.png",
    description:
      "Switch não gerenciável com 4 portas PoE para poucos dispositivos PoE e com 1 porta Uplink",
  },
  {
    id: "3",
    model: "S1110G-PA",
    ports: 8,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s1110g-pa-01.png",
    description: "Switch não gerenciável com PoE e SFP para pequenas redes",
  },
  {
    id: "4",
    model: "S1116F",
    ports: 16,
    hasPoe: false,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-07/s1116f-03.png",
    description: "Switch compacto não gerenciável para pequenas e médias redes",
  },
  {
    id: "5",
    model: "S1118F-PA",
    ports: 16,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-06/s1118f-pa-01.png",
    description: "Switch não gerenciável com PoE e SFP para pequenas e médias redes",
  },
  {
    id: "6",
    model: "S1126F-PA",
    ports: 24,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s1126f-pa-frontal-sup.png",
    description: "Switch não gerenciável com  PoE e SFP para médias e grandes redes",
  },
  {
    id: "7",
    model: "S1126F-HPA",
    ports: 24,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-05/s1126f-hpa-04.png",
    description: "Switch não gerenciável com Hi-PoE e SFP para médias e grandes empresas",
  },
  {
    id: "8",
    model: "S1120G-PA",
    ports: 16,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-06/s1120g-pa-01.png",
    description: "Switch não gerenciável com 16 Portas PoE gigabit, 2 portas Uplink e 2 portas SFP",
  },
  {
    id: "9",
    model: "S1124G",
    ports: 24,
    hasPoe: false,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s1124g-persp-frontal.png",
    description:
      "Switch não gerenciável com 24 portas gigabit. Ideal para maioria dos cenários de médias empresas.",
  },
  {
    id: "10",
    model: "S1128G-PA",
    ports: 10,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-05/s1128g-pa-frontal.png",
    description: "Switch não gerenciável com 24 portas PoE gigabit, 2 portas Uplink e 2 portas SFP",
  },
  {
    id: "11",
    model: "S1116G",
    ports: 16,
    hasPoe: false,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s1116g-01.png",
    description:
      "Switch não gerenciável com 16 portas gigabit. Ideal para pequenas e médias empresas.",
  },
  {
    id: "12",
    model: "S1010G-PA",
    ports: 8,
    hasPoe: false,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-04/s1010g-pa-frontal-2.png",
    description:
      "Switch não gerenciável com 8 portas PoE gigabit, 1 portas Uplink e 1 porta SFP. Ideal para pequenas redes.",
  },
  {
    id: "13",
    model: "S1018G-PA",
    ports: 16,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-04/s1018g-pa-frontal.png",
    description: "Switch não gerenciável com 16 portas PoE gigabit, 2 portas Uplink e 2 portas SFP",
  },
  {
    id: "14",
    model: "S1005G",
    ports: 5,
    hasPoe: false,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-01/s1005g-tras.png",
    description: "Switch não gerenciável com 5 portas gigabit. Ideal para pequenas redes.",
  },
  {
    id: "16",
    model: "S1010F-P",
    ports: 10,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-03/s1010f-p-persp-esq.png",
    description: "Switch não gerenciável com 10 portas até 100 Mbps PoE para pequenas redes.",
  },
  {
    id: "17",
    model: "S1016G",
    ports: 10,
    hasPoe: false,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-01/s1016g-persp-esq.png",
    description:
      "Switch não gerenciável com 16 portas gigabit. Ideal para pequenas e médias empresas.",
  },
  {
    id: "18",
    model: "S1026F-P",
    ports: 24,
    hasPoe: true,
    hasManagement: false,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-03/s1026f-p-frontal-incl-c-tampa.png",
    description:
      "Switch não gerenciável com 24 portas PoE fast, 2 portas Uplink Gigabit e 2 portas SFP. Ideal para médias empresas e instalações mais concentradas.",
  },

  {
    id: "19",
    model: "S2352G-B",
    ports: 48,
    hasPoe: false,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s2352g-b-04.png",
    description:
      "Switch gerenciável com 48 portas Gigabit e 4 portas SFP+ (10Gbps). Ideal para grandes empresas.",
  },
  {
    id: "20",
    model: "S2310G-A",
    ports: 8,
    hasPoe: false,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-06/s2310g-a-01.png",
    description:
      "Switch gerenciável com 8 portas Gigabit e 2 portas SFP. Ideal para pequenas empresas.",
  },

  {
    id: "21",
    model: "S2328G-A",
    ports: 24,
    hasPoe: false,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s2328g-a-frontal-1.png",
    description:
      "Switch gerenciável com 24 portas Gigabit e 4 portas SFP. Ideal para grandes empresas.",
  },
  {
    id: "22",
    model: "S2352G-A",
    ports: 48,
    hasPoe: false,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-06/s2352g-a-03.png",
    description:
      "Switch gerenciável com 48 portas Gigabit e 4 portas SFP. Ideal para grandes empresas.",
  },
  {
    id: "23",
    model: "S2328G-PB",
    ports: 24,
    hasPoe: true,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s2328g-pb-04.png",
    description:
      "Switch gerenciável com 24 portas Gigabit e PoE e 4 portas SFP+ (10Gbps). Ideal para grandes empresas.",
  },
  {
    id: "24",
    model: "S2328G-PA",
    ports: 24,
    hasPoe: true,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-12/S2328g-pa.png",
    description:
      "Switch gerenciável com 24 portas Gigabit e PoE e 4 portas SFP. Ideal para grandes empresas.",
  },

  {
    id: "25",
    model: "S2328G-B",
    ports: 24,
    hasPoe: false,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s2328g-b-03.png",
    description:
      "Switch gerenciável com 24 portas Gigabit e 4 portas SFP+ (10Gbps). Ideal para grandes empresas.",
  },
  {
    id: "26",
    model: "S2352G-PB",
    ports: 48,
    hasPoe: true,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-04/s2352g-pb-04.png",
    description:
      "Switch gerenciável com 48 portas Gigabit e PoE e 4 portas SFP+ (10Gbps). Ideal para grandes empresas.",
  },
  {
    id: "27",
    model: "S3352G-PB",
    ports: 48,
    hasPoe: true,
    hasManagement: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2024-03/s3352g-pb-frontal-sup.png",
    description:
      "Switch gerenciável com protocolos de roteamento (camada 3) com 48 portas Gigabit e PoE e 4 portas SFP+ (10Gbps). Ideal para grandes empresas.",
  },
];

export const mockAccessPoints: AccessPoint[] = [
  {
    id: "1",
    model: "AP 310",
    wifiStandard: "Wi-Fi 4",
    environment: "Indoor",
    frequencyBands: ["2.4GHz"],
    maxDevices: 100,
    maxThroughput: 100,
    coverage: {
      indoor: 200,
      outdoor: 0,
    },
    poe: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-01/ap-360-front.png",
    description: "Access Point Wi-Fi 4 para pequenos ambientes",
  },
  {
    id: "2",
    model: "AP 360",
    wifiStandard: "Wi-Fi 4",
    environment: "Indoor",
    frequencyBands: ["2.4GHz"],
    maxDevices: 100,
    maxThroughput: 100,
    coverage: {
      indoor: 400,
      outdoor: 0,
    },
    poe: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-01/ap-360-front.png",
    description: "Access Point Wi-Fi 4 para médios ambientes",
  },
  {
    id: "3",
    model: "AP 1250 AC MAX",
    wifiStandard: "Wi-Fi 5",
    environment: "Indoor",
    frequencyBands: ["2.4GHz", "5GHz"],
    maxDevices: 350,
    maxThroughput: 500,
    coverage: {
      indoor: 450,
      outdoor: 0,
    },
    poe: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2022-04/ap-1250-ac-max-front_0.png",
    description: "Access Point Wi-Fi 5 com Handover para pequenas e médias empresas",
  },
  {
    id: "4",
    model: "AP 1250 AC OUTDOOR",
    wifiStandard: "Wi-Fi 5",
    environment: "Outdoor",
    frequencyBands: ["2.4GHz", "5GHz"],
    maxDevices: 350,
    maxThroughput: 500,
    coverage: {
      indoor: 0,
      outdoor: 450,
    },
    poe: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-06/render-AP-1250--AC-Outdoor-%2B-frontal.png",
    description:
      "Access Point Wi-Fi 5 com Handover para pequenas e médias empresas para ambientes externos",
  },
  {
    id: "5",
    model: "AP 1350 AC-S",
    wifiStandard: "Wi-Fi 5",
    environment: "Indoor",
    frequencyBands: ["2.4GHz", "5GHz"],
    maxDevices: 350,
    maxThroughput: 500,
    coverage: {
      indoor: 450,
      outdoor: 0,
    },
    poe: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2022-04/ap-1350-ac-s-front.png",
    description: "Access Point Wi-Fi 5 com Handover para pequenas e médias empresas",
  },
  {
    id: "6",
    model: "AP 1800 AX",
    wifiStandard: "Wi-Fi 6",
    environment: "Indoor",
    frequencyBands: ["2.4GHz", "5GHz"],
    maxDevices: 256,
    maxThroughput: 600,
    coverage: {
      indoor: 450,
      outdoor: 0,
    },
    poe: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-09/ap-1800-ax-frontal.png",
    description: "Access Point Wi-Fi 6 com Handover para pequenas e médias empresas",
  },
  {
    id: "7",
    model: "AP 3000 AX",
    wifiStandard: "Wi-Fi 5",
    environment: "Indoor",
    frequencyBands: ["2.4GHz", "5GHz"],
    maxDevices: 256,
    maxThroughput: 1000,
    coverage: {
      indoor: 450,
      outdoor: 0,
    },
    poe: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-09/ap-1800-ax-frontal.png",
    description: "Access Point Wi-Fi 6 com Handover para pequenas e médias empresas",
  },
  {
    id: "8",
    model: "AP 3000 AX OUTDOOR",
    wifiStandard: "Wi-Fi 6",
    environment: "Outdoor",
    frequencyBands: ["2.4GHz", "5GHz"],
    maxDevices: 256,
    maxThroughput: 1000,
    coverage: {
      indoor: 0,
      outdoor: 450,
    },
    poe: true,
    imageUrl:
      "https://backend.intelbras.com/sites/default/files/styles/medium/public/2023-04/ap-3000-ax-outdoor-frontal.png",
    description:
      "Access Point Wi-Fi 6 com Handover para pequenas e médias empresas para ambientes abertos",
  },
];
