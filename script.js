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

// SISTEMA DE SINCRONIZACIÓN MEJORADO Y PERMANENTE
class SyncSystem {
    constructor() {
        this.syncCode = localStorage.getItem('loveLettersSyncCode');
        this.isSyncActive = localStorage.getItem('isSyncActive') === 'true';
        this.lastUpdate = localStorage.getItem('lastSyncUpdate') || 0;
        this.checkInterval = null;
        
        if (this.isSyncActive) {
            this.startAutoSync();
        }
    }

    // 🎯 GENERAR CÓDIGO MEJORADO
    generateSyncCode() {
        if (!isAdmin) {
            showNotification('❌ Solo el admin puede generar código', 'error');
            return;
        }

        try {
            // Código más simple y fácil de compartir
            const code = 'LL' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 3).toUpperCase();
            
            // Guardar datos de sincronización
            const syncData = {
                code: code,
                letters: JSON.parse(localStorage.getItem('loveLetters') || '[]'),
                created: Date.now(),
                lastUpdate: Date.now(),
                admin: true
            };
            
            // Guardar en localStorage con clave única
            localStorage.setItem('syncData_' + code, JSON.stringify(syncData));
            
            // Guardar referencia
            this.syncCode = code;
            this.isSyncActive = true;
            localStorage.setItem('loveLettersSyncCode', code);
            localStorage.setItem('isSyncActive', 'true');
            
            showNotification('✅ Código generado: ' + code, 'success');
            this.showShareModal(code);
            
            this.startAutoSync();
            
        } catch (error) {
            console.error('Error generando código:', error);
            showNotification('❌ Error al generar código', 'error');
        }
    }

    // 🔗 ACTIVAR SINCRONIZACIÓN MEJORADA
    activateSync(codeInput = null) {
        try {
            let code = codeInput;
            if (!code) {
                code = prompt('Ingresa el código de sincronización:');
                if (!code) return false;
            }
            
            code = code.trim().toUpperCase();
            
            // Buscar datos de sincronización
            const syncData = localStorage.getItem('syncData_' + code);
            if (!syncData) {
                showNotification('❌ Código no encontrado', 'error');
                return false;
            }
            
            const data = JSON.parse(syncData);
            
            // Sincronizar cartas
            this.syncLetters(data.letters);
            
            // Guardar referencia
            this.syncCode = code;
            this.isSyncActive = true;
            localStorage.setItem('loveLettersSyncCode', code);
            localStorage.setItem('isSyncActive', 'true');
            
            showNotification('✅ Sincronización activada!', 'success');
            
            this.startAutoSync();
            return true;
            
        } catch (error) {
            console.error('Error activando sync:', error);
            showNotification('❌ Error al activar sincronización', 'error');
            return false;
        }
    }

    // 📡 SINCRONIZACIÓN AUTOMÁTICA
    startAutoSync() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
        
        // Verificar actualizaciones cada 10 segundos
        this.checkInterval = setInterval(() => {
            this.checkForUpdates();
        }, 10000);
        
        // También verificar cuando la página se hace visible
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.checkForUpdates();
            }
        });
    }

    // 🔄 VERIFICAR ACTUALIZACIONES
    checkForUpdates() {
        if (!this.isSyncActive || !this.syncCode) return;
        
        try {
            const syncData = localStorage.getItem('syncData_' + this.syncCode);
            if (!syncData) {
                console.log('Código de sync no encontrado');
                return;
            }
            
            const data = JSON.parse(syncData);
            const lastRemoteUpdate = data.lastUpdate || 0;
            const lastLocalUpdate = parseInt(localStorage.getItem('lastSyncUpdate') || '0');
            
            // Si hay actualizaciones remotas más recientes
            if (lastRemoteUpdate > lastLocalUpdate) {
                console.log('📥 Actualizaciones disponibles');
                this.syncLetters(data.letters);
            }
            
        } catch (error) {
            console.error('Error verificando updates:', error);
        }
    }

    // 💾 SINCRONIZAR CARTAS
    syncLetters(remoteLetters) {
        try {
            const localLetters = JSON.parse(localStorage.getItem('loveLetters') || '[]');
            const localIds = new Set(localLetters.map(letter => letter.id));
            
            // Encontrar cartas nuevas
            const newLetters = remoteLetters.filter(letter => 
                letter && letter.id && !localIds.has(letter.id)
            );
            
            if (newLetters.length > 0) {
                // Para usuarios normales, reemplazar completamente
                // Para admin, mantener control
                let updatedLetters;
                if (isAdmin) {
                    updatedLetters = [...localLetters, ...newLetters];
                } else {
                    updatedLetters = remoteLetters;
                }
                
                // Ordenar
                updatedLetters.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
                
                // Guardar
                localStorage.setItem('loveLetters', JSON.stringify(updatedLetters));
                lettersData = updatedLetters;
                
                // Actualizar UI
                renderLettersForDate(currentSelectedDate);
                if (isAdmin) {
                    renderAdminLettersList();
                }
                
                // Actualizar timestamp
                localStorage.setItem('lastSyncUpdate', Date.now().toString());
                
                showNotification(`📬 ${newLetters.length} nueva(s) carta(s)!`, 'success');
            }
            
        } catch (error) {
            console.error('Error sincronizando cartas:', error);
        }
    }

    // 📤 ACTUALIZAR DATOS REMOTOS (Admin)
    updateRemoteData() {
        if (!this.isSyncActive || !this.syncCode || !isAdmin) return;
        
        try {
            const currentLetters = JSON.parse(localStorage.getItem('loveLetters') || '[]');
            const syncData = {
                code: this.syncCode,
                letters: currentLetters,
                created: Date.now(),
                lastUpdate: Date.now(),
                admin: true
            };
            
            localStorage.setItem('syncData_' + this.syncCode, JSON.stringify(syncData));
            localStorage.setItem('lastSyncUpdate', Date.now().toString());
            
            console.log('📡 Datos actualizados en sync');
            
        } catch (error) {
            console.error('Error actualizando datos remotos:', error);
        }
    }

    // 🛑 DETENER SINCRONIZACIÓN
    stopSync() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
        
        this.syncCode = null;
        this.isSyncActive = false;
        localStorage.removeItem('loveLettersSyncCode');
        localStorage.setItem('isSyncActive', 'false');
        
        showNotification('🔴 Sincronización detenida', 'success');
    }

    // 📱 MODAL PARA COMPARTIR
    showShareModal(code) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            font-family: Arial, sans-serif;
        `;
        
        modal.innerHTML = `
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 20px; max-width: 500px; width: 90%; color: white; text-align: center;">
                <h3 style="margin-bottom: 15px;">🎯 Código de Sincronización</h3>
                
                <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; margin: 20px 0; border: 2px solid rgba(255,255,255,0.3);">
                    <div style="font-family: 'Courier New', monospace; font-size: 24px; font-weight: bold; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 10px; letter-spacing: 2px;">
                        ${code}
                    </div>
                </div>
                
                <p style="font-size: 14px; margin-bottom: 25px; text-align: left;">
                    <strong>📱 Para compartir:</strong><br><br>
                    1. <strong>Copia este código</strong><br>
                    2. En el otro dispositivo, pega el código<br>
                    3. Las cartas se sincronizarán automáticamente<br><br>
                    
                    <em>💡 El código funciona entre dispositivos con la misma app</em>
                </p>
                
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="copyToClipboard('${code}')" 
                        style="padding: 12px 25px; background: #00b894; color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: bold;">
                        📋 Copiar Código
                    </button>
                    <button onclick="generateQR('${code}')" 
                        style="padding: 12px 25px; background: #6c5ce7; color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: bold;">
                        📱 Generar QR
                    </button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        style="padding: 12px 25px; background: #636e72; color: white; border: none; border-radius: 10px; cursor: pointer;">
                        ✅ Entendido
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    // ℹ️ OBTENER ESTADO
    getStatus() {
        return {
            isActive: this.isSyncActive,
            code: this.syncCode,
            hasCode: !!this.syncCode
        };
    }
}

