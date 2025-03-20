// videos.js
document.addEventListener('DOMContentLoaded', function() {
    const videosData = {
        "videos": [
            {
                "titulo": "Técnicas básicas de Jiu-jitsu",
                "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
            },
            {
                "titulo": "Introducción al Karate",
                "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
            },
            {
                "titulo": "Fundamentos del Judo",
                "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
            },
            {
                "titulo": "Técnicas de Muay Thai",
                "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
            },
            {
                "titulo": "Defensa Personal Básica",
                "url": "https://www.youtube.com/embed/dQw4w9WgXcQ"
            }
        ]
    };

    const container = document.getElementById('video-container');
    container.innerHTML = ''; // Limpiar contenido existente
    
    videosData.videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';
        videoElement.innerHTML = `
            <h3 class="video-title">${video.titulo}</h3>
            <div class="video-wrapper">
                <iframe
                    width="560"
                    height="315"
                    src="${video.url}"
                    title="${video.titulo}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        `;
        container.appendChild(videoElement);
    });
});