# FIND / WEAR
한국어 의류 검색 데모. 상품 기반 자동완성, 가격 범위·제외 조건, 상세 보기, 최대 3개 비교, 기기 내 찜과 최근 검색을 지원합니다.

## GitHub Pages
Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 설정합니다. main에 푸시하면 테스트 후 public 디렉터리를 배포합니다. 최초 설정 후 Actions → Deploy GitHub Pages → Run workflow를 실행할 수 있습니다.
예상 주소: https://choijinwon.github.io/agent-fInd/ (배포 완료 전에는 사용할 수 없습니다.)

## SEO
한국어 title/description, canonical, robots 메타, Open Graph, Twitter 메타, WebSite JSON-LD, 정적 서비스 설명, sitemap.xml을 포함합니다. 샘플 상품에 실제 Product/Offer 구조화 데이터를 부여하지 않습니다.
프로젝트 경로의 robots.txt는 도메인 루트 robots.txt를 대체하지 않습니다. 이 파일만으로 검색엔진 접근을 제어하지 않습니다. 사용자 사이트 choijinwon.github.io 루트에 기존 robots.txt가 있다면 프로젝트 경로를 차단하지 않는지 확인하세요.
배포 후 Google Search Console과 네이버 서치어드바이저에서 소유권 확인 및 사이트맵 제출이 필요할 수 있습니다. 계정별 확인 토큰은 임의로 생성하지 않았습니다. 검색 노출과 순위는 보장되지 않습니다.

## 개발
`python3 -m http.server 8000 --directory public`로 정적 화면을 실행합니다.
`npm run build && npm test`로 Worker를 생성하고 테스트합니다. 외부 패키지 설치는 필요 없습니다.

## 상품 API
GitHub Pages는 서버를 실행하지 않으므로 샘플 검색과 외부 쇼핑몰 검색을 지원합니다. 실상품 버튼은 별도 API 서버 연결 전 비활성화됩니다.
server/worker.js는 Cloudflare Workers 호환 코드이며 dist/server/index.js로 빌드됩니다. 서버 비밀 설정에 NAVER_CLIENT_ID, NAVER_CLIENT_SECRET을 등록하세요. 실제 값은 저장소에 포함하지 않았습니다.
외부 서버를 연결하려면 public/config.js의 API_BASE에 서버 origin을 설정하고 서버에서 이 Pages origin에 대한 CORS, 인증 및 요청 제한을 설정해야 합니다. 기존 소유자 전용 Sites 서버는 공개 API로 자동 연결되지 않습니다.
네이버는 최대 30개 결과를 반환하며 동일 상품 ID를 제거합니다. 배송비·쿠폰·옵션 가격·전체 최저가를 보장하지 않습니다. 쿠팡 상품 API와 LLM은 미연결입니다.
공식 문서: https://developers.naver.com/docs/serviceapi/search/shopping/shopping.md

## 이미지
아래 사진은 샘플 상품군 대표 이미지입니다. 저장소 LICENSE는 타사 이미지 권리를 부여하지 않습니다. 상업 서비스에는 사용 허가된 상품 이미지로 교체하세요.
- https://www.iconicindia.com/blogs/news/white-shirt-combinations-that-speak-volumes-your-style-manifesto
- https://static.zara.net/assets/public/19bb/67b8/bba14695ae55/782e9e471773/06861441800-e1/06861441800-e1.jpg
- https://www.raumagarn.no/oppskrifter/443-kalamata-vintergenser
