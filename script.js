// =============================================================
// 1. CONFIGURACIÓN DE COLORES Y BASE DE DATOS
// =============================================================
const religionColors = {
    "Cristianismo": "#1d4ed8",
    "Islam": "#10b981",
    "Hinduismo": "#f59e0b",
    "Budismo": "#8b5cf6",
    "Religión Tradicional China / Ninguna": "#6b7280",
    "Sin Datos": "#4a5568"
};

const neuterColors = {
    dark: "#1a2332",
    light: "#e2e8f0"
};

const religionGeneralInfo = {
    "Cristianismo": `
        <i class="bi bi-church"></i> <strong>Origen:</strong> Judea, siglo I d.C.<br>
        <i class="bi bi-person"></i> <strong>Fundador:</strong> Jesús de Nazaret<br>
        <i class="bi bi-book"></i> <strong>Textos Sagrados:</strong> Biblia<br>
        <i class="bi bi-diagram-3"></i> <strong>Ramas:</strong> Catolicismo, Protestantismo, Ortodoxia<br>
        <i class="bi bi-people"></i> <strong>Demografía:</strong> ~2,400 millones (31% global)
    `,
    "Islam": `
        <i class="bi bi-moon-stars"></i> <strong>Origen:</strong> Arabia, siglo VII d.C.<br>
        <i class="bi bi-person"></i> <strong>Fundador:</strong> Mahoma<br>
        <i class="bi bi-book"></i> <strong>Texto Sagrado:</strong> Corán<br>
        <i class="bi bi-diagram-3"></i> <strong>Ramas:</strong> Sunismo (85%), Chiismo (15%)<br>
        <i class="bi bi-people"></i> <strong>Demografía:</strong> ~1,900 millones (25% global)
    `,
    "Hinduismo": `
        <i class="bi bi-flower1"></i> <strong>Origen:</strong> India, ~2000 a.C.<br>
        <i class="bi bi-person"></i> <strong>Fundador:</strong> Sin fundador específico<br>
        <i class="bi bi-book"></i> <strong>Textos:</strong> Vedas, Upanishads, Bhagavad Gita<br>
        <i class="bi bi-yin-yang"></i> <strong>Conceptos:</strong> Karma, Dharma, Samsara<br>
        <i class="bi bi-people"></i> <strong>Demografía:</strong> ~1,200 millones (16% global)
    `,
    "Budismo": `
        <i class="bi bi-flower2"></i> <strong>Origen:</strong> India, siglo VI a.C.<br>
        <i class="bi bi-person"></i> <strong>Fundador:</strong> Siddhartha Gautama (Buda)<br>
        <i class="bi bi-book"></i> <strong>Textos:</strong> Tripitaka, Sutras<br>
        <i class="bi bi-diagram-3"></i> <strong>Ramas:</strong> Theravada, Mahayana, Vajrayana<br>
        <i class="bi bi-people"></i> <strong>Demografía:</strong> ~500 millones (7% global)
    `,
    "Religión Tradicional China / Ninguna": `
        <i class="bi bi-yin-yang"></i> <strong>Descripción:</strong> Sincretismo cultural<br>
        <i class="bi bi-book"></i> <strong>Tradiciones:</strong> Confucianismo, Taoísmo<br>
        <i class="bi bi-house"></i> <strong>Enfoque:</strong> Armonía social y familiar<br>
        <i class="bi bi-people"></i> <strong>Demografía:</strong> ~1,200 millones
    `
};

// =============================================================
// 2. MAPEO DE CÓDIGOS ISO ALTERNATIVOS (COMPLETO)
// =============================================================
const codigosAlternativos = {
    // EUROPA
    "FR1": "FRA", "FR": "FRA", "FXX": "FRA",
    "UK": "GBR", "GB": "GBR", "GB1": "GBR",
    "DE": "DEU", "DEU": "DEU",
    "IT": "ITA",
    "ES": "ESP",
    "PT": "PRT",
    "NL": "NLD",
    "BE": "BEL",
    "CH": "CHE",
    "AT": "AUT",
    "PL": "POL",
    "CZ": "CZE",
    "SK": "SVK",
    "HU": "HUN",
    "SI": "SVN",
    "HR": "HRV",
    "BA": "BIH",
    "RS": "SRB",
    "ME": "MNE",
    "XK": "KOS",
    "MK": "MKD",
    "AL": "ALB",
    "GR": "GRC",
    "BG": "BGR",
    "RO": "ROU",
    "MD": "MDA",
    "UA": "UKR",
    "BY": "BLR",
    "RU": "RUS", "RU1": "RUS",
    "GE": "GEO",
    "AM": "ARM",
    "AZ": "AZE",
    "CY": "CYP",
    "MT": "MLT",
    "IS": "ISL",
    "NO": "NOR",
    "SE": "SWE",
    "FI": "FIN",
    "DK": "DNK",
    "EE": "EST",
    "LV": "LVA",
    "LT": "LTU",
    "IE": "IRL",
    "LU": "LUX",
    "LI": "LIE",
    "SM": "SMR",
    "VA": "VAT",
    "AD": "AND",
    // AMÉRICA
    "US": "USA", "US1": "USA",
    "CA": "CAN",
    "MX": "MEX",
    "GT": "GTM",
    "BZ": "BLZ",
    "SV": "SLV",
    "HN": "HND",
    "NI": "NIC",
    "CR": "CRI",
    "PA": "PAN",
    "CU": "CUB",
    "HT": "HTI",
    "DO": "DOM",
    "PR": "PRI",
    "JM": "JAM",
    "BS": "BHS",
    "CO": "COL",
    "VE": "VEN",
    "EC": "ECU",
    "PE": "PER",
    "BO": "BOL",
    "CL": "CHL",
    "AR": "ARG",
    "PY": "PRY",
    "UY": "URY",
    "BR": "BRA",
    "GY": "GUY",
    "SR": "SUR",
    // ÁFRICA
    "DZ": "DZA",
    "EG": "EGY",
    "LY": "LBY",
    "TN": "TUN",
    "MA": "MAR",
    "MR": "MRT",
    "SN": "SEN",
    "GM": "GMB",
    "ML": "MLI",
    "NE": "NER",
    "NG": "NGA",
    "BJ": "BEN",
    "TG": "TGO",
    "GH": "GHA",
    "CI": "CIV",
    "LR": "LBR",
    "SL": "SLE",
    "GN": "GIN",
    "GW": "GNB",
    "BF": "BFA",
    "CV": "CPV",
    "ST": "STP",
    "GQ": "GNQ",
    "GA": "GAB",
    "CG": "COG",
    "CD": "COD",
    "CF": "CAF",
    "CM": "CMR",
    "TD": "TCD",
    "SD": "SDN",
    "SS": "SDS",
    "ER": "ERI",
    "DJ": "DJI",
    "SO": "SOM",
    "ET": "ETH",
    "KE": "KEN",
    "UG": "UGA",
    "RW": "RWA",
    "BI": "BDI",
    "TZ": "TZA",
    "MZ": "MOZ",
    "MW": "MWI",
    "ZM": "ZMB",
    "ZW": "ZWE",
    "BW": "BWA",
    "NA": "NAM",
    "ZA": "ZAF",
    "LS": "LSO",
    "SZ": "SWZ",
    "MG": "MDG",
    "KM": "COM",
    "SC": "SYC",
    // ASIA
    "TR": "TUR",
    "SY": "SYR",
    "LB": "LBN",
    "JO": "JOR",
    "IL": "ISR",
    "PS": "PSE",
    "SA": "SAU",
    "YE": "YEM",
    "OM": "OMN",
    "AE": "ARE",
    "QA": "QAT",
    "KW": "KWT",
    "BH": "BHR",
    "IQ": "IRQ",
    "IR": "IRN",
    "AF": "AFG",
    "PK": "PAK",
    "IN": "IND",
    "NP": "NPL",
    "BT": "BTN",
    "BD": "BGD",
    "LK": "LKA",
    "MM": "MMR",
    "TH": "THA",
    "LA": "LAO",
    "KH": "KHM",
    "VN": "VNM",
    "CN": "CHN", "CH1": "CHN",
    "TW": "TWN",
    "MN": "MNG",
    "KP": "PRK",
    "KR": "KOR",
    "JP": "JPN",
    "PH": "PHL",
    "MY": "MYS",
    "SG": "SGP",
    "BN": "BRN",
    "ID": "IDN",
    "TL": "TLS",
    // OCEANÍA
    "AU": "AUS",
    "NZ": "NZL",
    "PG": "PNG",
    "FJ": "FJI",
    "SB": "SLB",
    "VU": "VUT",
    "NC": "NCL",
    "WS": "WSM",
    "TO": "TON",
    "KI": "KIR",
    "TV": "TUV",
    "NR": "NRU",
    "PW": "PLW",
    "FM": "FSM",
    "MH": "MHL"
};

// =============================================================
// 3. FUNCIÓN PARA OBTENER EL CÓDIGO ISO CORRECTO
// =============================================================
function obtenerCodigoISO(code) {
    if (!code) return null;
    code = code.toUpperCase().trim();
    if (codigosAlternativos[code]) {
        return codigosAlternativos[code];
    }
    return code;
}

