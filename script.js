const updateClock = () => {
    const now = new Date();
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dayOfWeek = days[now.getDay()];
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;

    const hourEl = document.querySelector('.disital-clock-hour');
    const minuteEl = document.querySelector('.disital-clock-minute');
    const secondEl = document.querySelector('.disital-clock-second');
    const ampmEl = document.querySelector('.disital-clock-ampm');
    const dateEl = document.querySelector('.disital-clock-date');

    hourEl.textContent = h.toString().padStart(2, '0');
    minuteEl.textContent = m.toString().padStart(2, '0');
    secondEl.textContent = s.toString().padStart(2, '0');
    ampmEl.textContent = ampm;
    dateEl.textContent = `${year}년 ${month}월 ${date}일 ${dayOfWeek}`
}

const searchInput = () => {
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchBar.value;
            if (query) {
                const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                window.location.href = googleSearchUrl;
            }
        }
    })
}

document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const clientX = e.clientX;
    const nextButton = document.querySelector('.next-button');

    if (centerX < clientX) {
        nextButton.classList.add('show');
    } else {
        nextButton.classList.remove('show')
    }
})

const wallpaperChanger = () => {
    const nextButton = document.querySelector('.next-button');
    const body = document.body;

    const images = [
        'image/A-1_웨일북2_배경화면.png',
        'image/A-2_웨일북2_배경화면.png',
        'image/A-3_웨일북2_배경화면.png',
        'image/A-4_웨일북2_배경화면.png',
        'image/A-5_웨일북2_배경화면.png',
        'image/A-6_웨일북2_배경화면.png',
        'image/A-7_웨일북2_배경화면.png',
        'image/A-8_웨일북2_배경화면.png',
    ]

    let currentIndex = Math.floor(Math.random() * images.length);
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url('${images[currentIndex]}')`;

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),url(${images[currentIndex]})`
    })
}

setInterval(updateClock, 1000);
updateClock()
searchInput()
wallpaperChanger()