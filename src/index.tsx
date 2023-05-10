import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

/* const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
}

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
} */ 
// theme.ts, styled.d.ts 를 만들어서 스타일을 확장해줌 위에거는 생략해줘됨

// styled.d.ts :::: https://styled-components.com/docs/api#typescript  참고사이트

/* 1. styled.d.ts 를 만든다. (참고: d.ts 는 declaration file 이라는 뜻이다.)
2. theme.ts (테마) 를 만든다.
3. index.tsx 에 2에서 만든 테마를 주입한다.
4. app.tsx 에서 props 로 받아 사용한다. */


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
