import { css } from "@emotion/react";
import { colors } from "./theme";

export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: ${colors.gray900};
    background-color: ${colors.gray50};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  input,
  textarea,
  select {
    font: inherit;
  }

  table {
    border-collapse: collapse;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.gray100};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.gray300};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.gray400};
  }

  /* 포커스 스타일 */
  :focus-visible {
    outline: 2px solid ${colors.primary500};
    outline-offset: 2px;
  }
`;
