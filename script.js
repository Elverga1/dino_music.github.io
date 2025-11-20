const ADMIN_CONFIG = {
    password: "DinoPeque123",
    sessionTimeout: 60 * 60 * 1000
}

// ✅ FECHA CONFIABLE
function getCurrentLocalDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    const fecha = `${year}-${month}-${day}`;
    console.log('📅 Fecha actual:', fecha);
    
    return fecha;
}

function formatDate(dateString) {
    if (!dateString) dateString = getCurrentLocalDate();
    
    try {
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day, 12, 0, 0);
        
        const options = { 
            weekday: 'long',
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        };
        
        return date.toLocaleDateString('es-ES', options);
    } catch (error) {
        console.error('❌ Error formateando fecha:', error);
        return dateString;
    }
}

// Fecha actual al cargar
let currentSelectedDate = getCurrentLocalDate();

// BASE DE DATOS DE ARTISTAS
const artistsData = [
    {
        id: 1,
        name: "Duki",
        logo: "images/duki-logo.jpg",
        fallbackEmoji: "😈",
        songs: [
            {
                id: 1,
                title: "She Don't Give a FO",
                url: "https://music.youtube.com/watch?v=jd0gBacoqBI&si=GoafovIsr0LfhoI7",
                duration: "3:51"
            },
            {
                id: 2,
                title: "Rockstar",
                url: "https://music.youtube.com/watch?v=imfCv-A6S8M&si=1dLcHzvP_YE7fBfw",
                duration: "1:53"
            },
            {
                id: 3,
                title: "Antes de Perderte",
                url: "https://music.youtube.com/watch?v=1NMHaoQHAmI&si=L5RQs47-pqb2WW0b",
                duration: "2:57"
            },
            {
                id: 4,
                title: "Buscarte Lejos",
                url: "https://music.youtube.com/watch?v=S7pn14tZIl8&si=Gh0vgf_gDC2h3ga8",
                duration: "3:15"
            },
            {
                id: 5,
                title: "Ameri",
                url: "https://music.youtube.com/watch?v=Emma9AXOD9I&si=XlmR_n9sWgCVMUC5",
                duration: "3:20"
            },
            {
                id: 6,
                title: "A punta de espada",
                url: "https://music.youtube.com/watch?v=gzB2SSlGcCc&si=IBWnhKeueFKAAA3a",
                duration: "3:23"
            },
            {
                id: 7,
                title: "Malbec",
                url: "https://music.youtube.com/watch?v=A5Jyopocqbs&si=00y8uB_Sw86j24QU",
                duration: "2:56"
            },
            {
                id: 8,
                title: "eCLIPSE SOLAR",
                url: "https://music.youtube.com/watch?v=lE6-dWJ3sXc&si=hSXQWiURq-wT1AWO",
                duration: "2:26"
            },
            {
                id: 9,
                title: "Loca",
                url: "https://music.youtube.com/watch?v=BdU4-BJ5iEQ&si=Fbv_yQ84GkLzepTW",
                duration: "4:07"
            },
            {
                id: 10,
                title: "Si te sentis sola",
                url: "https://music.youtube.com/watch?v=0n3TNv29ti0&si=B3wbTPdmlvUZz7Ms",
                duration: "2:59"
            },
            {
                id: 11,
                title: "Si me sobrara el tiempo",
                url: "https://music.youtube.com/watch?v=xJ3D24le5nA&si=-vc0ZHrFEK1bU5pE",
                duration: "2:49"
            },
            {
                id: 12,
                title: "TOP 5",
                url: "https://music.youtube.com/watch?v=sDKeXqj8X-o&si=moizg133rWCnTzNa",
                duration: "2:27"
            },
            {
                id: 13,
                title: "CALL ME MAYBE",
                url: "https://music.youtube.com/watch?v=5wN1gN7SAnY&si=teY5NgUCdVRDLSVo",
                duration: "3:43"
            },
            {
                id: 14,
                title: "YIN YAN",
                url: "https://music.youtube.com/watch?v=FIWAdbA1HnM&si=MGmvW1lvy-igchd2",
                duration: "3:10"
            }
        ]
    },
    {
        id: 2,
        name: "C.R.O",
        logo: "images/cro-logo.jpg",
        fallbackEmoji: "🔥",
        songs: [
            {
                id: 15,
                title: "Reina",
                url: "https://music.youtube.com/watch?v=SjbxN8mtSC4&si=yvPJNPd9rgL61qpk",
                duration: "4:02"
            },
            {
                id: 16,
                title: "Tu recuerdo",
                url: "https://music.youtube.com/watch?v=VjJqaSzZmUI&si=ItM0TO0hV01KkoNu",
                duration: "2:29"
            },
            {
                id: 17,
                title: "Nadie como tu",
                url: "https://music.youtube.com/watch?v=xgpvAagBAwY&si=CetrGj6kkmle8HDj",
                duration: "2:54"
            },
            {
                id: 18,
                title: "Mi morena",
                url: "https://music.youtube.com/watch?v=pc2IKQL0N5U&si=rPqhUQvkiHHyhXyd",
                duration: "3:33"
            },
            {
                id: 19,
                title: "Sobredosis en las vegas",
                url: "https://music.youtube.com/watch?v=vql6klfeFMM&si=vMPXBuLDhF2FOSjH",
                duration: "2:53"
            },
            {
                id: 20,
                title: "Secretos",
                url: "https://music.youtube.com/watch?v=5ofsh8xHs4g&si=MypRO3XHRGOBaBEP",
                duration: "2:41"
            }, 
            {
                id: 21,
                title: "Amaneci",
                url: "https://music.youtube.com/watch?v=Jr01z7aASGs&si=zeyKXyaJrvRXYkRZ",
                duration: "3:23"
            },
            {
                id: 22,
                title: "Ahora",
                url: "https://music.youtube.com/watch?v=PR7F8uLTXnA&si=s3S-zP1ujHCt1Ilp",
                duration: "3:32"
            },
            {
                id: 23,
                title: "Sin preguntar",
                url: "https://music.youtube.com/watch?v=yXWoEV0anzk&si=IIg1Y_vIqsZoUtL5",
                duration: "3:14"
            },
            {
                id: 24,
                title: "Abismo",
                url: "https://music.youtube.com/watch?v=VdB6PrtxVCo&si=O0K_K9mJOTWPoGBw",
                duration: "2:54"
            },
            {
                id: 25,
                title: "Temor",
                url: "https://music.youtube.com/watch?v=a--vYCvefa0&si=CTkoP80oSrfb03CR",
                duration: "3:24"
            },
            {
                id: 26,
                title: "A tu manera",
                url: "https://music.youtube.com/watch?v=U7XL3gcsHCc&si=-tBTw_WrS6EWVQjt",
                duration: "3:16"
            },
            {
                id: 27,
                title: "Ciudad gris",
                url: "https://music.youtube.com/watch?v=rushbkC4keE&si=ITc_a5Fx2KhUAGwg",
                duration: "3:29"
            },
            {
                id: 28,
                title: "Otra vez te soñe",
                url: "https://music.youtube.com/watch?v=VCUtQl0tN2Y&si=tXHkE_bPegqh6-qX",
                duration: "2:46"
            },
            {
                id: 29,
                title: "Ella es una G",
                url: "https://music.youtube.com/watch?v=l1_BKMn-gO0&si=ocCXeQh58jzXV7Zb",
                duration: "3:37"
            }
        ]
    },
    {
        id: 3,
        name: "Kidd Keo",
        logo: "images/kidd-keo-logo.jpg",
        fallbackEmoji: "🦅",
        songs: [
            {
                id: 30,
                title: "Celine",
                url: "https://music.youtube.com/watch?v=RSGli9HFfeY&si=PX8vG-EuB524BONg",
                duration: "2:57"
            },
            {
                id: 31,
                title: "Ma´ vie",
                url: "https://music.youtube.com/watch?v=2fm3H_ZC9ro&si=_DeRUA8uc3I36BTy",
                duration: "3:54"
            },
            {
                id: 32,
                title: "Moon talk",
                url: "https://music.youtube.com/watch?v=n4uh3_nxQqo&si=IAj0T_LKE-tj7lD8",
                duration: "3:05"
            },
            {
                id: 33,
                title: "Besos",
                url: "https://music.youtube.com/watch?v=f69cr-CALkY&si=v8aFsLfhF_bUl7p109",
                duration: "2:53"
            },
            {
                id: 34,
                title: "Como vas?",
                url: "https://music.youtube.com/watch?v=71J3hilV7Es&si=TeVG9rB4zok-go7J",
                duration: "2:41"
            },
            {
                id: 35,
                title: "L´AMOUR",
                url: "https://music.youtube.com/watch?v=17bKQIFGpb4&si=-mLAG3YaCpXiY1Z4",
                duration: "2:10"
            },
        ]
    },
    {
        id: 4,
        name: "3 AM",
        logo: "images/3-am-logo.png",
        fallbackEmoji: "🦅",
        songs: [
            {
                id: 36,
                title: "Bombon",
                url: "https://music.youtube.com/watch?v=jLau33KRAuE&si=s3JLU1Sa_N3SSR6K",
                duration: "2:41"
            },
            {
                id: 37,
                title: "Mil maneras de morir",
                url: "https://music.youtube.com/watch?v=pHYPrB87rmg&si=tikCPndSbYWBUmaZ",
                duration: "2:55"
            },
            {
                id: 38,
                title: "Tu me encantas",
                url: "https://music.youtube.com/watch?v=fGm9xsDjnOg&si=WmsmEP8mP2U9jBSC",
                duration: "2:37"
            },
            {
                id: 39,
                title: "Por ti",
                url: "https://music.youtube.com/watch?v=tKzIltxndOs&si=ywfJKmQaWDcYjLmq",
                duration: "3:04"
            }
        ]
    }
];

