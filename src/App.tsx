import './App.css';
import { ThemeProvider, createGlobalStyle, styled } from 'styled-components';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Router from './Router';
import {ReactQueryDevtools} from 'react-query/devtools'
import { HelmetProvider } from 'react-helmet-async';
import { darkTheme, lightTheme, theme } from './theme';

//전역에 스타일 적용 (스타일 리셋)
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
const BackGroundButton = styled.button`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 30px;
  right: 80px;
  border-radius: 50%;
  border: 0;
  outline: 0;
  font-size: 20px;
  background-color: ${(props) => props.theme.textColor};
  color:${(props) => props.theme.bgColor};
`

function App() {
  const [isLight, setLight] = useState(true)
  const [isDark, setDark] = useState(false)
  const onClick = () => {
    if(isLight) {
      setDark(true)
      setLight(false)
    } else {
      setDark(false)
      setLight(true)
    }
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme} >
      <GlobalStyle/>
      <HelmetProvider>
        <Router isDark={isDark}/>
        <BackGroundButton onClick={onClick}>{isDark ? "light" : "dark"}</BackGroundButton>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={true}/>
    </ThemeProvider>
  );
}

export default App;
