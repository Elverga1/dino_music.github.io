const ADMIN_CONFIG = {
    password: "DinoPeque123",
    sessionTimeout: 60 * 60 * 1000
}

// BASE DE DATOS DE ARTISTAS - FÁCIL DE EDITAR
const artistsData = [
    {
        id: 1,
        name: "Duki",
        logo: "images/duki-logo.jpg", // Ruta de tu imagen
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
//Sistema de cartas
let lettersData = JSON.parse(localStorage.getItem('loveLetters')) || [
    // Cartas de ejemplo - puedes borrarlas
    {
        id: 1,
        title: "Bienvenida a Mi Mundo",
        content: "Hola amor,\n\nEste es un espacio especial que creé solo para ti. Aquí encontrarás música que me hace pensar en ti y cartitas que escribo con todo mi cariño.\n\nEspero que te guste 💖",
        date: new Date().toISOString().split('T')[0],
        timestamp: new Date().getTime()
    }
];

// SISTEMA DE ESTADÍSTICAS
let visitsData = JSON.parse(localStorage.getItem('pageVisits')) || [];
let currentSelectedDate = new Date().toISOString().split('T')[0]; // Fecha actual

// SISTEMA DE NOTIFICACIONES
let lastContentUpdate = JSON.parse(localStorage.getItem('lastContentUpdate')) || {
    letters: 0,
    songs: 0,
    lastCheck: Date.now()
};

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

// Elementos del sistema de cartas
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
const statsNavBtn = document.getElementById('statsNavBtn');


// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('💌 Iniciando aplicación con sistema completo');
    registerVisit(); // Registrar visita actual
    checkExistingSession();
    initializeApp();
});

function initializeApp() {
    // Simular carga
    setTimeout(() => {
        loading.style.display = 'none';
        renderArtists();
        setupEventListeners();
        updateStats();
        updateDateDisplay();
        renderLettersForDate(currentSelectedDate);
        renderStatistics();
        updateAdminInterface();
        setupRealTimeUpdates();
        requestNotificationPermission();
        console.log('✅ Aplicación iniciada correctamente');
    }, 800);
}

// SISTEMA DE NOTIFICACIONES
function checkForNewContent() {
    const currentLetters = lettersData.length;
    const currentSongs = artistsData.reduce((total, artist) => total + artist.songs.length, 0);
    
    let hasNewContent = false;
    let notificationMessage = '';
    
    // Verificar nuevas cartas
    if (currentLetters > lastContentUpdate.letters) {
        hasNewContent = true;
        const newLettersCount = currentLetters - lastContentUpdate.letters;
        notificationMessage += `📝 ${newLettersCount} nueva${newLettersCount > 1 ? 's' : ''} carta${newLettersCount > 1 ? 's' : ''}`;
    }
    
    // Verificar nuevas canciones
    if (currentSongs > lastContentUpdate.songs) {
        hasNewContent = true;
        if (notificationMessage) notificationMessage += ' y ';
        const newSongsCount = currentSongs - lastContentUpdate.songs;
        notificationMessage += `🎵 ${newSongsCount} nueva${newSongsCount > 1 ? 's' : ''} canción${newSongsCount > 1 ? 'es' : ''}`;
    }
    
    if (hasNewContent) {
        showNewContentNotification(notificationMessage);
        
        // Actualizar el último estado conocido
        lastContentUpdate.letters = currentLetters;
        lastContentUpdate.songs = currentSongs;
        lastContentUpdate.lastCheck = Date.now();
        localStorage.setItem('lastContentUpdate', JSON.stringify(lastContentUpdate));
    }
    
    // Actualizar badge en la navegación
    updateNotificationBadges();
}