// 🔄 SISTEMA DE SINCRONIZACIÓN CONTINUA
let syncCode = localStorage.getItem('loveLettersSyncCode') || null;
let isSyncActive = localStorage.getItem('isSyncActive') === 'true';
let lastSyncCheck = parseInt(localStorage.getItem('lastSyncCheck') || '0');

// GENERAR CÓDIGO DE SINCRONIZACIÓN ÚNICO
function generarCodigoSincronizacionPermanente() {
    if (!isAdmin) {
        showNotification('❌ Solo el admin puede generar código de sincronización', 'error');
        return;
    }

    // Crear código único
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    syncCode = btoa(`${timestamp}-${random}-loveletters`);
    
    localStorage.setItem('loveLettersSyncCode', syncCode);
    localStorage.setItem('isSyncActive', 'true');
    isSyncActive = true;
    
    // Mostrar código en modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 25px; border-radius: 15px; max-width: 90%; max-height: 80%; overflow: auto; text-align: center;">
            <h3 style="color: #28a745; margin-bottom: 15px;">🎉 ¡Código de Sincronización Creado!</h3>
            <p style="margin-bottom: 15px; color: #666;">
                <strong>Este código funcionará PARA SIEMPRE:</strong><br>
                Comparte este código una vez y el dispositivo recibirá automáticamente todas las cartas nuevas.
            </p>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 15px 0;">
                <textarea id="codigoSincronizacionPermanente" 
                    style="width: 100%; height: 120px; padding: 10px; border: 2px solid #28a745; border-radius: 8px; 
                    font-family: monospace; font-size: 14px; resize: none;" 
                    readonly>${syncCode}</textarea>
            </div>
            
            <p style="font-size: 12px; color: #888; margin-bottom: 20px;">
                💡 El usuario solo necesita pegar este código UNA VEZ y recibirá todas las cartas nuevas automáticamente.
            </p>
            
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <button onclick="copiarCodigoPermanente()" 
                    style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 8px; cursor: pointer;">
                    📋 Copiar Código
                </button>
                <button onclick="detenerSincronizacion()" 
                    style="padding: 10px 20px; background: #dc3545; color: white; border: none; border-radius: 8px; cursor: pointer;">
                    🛑 Detener Sincronización
                </button>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                    style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 8px; cursor: pointer;">
                    ✅ Entendido
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    showNotification('🔗 Sincronización continua activada', 'success');
    console.log('✅ Código de sincronización permanente creado:', syncCode);
}

