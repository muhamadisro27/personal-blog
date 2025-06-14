import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/molecules/AppSidebar"
import Header from "@/components/organism/Header"
import { Container } from "@/components/atoms/Container"
import { Geist } from "next/font/google"
import AppInitializer from "@/components/molecules/AppInitializer"
import LoadingPage from "@/components/pages/LoadingPage"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { APP_MODE } from "@/utils/constant"
import { runtimeConfig } from "@/lib/config"
import PageProgress from "@/components/molecules/PageProgress"
import { Toaster } from "@/components/ui/toaster"
import { AmbientBackground } from "@/components/molecules"

export const metadata: Metadata = {
  title: "Muhamad Isro Sabanur | Personal Website",
  description: "Generated by create next app",
}

const geist = Geist({
  subsets: ["latin"],
  fallback: ["monospace"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { appMode } = runtimeConfig()

  const renderAnalytic = () =>
    appMode === APP_MODE.production ? <Analytics /> : <></>
  const renderSpeedInsight = () =>
    appMode === APP_MODE.production ? <SpeedInsights /> : <></>

  const renderChildren = () =>
    appMode === APP_MODE.production ? (
      <LoadingPage>{children}</LoadingPage>
    ) : (
      <>{children}</>
    )

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        {renderAnalytic()}
        {renderSpeedInsight()}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppInitializer>
              <PageProgress />
              <Sidebar />
              <main className="w-full min-h-svh">
                <AmbientBackground>
                  <Header />
                  <Container>{renderChildren()}</Container>
                </AmbientBackground>
                <Toaster />
              </main>
            </AppInitializer>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
