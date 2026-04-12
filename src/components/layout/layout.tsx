import { Header } from "../header";
import { Footer } from "../footer";
import { Inter } from "next/font/google"

type LayoutProps = {
    children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

export function Layout({ children }: LayoutProps) {
    return (
        <div className={`relative flex min-h-screen flex-col dark ${inter.className}`}>
            <Header />
            <main className="flex-1 flex flex-col mb-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}