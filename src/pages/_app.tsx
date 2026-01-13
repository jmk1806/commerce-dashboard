import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { globalStyles } from "@/styles";
import "pretendard/dist/web/variable/pretendardvariable.css";

async function enableMocking() {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV !== "development") return;

  const { worker } = await import("@/api/mocks/browser");
  return worker.start();
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60, // 1분
            retry: 1,
          },
        },
      })
  );

  const [mockReady, setMockReady] = useState(false);

  useEffect(() => {
    enableMocking().then(() => setMockReady(true));
  }, []);

  // 개발 환경에서 MSW 준비 전에는 렌더링하지 않음
  if (process.env.NODE_ENV === "development" && !mockReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