// =============================================================
// 4. BASE DE DATOS COMPLETA DE PAÍSES
// =============================================================
const religionData = {
    // ==================== AMÉRICA DEL NORTE ====================
    "USA": { 
        rel: "Cristianismo", 
        info: `<strong>🇺🇸 Estados Unidos</strong><br>
        • Protestantes: 43% (Evangélicos, Bautistas, Metodistas, Pentecostales)<br>
        • Católicos: 20%<br>
        • Mormones: 2%<br>
        • Testigos de Jehová: 0.8%<br>
        • Judíos: 2%<br>
        • Musulmanes: 1%<br>
        • Sin afiliación: 27%<br>
        • Otras religiones: 4%`
    },
    "CAN": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇦 Canadá</strong><br>
        • Católicos: 39%<br>
        • Protestantes: 20%<br>
        • Ortodoxos: 1.5%<br>
        • Musulmanes: 3%<br>
        • Sijs: 1.4%<br>
        • Judíos: 1%<br>
        • Sin religión: 29%<br>
        • Otras: 5%`
    },
    "MEX": { 
        rel: "Cristianismo", 
        info: `<strong>🇲🇽 México</strong><br>
        • Católicos: 78%<br>
        • Protestantes/Evangélicos: 10%<br>
        • Testigos de Jehová: 1.5%<br>
        • Sin religión: 8%<br>
        • Religiones indígenas: 1%<br>
        • Otras: 1.5%`
    },
    "GTM": { 
        rel: "Cristianismo", 
        info: `<strong>🇬🇹 Guatemala</strong><br>
        • Católicos: 45%<br>
        • Evangélicos: 40%<br>
        • Testigos de Jehová: 1%<br>
        • Mormones: 0.5%<br>
        • Religiones mayas: 10%<br>
        • Sin religión: 3%<br>
        • Otras: 0.5%`
    },
    "BLZ": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇿 Belice</strong><br>
        • Católicos: 40%<br>
        • Protestantes: 30%<br>
        • Testigos de Jehová: 1.5%<br>
        • Sin religión: 15%<br>
        • Religiones mayas: 5%<br>
        • Otras: 8.5%`
    },
    "SLV": { 
        rel: "Cristianismo", 
        info: `<strong>🇸🇻 El Salvador</strong><br>
        • Católicos: 40%<br>
        • Evangélicos: 35%<br>
        • Testigos de Jehová: 2%<br>
        • Mormones: 1%<br>
        • Musulmanes (creciente): 0.5%<br>
        • Iglesia de Cristo: 1%<br>
        • Sin religión: 20%<br>
        • Otras: 0.5%`
    },
    "HND": { 
        rel: "Cristianismo", 
        info: `<strong>🇭🇳 Honduras</strong><br>
        • Católicos: 45%<br>
        • Evangélicos: 40%<br>
        • Testigos de Jehová: 1%<br>
        • Mormones: 0.5%<br>
        • Sin religión: 10%<br>
        • Otras: 3.5%`
    },
    "NIC": { 
        rel: "Cristianismo", 
        info: `<strong>🇳🇮 Nicaragua</strong><br>
        • Católicos: 50%<br>
        • Evangélicos: 35%<br>
        • Testigos de Jehová: 1%<br>
        • Mormones: 0.5%<br>
        • Sin religión: 10%<br>
        • Otras: 3.5%`
    },
    "CRI": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇷 Costa Rica</strong><br>
        • Católicos: 47%<br>
        • Protestantes: 20%<br>
        • Testigos de Jehová: 1%<br>
        • Mormones: 0.5%<br>
        • Sin religión: 27%<br>
        • Otras: 4.5%`
    },
    "PAN": { 
        rel: "Cristianismo", 
        info: `<strong>🇵🇦 Panamá</strong><br>
        • Católicos: 70%<br>
        • Protestantes: 20%<br>
        • Testigos de Jehová: 1%<br>
        • Sin religión: 5%<br>
        • Otras: 4%`
    },
    "CUB": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇺 Cuba</strong><br>
        • Católicos: 60%<br>
        • Protestantes: 5%<br>
        • Santería: 15%<br>
        • Sin religión: 15%<br>
        • Otras: 5%`
    },
    "HTI": { 
        rel: "Cristianismo", 
        info: `<strong>🇭🇹 Haití</strong><br>
        • Católicos: 55%<br>
        • Protestantes: 30%<br>
        • Vudú: 10%<br>
        • Sin religión: 3%<br>
        • Otras: 2%`
    },
    "DOM": { 
        rel: "Cristianismo", 
        info: `<strong>🇩🇴 República Dominicana</strong><br>
        • Católicos: 70%<br>
        • Protestantes: 18%<br>
        • Sin religión: 10%<br>
        • Otras: 2%`
    },
    "PRI": { 
        rel: "Cristianismo", 
        info: `<strong>🇵🇷 Puerto Rico</strong><br>
        • Católicos: 56%<br>
        • Protestantes: 33%<br>
        • Sin religión: 8%<br>
        • Otras: 3%`
    },
    "JAM": { 
        rel: "Cristianismo", 
        info: `<strong>🇯🇲 Jamaica</strong><br>
        • Protestantes: 64%<br>
        • Católicos: 2%<br>
        • Rastafari: 1%<br>
        • Sin religión: 21%<br>
        • Otras: 12%`
    },
    "BHS": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇸 Bahamas</strong><br>
        • Protestantes: 70%<br>
        • Católicos: 12%<br>
        • Sin religión: 10%<br>
        • Otras: 8%`
    },

    // ==================== AMÉRICA DEL SUR ====================
    "COL": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇴 Colombia</strong><br>
        • Católicos: 75%<br>
        • Protestantes: 15%<br>
        • Testigos de Jehová: 1%<br>
        • Sin religión: 5%<br>
        • Otras: 4%`
    },
    "VEN": { 
        rel: "Cristianismo", 
        info: `<strong>🇻🇪 Venezuela</strong><br>
        • Católicos: 71%<br>
        • Protestantes: 17%<br>
        • Sin religión: 8%<br>
        • Otras: 4%`
    },
    "ECU": { 
        rel: "Cristianismo", 
        info: `<strong>🇪🇨 Ecuador</strong><br>
        • Católicos: 74%<br>
        • Protestantes: 15%<br>
        • Sin religión: 7%<br>
        • Otras: 4%`
    },
    "PER": { 
        rel: "Cristianismo", 
        info: `<strong>🇵🇪 Perú</strong><br>
        • Católicos: 76%<br>
        • Evangélicos: 14%<br>
        • Testigos de Jehová: 1%<br>
        • Sin religión: 5%<br>
        • Religiones indígenas: 3%<br>
        • Otras: 1%`
    },
    "BOL": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇴 Bolivia</strong><br>
        • Católicos: 70%<br>
        • Protestantes: 20%<br>
        • Religiones indígenas: 5%<br>
        • Sin religión: 3%<br>
        • Otras: 2%`
    },
    "CHL": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇱 Chile</strong><br>
        • Católicos: 45%<br>
        • Protestantes: 15%<br>
        • Testigos de Jehová: 1%<br>
        • Mormones: 0.5%<br>
        • Sin religión: 35%<br>
        • Otras: 3.5%`
    },
    "ARG": { 
        rel: "Cristianismo", 
        info: `<strong>🇦🇷 Argentina</strong><br>
        • Católicos: 62%<br>
        • Evangélicos: 15%<br>
        • Testigos de Jehová: 1%<br>
        • Mormones: 0.5%<br>
        • Judíos: 0.5%<br>
        • Musulmanes: 0.5%<br>
        • Sin religión: 18%<br>
        • Otras: 2.5%`
    },
    "PRY": { 
        rel: "Cristianismo", 
        info: `<strong>🇵🇾 Paraguay</strong><br>
        • Católicos: 88%<br>
        • Protestantes: 6%<br>
        • Sin religión: 4%<br>
        • Otras: 2%`
    },
    "URY": { 
        rel: "Cristianismo", 
        info: `<strong>🇺🇾 Uruguay</strong><br>
        • Católicos: 40%<br>
        • Protestantes: 8%<br>
        • Sin religión: 45%<br>
        • Otras: 7%`
    },
    "BRA": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇷 Brasil</strong><br>
        • Católicos: 64%<br>
        • Pentecostales/Evangélicos: 22%<br>
        • Testigos de Jehová: 1%<br>
        • Mormones: 0.5%<br>
        • Espiritismo: 2%<br>
        • Sin religión: 8%<br>
        • Otras: 2.5%`
    },
    "GUY": { 
        rel: "Cristianismo", 
        info: `<strong>🇬🇾 Guyana</strong><br>
        • Protestantes: 34%<br>
        • Católicos: 8%<br>
        • Hindúes: 28%<br>
        • Musulmanes: 7%<br>
        • Sin religión: 15%<br>
        • Otras: 8%`
    },
    "SUR": { 
        rel: "Cristianismo", 
        info: `<strong>🇸🇷 Surinam</strong><br>
        • Protestantes: 25%<br>
        • Católicos: 22%<br>
        • Hindúes: 27%<br>
        • Musulmanes: 14%<br>
        • Religiones indígenas: 5%<br>
        • Otras: 7%`
    },

    // ==================== EUROPA ====================
    "FRA": { 
        rel: "Cristianismo", 
        info: `<strong>🇫🇷 Francia</strong><br>
        • Católicos: 47%<br>
        • Protestantes: 3%<br>
        • Ortodoxos: 1%<br>
        • Musulmanes: 10%<br>
        • Judíos: 0.8%<br>
        • Sin religión: 35%<br>
        • Otras: 3.2%`
    },
    "ESP": { 
        rel: "Cristianismo", 
        info: `<strong>🇪🇸 España</strong><br>
        • Católicos: 56%<br>
        • Protestantes: 1%<br>
        • Testigos de Jehová: 0.5%<br>
        • Mormones: 0.2%<br>
        • Musulmanes: 4%<br>
        • Sin religión: 35%<br>
        • Otras: 3.3%`
    },
    "PRT": { 
        rel: "Cristianismo", 
        info: `<strong>🇵🇹 Portugal</strong><br>
        • Católicos: 80%<br>
        • Protestantes: 2%<br>
        • Testigos de Jehová: 0.5%<br>
        • Sin religión: 15%<br>
        • Otras: 2.5%`
    },
    "ITA": { 
        rel: "Cristianismo", 
        info: `<strong>🇮🇹 Italia</strong><br>
        • Católicos: 78%<br>
        • Protestantes: 1%<br>
        • Testigos de Jehová: 1%<br>
        • Musulmanes: 2%<br>
        • Sin religión: 15%<br>
        • Otras: 3%`
    },
    "DEU": { 
        rel: "Cristianismo", 
        info: `<strong>🇩🇪 Alemania</strong><br>
        • Protestantes: 25%<br>
        • Católicos: 28%<br>
        • Ortodoxos: 2%<br>
        • Musulmanes: 5%<br>
        • Sin religión: 35%<br>
        • Otras: 5%`
    },
    "GBR": { 
        rel: "Cristianismo", 
        info: `<strong>🇬🇧 Reino Unido</strong><br>
        • Anglicanos: 15%<br>
        • Católicos: 9%<br>
        • Protestantes: 8%<br>
        • Ortodoxos: 2%<br>
        • Musulmanes: 5%<br>
        • Hindúes: 1.5%<br>
        • Sijs: 0.8%<br>
        • Judíos: 0.5%<br>
        • Sin religión: 38%<br>
        • Otras: 20.2%`
    },
    "IRL": { 
        rel: "Cristianismo", 
        info: `<strong>🇮🇪 Irlanda</strong><br>
        • Católicos: 70%<br>
        • Protestantes: 5%<br>
        • Ortodoxos: 1%<br>
        • Musulmanes: 1%<br>
        • Sin religión: 18%<br>
        • Otras: 5%`
    },
    "NLD": { 
        rel: "Cristianismo", 
        info: `<strong>🇳🇱 Países Bajos</strong><br>
        • Católicos: 20%<br>
        • Protestantes: 15%<br>
        • Musulmanes: 5%<br>
        • Sin religión: 55%<br>
        • Otras: 5%`
    },
    "BEL": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇪 Bélgica</strong><br>
        • Católicos: 58%<br>
        • Protestantes: 2%<br>
        • Musulmanes: 5%<br>
        • Sin religión: 30%<br>
        • Otras: 5%`
    },
    "LUX": { 
        rel: "Cristianismo", 
        info: `<strong>🇱🇺 Luxemburgo</strong><br>
        • Católicos: 65%<br>
        • Protestantes: 3%<br>
        • Ortodoxos: 2%<br>
        • Musulmanes: 2%<br>
        • Sin religión: 25%<br>
        • Otras: 3%`
    },
    "CHE": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇭 Suiza</strong><br>
        • Católicos: 36%<br>
        • Protestantes: 26%<br>
        • Ortodoxos: 2%<br>
        • Musulmanes: 5%<br>
        • Sin religión: 28%<br>
        • Otras: 3%`
    },
    "AUT": { 
        rel: "Cristianismo", 
        info: `<strong>🇦🇹 Austria</strong><br>
        • Católicos: 57%<br>
        • Protestantes: 4%<br>
        • Ortodoxos: 2%<br>
        • Musulmanes: 7%<br>
        • Sin religión: 25%<br>
        • Otras: 5%`
    },
    "CZE": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇿 Chequia</strong><br>
        • Católicos: 10%<br>
        • Protestantes: 2%<br>
        • Sin religión: 78%<br>
        • Otras: 10%`
    },
    "SVK": { 
        rel: "Cristianismo", 
        info: `<strong>🇸🇰 Eslovaquia</strong><br>
        • Católicos: 62%<br>
        • Protestantes: 8%<br>
        • Ortodoxos: 1%<br>
        • Sin religión: 25%<br>
        • Otras: 4%`
    },
    "HUN": { 
        rel: "Cristianismo", 
        info: `<strong>🇭🇺 Hungría</strong><br>
        • Católicos: 40%<br>
        • Protestantes: 12%<br>
        • Ortodoxos: 1%<br>
        • Sin religión: 40%<br>
        • Otras: 7%`
    },
    "SVN": { 
        rel: "Cristianismo", 
        info: `<strong>🇸🇮 Eslovenia</strong><br>
        • Católicos: 57%<br>
        • Ortodoxos: 2%<br>
        • Protestantes: 1%<br>
        • Sin religión: 35%<br>
        • Otras: 5%`
    },
    "HRV": { 
        rel: "Cristianismo", 
        info: `<strong>🇭🇷 Croacia</strong><br>
        • Católicos: 86%<br>
        • Ortodoxos: 4%<br>
        • Protestantes: 1%<br>
        • Sin religión: 5%<br>
        • Otras: 4%`
    },
    "BIH": { 
        rel: "Islam", 
        info: `<strong>🇧🇦 Bosnia y Herzegovina</strong><br>
        • Musulmanes: 50%<br>
        • Ortodoxos: 31%<br>
        • Católicos: 15%<br>
        • Sin religión: 3%<br>
        • Otras: 1%`
    },
    "SRB": { 
        rel: "Cristianismo", 
        info: `<strong>🇷🇸 Serbia</strong><br>
        • Ortodoxos: 85%<br>
        • Católicos: 5%<br>
        • Musulmanes: 3%<br>
        • Protestantes: 1%<br>
        • Sin religión: 4%<br>
        • Otras: 2%`
    },
    "MNE": { 
        rel: "Cristianismo", 
        info: `<strong>🇲🇪 Montenegro</strong><br>
        • Ortodoxos: 72%<br>
        • Musulmanes: 19%<br>
        • Católicos: 3%<br>
        • Sin religión: 5%<br>
        • Otras: 1%`
    },
    "KOS": { 
        rel: "Islam", 
        info: `<strong>🇽🇰 Kosovo</strong><br>
        • Musulmanes: 95%<br>
        • Ortodoxos: 2%<br>
        • Católicos: 2%<br>
        • Otras: 1%`
    },
    "MKD": { 
        rel: "Cristianismo", 
        info: `<strong>🇲🇰 Macedonia</strong><br>
        • Ortodoxos: 65%<br>
        • Musulmanes: 33%<br>
        • Otras: 2%`
    },
    "ALB": { 
        rel: "Islam", 
        info: `<strong>🇦🇱 Albania</strong><br>
        • Musulmanes: 58%<br>
        • Católicos: 10%<br>
        • Ortodoxos: 7%<br>
        • Sin religión: 20%<br>
        • Otras: 5%`
    },
    "GRC": { 
        rel: "Cristianismo", 
        info: `<strong>🇬🇷 Grecia</strong><br>
        • Ortodoxos: 90%<br>
        • Católicos: 1%<br>
        • Musulmanes: 3%<br>
        • Sin religión: 5%<br>
        • Otras: 1%`
    },
    "BGR": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇬 Bulgaria</strong><br>
        • Ortodoxos: 80%<br>
        • Musulmanes: 12%<br>
        • Sin religión: 5%<br>
        • Otras: 3%`
    },
    "ROU": { 
        rel: "Cristianismo", 
        info: `<strong>🇷🇴 Rumanía</strong><br>
        • Ortodoxos: 86%<br>
        • Católicos: 5%<br>
        • Protestantes: 3%<br>
        • Sin religión: 5%<br>
        • Otras: 1%`
    },
    "POL": { 
        rel: "Cristianismo", 
        info: `<strong>🇵🇱 Polonia</strong><br>
        • Católicos: 85%<br>
        • Ortodoxos: 1.5%<br>
        • Protestantes: 0.5%<br>
        • Testigos de Jehová: 0.5%<br>
        • Sin religión: 10%<br>
        • Otras: 2.5%`
    },
    "LTU": { 
        rel: "Cristianismo", 
        info: `<strong>🇱🇹 Lituania</strong><br>
        • Católicos: 77%<br>
        • Ortodoxos: 4%<br>
        • Protestantes: 1%<br>
        • Sin religión: 15%<br>
        • Otras: 3%`
    },
    "LVA": { 
        rel: "Cristianismo", 
        info: `<strong>🇱🇻 Letonia</strong><br>
        • Católicos: 20%<br>
        • Protestantes: 30%<br>
        • Ortodoxos: 18%<br>
        • Sin religión: 30%<br>
        • Otras: 2%`
    },
    "EST": { 
        rel: "Cristianismo", 
        info: `<strong>🇪🇪 Estonia</strong><br>
        • Ortodoxos: 16%<br>
        • Protestantes: 10%<br>
        • Sin religión: 70%<br>
        • Otras: 4%`
    },
    "RUS": { 
        rel: "Cristianismo", 
        info: `<strong>🇷🇺 Rusia</strong><br>
        • Ortodoxos: 70%<br>
        • Musulmanes: 12%<br>
        • Católicos: 0.5%<br>
        • Protestantes: 1%<br>
        • Testigos de Jehová: 0.3%<br>
        • Sin religión: 12%<br>
        • Otras: 4.2%`
    },
    "BLR": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇾 Bielorrusia</strong><br>
        • Ortodoxos: 60%<br>
        • Católicos: 10%<br>
        • Sin religión: 28%<br>
        • Otras: 2%`
    },
    "UKR": { 
        rel: "Cristianismo", 
        info: `<strong>🇺🇦 Ucrania</strong><br>
        • Ortodoxos: 65%<br>
        • Católicos: 10%<br>
        • Protestantes: 2%<br>
        • Musulmanes: 1%<br>
        • Sin religión: 20%<br>
        • Otras: 2%`
    },
    "GEO": { 
        rel: "Cristianismo", 
        info: `<strong>🇬🇪 Georgia</strong><br>
        • Ortodoxos: 83%<br>
        • Musulmanes: 10%<br>
        • Católicos: 1%<br>
        • Sin religión: 4%<br>
        • Otras: 2%`
    },
    "ARM": { 
        rel: "Cristianismo", 
        info: `<strong>🇦🇲 Armenia</strong><br>
        • Apostólicos: 92%<br>
        • Católicos: 1%<br>
        • Protestantes: 1%<br>
        • Sin religión: 4%<br>
        • Otras: 2%`
    },
    "AZE": { 
        rel: "Islam", 
        info: `<strong>🇦🇿 Azerbaiyán</strong><br>
        • Musulmanes: 96%<br>
        • Cristianos: 2%<br>
        • Sin religión: 1%<br>
        • Otras: 1%`
    },
    "CYP": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇾 Chipre</strong><br>
        • Ortodoxos: 89%<br>
        • Musulmanes: 5%<br>
        • Católicos: 2%<br>
        • Sin religión: 3%<br>
        • Otras: 1%`
    },
    "ISL": { 
        rel: "Cristianismo", 
        info: `<strong>🇮🇸 Islandia</strong><br>
        • Luteranos: 70%<br>
        • Católicos: 4%<br>
        • Sin religión: 20%<br>
        • Otras: 6%`
    },
    "NOR": { 
        rel: "Cristianismo", 
        info: `<strong>🇳🇴 Noruega</strong><br>
        • Luteranos: 70%<br>
        • Católicos: 3%<br>
        • Musulmanes: 3%<br>
        • Sin religión: 20%<br>
        • Otras: 4%`
    },
    "SWE": { 
        rel: "Cristianismo", 
        info: `<strong>🇸🇪 Suecia</strong><br>
        • Luteranos: 60%<br>
        • Católicos: 2%<br>
        • Musulmanes: 5%<br>
        • Sin religión: 28%<br>
        • Otras: 5%`
    },
    "FIN": { 
        rel: "Cristianismo", 
        info: `<strong>🇫🇮 Finlandia</strong><br>
        • Luteranos: 70%<br>
        • Ortodoxos: 1%<br>
        • Sin religión: 25%<br>
        • Otras: 4%`
    },
    "DNK": { 
        rel: "Cristianismo", 
        info: `<strong>🇩🇰 Dinamarca</strong><br>
        • Luteranos: 75%<br>
        • Católicos: 1%<br>
        • Musulmanes: 4%<br>
        • Sin religión: 18%<br>
        • Otras: 2%`
    },

    // ==================== ÁFRICA ====================
    "DZA": { 
        rel: "Islam", 
        info: `<strong>🇩🇿 Argelia</strong><br>
        • Musulmanes sunitas: 99%<br>
        • Cristianos: 0.5%<br>
        • Otras: 0.5%`
    },
    "EGY": { 
        rel: "Islam", 
        info: `<strong>🇪🇬 Egipto</strong><br>
        • Musulmanes sunitas: 90%<br>
        • Cristianos coptos: 10%<br>
        • Otras: <1%`
    },
    "LBY": { 
        rel: "Islam", 
        info: `<strong>🇱🇾 Libia</strong><br>
        • Musulmanes sunitas: 97%<br>
        • Cristianos: 1%<br>
        • Otras: 2%`
    },
    "TUN": { 
        rel: "Islam", 
        info: `<strong>🇹🇳 Túnez</strong><br>
        • Musulmanes sunitas: 99%<br>
        • Cristianos: 0.5%<br>
        • Judíos: 0.2%<br>
        • Otras: 0.3%`
    },
    "MAR": { 
        rel: "Islam", 
        info: `<strong>🇲🇦 Marruecos</strong><br>
        • Musulmanes: 99%<br>
        • Cristianos: 0.5%<br>
        • Judíos: 0.2%<br>
        • Otras: 0.3%`
    },
    "MRT": { 
        rel: "Islam", 
        info: `<strong>🇲🇷 Mauritania</strong><br>
        • Musulmanes sunitas: 99%<br>
        • Otras: 1%`
    },
    "SEN": { 
        rel: "Islam", 
        info: `<strong>🇸🇳 Senegal</strong><br>
        • Musulmanes: 95%<br>
        • Cristianos: 4%<br>
        • Religiones tradicionales: 1%`
    },
    "GMB": { 
        rel: "Islam", 
        info: `<strong>🇬🇲 Gambia</strong><br>
        • Musulmanes: 95%<br>
        • Cristianos: 4%<br>
        • Religiones tradicionales: 1%`
    },
    "MLI": { 
        rel: "Islam", 
        info: `<strong>🇲🇱 Mali</strong><br>
        • Musulmanes: 94%<br>
        • Cristianos: 2%<br>
        • Religiones tradicionales: 4%`
    },
    "NER": { 
        rel: "Islam", 
        info: `<strong>🇳🇪 Níger</strong><br>
        • Musulmanes: 98%<br>
        • Cristianos: 1%<br>
        • Religiones tradicionales: 1%`
    },
    "NGA": { 
        rel: "Islam", 
        info: `<strong>🇳🇬 Nigeria</strong><br>
        • Musulmanes: 50%<br>
        • Cristianos: 48%<br>
        • Religiones tradicionales: 2%`
    },
    "BEN": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇯 Benín</strong><br>
        • Cristianos: 50%<br>
        • Musulmanes: 25%<br>
        • Vudú: 15%<br>
        • Religiones tradicionales: 10%`
    },
    "TGO": { 
        rel: "Cristianismo", 
        info: `<strong>🇹🇬 Togo</strong><br>
        • Cristianos: 45%<br>
        • Religiones tradicionales: 35%<br>
        • Musulmanes: 20%`
    },
    "GHA": { 
        rel: "Cristianismo", 
        info: `<strong>🇬🇭 Ghana</strong><br>
        • Cristianos: 70%<br>
        • Musulmanes: 15%<br>
        • Religiones tradicionales: 10%<br>
        • Otras: 5%`
    },
    "CIV": { 
        rel: "Islam", 
        info: `<strong>🇨🇮 Costa de Marfil</strong><br>
        • Musulmanes: 40%<br>
        • Cristianos: 35%<br>
        • Religiones tradicionales: 25%`
    },
    "LBR": { 
        rel: "Cristianismo", 
        info: `<strong>🇱🇷 Liberia</strong><br>
        • Cristianos: 85%<br>
        • Musulmanes: 12%<br>
        • Religiones tradicionales: 3%`
    },
    "SLE": { 
        rel: "Islam", 
        info: `<strong>🇸🇱 Sierra Leona</strong><br>
        • Musulmanes: 78%<br>
        • Cristianos: 20%<br>
        • Religiones tradicionales: 2%`
    },
    "GIN": { 
        rel: "Islam", 
        info: `<strong>🇬🇳 Guinea</strong><br>
        • Musulmanes: 85%<br>
        • Cristianos: 10%<br>
        • Religiones tradicionales: 5%`
    },
    "GNB": { 
        rel: "Islam", 
        info: `<strong>🇬🇼 Guinea-Bisáu</strong><br>
        • Musulmanes: 50%<br>
        • Religiones tradicionales: 40%<br>
        • Cristianos: 10%`
    },
    "BFA": { 
        rel: "Islam", 
        info: `<strong>🇧🇫 Burkina Faso</strong><br>
        • Musulmanes: 60%<br>
        • Cristianos: 25%<br>
        • Religiones tradicionales: 15%`
    },
    "GNQ": { 
        rel: "Cristianismo", 
        info: `<strong>🇬🇶 Guinea Ecuatorial</strong><br>
        • Católicos: 85%<br>
        • Protestantes: 5%<br>
        • Religiones tradicionales: 8%<br>
        • Otras: 2%`
    },
    "GAB": { 
        rel: "Cristianismo", 
        info: `<strong>🇬🇦 Gabón</strong><br>
        • Católicos: 60%<br>
        • Protestantes: 20%<br>
        • Religiones tradicionales: 15%<br>
        • Musulmanes: 5%`
    },
    "COG": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇬 Congo</strong><br>
        • Católicos: 50%<br>
        • Protestantes: 30%<br>
        • Religiones tradicionales: 15%<br>
        • Musulmanes: 5%`
    },
    "COD": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇩 R.D. Congo</strong><br>
        • Católicos: 50%<br>
        • Protestantes: 30%<br>
        • Kimbanguistas: 10%<br>
        • Musulmanes: 10%`
    },
    "CAF": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇫 República Centroafricana</strong><br>
        • Cristianos: 80%<br>
        • Musulmanes: 15%<br>
        • Religiones tradicionales: 5%`
    },
    "CMR": { 
        rel: "Cristianismo", 
        info: `<strong>🇨🇲 Camerún</strong><br>
        • Cristianos: 70%<br>
        • Musulmanes: 20%<br>
        • Religiones tradicionales: 10%`
    },
    "TCD": { 
        rel: "Islam", 
        info: `<strong>🇹🇩 Chad</strong><br>
        • Musulmanes: 55%<br>
        • Cristianos: 35%<br>
        • Religiones tradicionales: 10%`
    },
    "SDN": { 
        rel: "Islam", 
        info: `<strong>🇸🇩 Sudán</strong><br>
        • Musulmanes: 90%<br>
        • Cristianos: 5%<br>
        • Religiones tradicionales: 5%`
    },
    "SDS": { 
        rel: "Cristianismo", 
        info: `<strong>🇸🇸 Sudán del Sur</strong><br>
        • Cristianos: 60%<br>
        • Religiones tradicionales: 30%<br>
        • Musulmanes: 10%`
    },
    "ERI": { 
        rel: "Cristianismo", 
        info: `<strong>🇪🇷 Eritrea</strong><br>
        • Ortodoxos: 50%<br>
        • Musulmanes: 45%<br>
        • Católicos: 3%<br>
        • Protestantes: 2%`
    },
    "DJI": { 
        rel: "Islam", 
        info: `<strong>🇩🇯 Yibuti</strong><br>
        • Musulmanes: 94%<br>
        • Cristianos: 6%`
    },
    "SOM": { 
        rel: "Islam", 
        info: `<strong>🇸🇴 Somalia</strong><br>
        • Musulmanes sunitas: 99%<br>
        • Otras: 1%`
    },
    "ETH": { 
        rel: "Cristianismo", 
        info: `<strong>🇪🇹 Etiopía</strong><br>
        • Cristianos ortodoxos: 43%<br>
        • Musulmanes: 34%<br>
        • Protestantes: 19%<br>
        • Religiones tradicionales: 3%<br>
        • Otras: 1%`
    },
    "KEN": { 
        rel: "Cristianismo", 
        info: `<strong>🇰🇪 Kenia</strong><br>
        • Protestantes: 60%<br>
        • Católicos: 20%<br>
        • Musulmanes: 10%<br>
        • Religiones tradicionales: 5%<br>
        • Otras: 5%`
    },
    "UGA": { 
        rel: "Cristianismo", 
        info: `<strong>🇺🇬 Uganda</strong><br>
        • Católicos: 40%<br>
        • Protestantes: 40%<br>
        • Musulmanes: 12%<br>
        • Religiones tradicionales: 5%<br>
        • Otras: 3%`
    },
    "RWA": { 
        rel: "Cristianismo", 
        info: `<strong>🇷🇼 Ruanda</strong><br>
        • Católicos: 50%<br>
        • Protestantes: 35%<br>
        • Adventistas: 10%<br>
        • Musulmanes: 3%<br>
        • Religiones tradicionales: 2%`
    },
    "BDI": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇮 Burundi</strong><br>
        • Católicos: 65%<br>
        • Protestantes: 20%<br>
        • Religiones tradicionales: 10%<br>
        • Musulmanes: 5%`
    },
    "TZA": { 
        rel: "Cristianismo", 
        info: `<strong>🇹🇿 Tanzania</strong><br>
        • Cristianos: 60%<br>
        • Musulmanes: 35%<br>
        • Religiones tradicionales: 4%<br>
        • Otras: 1%`
    },
    "MOZ": { 
        rel: "Cristianismo", 
        info: `<strong>🇲🇿 Mozambique</strong><br>
        • Cristianos: 60%<br>
        • Religiones tradicionales: 30%<br>
        • Musulmanes: 10%`
    },
    "MWI": { 
        rel: "Cristianismo", 
        info: `<strong>🇲🇼 Malawi</strong><br>
        • Protestantes: 55%<br>
        • Católicos: 20%<br>
        • Musulmanes: 15%<br>
        • Religiones tradicionales: 10%`
    },
    "ZMB": { 
        rel: "Cristianismo", 
        info: `<strong>🇿🇲 Zambia</strong><br>
        • Protestantes: 65%<br>
        • Católicos: 20%<br>
        • Religiones tradicionales: 10%<br>
        • Musulmanes: 5%`
    },
    "ZWE": { 
        rel: "Cristianismo", 
        info: `<strong>🇿🇼 Zimbabue</strong><br>
        • Protestantes: 60%<br>
        • Católicos: 20%<br>
        • Religiones tradicionales: 15%<br>
        • Otras: 5%`
    },
    "BWA": { 
        rel: "Cristianismo", 
        info: `<strong>🇧🇼 Botsuana</strong><br>
        • Cristianos: 70%<br>
        • Religiones tradicionales: 20%<br>
        • Sin religión: 8%<br>
        • Otras: 2%`
    },
    "NAM": { 
        rel: "Cristianismo", 
        info: `<strong>🇳🇦 Namibia</strong><br>
        • Luteranos: 50%<br>
        • Católicos: 20%<br>
        • Religiones tradicionales: 15%<br>
        • Otras: 15%`
    },
    "ZAF": { 
        rel: "Cristianismo", 
        info: `<strong>🇿🇦 Sudáfrica</strong><br>
        • Cristianos: 80%<br>
        • Religiones tradicionales: 4%<br>
        • Sin religión: 15%<br>
        • Otras: 1%`
    },
    "LSO": { 
        rel: "Cristianismo", 
        info: `<strong>🇱🇸 Lesoto</strong><br>
        • Católicos: 45%<br>
        • Protestantes: 35%<br>
        • Religiones tradicionales: 15%<br>
        • Otras: 5%`
    },
    "SWZ": { 
        rel: "Cristianismo", 
        info: `<strong>🇸🇿 Suazilandia</strong><br>
        • Cristianos: 90%<br>
        • Religiones tradicionales: 8%<br>
        • Otras: 2%`
    },
    "MDG": { 
        rel: "Cristianismo", 
        info: `<strong>🇲🇬 Madagascar</strong><br>
        • Cristianos: 85%<br>
        • Religiones tradicionales: 10%<br>
        • Musulmanes: 3%<br>
        • Otras: 2%`
    },

    // ==================== ASIA ====================
    "ISR": { 
        rel: "Judaísmo", 
        info: `<strong>🇮🇱 Israel</strong><br>
        • Judíos: 74%<br>
        • Musulmanes: 18%<br>
        • Cristianos: 2%<br>
        • Drusos: 1.5%<br>
        • Otras: 4.5%`
    },
    "TUR": { 
        rel: "Islam", 
        info: `<strong>🇹🇷 Turquía</strong><br>
        • Musulmanes sunitas: 85%<br>
        • Alevíes: 10%<br>
        • Cristianos: 0.5%<br>
        • Judíos: 0.2%<br>
        • Sin religión: 3%<br>
        • Otras: 1.3%`
    },
    "SYR": { 
        rel: "Islam", 
        info: `<strong>🇸🇾 Siria</strong><br>
        • Musulmanes sunitas: 74%<br>
        • Alauíes: 12%<br>
        • Cristianos: 10%<br>
        • Drusos: 3%<br>
        • Otras: 1%`
    },
    "LBN": { 
        rel: "Islam", 
        info: `<strong>🇱🇧 Líbano</strong><br>
        • Musulmanes: 54% (Sunitas 27%, Chiitas 27%)<br>
        • Cristianos: 40% (Maronitas, Ortodoxos, Católicos)<br>
        • Drusos: 5%<br>
        • Otras: 1%`
    },
    "JOR": { 
        rel: "Islam", 
        info: `<strong>🇯🇴 Jordania</strong><br>
        • Musulmanes sunitas: 97%<br>
        • Cristianos: 2%<br>
        • Otras: 1%`
    },
    "PSE": { 
        rel: "Islam", 
        info: `<strong>🇵🇸 Palestina</strong><br>
        • Musulmanes: 85%<br>
        • Cristianos: 8%<br>
        • Judíos: 5%<br>
        • Otras: 2%`
    },
    "SAU": { 
        rel: "Islam", 
        info: `<strong>🇸🇦 Arabia Saudita</strong><br>
        • Musulmanes sunitas: 93%<br>
        • Musulmanes chiitas: 5%<br>
        • Cristianos (extranjeros): 2%<br>
        • Otras: <1%`
    },
    "YEM": { 
        rel: "Islam", 
        info: `<strong>🇾🇪 Yemen</strong><br>
        • Musulmanes sunitas: 65%<br>
        • Musulmanes chiitas: 35%<br>
        • Otras: <1%`
    },
    "OMN": { 
        rel: "Islam", 
        info: `<strong>🇴🇲 Omán</strong><br>
        • Musulmanes ibadíes: 75%<br>
        • Musulmanes sunitas: 20%<br>
        • Musulmanes chiitas: 5%<br>
        • Hindúes: 3% (extranjeros)`
    },
    "ARE": { 
        rel: "Islam", 
        info: `<strong>🇦🇪 Emiratos Árabes</strong><br>
        • Musulmanes: 76%<br>
        • Cristianos: 9%<br>
        • Hindúes: 8%<br>
        • Budistas: 3%<br>
        • Otras: 4%`
    },
    "QAT": { 
        rel: "Islam", 
        info: `<strong>🇶🇦 Qatar</strong><br>
        • Musulmanes: 65%<br>
        • Cristianos: 15%<br>
        • Hindúes: 10%<br>
        • Budistas: 5%<br>
        • Otras: 5%`
    },
    "KWT": { 
        rel: "Islam", 
        info: `<strong>🇰🇼 Kuwait</strong><br>
        • Musulmanes sunitas: 70%<br>
        • Musulmanes chiitas: 30%<br>
        • Cristianos: 8% (extranjeros)`
    },
    "BHR": { 
        rel: "Islam", 
        info: `<strong>🇧🇭 Baréin</strong><br>
        • Musulmanes chiitas: 55%<br>
        • Musulmanes sunitas: 45%<br>
        • Cristianos: 10% (extranjeros)`
    },
    "IRQ": { 
        rel: "Islam", 
        info: `<strong>🇮🇶 Irak</strong><br>
        • Musulmanes chiitas: 60%<br>
        • Musulmanes sunitas: 37%<br>
        • Cristianos: 1%<br>
        • Yazidíes: 0.5%<br>
        • Otras: 1.5%`
    },
    "IRN": { 
        rel: "Islam", 
        info: `<strong>🇮🇷 Irán</strong><br>
        • Musulmanes chiitas: 90%<br>
        • Musulmanes sunitas: 8%<br>
        • Zoroastrianos: 0.5%<br>
        • Judíos: 0.3%<br>
        • Cristianos: 0.5%<br>
        • Bahá'ís: 0.5%<br>
        • Otras: 0.2%`
    },
    "AFG": { 
        rel: "Islam", 
        info: `<strong>🇦🇫 Afganistán</strong><br>
        • Musulmanes sunitas: 90%<br>
        • Musulmanes chiitas: 9%<br>
        • Sijs: 0.5%<br>
        • Hindúes: 0.3%<br>
        • Otras: 0.2%`
    },
    "PAK": { 
        rel: "Islam", 
        info: `<strong>🇵🇰 Pakistán</strong><br>
        • Musulmanes sunitas: 85%<br>
        • Musulmanes chiitas: 10%<br>
        • Cristianos: 2%<br>
        • Hindúes: 2%<br>
        • Otras: 1%`
    },
    "IND": { 
        rel: "Hinduismo", 
        info: `<strong>🇮🇳 India</strong><br>
        • Hindúes: 79%<br>
        • Musulmanes: 14%<br>
        • Cristianos: 2.3%<br>
        • Sijs: 1.7%<br>
        • Budistas: 0.7%<br>
        • Jains: 0.4%<br>
        • Otras: 1.9%`
    },
    "NPL": { 
        rel: "Hinduismo", 
        info: `<strong>🇳🇵 Nepal</strong><br>
        • Hindúes: 81%<br>
        • Budistas: 9%<br>
        • Musulmanes: 4%<br>
        • Kirant: 3%<br>
        • Cristianos: 1.5%<br>
        • Otras: 1.5%`
    },
    "BTN": { 
        rel: "Budismo", 
        info: `<strong>🇧🇹 Bután</strong><br>
        • Budistas: 75%<br>
        • Hindúes: 22%<br>
        • Otras: 3%`
    },
    "BGD": { 
        rel: "Islam", 
        info: `<strong>🇧🇩 Bangladesh</strong><br>
        • Musulmanes: 90%<br>
        • Hindúes: 8%<br>
        • Budistas: 0.5%<br>
        • Cristianos: 0.5%<br>
        • Otras: 1%`
    },
    "LKA": { 
        rel: "Budismo", 
        info: `<strong>🇱🇰 Sri Lanka</strong><br>
        • Budistas: 70%<br>
        • Hindúes: 13%<br>
        • Musulmanes: 10%<br>
        • Cristianos: 7%`
    },
    "MMR": { 
        rel: "Budismo", 
        info: `<strong>🇲🇲 Myanmar</strong><br>
        • Budistas: 88%<br>
        • Cristianos: 6%<br>
        • Musulmanes: 4%<br>
        • Otras: 2%`
    },
    "THA": { 
        rel: "Budismo", 
        info: `<strong>🇹🇭 Tailandia</strong><br>
        • Budistas: 93%<br>
        • Musulmanes: 5%<br>
        • Cristianos: 1%<br>
        • Otras: 1%`
    },
    "LAO": { 
        rel: "Budismo", 
        info: `<strong>🇱🇦 Laos</strong><br>
        • Budistas: 64%<br>
        • Religiones tradicionales: 30%<br>
        • Cristianos: 2%<br>
        • Otras: 4%`
    },
    "KHM": { 
        rel: "Budismo", 
        info: `<strong>🇰🇭 Camboya</strong><br>
        • Budistas: 97%<br>
        • Musulmanes: 2%<br>
        • Cristianos: 1%`
    },
    "VNM": { 
        rel: "Budismo", 
        info: `<strong>🇻🇳 Vietnam</strong><br>
        • Sin religión: 30%<br>
        • Budistas: 28%<br>
        • Religión tradicional: 20%<br>
        • Cristianos: 12%<br>
        • Cao Dai: 5%<br>
        • Otras: 5%`
    },
    "CHN": { 
        rel: "Religión Tradicional China / Ninguna", 
        info: `<strong>🇨🇳 China</strong><br>
        • Sin religión: 52%<br>
        • Religión tradicional china: 22%<br>
        • Budistas: 18%<br>
        • Cristianos: 5%<br>
        • Musulmanes: 2%<br>
        • Otras: 1%`
    },
    "TWN": { 
        rel: "Religión Tradicional China / Ninguna", 
        info: `<strong>🇹🇼 Taiwán</strong><br>
        • Religión tradicional china: 45%<br>
        • Budistas: 30%<br>
        • Taoístas: 15%<br>
        • Cristianos: 5%<br>
        • Sin religión: 5%`
    },
    "MNG": { 
        rel: "Budismo", 
        info: `<strong>🇲🇳 Mongolia</strong><br>
        • Budistas: 53%<br>
        • Sin religión: 40%<br>
        • Musulmanes: 3%<br>
        • Cristianos: 2%<br>
        • Otras: 2%`
    },
    "KOR": { 
        rel: "Cristianismo", 
        info: `<strong>🇰🇷 Corea del Sur</strong><br>
        • Sin religión: 56%<br>
        • Cristianos: 27% (Protestantes 19%, Católicos 8%)<br>
        • Budistas: 16%<br>
        • Otras: 1%`
    },
    "JPN": { 
        rel: "Budismo", 
        info: `<strong>🇯🇵 Japón</strong><br>
        • Sintoísmo: 51%<br>
        • Budismo: 34%<br>
        • Cristianos: 2%<br>
        • Sin religión: 10%<br>
        • Otras: 3%`
    },
    "PHL": { 
        rel: "Cristianismo", 
        info: `<strong>🇵🇭 Filipinas</strong><br>
        • Católicos: 80%<br>
        • Protestantes: 10%<br>
        • Iglesia de Cristo: 2%<br>
        • Musulmanes: 5%<br>
        • Otras: 3%`
    },
    "MYS": { 
        rel: "Islam", 
        info: `<strong>🇲🇾 Malasia</strong><br>
        • Musulmanes: 60%<br>
        • Budistas: 20%<br>
        • Cristianos: 10%<br>
        • Hindúes: 6%<br>
        • Religiones tradicionales: 3%<br>
        • Otras: 1%`
    },
    "SGP": { 
        rel: "Budismo", 
        info: `<strong>🇸🇬 Singapur</strong><br>
        • Budistas: 33%<br>
        • Cristianos: 19%<br>
        • Musulmanes: 14%<br>
        • Taoístas: 10%<br>
        • Hindúes: 5%<br>
        • Sin religión: 17%<br>
        • Otras: 2%`
    },
    "BRN": { 
        rel: "Islam", 
        info: `<strong>🇧🇳 Brunéi</strong><br>
        • Musulmanes: 78%<br>
        • Budistas: 8%<br>
        • Cristianos: 7%<br>
        • Otras: 7%`
    },
    "IDN": { 
        rel: "Islam", 
        info: `<strong>🇮🇩 Indonesia</strong><br>
        • Musulmanes: 87%<br>
        • Protestantes: 6%<br>
        • Católicos: 3%<br>
        • Hindúes: 1.7%<br>
        • Budistas: 0.7%<br>
        • Confucianistas: 0.5%<br>
        • Otras: 1.1%`
    },
    "TLS": { 
        rel: "Cristianismo", 
        info: `<strong>🇹🇱 Timor Oriental</strong><br>
        • Católicos: 97%<br>
        • Protestantes: 2%<br>
        • Otras: 1%`
    },

    // ==================== OCEANÍA ====================
    "AUS": { 
        rel: "Cristianismo", 
        info: `<strong>🇦🇺 Australia</strong><br>
        • Católicos: 22%<br>
        • Protestantes: 18%<br>
        • Ortodoxos: 2%<br>
        • Musulmanes: 2.5%<br>
        • Budistas: 2%<br>
        • Hindúes: 1.5%<br>
        • Sijs: 0.5%<br>
        • Sin religión: 38%<br>
        • Otras: 13.5%`
    },
    "NZL": { 
        rel: "Cristianismo", 
        info: `<strong>🇳🇿 Nueva Zelanda</strong><br>
        • Católicos: 12%<br>
        • Protestantes: 25%<br>
        • Hindúes: 2%<br>
        • Musulmanes: 1.5%<br>
        • Budistas: 1.5%<br>
        • Sin religión: 48%<br>
        • Otras: 10%`
    },
    "PNG": { 
        rel: "Cristianismo", 
        info: `<strong>🇵🇬 Papúa Nueva Guinea</strong><br>
        • Protestantes: 60%<br>
        • Católicos: 30%<br>
        • Religiones tradicionales: 8%<br>
        • Otras: 2%`
    },
    "FJI": { 
        rel: "Cristianismo", 
        info: `<strong>🇫🇯 Fiyi</strong><br>
        • Protestantes: 45%<br>
        • Católicos: 9%<br>
        • Hindúes: 28%<br>
        • Musulmanes: 6%<br>
        • Otras: 12%`
    },
    "SLB": { 
        rel: "Cristianismo", 
        info: `<strong>🇸🇧 Islas Salomón</strong><br>
        • Protestantes: 70%<br>
        • Católicos: 20%<br>
        • Religiones tradicionales: 8%<br>
        • Otras: 2%`
    },
    "VUT": { 
        rel: "Cristianismo", 
        info: `<strong>🇻🇺 Vanuatu</strong><br>
        • Protestantes: 50%<br>
        • Católicos: 15%<br>
        • Religiones tradicionales: 30%<br>
        • Otras: 5%`
    },
    "WSM": { 
        rel: "Cristianismo", 
        info: `<strong>🇼🇸 Samoa</strong><br>
        • Protestantes: 50%<br>
        • Católicos: 20%<br>
        • Mormones: 15%<br>
        • Otras: 15%`
    },
    "TON": { 
        rel: "Cristianismo", 
        info: `<strong>🇹🇴 Tonga</strong><br>
        • Protestantes: 70%<br>
        • Católicos: 16%<br>
        • Mormones: 10%<br>
        • Otras: 4%`
    }
};

