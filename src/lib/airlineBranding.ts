/** Official or commonly recognized brand colors for pie/legend styling. */
export const AIRLINE_BRAND_COLOR_BY_CODE: Record<string, string> = {
  "5J": "#fee014",
  DG: "#fee014",
  PR: "#003DA5",
  "2P": "#003DA5",
  Z2: "#111827",
  SQ: "#F5A623",
  CX: "#006564",
  BR: "#00A04A",
  NH: "#003DA5",
  JL: "#CC0000",
  KE: "#004B9C",
  OZ: "#E10600",
  TR: "#FDB913",
  AK: "#E4002B",
  FD: "#E4002B",
  D7: "#E4002B",
  QZ: "#E4002B",
  XJ: "#E4002B",
  VJ: "#ED1C24",
  VN: "#003F7F",
  TG: "#5C2D91",
  MH: "#003087",
  CI: "#0060A9",
  MU: "#CE1126",
  CZ: "#0080C6",
  CA: "#E4002B",
  EK: "#D71921",
  QR: "#5C0632",
  QF: "#E40000",
  GA: "#1E3A8A",
  HX: "#C8102E",
  BI: "#F7B512",
  TW: "#E60012",
  LJ: "#1D4B9C",
  "7C": "#FF6600",
  NX: "#0066B3",
  MF: "#0066CC",
  HU: "#E60012",
  "3U": "#E60012",
  EY: "#BD8B13",
  LH: "#05164D",
  BA: "#075AAA",
  UA: "#0039A6",
  AA: "#0078D2",
  DL: "#003366",
  UO: "#702F8A",
  OD: "#7B2D8E",
  SL: "#F9A01B",
  RF: "#1A1A6C",
  IT: "#FF6600",
  WN: "#304CB2",
  AF: "#002157",
  KL: "#00A1DE",
  TK: "#C8102E",
  SV: "#006937",
  MS: "#003DA5",
  ET: "#78B943",
  AI: "#DA0E1A",
  IX: "#FF6600",
  "6E": "#001B94",
  UK: "#5C0632",
  G8: "#E4002B",
  I5: "#E4002B",
  ZG: "#111827",
};

/** Website used for Clearbit / Google favicon logo resolution. */
export const AIRLINE_LOGO_DOMAIN_BY_CODE: Record<string, string> = {
  "5J": "cebupacificair.com",
  DG: "cebupacificair.com",
  PR: "philippineairlines.com",
  "2P": "philippineairlines.com",
  Z2: "zipair.net",
  ZG: "zipair.net",
  SQ: "singaporeair.com",
  CX: "cathaypacific.com",
  BR: "evaair.com",
  NH: "ana.co.jp",
  JL: "jal.co.jp",
  KE: "koreanair.com",
  OZ: "flyasiana.com",
  TR: "flyscoot.com",
  AK: "airasia.com",
  FD: "airasia.com",
  D7: "airasia.com",
  QZ: "airasia.com",
  XJ: "airasia.com",
  VJ: "vietjetair.com",
  VN: "vietnamairlines.com",
  TG: "thaiairways.com",
  MH: "malaysiaairlines.com",
  CI: "china-airlines.com",
  MU: "ceair.com",
  CZ: "csair.com",
  CA: "airchina.com",
  EK: "emirates.com",
  QR: "qatarairways.com",
  QF: "qantas.com",
  GA: "garuda-indonesia.com",
  HX: "hongkongairlines.com",
  BI: "flyroyalbrunei.com",
  TW: "twayair.com",
  LJ: "jinair.com",
  "7C": "jejuair.net",
  NX: "airmacau.com.mo",
  MF: "xiamenair.com",
  HU: "hainanairlines.com",
  "3U": "sichuanair.com",
  EY: "etihad.com",
  LH: "lufthansa.com",
  BA: "britishairways.com",
  UA: "united.com",
  AA: "aa.com",
  DL: "delta.com",
  UO: "hkexpress.com",
  OD: "batikair.com",
  SL: "lionairthai.com",
  RF: "airpremia.com",
  IT: "tigerairtw.com",
  WN: "southwest.com",
  AF: "airfrance.com",
  KL: "klm.com",
  TK: "turkishairlines.com",
  SV: "saudia.com",
  MS: "egyptair.com",
  ET: "ethiopianairlines.com",
  AI: "airindia.com",
  IX: "airindiaexpress.com",
  "6E": "goindigo.in",
  UK: "vistara.com",
  G8: "goair.in",
  I5: "airasia.com",
};