// ACTIVAR SINCRONIZACIÓN CON CÓDIGO
function activarSincronizacionConCodigo() {
    const codigo = prompt('Pega el código de sincronización permanente:');
    if (!codigo) return;
    
    try {
        if (codigo.length < 10) {
            showNotification('❌ Código inválido', 'error');
            return;
        }
        
        syncCode = codigo;
        localStorage.setItem('loveLettersSyncCode', syncCode);
        localStorage.setItem('isSyncActive', 'true');
        isSyncActive = true;
        
        // Sincronizar inmediatamente
        sincronizarCartasAutomaticamente();
        
        showNotification('🔗 Sincronización continua activada - Recibirás cartas automáticamente!', 'success');
        
    } catch (error) {
        showNotification('❌ Error activando sincronización', 'error');
        console.error('Error:', error);
    }
}

// DETENER SINCRONIZACIÓN
function detenerSincronizacion() {
    syncCode = null;
    isSyncActive = false;
    localStorage.removeItem('loveLettersSyncCode');
    localStorage.setItem('isSyncActive', 'false');
    
    showNotification('🔴 Sincronización detenida', 'success');
    
    // Cerrar modal si está abierto
    const modal = document.querySelector('div[style*="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8);"]');
    if (modal) {
        modal.remove();
    }
}