// =============================================================
// 5. VARIABLES GLOBALES
// =============================================================
let currentTheme = "dark";
let map2D = null;
let map3D = null;
let vectorLayer = null;
let vista2D = null;
let geojsonDataGlobal = null;
let is3DActive = false;
let mapboxInitialized = false;
let rotationActive = false;
let rotationInterval = null;
let countryList = [];
let isPitchMode = false;

// =============================================================
// 6. INICIALIZACIÓN
// =============================================================
document.addEventListener('DOMContentLoaded', function() {
    construirLeyenda();
    
    setTimeout(function() {
        const splash = document.getElementById("splash-screen");
        if (splash) splash.classList.add('hidden');
        
        const warning = document.getElementById("warning-screen");
        if (warning) warning.style.display = "flex";
    }, 2000);
});

function cerrarWarning() {
    document.getElementById("warning-screen").style.display = "none";
    inicializarMapa();
}

function construirLeyenda() {
    const legend = document.getElementById('legend');
    if (!legend) return;
    
    legend.innerHTML = '';
    Object.keys(religionColors).forEach(key => {
        legend.innerHTML += `
            <div class="legend-item" onclick="abrirModalReligion('${key}')">
                <div class="legend-color" style="background-color: ${religionColors[key]}"></div>
                <span>${key}</span>
            </div>
        `;
    });
}

