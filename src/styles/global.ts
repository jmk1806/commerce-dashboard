import { css } from '@emotion/react';
import { colors, typography } from './theme';

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
    font-family: ${typography.fontFamily.sans};
    font-size: ${typography.fontSize.base};
    line-height: ${typography.lineHeight.normal};
    color: ${colors.gray[900]};
    background-color: ${colors.gray[50]};
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
    background: ${colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.gray[300]};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.gray[400]};
  }

  /* 포커스 스타일 */
  :focus-visible {
    outline: 2px solid ${colors.primary[500]};
    outline-offset: 2px;
  }
`;
