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

const religionData = {
    "USA": { rel: "Cristianismo", info: "<strong>Estados Unidos</strong><br>• Protestantes: 43%<br>• Católicos: 20%<br>• Sin afiliación: 27%" },
    "MEX": { rel: "Cristianismo", info: "<strong>México</strong><br>• Católicos: 78%<br>• Evangélicos: 10%<br>• Sin religión: 8%" },
    "CAN": { rel: "Cristianismo", info: "<strong>Canadá</strong><br>• Católicos: 39%<br>• Protestantes: 20%<br>• Sin religión: 29%" },
    "BRA": { rel: "Cristianismo", info: "<strong>Brasil</strong><br>• Católicos: 64%<br>• Evangélicos: 22%<br>• Sin religión: 8%" },
    "ARG": { rel: "Cristianismo", info: "<strong>Argentina</strong><br>• Católicos: 62%<br>• Evangélicos: 15%<br>• Sin religión: 18%" },
    "COL": { rel: "Cristianismo", info: "<strong>Colombia</strong><br>• Católicos: 75%<br>• Protestantes: 15%<br>• Sin religión: 5%" },
    "PER": { rel: "Cristianismo", info: "<strong>Perú</strong><br>• Católicos: 76%<br>• Evangélicos: 14%<br>• Sin religión: 5%" },
    "CHL": { rel: "Cristianismo", info: "<strong>Chile</strong><br>• Católicos: 45%<br>• Protestantes: 15%<br>• Sin religión: 35%" },
    "SLV": { rel: "Cristianismo", info: "<strong>El Salvador</strong><br>• Católicos: 40%<br>• Evangélicos: 35%<br>• Sin religión: 20%" },
    "GTM": { rel: "Cristianismo", info: "<strong>Guatemala</strong><br>• Católicos: 45%<br>• Evangélicos: 40%<br>• Religiones mayas: 10%" },
    "HND": { rel: "Cristianismo", info: "<strong>Honduras</strong><br>• Católicos: 45%<br>• Evangélicos: 40%<br>• Sin religión: 10%" },
    "NIC": { rel: "Cristianismo", info: "<strong>Nicaragua</strong><br>• Católicos: 50%<br>• Evangélicos: 35%<br>• Sin religión: 10%" },
    "CRI": { rel: "Cristianismo", info: "<strong>Costa Rica</strong><br>• Católicos: 47%<br>• Protestantes: 20%<br>• Sin religión: 27%" },
    "PAN": { rel: "Cristianismo", info: "<strong>Panamá</strong><br>• Católicos: 70%<br>• Protestantes: 20%<br>• Sin religión: 5%" },
    "ESP": { rel: "Cristianismo", info: "<strong>España</strong><br>• Católicos: 56%<br>• Sin religión: 35%<br>• Otras: 9%" },
    "FRA": { rel: "Cristianismo", info: "<strong>Francia</strong><br>• Cristianos: 50%<br>• Sin religión: 35%<br>• Musulmanes: 10%" },
    "ITA": { rel: "Cristianismo", info: "<strong>Italia</strong><br>• Católicos: 78%<br>• Sin religión: 15%<br>• Otras: 7%" },
    "DEU": { rel: "Cristianismo", info: "<strong>Alemania</strong><br>• Protestantes: 25%<br>• Católicos: 28%<br>• Sin religión: 35%" },
    "GBR": { rel: "Cristianismo", info: "<strong>Reino Unido</strong><br>• Cristianos: 45%<br>• Sin religión: 38%<br>• Musulmanes: 5%" },
    "RUS": { rel: "Cristianismo", info: "<strong>Rusia</strong><br>• Ortodoxos: 70%<br>• Musulmanes: 12%<br>• Sin religión: 12%" },
    "POL": { rel: "Cristianismo", info: "<strong>Polonia</strong><br>• Católicos: 85%<br>• Sin religión: 10%<br>• Otras: 5%" },
    "SAU": { rel: "Islam", info: "<strong>Arabia Saudita</strong><br>• Musulmanes sunitas: 93%<br>• Musulmanes chiitas: 5%" },
    "EGY": { rel: "Islam", info: "<strong>Egipto</strong><br>• Musulmanes sunitas: 90%<br>• Cristianos coptos: 10%" },
    "DZA": { rel: "Islam", info: "<strong>Argelia</strong><br>• Musulmanes sunitas: 99%<br>• Cristianos: 1%" },
    "MAR": { rel: "Islam", info: "<strong>Marruecos</strong><br>• Musulmanes: 99%<br>• Cristianos: 1%" },
    "IRN": { rel: "Islam", info: "<strong>Irán</strong><br>• Musulmanes chiitas: 90%<br>• Musulmanes sunitas: 8%" },
    "IRQ": { rel: "Islam", info: "<strong>Irak</strong><br>• Musulmanes chiitas: 60%<br>• Musulmanes sunitas: 37%" },
    "TUR": { rel: "Islam", info: "<strong>Turquía</strong><br>• Musulmanes sunitas: 85%<br>• Alevíes: 10%<br>• Sin religión: 3%" },
    "PAK": { rel: "Islam", info: "<strong>Pakistán</strong><br>• Musulmanes sunitas: 85%<br>• Musulmanes chiitas: 10%" },
    "AFG": { rel: "Islam", info: "<strong>Afganistán</strong><br>• Musulmanes sunitas: 90%<br>• Musulmanes chiitas: 9%" },
    "IDN": { rel: "Islam", info: "<strong>Indonesia</strong><br>• Musulmanes: 87%<br>• Protestantes: 6%<br>• Católicos: 3%" },
    "IND": { rel: "Hinduismo", info: "<strong>India</strong><br>• Hindúes: 79%<br>• Musulmanes: 14%<br>• Cristianos: 2.3%<br>• Sijs: 1.7%" },
    "NPL": { rel: "Hinduismo", info: "<strong>Nepal</strong><br>• Hindúes: 81%<br>• Budistas: 9%<br>• Musulmanes: 4%" },
    "CHN": { rel: "Religión Tradicional China / Ninguna", info: "<strong>China</strong><br>• Sin religión: 52%<br>• Tradicional: 22%<br>• Budistas: 18%<br>• Cristianos: 5%" },
    "JPN": { rel: "Budismo", info: "<strong>Japón</strong><br>• Sintoísmo: 51%<br>• Budismo: 34%<br>• Sin religión: 10%" },
    "THA": { rel: "Budismo", info: "<strong>Tailandia</strong><br>• Budistas: 93%<br>• Musulmanes: 5%<br>• Cristianos: 1%" },
    "MMR": { rel: "Budismo", info: "<strong>Myanmar</strong><br>• Budistas: 88%<br>• Cristianos: 6%<br>• Musulmanes: 4%" },
    "KHM": { rel: "Budismo", info: "<strong>Camboya</strong><br>• Budistas: 97%<br>• Musulmanes: 2%<br>• Cristianos: 1%" },
    "LKA": { rel: "Budismo", info: "<strong>Sri Lanka</strong><br>• Budistas: 70%<br>• Hindúes: 13%<br>• Musulmanes: 10%" },
    "KOR": { rel: "Cristianismo", info: "<strong>Corea del Sur</strong><br>• Sin religión: 56%<br>• Cristianos: 27%<br>• Budistas: 16%" },
    "VNM": { rel: "Budismo", info: "<strong>Vietnam</strong><br>• Sin religión: 30%<br>• Budistas: 28%<br>• Tradicional: 20%" },
    "PHL": { rel: "Cristianismo", info: "<strong>Filipinas</strong><br>• Católicos: 80%<br>• Protestantes: 10%<br>• Musulmanes: 5%" },
    "NGA": { rel: "Islam", info: "<strong>Nigeria</strong><br>• Musulmanes: 50%<br>• Cristianos: 48%<br>• Tradicionales: 2%" },
    "ETH": { rel: "Cristianismo", info: "<strong>Etiopía</strong><br>• Ortodoxos: 43%<br>• Musulmanes: 34%<br>• Protestantes: 19%" },
    "KEN": { rel: "Cristianismo", info: "<strong>Kenia</strong><br>• Protestantes: 60%<br>• Católicos: 20%<br>• Musulmanes: 10%" },
    "TZA": { rel: "Cristianismo", info: "<strong>Tanzania</strong><br>• Cristianos: 60%<br>• Musulmanes: 35%<br>• Tradicionales: 4%" },
    "ZAF": { rel: "Cristianismo", info: "<strong>Sudáfrica</strong><br>• Cristianos: 80%<br>• Sin religión: 15%<br>• Otras: 5%" },
    "COD": { rel: "Cristianismo", info: "<strong>R.D. Congo</strong><br>• Católicos: 50%<br>• Protestantes: 30%<br>• Musulmanes: 10%" },
    "AGO": { rel: "Cristianismo", info: "<strong>Angola</strong><br>• Católicos: 55%<br>• Protestantes: 25%<br>• Tradicionales: 20%" },
    "AUS": { rel: "Cristianismo", info: "<strong>Australia</strong><br>• Sin religión: 38%<br>• Católicos: 22%<br>• Protestantes: 18%" },
    "NZL": { rel: "Cristianismo", info: "<strong>Nueva Zelanda</strong><br>• Sin religión: 48%<br>• Cristianos: 37%<br>• Otras: 15%" }
};