// =============================================================
// 7. INICIALIZACIÓN DEL MAPA
// =============================================================
function inicializarMapa() {
    if (typeof ol === 'undefined') {
        mostrarError('OpenLayers no está cargado correctamente');
        return;
    }

    fetch('mundo.geojson')
        .then(response => {
            if (!response.ok) throw new Error('No se pudo cargar mundo.geojson');
            return response.json();
        })
        .then(geojsonData => {
            geojsonDataGlobal = geojsonData;
            crearListaPaises(geojsonData);
            configurarMapa2D(geojsonData);
            
            if (typeof mapboxgl !== 'undefined') {
                inicializarMapbox(geojsonData);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            mostrarError('No se pudo cargar el archivo mundo.geojson');
        });
}

function crearListaPaises(geojsonData) {
    countryList = [];
    geojsonData.features.forEach(feature => {
        const props = feature.properties;
        let code = props.ISO_A3 || props.ADM0_A3 || props.ISO_A2 || "";
        const codigoCorrecto = obtenerCodigoISO(code);
        const name = props.NAME || props.ADMIN || props.NAME_LONG || "";
        if (name && codigoCorrecto) {
            countryList.push({
                code: codigoCorrecto,
                originalCode: code,
                name: name,
                feature: feature
            });
        }
    });
    countryList.sort((a, b) => a.name.localeCompare(b.name));
}

function mostrarError(mensaje) {
    const mapError = document.getElementById('map-error');
    if (mapError) {
        mapError.style.display = 'flex';
        const p = document.getElementById('error-message');
        if (p) p.textContent = mensaje;
    }
}

// =============================================================
// 8. MAPA 2D (OpenLayers)
// =============================================================
function configurarMapa2D(geojsonData) {
    try {
        const format = new ol.format.GeoJSON({
            featureProjection: 'EPSG:3857',
            dataProjection: 'EPSG:4326'
        });
        
        const vectorSource = new ol.source.Vector({
            features: format.readFeatures(geojsonData)
        });

        function estiloPaisInteractiva(feature) {
            const properties = feature.getProperties();
            let code = properties.ISO_A3 || properties.ADM0_A3 || properties.ISO_A2 || "";
            const codigoCorrecto = obtenerCodigoISO(code);
            
            const name = properties.NAME || properties.ADMIN || properties.NAME_LONG || "País";
            
            let colorFondo = (currentTheme === "dark") ? neuterColors.dark : neuterColors.light;
            
            if (religionData[codigoCorrecto]) {
                const religion = religionData[codigoCorrecto].rel;
                colorFondo = religionColors[religion] || religionColors["Sin Datos"];
            }
            
            return new ol.style.Style({
                fill: new ol.style.Fill({ color: colorFondo }),
                stroke: new ol.style.Stroke({ 
                    color: (currentTheme === "dark" ? '#0c111d' : '#cbd5e1'), 
                    width: 0.6 
                }),
                text: new ol.style.Text({
                    text: name,
                    font: 'bold 8px "Segoe UI", sans-serif',
                    fill: new ol.style.Fill({ 
                        color: (currentTheme === "dark" ? '#ffffff' : '#1a202c') 
                    }),
                    stroke: new ol.style.Stroke({ 
                        color: (currentTheme === "dark" ? '#000000' : '#ffffff'), 
                        width: 2 
                    }),
                    overflow: false,
                    placement: 'point',
                    maxAngle: Math.PI / 6,
                    scale: 0.7
                })
            });
        }

        vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: estiloPaisInteractiva
        });

        vista2D = new ol.View({
            center: [0, 0],
            zoom: 2,
            projection: 'EPSG:3857',
            multiWorld: false
        });

        map2D = new ol.Map({
            target: 'map',
            layers: [vectorLayer],
            view: vista2D
        });

        

        map2D.on('click', function(evt) {
            const feature = map2D.forEachFeatureAtPixel(evt.pixel, function(feat) {
                return feat;
            });

            if (feature) {
                manejarClicFeature(feature);
            }
        });

        document.getElementById('map-error').style.display = 'none';
        console.log('✅ Mapa 2D inicializado correctamente');

    } catch (error) {
        console.error('❌ Error en 2D:', error);
        mostrarError('Error al procesar los datos: ' + error.message);
    }
}

