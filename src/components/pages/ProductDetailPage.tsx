import styled from "@emotion/styled";
import { colors } from "@/styles";

interface ProductDetailPageProps {
  id: string;
}

export default function ProductDetailPage({ id }: ProductDetailPageProps) {
  return (
    <Layout>
      <Header>
        <h1>상품 상세</h1>
      </Header>
      <Main>
        <Section>
          <Placeholder>상품 ID: {id}</Placeholder>
        </Section>
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
  padding: 16px 24px;
  background: ${colors.gray900};
  color: white;

  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 24px;
`;

const Section = styled.section`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
`;

const Placeholder = styled.div`
  padding: 32px;
  background: ${colors.gray100};
  border-radius: 4px;
  text-align: center;
  color: ${colors.gray500};
`;
