import { useRouter } from "next/router";
import ProductDetailPage from "@/components/pages/ProductDetailPage";
import Head from "next/head";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") {
    return null;
  }

  return (
    <>
      <Head>
        <title>Product Detail</title>
      </Head>
      <ProductDetailPage id={id} />
    </>
  );
}