// =============================================================
// 9. MAPA 3D (Mapbox)
// =============================================================
function inicializarMapbox(geojsonData) {
    try {
        if (typeof mapboxgl === 'undefined') {
            console.warn('⚠️ Mapbox no está disponible');
            return;
        }

        const container = document.getElementById('mapbox-container');
        if (!container) {
            console.error('❌ Contenedor Mapbox no encontrado');
            return;
        }

        // TOKEN OFUSCADO
        const t1 = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.";
        const t2 = atob("ckpjRklHMjE0QXJpSVNMYkI2QjVhdw==");
        mapboxgl.accessToken = t1 + t2.trim();

        const isDark = true;
        const mapStyle = 'mapbox://styles/mapbox/dark-v11';

        map3D = new mapboxgl.Map({
            container: 'mapbox-container',
            style: mapStyle,
            center: [0, 25],
            zoom: 1.8,
            pitch: 45,
            bearing: 10,
            antialias: true,
            maxPitch: 85,
            minPitch: 30,
            maxZoom: 10,
            minZoom: 0.5
        });

        map3D.on('load', function() {
            mapboxInitialized = true;
            console.log('✅ Mapbox 3D inicializado correctamente');

            cargarGeoJSON3D(geojsonData);

            if (is3DActive) {
                document.getElementById('controls-3d').style.display = 'flex';
            }

            setTimeout(() => map3D.resize(), 100);
        });

        map3D.on('error', function(e) {
            console.warn('⚠️ Error en Mapbox:', e);
        });

    } catch (error) {
        console.error('❌ Error inicializando Mapbox:', error);
        mapboxInitialized = false;
    }
}

