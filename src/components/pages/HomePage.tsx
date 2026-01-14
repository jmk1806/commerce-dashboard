/** @jsxImportSource @emotion/react */
import type { ReactNode } from "react";
import { css } from "@emotion/react";
import {
  Layout,
  Header,
  Main,
  Section,
  SectionTitle,
  Placeholder,
  ContentArea,
  Sidebar,
} from "@/components/layouts/PageLayout";

const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
`;

function GridMain({ children }: { children: ReactNode }) {
  return <Main css={gridStyle}>{children}</Main>;
}

export default function HomePage() {
  return (
    <Layout>
      <Header>
        <h1>Commerce Dashboard</h1>
      </Header>
      <GridMain>
        <ContentArea>
          <Section>
            <SectionTitle>KPI</SectionTitle>
            <Placeholder>KPI 카드 영역</Placeholder>
          </Section>

          <Section>
            <SectionTitle>인사이트</SectionTitle>
            <Placeholder>카테고리별 매출 영역</Placeholder>
          </Section>

          <Section>
            <SectionTitle>주문 검색</SectionTitle>
            <Placeholder>검색 필터 영역</Placeholder>
          </Section>

          <Section>
            <SectionTitle>캘린더</SectionTitle>
            <Placeholder>캘린더 영역</Placeholder>
          </Section>
        </ContentArea>

        <Sidebar>
          <SectionTitle>주문 리스트</SectionTitle>
          <Placeholder>사이드바 주문 목록</Placeholder>
        </Sidebar>
      </GridMain>
    </Layout>
  );
}
