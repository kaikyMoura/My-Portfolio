"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden">

      <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-items-center lg:justify-items-stretch gap-16 px-6 pt-32 pb-20 sm:px-20">

        <div className="flex flex-col items-center text-center gap-6 lg:items-start lg:text-left">
          <Image
            className="rounded-full border-4 border-border shadow-lg hover:scale-105 transition-transform duration-300"
            src="/profile.png"
            alt="Picture of the author"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-foreground">Olá eu sou o Kaiky</h1>
            <h2 className="text-2xl font-semibold text-muted-foreground">Desenvolvedor Fullstack</h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-foreground">About me</h3>
          <p className="text-muted-foreground hover:text-foreground transition-colors duration-150">
            Sou um desenvolvedor Fullstack com forte foco em arquitetura backend e aplicações web escaláveis.
            <br />
            <br />
            Apaixonado por construir APIs limpas, sistemas modulares e experiências de usuário fluídas com tecnologias modernas como NestJS, Prisma, GraphQL e Next.js.
            <br />
            <br />
            Gosto de transformar ideias complexas em soluções confiáveis e elegantes — da infraestrutura à interface.
          </p>

        </div>

        <div className="flex flex-col gap-6 items-center w-full">
          <div className="w-full max-w-md">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center lg:text-left">GitHub Stats</h3>
            <div className="gradient-card backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border">
              <iframe
                className="w-full rounded-xl shadow-sm"
                src="https://github-readme-stats.vercel.app/api?username=kaikyMoura&show_icons=true&theme=dracula&hide_border=true"
                height="150"
                title="GitHub stats"
              />
            </div>
          </div>
          
          <div className="w-full max-w-md">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center lg:text-left">Top Languages</h3>
            <div className="gradient-card backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-border">
              <iframe
                className="w-full rounded-xl shadow-sm"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=kaikyMoura&layout=compact&theme=dracula&hide_border=true"
                height="150"
                title="GitHub top languages"
              />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex justify-center lg:justify-end gap-4 flex-wrap pt-4">
          <Link
            className="flex items-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-150 rounded px-4 py-2 text-muted-foreground"
            href="https://github.com/kaikyMoura"
          >
            <FaGithub fontSize={20} />
            <span>GitHub</span>
          </Link>
          <Link
            className="flex items-center gap-2 border border-border hover:bg-accent hover:text-accent-foreground transition-colors duration-150 rounded px-4 py-2 text-muted-foreground"
            href="https://www.linkedin.com/in/kaiky-de-moura-tupinamba/"
          >
            <FaLinkedin fontSize={20} />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
}