"use client";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import GoogleTranslate from "../GoogleTranslate";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 gradient-card backdrop-blur-md border-b border-border h-[46px] transition-all duration-150 ease-in-out">
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 py-2 h-full">
                <h1 className="text-2xl font-bold text-white">Meu Portfólio</h1>
                <div className="flex items-center gap-4">
                    <nav className="flex gap-4 text-white">
                        <Link 
                            href="/" 
                            className="text-lg hover:opacity-70 transition-opacity duration-150"
                        >
                            Início
                        </Link>
                        <Link 
                            href="/projects" 
                            className="text-lg hover:opacity-70 transition-opacity duration-150"
                        >
                            Projetos
                        </Link>
                        <Link 
                            href="/about" 
                            className="text-lg hover:opacity-70 transition-opacity duration-150"
                        >
                            Sobre
                        </Link>
                    </nav>
                    <GoogleTranslate />
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
}

export default Header;
