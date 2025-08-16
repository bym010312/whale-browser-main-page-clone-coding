# 🐋 Whale New Tab Page Clone

네이버 웨일 브라우저의 새 탭 페이지를 클론한 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🔍 **구글 검색**: 검색창에 키워드 입력 후 엔터로 구글 검색
- 🕐 **실시간 디지털 시계**: 현재 시간과 날짜를 실시간으로 표시
- 🌤️ **날씨 정보**: 사용자의 현재 위치 기반 날씨 정보 표시
- 🖼️ **배경화면 슬라이드**: 마우스 위치에 따른 배경화면 변경 버튼
- 📱 **반응형 디자인**: 다양한 화면 크기에 적응하는 레이아웃

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 웹 페이지 구조
- **CSS3** - 스타일링 및 애니메이션
- **Vanilla JavaScript** - 동적 기능 구현

### Backend
- **Node.js** - 서버 런타임
- **Express.js** - 웹 프레임워크
- **CORS** - 교차 출처 리소스 공유
- **dotenv** - 환경 변수 관리
- **node-fetch** - HTTP 요청 처리

### External API
- **OpenWeatherMap API** - 날씨 정보 제공

## 🚀 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone https://github.com/bym010312/practice.git
cd whale-main-page-clone
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
루트 디렉토리에 `.env` 파일을 생성하고 OpenWeatherMap API 키를 추가하세요:

```env
OPENWEATHER_API_KEY=your_openweathermap_api_key_here
```

> OpenWeatherMap API 키는 [https://openweathermap.org/api](https://openweathermap.org/api)에서 무료로 발급받을 수 있습니다.

### 4. 서버 실행
```bash
node server.js
```

### 5. 브라우저에서 확인
`http://localhost:3000`에서 애플리케이션을 확인할 수 있습니다.

## 📁 프로젝트 구조

```
whale-main-page-clone/
├── index.html          # 메인 HTML 파일
├── main.js             # 클라이언트 사이드 JavaScript
├── style.css           # 스타일시트
├── server.js           # Express 서버
├── package.json        # 프로젝트 설정 및 의존성
├── package-lock.json   # 의존성 잠금 파일
├── .env               # 환경 변수 (직접 생성 필요)
└── image/             # 배경화면 이미지들
    ├── A-1_웨일북2_배경화면.png
    ├── A-2_웨일북2_배경화면.png
    └── ...
```

## 🎯 주요 구현 사항

### 시계 기능
- `setInterval`을 사용한 실시간 시간 업데이트
- 12시간 형식의 시간 표시 (AM/PM)
- 한국어 요일 표시

### 검색 기능
- Enter 키 이벤트 리스너
- `encodeURIComponent`를 사용한 URL 인코딩
- Google 검색 페이지로 리다이렉트

### 날씨 기능
- Geolocation API를 사용한 현재 위치 획득
- Express 서버를 통한 OpenWeatherMap API 프록시
- CORS 정책 해결을 위한 백엔드 구현

### 배경화면 변경
- 마우스 위치 감지를 통한 버튼 표시/숨김
- 배경화면 배열을 순환하는 슬라이드 기능
- CSS transition을 활용한 부드러운 전환 효과

## 🎨 디자인 특징

- **글래스모피즘**: 반투명 효과를 활용한 모던한 UI
- **호버 효과**: 마우스 상호작용에 따른 시각적 피드백
- **그리드 레이아웃**: CSS Grid를 사용한 시계 배치
- **반응형**: 다양한 화면 크기에 최적화된 레이아웃

## 📝 라이선스

ISC License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의사항

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

---

> 이 프로젝트는 학습 목적으로 제작된 웨일 브라우저 새 탭 페이지의 클론입니다.
