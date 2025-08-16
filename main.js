const body = document.body;
const nextButton = document.querySelector('.next-button');
const searchBar = document.querySelector('.search-bar');
const weatherContainer = document.querySelector('.weather span:first-child');
const tempContainer = document.querySelector('.weather span:nth-child(2)');
const cityContainer = document.querySelector('.weather span:last-child')
const clockElements = {
    hour: document.querySelector('.disital-clock-hour'),
    minute: document.querySelector('.disital-clock-minute'),
    second: document.querySelector('.disital-clock-second'),
    ampm: document.querySelector('.disital-clock-ampm'),
    date: document.querySelector('.disital-clock-date'),
};

const images = [
    'image/A-1_웨일북2_배경화면.png',
    'image/A-2_웨일북2_배경화면.png',
    'image/A-3_웨일북2_배경화면.png',
    'image/A-4_웨일북2_배경화면.png',
    'image/A-5_웨일북2_배경화면.png',
    'image/A-6_웨일북2_배경화면.png',
    'image/A-7_웨일북2_배경화면.png',
    'image/A-8_웨일북2_배경화면.png',
];

// 시계 기능
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

    clockElements.hour.textContent = h.toString().padStart(2, '0');
    clockElements.minute.textContent = m.toString().padStart(2, '0');
    clockElements.second.textContent = s.toString().padStart(2, '0');
    clockElements.ampm.textContent = ampm;
    clockElements.date.textContent = `${year}년 ${month}월 ${date}일 ${dayOfWeek}`;
};

// 검색 기능
const handleSearch = (e) => {
    if (e.key === 'Enter') {
        const query = searchBar.value;
        if (query) {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = googleSearchUrl;
        }
    }
};

// 마우스 위치에 따른 버튼 표시
const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    if (e.clientX > centerX) {
        nextButton.classList.add('show');
    } else {
        nextButton.classList.remove('show');
    }
};

// 배경화면 변경 기능
const wallpaperChanger = () => {
    let currentIndex = Math.floor(Math.random() * images.length);

    const setBackgroundImage = () => {
        const imageUrl = images[currentIndex];
        body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('${imageUrl}')`;
    };

    const handleNextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        setBackgroundImage();
    };

    // 초기 배경화면 설정
    setBackgroundImage();
    // 버튼 클릭 이벤트 연결
    nextButton.addEventListener('click', handleNextImage);
};

// 5. 날씨 기능 (오타 수정 및 기능 호출 추가)
const weatherMarker = () => {
    const API_KEY = "";
    const onGeoOk = (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url =`http://localhost:3000/api/weather?lat=${lat}&lon=${lon}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {


                cityContainer.innerText = data.name;
                weatherContainer.innerText = `${data.weather[0].main}`;
                tempContainer.innerText = `${Math.round(data.main.temp)}℃`
            });
    }
    function onGeoError() {
        alert("위치를 찾을 수 없어 날씨 정보를 제공할 수 없습니다.");
    }
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
};

// 모든 기능을 시작하는 초기화 함수
function init() {
     
    // 1초마다 시계 업데이트
    setInterval(updateClock, 1000);
    updateClock(); // 페이지 로드 시 즉시 실행
    weatherMarker();

    // 이벤트 리스너 등록
    searchBar.addEventListener('keydown', handleSearch);
    document.addEventListener('mousemove', handleMouseMove);

    // 기능 실행
    wallpaperChanger();
}

// 초기화 함수 실행
init();