export const AIRLINE_DISPLAY_NAMES: Record<string, string> = {
  "5J": "Cebu Pacific",
  DG: "Cebgo",
  PR: "Philippine Airlines",
  "2P": "PAL Express",
  Z2: "ZIPAIR Tokyo",
  ZG: "ZIPAIR Tokyo",
  SQ: "Singapore Airlines",
  CX: "Cathay Pacific",
  BR: "EVA Air",
  NH: "All Nippon Airways",
  JL: "Japan Airlines",
  KE: "Korean Air",
  OZ: "Asiana Airlines",
  TR: "Scoot",
  AK: "AirAsia",
  FD: "Thai AirAsia",
  D7: "AirAsia X",
  QZ: "Indonesia AirAsia",
  XJ: "Thai AirAsia X",
  VJ: "VietJet Air",
  VN: "Vietnam Airlines",
  TG: "Thai Airways",
  MH: "Malaysia Airlines",
  CI: "China Airlines",
  MU: "China Eastern",
  CZ: "China Southern",
  CA: "Air China",
  EK: "Emirates",
  QR: "Qatar Airways",
  QF: "Qantas",
  GA: "Garuda Indonesia",
  HX: "Hong Kong Airlines",
  BI: "Royal Brunei",
  TW: "T'way Air",
  LJ: "Jin Air",
  "7C": "Jeju Air",
  NX: "Air Macau",
  MF: "Xiamen Airlines",
  HU: "Hainan Airlines",
  "3U": "Sichuan Airlines",
  EY: "Etihad Airways",
  LH: "Lufthansa",
  BA: "British Airways",
  UA: "United Airlines",
  AA: "American Airlines",
  DL: "Delta Air Lines",
  UO: "HK Express",
  OD: "Batik Air",
  SL: "Thai Lion Air",
  RF: "Air Premia",
  IT: "Tigerair Taiwan",
  WN: "Southwest Airlines",
  AF: "Air France",
  KL: "KLM",
  TK: "Turkish Airlines",
  SV: "Saudia",
  MS: "EgyptAir",
  ET: "Ethiopian Airlines",
  AI: "Air India",
  IX: "Air India Express",
  "6E": "IndiGo",
  UK: "Vistara",
  G8: "Go First",
  I5: "AirAsia India",
};

const FALLBACK_PALETTE = [
  "#0D9488",
  "#14B8A6",
  "#22D3EE",
  "#60A5FA",
  "#818CF8",
  "#A78BFA",
  "#F472B6",
  "#FB7185",
];

const normalizeAirlineCode = (code: string) => code.trim().toUpperCase();

/** Stable accent when an airline has no mapped brand color. */
export const getAirlineBrandColor = (airlineCode: string): string => {
  const normalized = normalizeAirlineCode(airlineCode);
  const mapped = AIRLINE_BRAND_COLOR_BY_CODE[normalized];
  if (mapped) return mapped;

  let hash = 0;
  for (let i = 0; i < normalized.length; i += 1) {
    hash = (hash * 31 + normalized.charCodeAt(i)) >>> 0;
  }
  return FALLBACK_PALETTE[hash % FALLBACK_PALETTE.length];
};

export const formatAirlineLabel = (code: string) => {
  const normalized = normalizeAirlineCode(code);
  const name = AIRLINE_DISPLAY_NAMES[normalized];
  return name ? `${normalized} (${name})` : normalized;
};

export const getAirlineLogoUrl = (airlineCode: string) => {
  const domain = AIRLINE_LOGO_DOMAIN_BY_CODE[normalizeAirlineCode(airlineCode)];
  return domain ? `https://logo.clearbit.com/${domain}` : null;
};

export const getAirlineFaviconUrl = (airlineCode: string) => {
  const domain = AIRLINE_LOGO_DOMAIN_BY_CODE[normalizeAirlineCode(airlineCode)];
  return domain ? `https://www.google.com/s2/favicons?sz=64&domain=${domain}` : null;
};

/** Generic IATA logo CDN — works for many carriers without a domain mapping. */
export const getAirlineIataLogoUrl = (airlineCode: string) => {
  const normalized = normalizeAirlineCode(airlineCode);
  if (!/^[A-Z0-9]{2}$/.test(normalized)) return null;
  return `https://images.kiwi.com/airlines/64/${normalized}.png`;
};
