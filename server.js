const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); // node-fetch v3+
const cors = require('cors');
require('dotenv').config(); // .env 파일의 환경 변수를 불러옴

const app = express();
const port = 3000; // 서버가 실행될 포트 번호

app.use(cors()); // CORS 미들웨어 사용

// '/api/weather' 주소로 GET 요청이 오면 실행
app.get('/api/weather', async (req, res) => {
    const { lat, lon } = req.query;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    // --- 디버깅용 로그 추가 ---
    console.log("클라이언트에서 받은 위도:", lat, "경도:", lon);
    console.log("서버에서 사용 중인 API 키:", apiKey); // 이 부분이 undefined로 나오면 .env 설정 오류입니다.
    // ----------------------

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // --- 디버깅용 로그 추가 ---
        console.log("OpenWeatherMap API로부터 받은 데이터:", data);
        // ----------------------

        res.json(data);
    } catch (error) {
        console.error("API 호출 중 에러 발생:", error); // 에러가 나면 터미널에 표시
        res.status(500).json({ error: '알 수 없음' });
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});