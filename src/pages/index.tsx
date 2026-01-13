import styled from '@emotion/styled';
import { colors, spacing } from '@/styles';

export default function DashboardPage() {
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

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: ${spacing[4]} ${spacing[6]};
  background: ${colors.gray[900]};
  color: white;

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const Main = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: ${spacing[6]};
  padding: ${spacing[6]};
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};
`;

const Sidebar = styled.aside`
  background: white;
  border-radius: 8px;
  padding: ${spacing[4]};
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  height: fit-content;
`;

const Section = styled.section`
  background: white;
  border-radius: 8px;
  padding: ${spacing[4]};
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.gray[800]};
  margin-bottom: ${spacing[3]};
`;

const Placeholder = styled.div`
  padding: ${spacing[8]};
  background: ${colors.gray[100]};
  border-radius: 4px;
  text-align: center;
  color: ${colors.gray[500]};
`;