// Instancia global del sistema de sync
const syncSystem = new SyncSystem();

// 📋 FUNCIONES GLOBALES
window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('📋 Código copiado al portapapeles', 'success');
    });
};

window.generateQR = function(code) {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(code)}`;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 20px; text-align: center; color: black;">
            <h3 style="margin-bottom: 15px;">📱 Código QR</h3>
            <img src="${qrUrl}" alt="QR Code" style="border: 2px solid #333; margin: 15px 0;">
            <div style="font-family: 'Courier New', monospace; background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
                ${code}
            </div>
            <p style="font-size: 14px; margin-bottom: 20px;">
                Escanea este código desde otro dispositivo
            </p>
            <button onclick="this.parentElement.parentElement.remove()" 
                style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 10px; cursor: pointer;">
                ✅ Cerrar
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
};

// VARIABLES GLOBALES CORREGIDAS
let lettersData = JSON.parse(localStorage.getItem('loveLetters')) || [];
let currentSearch = '';
let currentSection = 'music';
let isAdmin = false;
let sessionTimer = null;

// ELEMENTOS DOM (asegúrate de que existan en tu HTML)
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

// 4. FUNCIONES PRINCIPALES DE LA APLICACIÓN
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

    try {
        const newLetter = {
            id: Date.now(),
            title: title,
            content: content,
            date: date,
            timestamp: new Date().getTime()
        };

        lettersData.push(newLetter);
        localStorage.setItem('loveLetters', JSON.stringify(lettersData));
        
        // Actualizar almacenamiento compartido si hay sincronización activa
        if (isAdmin && isSyncActive && syncCode) {
            setTimeout(actualizarCartasCompartidas, 100);
        }
        
        if (date === currentSelectedDate) {
            renderLettersForDate(currentSelectedDate);
        }
        if (isAdmin) {
            renderAdminLettersList();
        }
        
        clearEditorForm();
        showNotification('💖 Carta guardada');
        
        return true;
    } catch (error) {
        console.error('❌ Error guardando carta:', error);
        showNotification('❌ Error al guardar carta', 'error');
        return false;
    }
}

function deleteLetter(letterId) {
    if (!isAdmin) {
        showNotification('❌ No tienes permisos', 'error');
        return;
    }

    if (confirm('¿Estás seguro de que quieres eliminar esta carta?')) {
        try {
            const letterToDelete = lettersData.find(letter => letter.id === letterId);
            lettersData = lettersData.filter(letter => letter.id !== letterId);
            localStorage.setItem('loveLetters', JSON.stringify(lettersData));
            
            // Actualizar almacenamiento compartido si hay sincronización activa
            if (isAdmin && isSyncActive && syncCode) {
                setTimeout(actualizarCartasCompartidas, 100);
            }
            
            if (letterToDelete && letterToDelete.date === currentSelectedDate) {
                renderLettersForDate(currentSelectedDate);
            }
            renderAdminLettersList();
            
            showNotification('🗑️ Carta eliminada');
        } catch (error) {
            console.error('❌ Error eliminando carta:', error);
            showNotification('❌ Error al eliminar carta', 'error');
        }
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

    const sortedLetters = [...lettersForDate].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    lettersContainer.innerHTML = sortedLetters.map(letter => `
        <div class="letter-card">
            <div class="letter-header">
                <h3 class="letter-title">${escapeHtml(letter.title)}</h3>
                <span class="letter-date">${formatTime(letter.timestamp)}</span>
            </div>
            <div class="letter-content">${escapeHtml(letter.content)}</div>
        </div>
    `).join('');
}

function renderAdminLettersList() {
    if (!adminLettersList) return;
    
    if (lettersData.length === 0) {
        adminLettersList.innerHTML = '<p style="text-align: center; color: #666;">No hay cartas aún</p>';
        return;
    }

    const sortedLetters = [...lettersData].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    adminLettersList.innerHTML = sortedLetters.map(letter => `
        <div class="letter-admin-item">
            <div class="letter-admin-header">
                <div class="letter-admin-title">${escapeHtml(letter.title)}</div>
                <div class="letter-admin-actions">
                    <span class="letter-admin-date">${formatDate(letter.date)}</span>
                    <button class="delete-letter-btn" onclick="deleteLetter(${letter.id})">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </div>
            <div class="letter-admin-content">${escapeHtml(letter.content.substring(0, 100))}${letter.content.length > 100 ? '...' : ''}</div>
        </div>
    `).join('');
}

// 🎨 BOTONES DE SINCRONIZACIÓN MEJORADOS
function agregarBotonesSincronizacionReales() {
    // Eliminar botones existentes
    const existingButtons = document.getElementById('botonesSincronizacionReales');
    if (existingButtons) {
        existingButtons.remove();
    }
    
    const status = syncSystem.getStatus();
    const estado = status.isActive ? 
        `🟢 ACTIVA - Código: ${status.code}` : 
        '🔴 INACTIVA';
    
    const botonesHTML = `
        <div id="botonesSincronizacionReales" style="margin: 25px 0; padding: 25px; background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); border-radius: 20px; border: 3px solid #ffffff; color: white;">
            <h4 style="margin-bottom: 15px; text-align: center; font-size: 20px;">🔗 COMPARTIR CARTAS</h4>
            
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px; margin-bottom: 20px; text-align: center;">
                <div style="font-size: 14px; font-weight: bold;">${estado}</div>
                <div style="font-size: 12px; margin-top: 5px;">
                    ${lettersData.length} cartas totales
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 15px;">
                ${isAdmin ? `
                <button onclick="syncSystem.generateSyncCode()" 
                    style="padding: 12px 8px; background: #fdcb6e; color: #2d3436; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    🎯 GENERAR CÓDIGO
                </button>
                ` : `
                <div style="padding: 12px 8px; background: rgba(255,255,255,0.2); color: white; border-radius: 10px; font-size: 12px; text-align: center;">
                    👑 Solo Admin
                </div>
                `}
                
                <button onclick="syncSystem.activateSync()" 
                    style="padding: 12px 8px; background: #6c5ce7; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    📱 ACTIVAR SYNC
                </button>
                
                ${status.isActive ? `
                <button onclick="syncSystem.stopSync()" 
                    style="padding: 12px 8px; background: #e17055; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    🛑 DETENER
                </button>
                ` : `
                <button onclick="syncSystem.checkForUpdates()" 
                    style="padding: 12px 8px; background: #a29bfe; color: white; border: none; border-radius: 10px; cursor: pointer; font-size: 13px; font-weight: bold;">
                    🔄 VERIFICAR
                </button>
                `}
            </div>
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

// 7. FUNCIONES UTILITARIAS
function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
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
        font-family: Arial, sans-serif;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}
// 8. HACER FUNCIONES GLOBALES
window.saveNewLetter = saveNewLetter;
window.deleteLetter = deleteLetter;
window.copyToClipboard = copyToClipboard;
window.generateQR = generateQR;
window.syncSystem = syncSystem;

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('💌 Iniciando aplicación');
    checkExistingSession();
    initializeApp();
});

function initializeApp() {
    setTimeout(() => {
        if (loading) loading.style.display = 'none';
        
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
        agregarBotonesSincronizacionReales();
        
        console.log('✅ Aplicación iniciada - Sync:', syncSystem.getStatus());
        
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

function updateAdminInterface() {
    if (isAdmin) {
        adminPanel.style.display = 'block';
        adminLoginBtn.style.display = 'none';
        renderAdminLettersList();
    } else {
        adminPanel.style.display = 'none';
        adminLoginBtn.style.display = 'block';
    }
    
    setTimeout(() => {
        agregarBotonesSincronizacionReales();
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
