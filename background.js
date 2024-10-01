document.addEventListener('DOMContentLoaded', () => {
    const games = {
        'quake': [
            { img: 'https://images5.alphacoders.com/127/1276278.png' },
            { img: 'https://images5.alphacoders.com/927/927639.jpg' },
            { img: '../Adelv2/media/images/backgrounds/background1.jpg' },
            { img: '../Adelv2/media/images/backgrounds/background3.jpg' }
        ],
        'tactical': [
            { img: '../Adelv2/media/images/backgrounds/background5.jpg' },
            { img: '../Adelv2/media/images/backgrounds/background6.jpg' },
            { img: '../Adelv2/media/images/backgrounds/background7.jpg' },
            { img: '../Adelv2/media/images/backgrounds/background8.jpg' }
        ],
        'adel': [
            { img: '../Adelv2/media/images/backgrounds/background9.png' }
        ],
    };

    const gameKey = document.body.getAttribute('data-game');
    if (gameKey && games[gameKey]) {
        const randomIndex = Math.floor(Math.random() * games[gameKey].length);
        const randomBg = games[gameKey][randomIndex].img;
        
        // Apply background image to the .background div
        document.querySelector('.background').style.backgroundImage = `url(${randomBg})`;
    }
    
});
