# 메타마스크 UI/UX 구현 과제
메타마스크의 메인페이지와 스왑페이지를 UI/UX 클론코딩했습니다.

![](header.png)


## Getting Started

```bash
yarn install
yarn dev
```

## 기술스택 및 사용한 라이브러리
 
 - Typescript
 - React
 - Styled-components
 

## 구현 기능 및 UI 목록

|번호|종류|이미지|설명|
|---|---|---|---|
|1|반응형 웹|<img src='https://user-images.githubusercontent.com/97211582/186878961-fd2daa9e-19cf-4d82-8dfb-acfcb9d44ab2.gif' width=400px>|pc 버전 ~769px, tablet 버전 ~min-width: 576px으로 분기를 설정하여 각 크기에 맞는 반응형 화면을 구성하였습니다.|
|2|주소 복사|<img src='https://user-images.githubusercontent.com/97211582/186876639-d9500cfe-7d13-449a-a752-cd68f3b59b72.gif' width=400px>| clipboard 웹api를 활용하여 주소를 복사할 수 있습니다. state와 onMouseLeave이벤트를 통하여 주소 복사 시와 마우스를 오버하였을 때 각각의 경우에 따라 툴팁의 내용이 변경되도록 처리하였습니다.|
|3|tab|<img src='https://user-images.githubusercontent.com/97211582/186876637-7bf38d4f-3c96-48b8-b19e-899ee09e652a.gif' width=200px>|탭 UI를 구현하였습니다.|
|4|dropdowns|<img src="https://user-images.githubusercontent.com/97211582/186876638-8830505c-dd56-4c2b-a4ea-c119ce4a8f66.gif" width=200px>|버튼을 클릭하면 드롭다운이 열리고, 버튼을 다시한번 클릭하거나 드롭다운 영역 밖을 클릭하면 닫히도록 구현하였습니다. |
|4|autocomplete, select|<img src="https://user-images.githubusercontent.com/97211582/186876636-b32461ab-13bd-4d8c-b877-36870fa215f8.gif" width=200px>|filter 메서드와 includes 메서드를 이용하여 검색어 자동완성 기능을 구현하였습니다. 자동완성목록 중 하나의 항목을 선택하면 값이 입력되며, 이미 하나의 항목에 입력된 값은 다른 자동완성창에서 검색되지 않도록 예외처리하였습니다. 아이콘 이미지에는 onError이벤트를 지정하여 이미지가 없거나 로딩중일 경우 스피너가 돌도록 설정했습니다.|
|4|toggle, radio-button|<img src="https://user-images.githubusercontent.com/97211582/186876630-d8d02a14-7998-411e-8d5a-967141d419e6.gif" width=200px>|옵션 버튼을 클릭하면 옵션 메뉴가 나타납니다. 슬리패지 설정 메뉴의 각 버튼은 라디오 버튼으로서 하나의 버튼만 선택 가능합니다. 맞춤형으로 직접 슬리패지 비율을 설정할 경우, 값의 범위에 따라 인풋창의 배경과 경고메시지가 변경되도록 설정하였습니다. 또한 슬리패지 설정 비율이 특정 값 이상을 넘어가게 될 경우 스왑 검토 버튼이 비활성화되도록 처리하였습니다. 스마트버튼 토글은 메타마스크의 오리지널 토글버튼보다 더욱 빠르고 부드럽게 움직이도록 변경했습니다.| 
|4|tooliip|<img src="https://user-images.githubusercontent.com/97211582/186876615-b4823c37-bfb9-4899-a129-68a6da43b3bb.gif" width=200px>|마우스 hover시 애니메이션 효과와 함께 툴팁이 나타납니다.|


## 아쉬운 점
- web3.js로 실제로 지갑을 연결해보고 싶었으나 시간이 부족하여 구현하지 못하였습니다.
- 또한 테스트코드를 작성하지 못한 점이 큰 아쉬움으로 남습니다.
