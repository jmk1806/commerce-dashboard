/** @jsxImportSource @emotion/react */
import type { SerializedStyles } from "@emotion/react";
import { css } from "@emotion/react";
import type { ReactNode, HTMLAttributes } from "react";
import { colors } from "@/styles";

interface BaseProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  css?: SerializedStyles;
}

const layoutStyle = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function Layout({
  children,
  className,
  css: cssProp,
  ...props
}: BaseProps) {
  return (
    <div css={[layoutStyle, cssProp]} className={className} {...props}>
      {children}
    </div>
  );
}

const headerStyle = css`
  padding: 16px 24px;
  background: ${colors.gray900};
  color: white;

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;

export function Header({
  children,
  className,
  css: cssProp,
  ...props
}: BaseProps) {
  return (
    <header css={[headerStyle, cssProp]} className={className} {...props}>
      {children}
    </header>
  );
}

const mainStyle = css`
  flex: 1;
  padding: 24px;
`;

export function Main({
  children,
  className,
  css: cssProp,
  ...props
}: BaseProps) {
  return (
    <main css={[mainStyle, cssProp]} className={className} {...props}>
      {children}
    </main>
  );
}

const sectionStyle = css`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

export function Section({
  children,
  className,
  css: cssProp,
  ...props
}: BaseProps) {
  return (
    <section css={[sectionStyle, cssProp]} className={className} {...props}>
      {children}
    </section>
  );
}

const sectionTitleStyle = css`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.gray800};
  margin-bottom: 12px;
`;

export function SectionTitle({
  children,
  className,
  css: cssProp,
  ...props
}: BaseProps) {
  return (
    <h2 css={[sectionTitleStyle, cssProp]} className={className} {...props}>
      {children}
    </h2>
  );
}

const placeholderStyle = css`
  padding: 32px;
  background: ${colors.gray100};
  border-radius: 4px;
  text-align: center;
  color: ${colors.gray500};
`;

export function Placeholder({
  children,
  className,
  css: cssProp,
  ...props
}: BaseProps) {
  return (
    <div css={[placeholderStyle, cssProp]} className={className} {...props}>
      {children}
    </div>
  );
}

const contentAreaStyle = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export function ContentArea({
  children,
  className,
  css: cssProp,
  ...props
}: BaseProps) {
  return (
    <div css={[contentAreaStyle, cssProp]} className={className} {...props}>
      {children}
    </div>
  );
}

const sidebarStyle = css`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  height: fit-content;
`;

export function Sidebar({
  children,
  className,
  css: cssProp,
  ...props
}: BaseProps) {
  return (
    <aside css={[sidebarStyle, cssProp]} className={className} {...props}>
      {children}
    </aside>
  );
}
