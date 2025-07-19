import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-4xl font-bold text-foreground">404 - Página não encontrada</h1>
            <p className="text-muted-foreground">A página que você está procurando não existe.</p>
            <Link href="/" className="text-primary hover:text-primary-foreground transition-colors duration-150">Voltar para a página inicial</Link>
        </div>
    )
}

export default NotFound;