function showNewContentNotification(message) {
    // Crear notificación especial para nuevo contenido
    const notification = document.createElement('div');
    notification.className = 'new-content-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="fas fa-gift"></i>
            </div>
            <div class="notification-text">
                <strong>¡Nuevo contenido!</strong>
                <p>${message}</p>
            </div>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-eliminar después de 8 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 8000);
    
    // También mostrar notificación del sistema si está permitido
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('🎵 Nuevo contenido disponible', {
            body: message,
            icon: '/favicon.ico',
            tag: 'new-content'
        });
    }
}

function updateNotificationBadges() {
    const currentLetters = lettersData.length;
    const currentSongs = artistsData.reduce((total, artist) => total + artist.songs.length, 0);
    
    const newLetters = Math.max(0, currentLetters - lastContentUpdate.letters);
    const newSongs = Math.max(0, currentSongs - lastContentUpdate.songs);
    
    // Actualizar badges en los botones de navegación
    updateNavBadge('letters', newLetters);
    updateNavBadge('music', newSongs);
}

function updateNavBadge(section, count) {
    if (count === 0) {
        // Remover badge si no hay notificaciones
        const existingBadge = document.querySelector(`[data-section="${section}"] .nav-badge`);
        if (existingBadge) {
            existingBadge.remove();
        }
        return;
    }
    
    const navButton = document.querySelector(`[data-section="${section}"]`);
    let badge = navButton.querySelector('.nav-badge');
    
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'nav-badge';
        navButton.appendChild(badge);
    }
    
    badge.textContent = count > 99 ? '99+' : count;
    badge.style.display = 'flex';
}

function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('🔔 Permiso de notificaciones concedido');
                // Mostrar notificación de bienvenida
                new Notification('🎵 Canciones de dino❤️', {
                    body: '¡Te avisaremos cuando haya nuevo contenido!',
                    icon: '/favicon.ico'
                });
            }
        });
    }
}

function setupRealTimeUpdates() {
    // Verificar nuevo contenido cada 30 segundos
    setInterval(checkForNewContent, 30000);
    
    // También verificar cuando el usuario vuelve a la pestaña
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            checkForNewContent();
        }
    });
    
    // Verificar cuando se carga la página
    window.addEventListener('load', checkForNewContent);
}

// REGISTRO DE VISITAS
function registerVisit() {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const time = now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });

    // Buscar si ya hay registro para hoy
    const todayVisit = visitsData.find(visit => visit.date === today);
    
    if (todayVisit) {
        // Incrementar contador del día
        todayVisit.visits++;
        todayVisit.lastVisit = time;
        todayVisit.timestamps.push(now.getTime());
    } else {
        // Nuevo registro para el día
        visitsData.push({
            date: today,
            visits: 1,
            lastVisit: time,
            timestamps: [now.getTime()]
        });
    }

    // Guardar en localStorage
    localStorage.setItem('pageVisits', JSON.stringify(visitsData));
    console.log('📈 Visita registrada:', today);
}

// SISTEMA DE CARTAS DIARIAS
function updateDateDisplay() {
    const today = new Date().toISOString().split('T')[0];
    const selectedDate = new Date(currentSelectedDate);
    
    if (currentSelectedDate === today) {
        selectedDateSpan.textContent = 'Hoy';
        nextDateBtn.disabled = true;
    } else {
        selectedDateSpan.textContent = formatDate(currentSelectedDate);
        nextDateBtn.disabled = false;
    }
    
    // Verificar si se puede ir al día anterior
    const firstLetterDate = lettersData.length > 0 ? 
        lettersData.reduce((min, letter) => letter.date < min ? letter.date : min, lettersData[0].date) : 
        today;
    prevDateBtn.disabled = currentSelectedDate <= firstLetterDate;
    
    currentDateDisplay.textContent = `Cartas del ${formatDate(currentSelectedDate)}`;
}

