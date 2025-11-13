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
                id: 6,
                title: "Reina",
                url: "https://music.youtube.com/watch?v=SjbxN8mtSC4&si=yvPJNPd9rgL61qpk",
                duration: "4:02"
            },
            {
                id: 7,
                title: "Tu recuerdo",
                url: "https://music.youtube.com/watch?v=VjJqaSzZmUI&si=ItM0TO0hV01KkoNu",
                duration: "2:29"
            },
            {
                id: 8,
                title: "Nadie como tu",
                url: "https://music.youtube.com/watch?v=xgpvAagBAwY&si=CetrGj6kkmle8HDj",
                duration: "2:54"
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
                id: 9,
                title: "No Love",
                url: "https://music.youtube.com/watch?v=keo_no_love",
                duration: "3:40"
            },
            {
                id: 10,
                title: "Problem",
                url: "https://music.youtube.com/watch?v=keo_problem",
                duration: "3:15"
            },
            {
                id: 11,
                title: "Rockstar",
                url: "https://music.youtube.com/watch?v=keo_rockstar",
                duration: "3:55"
            },
            {
                id: 12,
                title: "Malianteo",
                url: "https://music.youtube.com/watch?v=keo_malianteo",
                duration: "3:20"
            }
        ]
    },
    {
        id: 4,
        name: "YSY A",
        logo: "images/ysy-logo.jpg",
        fallbackEmoji: "⚡",
        songs: [
            {
                id: 13,
                title: "Dame Droga",
                url: "https://music.youtube.com/watch?v=ysy_dame_droga",
                duration: "3:45"
            },
            {
                id: 14,
                title: "Trap de Verdad",
                url: "https://music.youtube.com/watch?v=ysy_trap",
                duration: "3:30"
            }
        ]
    },
    {
        id: 5,
        name: "Neo Pistea",
        logo: "images/neo-logo.jpg",
        fallbackEmoji: "🌙",
        songs: [
            {
                id: 15,
                title: "Papi Chu",
                url: "https://music.youtube.com/watch?v=neo_papi_chu",
                duration: "3:10"
            },
            {
                id: 16,
                title: "Como Le Digo",
                url: "https://music.youtube.com/watch?v=neo_como_le_digo",
                duration: "3:45"
            }
        ]
    },
    {
        id: 6,
        name: "3 am",
        logo: "images/neo-logo.jpg",
        fallbackEmoji: "🌙",
        songs: [
            {
                id: 17,
                title: "Vuela",
                url: "https://music.youtube.com/watch?v=neo_papi_chu",
                duration: "3:10"
            },
            {
                id: 18,
                title: "Una rosa",
                url: "https://music.youtube.com/watch?v=neo_como_le_digo",
                duration: "3:45"
            }
        ]
    }
];

// Estado de la aplicación
let currentSearch = '';

// Elementos DOM
const artistsContainer = document.getElementById('artistsContainer');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const artistCount = document.getElementById('artistCount');
const songCount = document.getElementById('songCount');
const emptyState = document.getElementById('emptyState');
const loading = document.getElementById('loading');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Simular carga
    setTimeout(() => {
        loading.style.display = 'none';
        renderArtists();
        setupEventListeners();
        updateStats();
    }, 800);
}

function setupEventListeners() {
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
