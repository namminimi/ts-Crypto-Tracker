import 'styled-components';

// 스타일드 컴퍼넌트의 테마 확장해줌
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor:string;
    btnColor: string;
  }
}