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
                id: 20,
                title: "No Love",
                url: "https://music.youtube.com/watch?v=keo_no_love",
                duration: "3:40"
            },
            {
                id: 21,
                title: "Problem",
                url: "https://music.youtube.com/watch?v=keo_problem",
                duration: "3:15"
            },
            {
                id: 22,
                title: "Rockstar",
                url: "https://music.youtube.com/watch?v=keo_rockstar",
                duration: "3:55"
            },
            {
                id: 23,
                title: "Malianteo",
                url: "https://music.youtube.com/watch?v=keo_malianteo",
                duration: "3:20"
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