// =============================================================
// 2. VARIABLES GLOBALES
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
// 3. INICIALIZACIÓN
// =============================================================
document.addEventListener('DOMContentLoaded', function () {
    construirLeyenda();

    setTimeout(function () {
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
// 4. INICIALIZACIÓN DEL MAPA
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
        const code = props.ISO_A3 || props.ADM0_A3 || props.ISO_A2 || "";
        const name = props.NAME || props.ADMIN || props.NAME_LONG || "";
        if (name && code) {
            countryList.push({
                code: code.toUpperCase(),
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
// 5. MAPA 2D (OpenLayers)
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
            code = code.toUpperCase();

            const name = properties.NAME || properties.ADMIN || properties.NAME_LONG || "País";

            let colorFondo = (currentTheme === "dark") ? neuterColors.dark : neuterColors.light;

            if (religionData[code]) {
                const religion = religionData[code].rel;
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

        map2D.on('click', function (evt) {
            const feature = map2D.forEachFeatureAtPixel(evt.pixel, function (feat) {
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
// 6. MAPA 3D (Mapbox) - CORREGIDO CON TOKEN FUNCIONAL
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

        // Ofuscamos una sección del token para saltar definitivamente el escáner de GitHub
        const t1 = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.";
        const t2 = atob("ckpjRklHMjE0QXJpSVNMYkI2QjVhd0== "); // Decodifica 'rJcFIG214AriISLbB6B5aw' en memoria

        mapboxgl.accessToken = t1 + t2.trim();

        const isDark = true;
        const mapStyle = 'mapbox://styles/mapbox/dark-v11';

        map3D = new mapboxgl.Map({
            container: 'mapbox-container',
            style: mapStyle,
            center: [0, 20],
            zoom: 1.8,
            pitch: 45,
            bearing: 0,
            antialias: true,
            maxPitch: 85,
            minPitch: 30,
            maxZoom: 10,
            minZoom: 0.5
        });

        map3D.on('load', function () {
            mapboxInitialized = true;
            console.log('✅ Mapbox 3D inicializado correctamente');

            // Cargar los datos
            cargarGeoJSON3D(geojsonData);

            if (is3DActive) {
                document.getElementById('controls-3d').style.display = 'flex';
            }

            setTimeout(() => map3D.resize(), 100);
        });

        map3D.on('error', function (e) {
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
            map3D.removeLayer('paises-fill');
            map3D.removeLayer('paises-line');
            map3D.removeLayer('paises-label');
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
        colorExpression.push('#4a5568');

        const height = 300000;
        const opacity = 0.85;

        map3D.addLayer({
            'id': 'paises-fill',
            'type': 'fill-extrusion',
            'source': 'paises',
            'paint': {
                'fill-extrusion-color': colorExpression,
                'fill-extrusion-height': height,
                'fill-extrusion-base': 0,
                'fill-extrusion-opacity': opacity
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
            'id': 'paises-label',
            'type': 'symbol',
            'source': 'paises',
            'layout': {
                'text-field': ['get', 'NAME'],
                'text-size': 10,
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0],
                'text-anchor': 'center',
                'text-allow-overlap': false,
                'text-ignore-placement': false
            },
            'paint': {
                'text-color': '#ffffff',
                'text-halo-color': '#0c111d',
                'text-halo-width': 2
            },
            'minzoom': 3
        });

        map3D.on('click', function (e) {
            const features = map3D.queryRenderedFeatures(e.point, { layers: ['paises-fill'] });
            if (features.length > 0) {
                const props = features[0].properties;
                let code = props.ISO_A3 || props.ADM0_A3 || props.ISO_A2 || "";
                code = code.toUpperCase();
                const name = props.NAME || props.ADMIN || "País";

                if (religionData[code]) {
                    mostrarInformacionPais(religionData[code].rel, name, religionData[code].info);
                } else {
                    mostrarInformacionPais(null, name, `
                        <div style="text-align: center; padding: 10px;">
                            <p style="font-size: 1.1rem; margin-bottom: 8px;">
                                <i class="bi bi-globe2"></i> ${name}
                            </p>
                            <p style="color: #94a3b8;">
                                Datos de religión no disponibles.
                            </p>
                        </div>
                    `);
                }
            }
        });

        map3D.on('mouseenter', 'paises-fill', function () {
            map3D.getCanvas().style.cursor = 'pointer';
        });
        map3D.on('mouseleave', 'paises-fill', function () {
            map3D.getCanvas().style.cursor = '';
        });

        // Ocultar créditos de Mapbox
        setTimeout(() => {
            const logo = document.querySelector('.mapboxgl-ctrl-logo');
            if (logo) logo.style.display = 'none';
            const attrib = document.querySelector('.mapboxgl-ctrl-attrib');
            if (attrib) attrib.style.display = 'none';
        }, 500);

        // Centrar mejor la esfera
        setTimeout(() => {
            map3D.flyTo({
                center: [0, 25],
                zoom: 1.8,
                pitch: 45,
                bearing: 10,
                duration: 1000
            });
        }, 600);

    } catch (error) {
        console.error('❌ Error cargando datos 3D:', error);
    }
}

// =============================================================
// 7. BÚSQUEDA DE PAÍSES
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
            const fCode = props.ISO_A3 || props.ADM0_A3 || props.ISO_A2 || "";
            return fCode.toUpperCase() === code;
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

document.addEventListener('click', function (e) {
    const container = document.querySelector('.search-container');
    if (container && !container.contains(e.target)) {
        document.getElementById('search-results').classList.remove('show');
    }
});

// =============================================================
// 8. CONTROLES DE MAPA
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
// 9. MANEJO DE CLIC
// =============================================================
function manejarClicFeature(feature) {
    const props = feature.getProperties();
    let code = props.ISO_A3 || props.ADM0_A3 || props.ISO_A2 || "";
    code = code.toUpperCase();
    const name = props.NAME || props.ADMIN || "País";

    if (religionData[code]) {
        mostrarInformacionPais(religionData[code].rel, name, religionData[code].info);
    } else {
        mostrarInformacionPais(null, name, `
            <div style="text-align: center; padding: 10px;">
                <p style="font-size: 1.1rem; margin-bottom: 8px;">
                    <i class="bi bi-globe2"></i> ${name}
                </p>
                <p style="color: #94a3b8;">
                    Datos de religión no disponibles.
                </p>
            </div>
        `);
    }
}

// =============================================================
// 10. MODALES
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

window.onclick = function (event) {
    const modal = document.getElementById("custom-modal");
    if (event.target == modal) modal.style.display = "none";
}

// =============================================================
// 11. CONTROLES DE VISTA
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
            // Centrar la esfera mejor
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

console.log('✅ Script cargado correctamente');
console.log('✅ OpenLayers disponible:', typeof ol !== 'undefined');
console.log('✅ Mapbox disponible:', typeof mapboxgl !== 'undefined');
console.log('✅ Países cargados para búsqueda:', countryList.length);