function cargarGeoJSON3D(geojsonData) {
    if (!map3D || !mapboxInitialized) return;

    try {
        if (map3D.getSource('paises')) {
            ['paises-fill', 'paises-line', 'paises-nombres'].forEach(id => {
                if (map3D.getLayer(id)) map3D.removeLayer(id);
            });
            map3D.removeSource('paises');
        }

        map3D.addSource('paises', {
            type: 'geojson',
            data: geojsonData
        });

        const colorExpression = ['case'];
        Object.keys(religionData).forEach(code => {
            const religion = religionData[code].rel;
            const color = religionColors[religion] || religionColors["Sin Datos"];
            colorExpression.push(['==', ['get', 'ISO_A3'], code], color);
        });
        colorExpression.push('#2d3748');

        map3D.addLayer({
            'id': 'paises-fill',
            'type': 'fill-extrusion',
            'source': 'paises',
            'paint': {
                'fill-extrusion-color': colorExpression,
                'fill-extrusion-height': 300000,
                'fill-extrusion-base': 0,
                'fill-extrusion-opacity': 0.85
            }
        });

        map3D.addLayer({
            'id': 'paises-line',
            'type': 'line',
            'source': 'paises',
            'paint': {
                'line-color': '#60a5fa',
                'line-width': 1.5,
                'line-opacity': 0.6
            }
        });

        map3D.addLayer({
            'id': 'paises-nombres',
            'type': 'symbol',
            'source': 'paises',
            'layout': {
                'text-field': ['get', 'NAME'],
                'text-size': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    1.5, 7,
                    3, 10,
                    5, 14,
                    8, 18
                ],
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0],
                'text-anchor': 'center',
                'text-allow-overlap': false,
                'text-ignore-placement': false,
                'text-max-width': 8
            },
            'paint': {
                'text-color': '#ffffff',
                'text-halo-color': 'rgba(0, 0, 0, 0.85)',
                'text-halo-width': 2.5,
                'text-halo-blur': 1,
                'text-opacity': 0.95
            },
            'minzoom': 1.8
        });

        map3D.on('click', 'paises-fill', function(e) {
            if (e.features.length > 0) {
                const props = e.features[0].properties;
                let code = props.ISO_A3 || props.ADM0_A3 || props.ISO_A2 || "";
                const codigoCorrecto = obtenerCodigoISO(code);
                const name = props.NAME || props.ADMIN || "País";

                if (religionData[codigoCorrecto]) {
                    mostrarInformacionPais(religionData[codigoCorrecto].rel, name, religionData[codigoCorrecto].info);
                } else {
                    mostrarInformacionPais(null, name, `
                        <div style="text-align: center; padding: 10px;">
                            <p style="font-size: 1.1rem; margin-bottom: 8px;">
                                <i class="bi bi-globe2"></i> ${name}
                            </p>
                            <p style="color: #94a3b8;">
                                Datos de religión no disponibles en esta base de datos.
                            </p>
                            <p style="color: #64748b; font-size: 0.8rem; margin-top: 8px;">
                                Código ISO detectado: ${code} → ${codigoCorrecto || 'No mapeado'}
                            </p>
                        </div>
                    `);
                }
            }
        });

        map3D.on('mouseenter', 'paises-fill', function() {
            map3D.getCanvas().style.cursor = 'pointer';
        });
        map3D.on('mouseleave', 'paises-fill', function() {
            map3D.getCanvas().style.cursor = '';
        });

        setTimeout(() => {
            const logo = document.querySelector('.mapboxgl-ctrl-logo');
            if (logo) logo.style.display = 'none';
            const attrib = document.querySelector('.mapboxgl-ctrl-attrib');
            if (attrib) attrib.style.display = 'none';
        }, 500);

        console.log('✅ Nombres de países cargados en 3D');

    } catch (error) {
        console.error('❌ Error cargando datos 3D:', error);
    }
}