function changeDate(direction) {
    const currentDate = new Date(currentSelectedDate);
    
    if (direction === 'prev') {
        currentDate.setDate(currentDate.getDate() - 1);
    } else if (direction === 'next') {
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    currentSelectedDate = currentDate.toISOString().split('T')[0];
    updateDateDisplay();
    renderLettersForDate(currentSelectedDate);
}

function renderLettersForDate(date) {
    const lettersForDate = lettersData.filter(letter => letter.date === date);
    
    if (lettersForDate.length === 0) {
        lettersContainer.innerHTML = `
            <div class="empty-state" style="display: block; color: #666;">
                <i class="fas fa-feather" style="font-size: 3em;"></i>
                <h3>No hay cartas para este día</h3>
                <p>${date === new Date().toISOString().split('T')[0] ? 
                    '¡Vuelve más tarde! 💖' : 
                    'No se escribieron cartas este día'}</p>
            </div>
        `;
        return;
    }

    // Ordenar cartas por timestamp (más reciente primero)
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

// SISTEMA DE ESTADÍSTICAS
function renderStatistics() {
    renderStatsSummary();
    renderVisitsChart();
    renderVisitsTable();
}

function renderStatsSummary() {
    const totalVisits = visitsData.reduce((sum, day) => sum + day.visits, 0);
    const uniqueDays = visitsData.length;
    const lastVisit = visitsData.length > 0 ? 
        formatDate(visitsData[visitsData.length - 1].date) + ' ' + visitsData[visitsData.length - 1].lastVisit : 
        'Nunca';

    document.getElementById('totalVisits').textContent = totalVisits;
    document.getElementById('uniqueDays').textContent = uniqueDays;
    document.getElementById('lastVisit').textContent = lastVisit;
}

function renderVisitsChart() {
    const chartContainer = document.getElementById('visitsChart');
    const last7Days = getLast7Days();
    
    if (visitsData.length === 0) {
        chartContainer.innerHTML = '<div class="no-visits">No hay datos de visitas aún</div>';
        return;
    }

    chartContainer.innerHTML = last7Days.map(day => {
        const visitData = visitsData.find(v => v.date === day.date);
        const visits = visitData ? visitData.visits : 0;
        const maxVisits = Math.max(...last7Days.map(d => {
            const vd = visitsData.find(v => v.date === d.date);
            return vd ? vd.visits : 0;
        }));
        
        const height = maxVisits > 0 ? (visits / maxVisits) * 100 : 10;
        
        return `
            <div class="chart-bar" style="height: ${height}%">
                <div class="chart-value">${visits}</div>
                <div class="chart-label">${day.label}</div>
            </div>
        `;
    }).join('');
}

function renderVisitsTable() {
    const visitsTable = document.getElementById('visitsTable');
    
    if (visitsData.length === 0) {
        visitsTable.innerHTML = '<div class="no-visits">No hay visitas registradas aún</div>';
        return;
    }

    // Ordenar por fecha (más reciente primero)
    const sortedVisits = [...visitsData].sort((a, b) => new Date(b.date) - new Date(a.date));

    visitsTable.innerHTML = sortedVisits.map(visit => `
        <div class="visit-item">
            <div class="visit-date">${formatDate(visit.date)}</div>
            <div class="visit-time">Última: ${visit.lastVisit}</div>
            <div class="visit-count">${visit.visits} ${visit.visits === 1 ? 'visita' : 'visitas'}</div>
        </div>
    `).join('');
}

function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        const label = date.toLocaleDateString('es-ES', { 
            weekday: 'short', 
            day: 'numeric',
            month: 'short'
        });
        days.push({ date: dateString, label: label });
    }
    return days;
}

// SISTEMA DE AUTENTICACIÓN
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

function updateAdminInterface() {
    if (isAdmin) {
        adminPanel.style.display = 'block';
        adminLoginBtn.style.display = 'none';
        statsNavBtn.style.display = 'flex';
        renderAdminLettersList();
    } else {
        adminPanel.style.display = 'none';
        adminLoginBtn.style.display = 'block';
        statsNavBtn.style.display = 'none';
    }
}

