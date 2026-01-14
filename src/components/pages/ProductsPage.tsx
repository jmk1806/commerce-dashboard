import {
  Layout,
  Header,
  Main,
  Section,
  Placeholder,
} from "@/components/layouts/PageLayout";

export default function ProductsPage() {
  return (
    <Layout>
      <Header>
        <h1>상품 관리</h1>
      </Header>
      <Main>
        <Section>
          <Placeholder>상품 목록 테이블</Placeholder>
        </Section>
      </Main>
    </Layout>
  );
}
