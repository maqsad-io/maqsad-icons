import "../styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import "highlight.js/styles/github.css";

import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { theme } from "@/styles/theme";
import { APP_NAME, APP_DESCRIPTION } from "@/constants";
import { Shell } from "@/components/layouts/Shell";
import { CodeHighlightProvider } from "@/components/providers/CodeHighlightProvider";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <CodeHighlightProvider>
            <Shell>{children}</Shell>
          </CodeHighlightProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
