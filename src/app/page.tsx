"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={`fixed z-120 ${styles.header}`}>
        <h2 className="font-bold text-xl text-center lg:text-left">&lt;&gt; Kaiky Tupinambá &lt;/&gt;</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-items-center lg:justify-items-stretch gap-16 px-6 pt-32 pb-20 sm:px-20">

        <div className="flex flex-col items-center text-center gap-6 lg:items-start lg:text-left">
          <Image
            className="rounded-full border-4 border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300"
            src="/profile.png"
            alt="Picture of the author"
            width={150}
            height={150}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Hi, I&apos;m Kaiky</h1>
            <h2 className="text-2xl font-semibold text-gray-600">Fullstack Developer</h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h3 className="text-2xl font-bold">About me</h3>
          <p className="text-gray-700 hover:text-white">
            I&apos;m a Fullstack developer with a strong focus on front-end technologies. Passionate about building beautiful UIs and delivering smooth user experiences.
          </p>
          <p className="text-gray-700 hover:text-white">
          And also build APIs and backend services, focusing on creating scalable, efficient, and secure solutions for modern web applications.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center w-full">
          <iframe
            className="w-full rounded shadow-md"
            src="https://github-readme-stats.vercel.app/api?username=kaikyMoura&show_icons=true&theme=dracula"
            height="150"
            title="GitHub stats"
          />
          <iframe
            className="w-full rounded shadow-md"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kaikyMoura&layout=compact&theme=dracula"
            height="150"
            title="GitHub top languages"
          />
        </div>
        <div className="lg:col-span-2 flex justify-center lg:justify-end gap-4 flex-wrap pt-4">
          <Link
            className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 hover:text-black transition rounded px-4 py-2"
            href="https://github.com/kaikyMoura"
          >
            <FaGithub fontSize={20} />
            <span>GitHub</span>
          </Link>
          <Link
            className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 hover:text-black transition rounded px-4 py-2"
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