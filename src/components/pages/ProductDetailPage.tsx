import {
  Layout,
  Header,
  Main,
  Section,
  Placeholder,
} from "@/components/layouts/PageLayout";

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
