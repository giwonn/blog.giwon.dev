import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
    return (
        <header className="border-b py-4">
            <Container className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Giwon's Blog
                </Link>
                <div className="flex items-center gap-4">
                    <nav className="flex gap-4">
                        <Link href="/articles" className="hover:underline">
                            Articles
                        </Link>
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                    </nav>
                    <ThemeToggle />
                </div>
            </Container>
        </header>
    );
}