// =============================================================
// 10. BÚSQUEDA DE PAÍSES
// =============================================================
function buscarPais(event) {
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    const clearBtn = document.getElementById('search-clear');
    const query = input.value.trim().toLowerCase();

    if (query.length === 0) {
        resultsContainer.classList.remove('show');
        clearBtn.style.display = 'none';
        return;
    }

    clearBtn.style.display = 'block';

    const resultados = countryList.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.code.toLowerCase().includes(query)
    ).slice(0, 15);

    if (resultados.length === 0) {
        resultsContainer.innerHTML = `
            <div class="search-result-item" style="cursor:default; opacity:0.6;">
                <i class="bi bi-search"></i> No se encontraron países
            </div>
        `;
    } else {
        resultsContainer.innerHTML = resultados.map(item => {
            const religion = religionData[item.code] ? religionData[item.code].rel : 'Sin Datos';
            const color = religionColors[religion] || '#4a5568';
            return `
                <div class="search-result-item" onclick="irAPais('${item.code}')">
                    <i class="bi bi-geo-alt"></i>
                    <span>${item.name}</span>
                    <span class="country-code">${item.code}</span>
                    <span class="religion-badge" style="background:${color};">
                        ${religion}
                    </span>
                </div>
            `;
        }).join('');
    }

    resultsContainer.classList.add('show');
}

function irAPais(code) {
    document.getElementById('search-results').classList.remove('show');
    document.getElementById('search-clear').style.display = 'none';
    document.getElementById('search-input').value = '';

    if (map2D && !is3DActive) {
        const features = map2D.getLayers().getArray()[0].getSource().getFeatures();
        const target = features.find(f => {
            const props = f.getProperties();
            let fCode = props.ISO_A3 || props.ADM0_A3 || props.ISO_A2 || "";
            const codigoCorrecto = obtenerCodigoISO(fCode);
            return codigoCorrecto === code;
        });
        if (target) {
            const extent = target.getGeometry().getExtent();
            map2D.getView().fit(extent, { padding: [50, 50, 50, 50], duration: 1000 });
        }
    }

    if (map3D && is3DActive) {
        const country = countryList.find(c => c.code === code);
        if (country && country.feature) {
            const geom = country.feature.geometry;
            let coords = [];
            if (geom.type === 'Polygon') {
                coords = geom.coordinates[0];
            } else if (geom.type === 'MultiPolygon') {
                coords = geom.coordinates[0][0];
            }
            if (coords.length > 0) {
                let centerLon = 0, centerLat = 0;
                coords.forEach(c => { centerLon += c[0]; centerLat += c[1]; });
                centerLon /= coords.length;
                centerLat /= coords.length;
                map3D.flyTo({
                    center: [centerLon, centerLat],
                    zoom: 4,
                    pitch: 45,
                    duration: 1500
                });
            }
        }
    }
}

function limpiarBusqueda() {
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').classList.remove('show');
    document.getElementById('search-clear').style.display = 'none';
}

document.addEventListener('click', function(e) {
    const container = document.querySelector('.search-container');
    if (container && !container.contains(e.target)) {
        document.getElementById('search-results').classList.remove('show');
    }
});

// =============================================================
// 11. CONTROLES DE MAPA
// =============================================================
function zoomIn() {
    if (is3DActive && map3D) {
        const zoom = map3D.getZoom();
        map3D.zoomTo(zoom + 1, { duration: 500 });
    } else if (map2D) {
        const view = map2D.getView();
        view.setZoom(view.getZoom() + 1);
    }
}

function zoomOut() {
    if (is3DActive && map3D) {
        const zoom = map3D.getZoom();
        map3D.zoomTo(zoom - 1, { duration: 500 });
    } else if (map2D) {
        const view = map2D.getView();
        view.setZoom(view.getZoom() - 1);
    }
}

function toggleRotation() {
    const btn = document.getElementById('btn-rotate-map');
    
    if (is3DActive && map3D) {
        rotationActive = !rotationActive;
        
        if (rotationActive) {
            btn.classList.add('active-rotation');
            btn.title = 'Detener rotación 3D';
            if (rotationInterval) clearInterval(rotationInterval);
            rotationInterval = setInterval(() => {
                if (map3D && rotationActive) {
                    const bearing = map3D.getBearing() + 0.5;
                    map3D.setBearing(bearing, { duration: 50 });
                }
            }, 50);
        } else {
            btn.classList.remove('active-rotation');
            btn.title = 'Girar 3D';
            if (rotationInterval) {
                clearInterval(rotationInterval);
                rotationInterval = null;
            }
        }
        return;
    }
    
    if (map2D) {
        isPitchMode = !isPitchMode;
        const view = map2D.getView();
        
        if (isPitchMode) {
            btn.classList.add('active-rotation');
            btn.title = 'Desactivar vista 3D';
            view.setRotation(0);
            view.setCenter([0, 0]);
            view.setZoom(1.5);
            document.getElementById('map').style.transform = 'perspective(1000px) rotateX(5deg)';
            document.getElementById('map').style.transition = 'transform 0.5s ease';
        } else {
            btn.classList.remove('active-rotation');
            btn.title = 'Activar vista 3D';
            document.getElementById('map').style.transform = 'perspective(1000px) rotateX(0deg)';
            view.setCenter([0, 0]);
            view.setZoom(2);
            view.setRotation(0);
        }
    }
}

function reset3DView() {
    if (!map3D) return;
    if (rotationActive) {
        rotationActive = false;
        const btn = document.getElementById('btn-rotate-map');
        btn.classList.remove('active-rotation');
        btn.title = 'Girar 3D';
        if (rotationInterval) {
            clearInterval(rotationInterval);
            rotationInterval = null;
        }
    }
    map3D.flyTo({
        center: [0, 25],
        zoom: 1.8,
        pitch: 45,
        bearing: 10,
        duration: 1500
    });
}

// =============================================================
// 12. MANEJO DE CLIC
// =============================================================
function manejarClicFeature(feature) {
    const props = feature.getProperties();
    let code = props.ISO_A3 || props.ADM0_A3 || props.ISO_A2 || "";
    const codigoCorrecto = obtenerCodigoISO(code);
    const name = props.NAME || props.ADMIN || "País";

    if (religionData[codigoCorrecto]) {
        mostrarInformacionPais(religionData[codigoCorrecto].rel, name, religionData[codigoCorrecto].info);
    } else {
        mostrarInformacionPais(null, name, `
            <div style="text-align: center; padding: 10px;">
                <p style="font-size: 1.1rem; margin-bottom: 8px;">
                    <i class="bi bi-globe2"></i> ${name}
                </p>
                <p style="color: #94a3b8;">
                    Datos de religión no disponibles en esta base de datos.
                </p>
                <p style="color: #64748b; font-size: 0.8rem; margin-top: 8px;">
                    Código ISO: ${code} → ${codigoCorrecto || 'No mapeado'}
                </p>
            </div>
        `);
    }
}

// =============================================================
// 13. MODALES
// =============================================================
function abrirModalReligion(nombreReligion) {
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const modal = document.getElementById("custom-modal");
    
    if (!modalTitle || !modalBody || !modal) return;
    
    if (religionGeneralInfo[nombreReligion]) {
        const iconMap = {
            "Cristianismo": "bi-church",
            "Islam": "bi-moon-stars",
            "Hinduismo": "bi-flower1",
            "Budismo": "bi-flower2",
            "Religión Tradicional China / Ninguna": "bi-yin-yang"
        };
        const icon = iconMap[nombreReligion] || "bi-globe2";
        
        modalTitle.innerHTML = `<i class="bi ${icon}"></i> ${nombreReligion}`;
        modalBody.innerHTML = religionGeneralInfo[nombreReligion];
        modal.style.display = "flex";
    }
}

function mostrarInformacionPais(religion, nombrePais, infoAdicional) {
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const modal = document.getElementById("custom-modal");
    
    if (!modalTitle || !modalBody || !modal) return;
    
    const religionEmoji = {
        "Cristianismo": "✝️",
        "Islam": "☪️",
        "Hinduismo": "🕉️",
        "Budismo": "☸️",
        "Religión Tradicional China / Ninguna": "☯️"
    };
    const emoji = religion ? (religionEmoji[religion] || "🌍") : "🌍";
    
    modalTitle.innerHTML = `${emoji} ${nombrePais} - ${religion || 'Sin datos'}`;
    
    modalBody.innerHTML = `
        <div style="font-size: 0.95rem;">
            ${infoAdicional}
        </div>
    `;
    
    modal.style.display = "flex";
}