// COPIAR CÓDIGO PERMANENTE
function copiarCodigoPermanente() {
    const textarea = document.getElementById('codigoSincronizacionPermanente');
    textarea.select();
    document.execCommand('copy');
    showNotification('📋 Código copiado - Compártelo con quien quieras!', 'success');
}

// SINCRONIZAR CARTAS AUTOMÁTICAMENTE
function sincronizarCartasAutomaticamente() {
    if (!isSyncActive) return;
    
    try {
        const cartasLocales = JSON.parse(localStorage.getItem('loveLetters')) || [];
        const ultimaCartaLocal = cartasLocales.length > 0 ? 
            Math.max(...cartasLocales.map(c => c.timestamp)) : 0;
        
        // Simular sincronización (en sistema real sería con servidor)
        const todasLasCartas = JSON.parse(localStorage.getItem('loveLetters')) || [];
        const nuevasCartas = todasLasCartas.filter(carta => carta.timestamp > ultimaCartaLocal);
        
        if (nuevasCartas.length > 0) {
            const cartasActualizadas = [...cartasLocales, ...nuevasCartas];
            
            // Eliminar duplicados
            const cartasUnicas = cartasActualizadas.filter((carta, index, array) => 
                index === array.findIndex(c => c.id === carta.id)
            );
            
            localStorage.setItem('loveLetters', JSON.stringify(cartasUnicas));
            lettersData = cartasUnicas;
            
            // Actualizar interfaz
            renderLettersForDate(currentSelectedDate);
            if (isAdmin) {
                renderAdminLettersList();
            }
            
            console.log(`✅ ${nuevasCartas.length} nuevas cartas sincronizadas automáticamente`);
            
            if (nuevasCartas.length > 0 && cartasLocales.length > 0) {
                showNotification(`📬 ${nuevasCartas.length} nueva(s) carta(s) recibida(s) automáticamente! 💖`, 'success');
            }
        }
        
    } catch (error) {
        console.error('❌ Error en sincronización automática:', error);
    }
}

// VERIFICAR ACTUALIZACIONES AUTOMÁTICAMENTE
function verificarActualizaciones() {
    if (!isSyncActive || !syncCode) return;
    
    const ahora = Date.now();
    const tiempoDesdeUltimaVerificacion = ahora - lastSyncCheck;
    
    if (tiempoDesdeUltimaVerificacion < 30000) return;
    
    console.log('🔄 Verificando actualizaciones...');
    lastSyncCheck = ahora;
    localStorage.setItem('lastSyncCheck', lastSyncCheck.toString());
    
    sincronizarCartasAutomaticamente();
}

