"use client";
import { Inter } from "next/font/google";
import { ConfigProvider as AntdProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StyledComponentsRegistry from "lib/StyledComponentsRegistry";
import AntdRegistry from "lib/AntdRegistry";

import theme from "theme/antdThemeConfig";
import GlobalStyle from "theme/global";
import CustomLayout from "components/Layout";
import { YearProvider } from "contexts/useYear";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <head>
        <link rel="icon" href="/icon.svg" />
        <title>year in pixels</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <AntdRegistry>
            <AntdProvider theme={theme}>
              <StyledComponentsRegistry>
                <GlobalStyle />
                <YearProvider>
                  <CustomLayout>{children}</CustomLayout>
                </YearProvider>
              </StyledComponentsRegistry>
            </AntdProvider>
          </AntdRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
