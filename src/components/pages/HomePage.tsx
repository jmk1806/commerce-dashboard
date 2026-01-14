import styled from "@emotion/styled";
import {
  Layout,
  Header,
  Section,
  SectionTitle,
  Placeholder,
} from "@/components/layouts/PageLayout";

export default function HomePage() {
  return (
    <Layout>
      <Header>
        <h1>Commerce Dashboard</h1>
      </Header>
      <Main>
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
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  padding: 24px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Sidebar = styled.aside`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  height: fit-content;
`;