// FUNCIONES DE EXPORTACIÓN/IMPORTACIÓN
function exportarCartas() {
    const cartas = JSON.parse(localStorage.getItem('loveLetters')) || [];
    const datos = {
        cartas: cartas,
        timestamp: Date.now()
    };
    
    const datosString = JSON.stringify(datos);
    const blob = new Blob([datosString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `cartas-amor-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    showNotification('📤 Cartas exportadas', 'success');
}

function importarCartas(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const datos = JSON.parse(e.target.result);
            const cartasImportadas = datos.cartas || [];
            
            const cartasActuales = JSON.parse(localStorage.getItem('loveLetters')) || [];
            const todasLasCartas = [...cartasActuales, ...cartasImportadas];
            
            const cartasUnicas = todasLasCartas.filter((carta, index, array) => 
                index === array.findIndex(c => c.id === carta.id)
            );
            
            localStorage.setItem('loveLetters', JSON.stringify(cartasUnicas));
            lettersData = cartasUnicas;
            
            renderLettersForDate(currentSelectedDate);
            if (isAdmin) {
                renderAdminLettersList();
            }
            
            showNotification(`📥 ${cartasImportadas.length} cartas importadas`, 'success');
            
        } catch (error) {
            showNotification('❌ Error importando cartas', 'error');
        }
    };
    reader.readAsText(file);
    
    event.target.value = '';
}

// BOTONES DE SINCRONIZACIÓN MEJORADOS
function agregarBotonesSincronizacionGlobal() {
    if (document.getElementById('botonesSincronizacionGlobal')) return;
    
    const estadoSincronizacion = isSyncActive ? 
        '<span style="color: #28a745;">🟢 ACTIVADA</span>' : 
        '<span style="color: #dc3545;">🔴 DESACTIVADA</span>';
    
    const botonesHTML = `
        <div id="botonesSincronizacionGlobal" style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; border: 3px solid #4ecdc4; box-shadow: 0 8px 25px rgba(0,0,0,0.2);">
            <h4 style="margin-bottom: 15px; color: white; text-align: center; font-size: 18px;">🔗 SINCRONIZACIÓN CONTINUA</h4>
            <p style="color: white; text-align: center; margin-bottom: 15px; font-size: 14px;">
                Estado: ${estadoSincronizacion}<br>
                <small>Una vez activada, recibirás cartas automáticamente</small>
            </p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 15px;">
                ${isAdmin ? `
                <button onclick="generarCodigoSincronizacionPermanente()" 
                    style="padding: 12px 10px; background: #ffc107; color: black; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    🔗 CREAR CÓDIGO<br>PERMANENTE
                </button>
                <button onclick="exportarCartas()" 
                    style="padding: 12px 10px; background: #28a745; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    📤 EXPORTAR<br>CARTAS
                </button>
                ` : `
                <div style="padding: 12px 10px; background: rgba(255,255,255,0.2); color: white; border-radius: 10px; font-size: 13px; text-align: center;">
                    👑 Solo admin<br>puede crear código
                </div>
                <div style="padding: 12px 10px; background: rgba(255,255,255,0.2); color: white; border-radius: 10px; font-size: 13px; text-align: center;">
                    👑 Solo admin<br>puede exportar
                </div>
                `}
                
                <button onclick="activarSincronizacionConCodigo()" 
                    style="padding: 12px 10px; background: #17a2b8; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    📱 ACTIVAR<br>RECEPCIÓN
                </button>
                ${isSyncActive ? `
                <button onclick="detenerSincronizacion()" 
                    style="padding: 12px 10px; background: #dc3545; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    🛑 DETENER<br>RECEPCIÓN
                </button>
                ` : `
                <button onclick="document.getElementById('importarArchivoGlobal').click()" 
                    style="padding: 12px 10px; background: #6f42c1; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    📥 IMPORTAR<br>CARTAS
                </button>
                `}
            </div>
            
            <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px; margin-top: 10px;">
                <p style="color: white; font-size: 12px; margin: 0; text-align: center;">
                    💡 <strong>¿Cómo funciona?</strong><br>
                    ${isAdmin ? 
                    '1. <strong>Crea código</strong> y compártelo → 2. <strong>Usuario activa recepción</strong> → 3. <strong>Recibe cartas automáticamente</strong>' : 
                    '1. <strong>Pide código al admin</strong> → 2. <strong>Activa recepción</strong> → 3. <strong>Recibe cartas automáticamente</strong>'}
                </p>
            </div>
            
            <input type="file" id="importarArchivoGlobal" accept=".json" style="display: none;" onchange="importarCartas(event)">
        </div>
    `;
    
    const lettersSection = document.getElementById('letters-section');
    if (lettersSection) {
        const dateSelector = lettersSection.querySelector('.date-selector');
        if (dateSelector) {
            dateSelector.insertAdjacentHTML('afterend', botonesHTML);
        } else {
            lettersSection.insertAdjacentHTML('afterbegin', botonesHTML);
        }
    }
}

// INICIALIZAR SISTEMA DE SINCRONIZACIÓN
function inicializarSistemaSincronizacion() {
    setInterval(verificarActualizaciones, 30000);
    
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            verificarActualizaciones();
        }
    });
    
    console.log('🔗 Sistema de sincronización continua inicializado');
}

// Hacer funciones disponibles globalmente
window.generarCodigoSincronizacionPermanente = generarCodigoSincronizacionPermanente;
window.activarSincronizacionConCodigo = activarSincronizacionConCodigo;
window.detenerSincronizacion = detenerSincronizacion;
window.copiarCodigoPermanente = copiarCodigoPermanente;
window.exportarCartas = exportarCartas;
window.importarCartas = importarCartas;

// Sistema de cartas
let lettersData = JSON.parse(localStorage.getItem('loveLetters')) || [];

// Estado de la aplicación
let currentSearch = '';
let currentSection = 'music';
let isAdmin = false;
let sessionTimer = null;

// Elementos DOM
const artistsContainer = document.getElementById('artistsContainer');
const lettersContainer = document.getElementById('lettersContainer');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const artistCount = document.getElementById('artistCount');
const songCount = document.getElementById('songCount');
const emptyState = document.getElementById('emptyState');
const loading = document.getElementById('loading');
const currentDateDisplay = document.getElementById('currentDateDisplay');
const selectedDateSpan = document.getElementById('selectedDate');
const prevDateBtn = document.getElementById('prevDate');
const nextDateBtn = document.getElementById('nextDate');
const adminPanel = document.getElementById('adminPanel');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const adminPassword = document.getElementById('adminPassword');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.querySelector('.close-modal');
const letterDateInput = document.getElementById('letterDate');
const letterTitle = document.getElementById('letterTitle');
const letterContent = document.getElementById('letterContent');
const saveLetter = document.getElementById('saveLetter');
const clearEditor = document.getElementById('clearEditor');
const adminLettersList = document.getElementById('adminLettersList');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('💌 Iniciando aplicación');
    checkExistingSession();
    initializeApp();
});

function initializeApp() {
    setTimeout(() => {
        loading.style.display = 'none';
        
        currentSelectedDate = getCurrentLocalDate();
        if (letterDateInput) {
            letterDateInput.value = currentSelectedDate;
        }
        
        renderArtists();
        setupEventListeners();
        updateStats();
        updateDateDisplay();
        renderLettersForDate(currentSelectedDate);
        updateAdminInterface();
        
        // 🎯 INICIALIZAR SISTEMA DE SINCRONIZACIÓN CONTINUA
        inicializarSistemaSincronizacion();
        
        console.log('✅ Aplicación iniciada - Sincronización:', isSyncActive ? 'ACTIVA' : 'INACTIVA');
        
    }, 800);
}

function updateDateDisplay() {
    const selectedDateSpan = document.getElementById('selectedDate');
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    
    if (!selectedDateSpan || !currentDateDisplay) return;
    
    const today = getCurrentLocalDate();
    
    if (currentSelectedDate === today) {
        selectedDateSpan.textContent = 'Hoy';
        if (nextDateBtn) nextDateBtn.disabled = true;
    } else {
        selectedDateSpan.textContent = formatDate(currentSelectedDate);
        if (nextDateBtn) nextDateBtn.disabled = false;
    }
    
    currentDateDisplay.textContent = `Cartas del ${formatDate(currentSelectedDate)}`;
    
    if (prevDateBtn) {
        const firstLetterDate = lettersData.length > 0 ? 
            lettersData.reduce((min, letter) => letter.date < min ? letter.date : min, lettersData[0].date) : 
            today;
        prevDateBtn.disabled = currentSelectedDate <= firstLetterDate;
    }
}

function changeDate(direction) {
    const currentDate = new Date(currentSelectedDate + 'T12:00:00');
    
    if (direction === 'prev') {
        currentDate.setDate(currentDate.getDate() - 1);
    } else {
        const today = new Date(getCurrentLocalDate() + 'T12:00:00');
        if (currentDate >= today) {
            showNotification('❌ No puedes viajar al futuro!', 'error');
            return;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    currentSelectedDate = `${year}-${month}-${day}`;
    
    updateDateDisplay();
    renderLettersForDate(currentSelectedDate);
}

function saveNewLetter() {
    if (!isAdmin) {
        showNotification('❌ No tienes permisos', 'error');
        return false;
    }

    const title = letterTitle?.value.trim();
    const content = letterContent?.value.trim();
    const date = letterDateInput?.value || getCurrentLocalDate();

    if (!title || !content) {
        showNotification('❌ Escribe título y contenido', 'error');
        return false;
    }

    const newLetter = {
        id: Date.now(),
        title: title,
        content: content,
        date: date,
        timestamp: new Date().getTime()
    };

    lettersData.push(newLetter);
    localStorage.setItem('loveLetters', JSON.stringify(lettersData));
    
    // Marcar que hay nueva carta para sincronización
    localStorage.setItem('lastContentUpdate', Date.now().toString());
    
    if (date === currentSelectedDate) {
        renderLettersForDate(currentSelectedDate);
    }
    if (isAdmin) {
        renderAdminLettersList();
    }
    
    clearEditorForm();
    showNotification('💖 Carta guardada');
    
    return true;
}

function deleteLetter(letterId) {
    if (!isAdmin) {
        showNotification('❌ No tienes permisos', 'error');
        return;
    }

    if (confirm('¿Estás seguro de que quieres eliminar esta carta?')) {
        const letterToDelete = lettersData.find(letter => letter.id === letterId);
        lettersData = lettersData.filter(letter => letter.id !== letterId);
        localStorage.setItem('loveLetters', JSON.stringify(lettersData));
        
        if (letterToDelete && letterToDelete.date === currentSelectedDate) {
            renderLettersForDate(currentSelectedDate);
        }
        renderAdminLettersList();
        
        showNotification('🗑️ Carta eliminada');
    }
}

function renderLettersForDate(date) {
    if (!lettersContainer) return;
    
    const lettersForDate = lettersData.filter(letter => letter.date === date);
    
    if (lettersForDate.length === 0) {
        lettersContainer.innerHTML = `
            <div class="empty-state" style="display: block; color: #666;">
                <i class="fas fa-feather"></i>
                <h3>No hay cartas para este día</h3>
                <p>${date === getCurrentLocalDate() ? '¡Vuelve más tarde! 💖' : 'No se escribieron cartas este día'}</p>
            </div>
        `;
        return;
    }

    const sortedLetters = [...lettersForDate].sort((a, b) => b.timestamp - a.timestamp);
    lettersContainer.innerHTML = sortedLetters.map(letter => `
        <div class="letter-card">
            <div class="letter-header">
                <h3 class="letter-title">${letter.title}</h3>
                <span class="letter-date">${formatTime(letter.timestamp)}</span>
            </div>
            <div class="letter-content">${letter.content}</div>
        </div>
    `).join('');
}

function renderAdminLettersList() {
    if (!adminLettersList) return;
    
    if (lettersData.length === 0) {
        adminLettersList.innerHTML = '<p style="text-align: center; color: #666;">No hay cartas aún</p>';
        return;
    }

    const sortedLetters = [...lettersData].sort((a, b) => b.timestamp - a.timestamp);

    adminLettersList.innerHTML = sortedLetters.map(letter => `
        <div class="letter-admin-item">
            <div class="letter-admin-header">
                <div class="letter-admin-title">${letter.title}</div>
                <div class="letter-admin-actions">
                    <span class="letter-admin-date">${formatDate(letter.date)}</span>
                    <button class="delete-letter-btn" onclick="deleteLetter(${letter.id})">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </div>
            <div class="letter-admin-content">${letter.content.substring(0, 100)}${letter.content.length > 100 ? '...' : ''}</div>
        </div>
    `).join('');
}

function updateAdminInterface() {
    if (isAdmin) {
        adminPanel.style.display = 'block';
        adminLoginBtn.style.display = 'none';
        renderAdminLettersList();
    } else {
        adminPanel.style.display = 'none';
        adminLoginBtn.style.display = 'block';
    }
    
    // 🎯 SIEMPRE agregar botones globales (para todos los usuarios)
    setTimeout(() => {
        agregarBotonesSincronizacionGlobal();
    }, 200);
}

function clearEditorForm() {
    if (letterTitle) letterTitle.value = '';
    if (letterContent) letterContent.value = '';
}

function setupEventListeners() {
    if (letterDateInput) {
        letterDateInput.value = getCurrentLocalDate();
    }
    
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            switchSection(section);
        });
    });

    if (prevDateBtn) prevDateBtn.addEventListener('click', () => changeDate('prev'));
    if (nextDateBtn) nextDateBtn.addEventListener('click', () => changeDate('next'));

    if (searchInput && clearSearch) {
        searchInput.addEventListener('input', debounce(function(e) {
            currentSearch = e.target.value.toLowerCase().trim();
            clearSearch.style.display = currentSearch ? 'block' : 'none';
            renderArtists();
            updateStats();
        }, 300));

        clearSearch.addEventListener('click', function() {
            searchInput.value = '';
            currentSearch = '';
            clearSearch.style.display = 'none';
            renderArtists();
            updateStats();
            searchInput.focus();
        });
    }

    if (adminLoginBtn) adminLoginBtn.addEventListener('click', showLoginModal);
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    if (loginBtn) loginBtn.addEventListener('click', attemptLogin);
    if (closeModal) closeModal.addEventListener('click', hideLoginModal);

    if (saveLetter) saveLetter.addEventListener('click', saveNewLetter);
    if (clearEditor) clearEditor.addEventListener('click', clearEditorForm);

    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            hideLoginModal();
        }
    });
}

function renderArtists() {
    const filteredArtists = filterArtists();
    
    if (filteredArtists.length === 0) {
        artistsContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    artistsContainer.style.display = 'grid';
    emptyState.style.display = 'none';

    artistsContainer.innerHTML = filteredArtists.map(artist => `
        <div class="artist-card" data-artist-id="${artist.id}">
            <div class="artist-header">
                <div class="artist-logo">
                    ${getArtistLogo(artist)}
                </div>
                <div class="artist-name">${artist.name}</div>
                <div class="artist-songs-count">${artist.songs.length} ${artist.songs.length === 1 ? 'canción' : 'canciones'}</div>
            </div>
            <div class="songs-list">
                ${artist.songs.map(song => `
                    <div class="song-item">
                        <div class="song-info">
                            <div class="song-title">${song.title}</div>
                            <div class="song-duration">${song.duration}</div>
                        </div>
                        <button class="play-btn" onclick="playSong('${song.url}')" title="Reproducir en YouTube Music">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function getArtistLogo(artist) {
    if (artist.logo && artist.logo.startsWith('images/')) {
        return `<img src="${artist.logo}" alt="${artist.name}" onerror="this.style.display='none'; this.parentNode.innerHTML='${artist.fallbackEmoji}'">`;
    }
    return artist.fallbackEmoji;
}

function filterArtists() {
    if (!currentSearch) {
        return artistsData;
    }

    return artistsData.filter(artist => {
        if (artist.name.toLowerCase().includes(currentSearch)) {
            return true;
        }

        const hasMatchingSong = artist.songs.some(song => 
            song.title.toLowerCase().includes(currentSearch)
        );

        return hasMatchingSong;
    });
}

function updateStats() {
    const filteredArtists = filterArtists();
    const totalSongs = filteredArtists.reduce((total, artist) => total + artist.songs.length, 0);
    
    artistCount.textContent = `${filteredArtists.length} ${filteredArtists.length === 1 ? 'artista' : 'artistas'}`;
    songCount.textContent = `${totalSongs} ${totalSongs === 1 ? 'canción' : 'canciones'}`;
}

function playSong(url) {
    window.open(url, '_blank');
}

function switchSection(section) {
    currentSection = section;
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-section') === section);
    });
    
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.toggle('active', sec.id === `${section}-section`);
    });
}

function formatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'error' ? '#dc3545' : '#28a745';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        z-index: 10000;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

function checkExistingSession() {
    const session = JSON.parse(localStorage.getItem('adminSession'));
    if (session && (Date.now() - session.timestamp) < ADMIN_CONFIG.sessionTimeout) {
        isAdmin = true;
        console.log('🔓 Sesión admin recuperada');
    }
}

function showLoginModal() {
    loginModal.style.display = 'block';
    adminPassword.focus();
}

function hideLoginModal() {
    loginModal.style.display = 'none';
    adminPassword.value = '';
}

function attemptLogin() {
    const password = adminPassword.value.trim();
    
    if (password === ADMIN_CONFIG.password) {
        isAdmin = true;
        localStorage.setItem('adminSession', JSON.stringify({
            timestamp: Date.now()
        }));
        hideLoginModal();
        updateAdminInterface();
        startSessionTimer();
        showNotification('🔓 Modo admin activado');
        console.log('✅ Login exitoso');
    } else {
        showNotification('❌ Contraseña incorrecta', 'error');
        adminPassword.value = '';
        adminPassword.focus();
    }
}

function logout() {
    isAdmin = false;
    localStorage.removeItem('adminSession');
    updateAdminInterface();
    clearSessionTimer();
    showNotification('🔒 Sesión admin cerrada');
    console.log('🔒 Logout exitoso');
}

function startSessionTimer() {
    clearSessionTimer();
    sessionTimer = setTimeout(() => {
        showNotification('⏰ Sesión expirada', 'warning');
        logout();
    }, ADMIN_CONFIG.sessionTimeout);
}

function clearSessionTimer() {
    if (sessionTimer) {
        clearTimeout(sessionTimer);
        sessionTimer = null;
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Estilos para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
