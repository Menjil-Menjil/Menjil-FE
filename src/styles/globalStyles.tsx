import {createGlobalStyle} from "styled-components";
import {Prompt} from "next/font/google";
import localFont from "next/font/local";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--prompt",
});
const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/pretendard/Pretendard-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Thin.woff',
      weight: '100',
      style: 'normal',
    },
  ],
});

const GlobalStyle = createGlobalStyle`
  :root {
    /* font */
    --logo-font: ${prompt.style.fontFamily};
    /* color */
    --theme-color: #e68c23;
    --input-placeholder: #afafaf;
    --highlighted-element: #ff8a00;
    --selected-element: #fbbc053b;
  }
  * {
    font-family:
      ${pretendard.style.fontFamily}, "Pretendard", Pretendard,
      -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, "Helvetica Neue",
      "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
  }
  html,
  body {
    font-family: 
      ${pretendard.style.fontFamily}, "Pretendard", Pretendard,
      -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, "Helvetica Neue",
      "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
  }
`;

export default GlobalStyle;