function cerrarModal() {
    document.getElementById("custom-modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("custom-modal");
    if (event.target == modal) modal.style.display = "none";
}

// =============================================================
// 14. CONTROLES DE VISTA
// =============================================================
function switchView(viewType) {
    const btn2d = document.getElementById('btn-2d');
    const btn3d = document.getElementById('btn-3d');
    const mapContainer = document.getElementById('map');
    const mapboxContainer = document.getElementById('mapbox-container');
    const controls3d = document.getElementById('controls-3d');
    const rotateBtn = document.getElementById('btn-rotate-map');
    
    document.querySelectorAll('.toggle-btn').forEach(el => el.classList.remove('active'));
    
    if (viewType === '2d') {
        btn2d.classList.add('active');
        is3DActive = false;
        
        if (isPitchMode) {
            isPitchMode = false;
            document.getElementById('map').style.transform = 'perspective(1000px) rotateX(0deg)';
            rotateBtn.classList.remove('active-rotation');
            rotateBtn.title = 'Activar vista 3D';
            if (map2D) {
                map2D.getView().setCenter([0, 0]);
                map2D.getView().setZoom(2);
                map2D.getView().setRotation(0);
            }
        }
        
        if (rotationActive) {
            rotationActive = false;
            rotateBtn.classList.remove('active-rotation');
            rotateBtn.title = 'Activar vista 3D';
            if (rotationInterval) {
                clearInterval(rotationInterval);
                rotationInterval = null;
            }
        }
        
        controls3d.style.display = 'none';
        mapContainer.style.display = 'block';
        mapboxContainer.style.display = 'none';
        
        if (map2D && vista2D) {
            map2D.setView(vista2D);
            setTimeout(() => map2D.updateSize(), 100);
        }
        
    } else {
        btn3d.classList.add('active');
        is3DActive = true;
        
        if (isPitchMode) {
            isPitchMode = false;
            document.getElementById('map').style.transform = 'perspective(1000px) rotateX(0deg)';
            rotateBtn.classList.remove('active-rotation');
        }
        
        if (rotationActive) {
            rotationActive = false;
            rotateBtn.classList.remove('active-rotation');
            rotateBtn.title = 'Girar 3D';
            if (rotationInterval) {
                clearInterval(rotationInterval);
                rotationInterval = null;
            }
        }
        
        controls3d.style.display = 'flex';
        mapContainer.style.display = 'none';
        mapboxContainer.style.display = 'block';
        
        if (mapboxInitialized && map3D) {
            setTimeout(() => map3D.resize(), 200);
            setTimeout(() => {
                map3D.flyTo({
                    center: [0, 25],
                    zoom: 1.8,
                    pitch: 45,
                    bearing: 10,
                    duration: 1000
                });
            }, 300);
        } else if (geojsonDataGlobal && typeof mapboxgl !== 'undefined') {
            inicializarMapbox(geojsonDataGlobal);
        }
    }
}

// =============================================================
// 15. Cuadro de Comparativo
// =============================================================

// Generar cuadro comparativo de religiones (versión corregida y definitiva)
function buildComparativeTable() {
    const columns = [
        'Característica','Evangélicos/Protestantes','Católicos','Ortodoxos','Mormones','Testigos de Jehová','Islam','Hinduismo','Budismo','Religión China'
    ];

    const rows = [
        ['Origen', 'Jerusalén, 30 d.C. ', 'Sin especificar', 'Sin especificar', 'EE.UU., 1830', 'EE.UU., 1870', 'Arabia, 622 d.C.', 'India, ~2000 a.C.', 'India, s.VI a.C.', 'China, ~500 a.C.'],
        ['Fundador', 'Jesucristo', 'Para ellos Jesucristo', 'Segun investigaciones Jesucristo', 'José Smith', 'Charles T. Russell', 'Mahoma', 'Sin fundador', 'Buda (Siddhartha)', 'Confucio, Lao-Tsé'],
        ['Inicio como Movimiento', 'Pentecostés (30 d.C.)', 'Pentecostés (30 d.C.)', 'Pentecostés (30 d.C.)', '1830 (Nueva York)', '1870 (Pensilvania)', '622 d.C. (Hégira)', '~2000 a.C.', '528 a.C. (Iluminación de Buda)', '~500 a.C.'],
        ['Evento Clave', 'La Reforma (1517)', 'Edicto de Milán (313)', 'Gran Cisma (1054)', 'Visión de José Smith (1820)', 'Estudio bíblico de Russell (1870)', 'Revelación del Corán (610 d.C.)', 'Composición de los Vedas', 'Iluminación de Buda', 'Enseñanzas de Confucio'],
        ['Autoridad', 'Sola Scriptura (Biblia)', 'Papa + Biblia + Tradición', 'Patriarca + Biblia + Tradición', 'Profeta viviente + Libro de Mormón', 'Cuerpo Gobernante + Biblia', 'Corán + Hadiz + Ulemas', 'Vedas + Gurús', 'Sutras + Sangha', 'Textos + Maestros'],
        ['Texto Sagrado', 'Biblia (66 libros)', 'Biblia + Tradición (73 libros)', 'Biblia + Tradición (76 libros)', 'Biblia + Libro de Mormón', 'Biblia (Traducción del Nuevo Mundo)', 'Corán', 'Vedas, Gita', 'Tripitaka, Sutras', 'Tao Te Ching'],
        ['Líder/es', 'Pastores', 'Papa', 'Patriarca', 'Profeta Presidente', 'Cuerpo Gobernante', 'Imán, Califa', 'Gurús, Sadhus', 'Dalai Lama, Monjes', 'Maestros'],
        ['Sucesión Apostólica', 'No', 'Sí (desde Pedro)', 'Sí (desde Pedro/Andrés)', 'No', 'No', 'No', 'No', 'No', 'No'],
        ['Dios(es)', 'Trinidad', 'Trinidad', 'Trinidad', 'Dios Padre (no Trinidad)', 'Jehová (no Trinidad)', 'Alá (único)', 'Muchos dioses', 'No hay dios creador', 'Tao (principio universal)'],
        ['Salvación', 'Solo por fe', 'Fe + Obras + Sacramentos', 'Fe + Obras + Sacramentos', 'Fe + Obras + Obediencia', 'Fe + Obediencia', 'Sumisión a Alá', 'Karma, Moksha', 'Iluminación (Nirvana)', 'Armonía con el Tao'],
        ['Bautismo', 'Creyentes (inmersión)', 'Infantes (aspersión)', 'Infantes', '8 años (inmersión)', 'Creyentes (inmersión)', 'Shahada (no hay bautismo)', 'Rituales de purificación', 'No aplica', 'No aplica'],
        ['Día Santo', 'Domingo', 'Domingo', 'Domingo', 'Domingo', 'Sábado', 'Viernes', 'Festivos (Diwali)', 'Luna llena', 'Año Nuevo Chino'],
        ['Lugar de Culto', 'Iglesia', 'Iglesia/Catedral', 'Iglesia/Catedral', 'Templo', 'Salón del Reino', 'Mezquita', 'Templo (Mandir)', 'Templo (Vihara)', 'Templo, Altar'],
        ['Rituales', 'Oración, alabanza, comunión', 'Misa, eucaristía, confesión', 'Divina Liturgia', 'Sacramentos, bautismo por los muertos', 'Reuniones, predicación puerta a puerta', '5 oraciones diarias, ayuno, peregrinación', 'Puja, meditación, yoga', 'Meditación, mantras', 'Ofrendas a ancestros, incienso'],
        ['Símbolo', 'Cruz', 'Cruz con Cristo', 'Cruz (iconos)', 'Ángel Moroni', 'Torre de vigilancia', 'Luna y estrella', 'Om', 'Rueda del Dharma', 'Yin-Yang'],
        ['Restricciones', 'Sin restricciones', 'Ayuno en Cuaresma', 'Ayuno en Cuaresma', 'Sin alcohol, tabaco, café, té', 'Sin sangre, transfusiones', 'Halal, sin alcohol/cerdo', 'Vegetarianismo, vaca sagrada', 'Vegetarianismo (monjes)', 'Sin restricciones'],
        ['Seguidores', '~900 millones', '~1,300 millones', '~250 millones', '~17 millones', '~8 millones', '~1,900 millones', '~1,200 millones', '~500 millones', '~1,200 millones']
    ];

    const container = document.createElement('div');
    container.id = 'comparative-table-container';
    // Overlay container styles: fixed over map, responsive, high contrast with theme
    container.style.position = 'absolute';
    container.style.right = '20px';
    container.style.bottom = '80px';
    container.style.width = 'min(92%, 1000px)';
    container.style.maxWidth = '100%';
    container.style.overflowX = 'auto';
    container.style.overflowY = 'auto';
    container.style.maxHeight = '60vh';
    container.style.margin = '0';
    container.style.padding = '10px';
    container.style.borderRadius = '6px';
    container.style.zIndex = '99999';
    container.style.backdropFilter = 'blur(6px)';
    container.style.boxShadow = '0 6px 24px rgba(2,6,23,0.6)';
    // adapt background and text color to currentTheme
    if (currentTheme === 'dark') {
        container.style.background = 'rgba(10,14,22,0.88)';
        container.style.color = '#c42d2d';
        container.style.border = '1px solid rgba(255,255,255,0.04)';
    } else {
        container.style.background = 'rgba(69, 66, 66, 0.96)';
        container.style.color = '#0b1220';
        container.style.border = '1px solid rgba(0,0,0,0.06)';
    }

    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.fontSize = '13px';

    // header
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    columns.forEach((c, i) => {
        const th = document.createElement('th');
        th.textContent = c;
        th.style.border = '1px solid #ccc';
        th.style.padding = '6px 8px';
        th.style.background = i === 0 ? '#f7f7f7' : '#fafafa';
        th.style.position = 'sticky';
        th.style.top = '0';
        th.style.zIndex = '10';
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    rows.forEach(r => {
        const tr = document.createElement('tr');
        r.forEach((cell, idx) => {
            const td = document.createElement('td');
            td.textContent = cell;
            td.style.border = '1px solid #ddd';
            td.style.padding = '6px 8px';
            td.style.verticalAlign = 'top';
            if (idx === 0) td.style.fontWeight = '600';
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);

    // Añadir al body para que siempre sea visible (incluye vista 3D y 2D)
    // Si existe el contenedor del mapa se posiciona relativo para que el absolute funcione bien
    const mapEl = document.getElementById('map') || document.getElementById('mapbox-container');
    if (mapEl && getComputedStyle(mapEl).position === 'static') {
        mapEl.style.position = 'relative';
    }
    document.body.appendChild(container);
}

// Mostrar/ocultar cuadro comparativo al hacer clic en el botón
function toggleComparative() {
    try {
        let container = document.getElementById('comparative-table-container');
        if (container) {
            // alternar visibilidad
            container.style.display = container.style.display === 'none' ? '' : 'none';
            return;
        }
        // Si no existe, construir y mostrar
        buildComparativeTable();
    } catch (e) {
        console.warn('No se pudo generar/alternar el cuadro comparativo', e);
    }
}

// Nota: el cuadro comparativo se construirá al pedirlo mediante toggleComparative()



console.log('✅ Script cargado correctamente');
console.log('✅ OpenLayers disponible:', typeof ol !== 'undefined');
console.log('✅ Mapbox disponible:', typeof mapboxgl !== 'undefined');
console.log('✅ Países cargados para búsqueda:', countryList.length);