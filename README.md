# K무한매수 허브 · KSEM2X V1.1 (261015)

주소: **https://mins0x003.github.io/KSEM2X/**

| 파일 | 버전 | 역할 |
|---|---|---|
| `index.html` | 허브 V1.1 (261015) | 시작 화면 · 🔄 시세 자동 갱신 상태 표시 · 앱 설치 |
| `kodex.html` | V0.3 (261015) | K반도체레버리지 AI분석 (무한매수 계산) |
| `api-kr.html` | V1.0 (261015) | 메리츠 자동주문(국내) · 봇 설치/실행 |
| `sw.js` | V1.5 (261015) | 오프라인 캐시 · 새 버전 즉시 반영 |
| `data/kodex.json` | 자동 | 시세 파일 — 아래 수집기가 계속 덮어씀 |
| `.github/workflows/kodex-data.yml` | 수집기 V1.4 (261015) | **자동 업데이트 엔진** |

## 자동 업데이트 구조
```
평일 15:07 · 15:47 · 18:17 (KST)
GitHub Actions ──▶ 공공데이터포털(공식) + 네이버(최신일) + Yahoo(예비)
      │
      ├─ 무결성 검사 (봉 60개↑ · 날짜 역행 · 하루 ±30% 초과 급변) ─ 실패 → 기존 파일 유지
      ▼
data/kodex.json 커밋 ──▶ GitHub Pages / raw.githubusercontent.com ──▶ 앱이 더 최근 쪽을 읽음
```
폰·PC를 꺼 둬도 GitHub 클라우드에서 계속 돕니다. 바뀐 게 없으면 커밋하지 않습니다.

## 처음 한 번만 (5분)
1. 이 폴더 안의 **모든 파일·폴더**(숨김 `.github` 포함)를 `mins0x003/KSEM2X` 저장소 루트에 올립니다.
2. **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)` → Save
3. **Settings → Actions → General** → Workflow permissions: **Read and write** → Save
4. (선택) **Settings → Secrets and variables → Actions** → `DATA_GO_KR_KEY` = 공공데이터포털 인증키 (없으면 네이버만으로 동작)
5. **Actions → KODEX 시세 수집 → Run workflow** 한 번 → 초록 ✓ 확인
6. 허브 상단에 `🔄 시세 자동 갱신 2026-10-15 15:47` 처럼 시각이 뜨면 완료

> 투자 판단과 결과의 책임은 본인에게 있습니다. 수수료·세금은 반영하지 않습니다.
