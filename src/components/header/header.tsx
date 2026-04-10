import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

export function Header() {

    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const isBlogPage = router.pathname.startsWith('/blog');

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-backdrop-filters:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="">
            <ul className="flex items-center gap-6">
              <li>
                <Link className={cn('text-sm font-medium transition-colors hover:text-blue-500', isHomePage? 'text-blue-500' : 'text-muted')} href="/">Início</Link>
              </li>
              <li>
                <Link className={cn('text-sm font-medium transition-colors hover:text-blue-500', isBlogPage? 'text-blue-500' : 'text-muted')} href="/blog">Blog</Link>
              </li>
              <li>
                <Button variant="secondary">Começar</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