// SISTEMA DE CARTAS (SOLO ADMIN PUEDE MODIFICAR)
function renderAdminLettersList() {
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

function saveNewLetter() {
    if (!isAdmin) {
        showNotification('❌ No tienes permisos para esta acción', 'error');
        return;
    }

    const title = letterTitle.value.trim();
    const content = letterContent.value.trim();
    const date = letterDateInput.value || new Date().toISOString().split('T')[0];

    if (!title || !content) {
        showNotification('❌ Escribe un título y contenido', 'error');
        return;
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
    
    // Actualizar interfaces
    if (date === currentSelectedDate) {
        renderLettersForDate(currentSelectedDate);
    }
    renderAdminLettersList();
    clearEditorForm();
    
    // Disparar notificación de nuevo contenido
    setTimeout(checkForNewContent, 1000);
    
    showNotification('💖 Carta guardada correctamente');
    console.log('📝 Nueva carta guardada por admin');
}

function deleteLetter(letterId) {
    if (!isAdmin) {
        showNotification('❌ No tienes permisos para esta acción', 'error');
        return;
    }

    if (confirm('¿Estás seguro de que quieres eliminar esta carta?')) {
        lettersData = lettersData.filter(letter => letter.id !== letterId);
        localStorage.setItem('loveLetters', JSON.stringify(lettersData));
        
        // Actualizar interfaces
        renderLettersForDate(currentSelectedDate);
        renderAdminLettersList();
        
        showNotification('🗑️ Carta eliminada');
        console.log('🗑️ Carta eliminada por admin');
    }
}

function clearEditorForm() {
    letterTitle.value = '';
    letterContent.value = '';
    updateCharCounters();
}

function updateCharCounters() {
    const titleCount = letterTitle.value.length;
    const contentCount = letterContent.value.length;
    
    if (titleCount > 45) {
        letterTitle.style.borderColor = '#ff6b6b';
    } else {
        letterTitle.style.borderColor = '#e1e5e9';
    }
    
    if (contentCount > 950) {
        letterContent.style.borderColor = '#ff6b6b';
    } else {
        letterContent.style.borderColor = '#e1e5e9';
    }
}

function setupEventListeners() {
     // Navegación entre secciones
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            switchSection(section);
        });
    });

    // Navegación de fechas
    prevDateBtn.addEventListener('click', () => changeDate('prev'));
    nextDateBtn.addEventListener('click', () => changeDate('next'));

    // Fecha por defecto en editor
    letterDateInput.value = new Date().toISOString().split('T')[0];
    
    // Búsqueda
    searchInput.addEventListener('input', debounce(function(e) {
        currentSearch = e.target.value.toLowerCase().trim();
        clearSearch.style.display = currentSearch ? 'block' : 'none';
        renderArtists();
        updateStats();
    }, 300));

    // Limpiar búsqueda
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        currentSearch = '';
        clearSearch.style.display = 'none';
        renderArtists();
        updateStats();
        searchInput.focus();
    });

    // Sistema de autenticación
    adminLoginBtn.addEventListener('click', showLoginModal);
    logoutBtn.addEventListener('click', logout);
    loginBtn.addEventListener('click', attemptLogin);
    closeModal.addEventListener('click', hideLoginModal);

    // Cerrar modal al hacer click fuera
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            hideLoginModal();
        }
    });

    // Editor de cartas
    saveLetter.addEventListener('click', saveNewLetter);
    clearEditor.addEventListener('click', clearEditorForm);

    // Contadores de caracteres
    letterTitle.addEventListener('input', updateCharCounters);
    letterContent.addEventListener('input', updateCharCounters);
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
    // Si tienes una imagen, usa el tag img, sino usa el emoji
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
        // Buscar en nombre del artista
        if (artist.name.toLowerCase().includes(currentSearch)) {
            return true;
        }

        // Buscar en títulos de canciones
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
    // Abrir en nueva pestaña
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

function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

function formatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'error' ? '#dc3545' : type === 'warning' ? '#ffc107' : '#28a745';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Utilidad para debounce
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

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
