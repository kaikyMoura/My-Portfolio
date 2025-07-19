import Image from 'next/image';

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    imageUrl: string;
    featured?: boolean;
    demo?: boolean;
}

const projects: Project[] = [
    {
        id: 'schedule-pro',
        title: 'Schedule Pro',
        description: 'Um sistema de agendamento de horários com interface intuitiva e funcionalidades avançadas.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'shadcn/ui'],
        githubUrl: 'https://github.com/kaikyMoura/Schedule-Pro',
        liveUrl: 'https://schedule-pro-five.vercel.app/',
        imageUrl: '/schedule_screenshot.png',
        featured: true,
        demo: true
    },
    {
        id: 'dokra',
        title: '_Dokra_',
        description: 'Uma aplicação web moderna para gerenciamento e organização de tarefas com interface intuitiva e funcionalidades avançadas.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'shadcn/ui'],
        githubUrl: 'https://github.com/kaikyMoura/_Dokra_',
        liveUrl: 'https://dokra.vercel.app/',
        imageUrl: '/dokra_screenshot.png',
        demo: true
    },
    {
        id: 'back-court',
        title: 'Back Court',
        description: 'Sistema de gerenciamento esportivo com foco em basquete, oferecendo controle completo de times, jogadores e estatísticas.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
        githubUrl: 'https://github.com/kaikyMoura/BackCourt',
        liveUrl: 'https://back-court.vercel.app',
        imageUrl: '/backcourt_screenshot.png',
        demo: true
    },
    {
        id: 'schedule-pro-api',
        title: 'Schedule Pro API',
        description: 'API para o projeto Schedule Pro, com autenticação, controle de acesso e gerenciamento de usuários.',
        technologies: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Perspective API', 'PubSub', 'GraphQL', 'Redis', 'Docker', 'Google Cloud Platform', 'CI/CD'],
        githubUrl: 'https://github.com/kaikyMoura/Schedule-Pro-API',
        liveUrl: 'https://github.com/kaikyMoura/Schedule-Pro-API',
        imageUrl: '/schedule_api_screenshot.png',
        demo: false
    },
    {
        id: 'dokra-api',
        title: 'Dokra API',
        description: 'API para o projeto Dokra, com autenticação, controle de acesso e gerenciamento de usuários.',
        technologies: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Gemini', 'Swagger', 'Docker', 'Google Cloud Platform', 'CI/CD'],
        githubUrl: 'https://github.com/kaikyMoura/dokra',
        liveUrl: 'https://github.com/kaikyMoura/dokra',
        imageUrl: '/dokra_api_screenshot.png',
        demo: false
    },
    {
        id: 'back-court-api',
        title: 'Back Court API',
        description: 'API para o projeto Back Court, com autenticação, controle de acesso e gerenciamento de usuários.',
        technologies: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Swagger', 'Docker', 'Google Cloud Platform', 'CI/CD'],
        githubUrl: 'https://github.com/kaikyMoura/BackCourt-api',
        liveUrl: 'https://github.com/kaikyMoura/BackCourt-api',
        imageUrl: '/backcourt_api_screenshot.png',
        demo: false
    }
    
];

const ProjectsPage = () => {
    return (
        <div className="max-w-screen overflow-x-hidden min-h-screen">
            {/* Header Section */}
            <section className="px-8 py-16 text-center gradient-header text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><pattern id=%22grain%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22><circle cx=%2225%22 cy=%2225%22 r=%221%22 fill=%22white%22 opacity=%220.1%22/><circle cx=%2275%22 cy=%2275%22 r=%221%22 fill=%22white%22 opacity=%220.1%22/><circle cx=%2250%22 cy=%2210%22 r=%220.5%22 fill=%22white%22 opacity=%220.1%22/></pattern></defs><rect width=%22100%22 height=%22100%22 fill=%22url(%23grain)%22/></svg>')] opacity-30"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
                        Projetos
                    </h1>
                    <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                        Explore meus projetos e contribuições. Cada projeto representa uma jornada de aprendizado e inovação.
                    </p>
                </div>
            </section>

            {/* Featured Project */}
            {projects.filter(p => p.featured).map(project => (
                <section key={project.id} className="px-8 py-12 max-w-6xl mx-auto">
                    <div className="gradient-card backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl border border-border">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-12">
                            <div className="flex flex-col justify-center">
                                <span className="inline-block gradient-destructive text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 self-start">
                                    Projeto em Destaque
                                </span>
                                <h2 className="text-4xl font-bold text-foreground mb-4 leading-tight">
                                    {project.title}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="gradient-tech text-white px-4 py-2 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 flex-wrap">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 gradient-accent text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-2 border-transparent"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Ver Projeto
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-2 border-transparent"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                        Código Fonte
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center bg-muted rounded-xl overflow-hidden">
                                <Image
                                    quality={100}
                                    src={`${project.imageUrl}`}
                                    alt={`Preview do ${project.title}`}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-auto rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* All Projects Grid */}
            <section className="px-8 py-12 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-foreground text-center mb-12 relative">
                    Principais Projetos
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 gradient-primary rounded-full mt-4"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div key={project.id} className="gradient-card backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-border">
                            <div className="flex justify-between items-center p-6 pb-0">
                                <h3 className="text-2xl font-bold text-foreground">
                                    {project.title}
                                </h3>
                                {project.featured && (
                                    <span className="text-2xl animate-pulse">⭐</span>
                                )}
                            </div>
                            
                            <div className="p-6">
                                {project.imageUrl && (
                                    <div className="mb-4 rounded-xl overflow-hidden">
                                        <Image
                                            quality={100}
                                            src={project.imageUrl}
                                            alt={`Preview do ${project.title}`}
                                            width={400}
                                            height={400}
                                            className="w-full h-auto rounded-xl"
                                        />
                                    </div>
                                )}
                                
                                <div>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="gradient-tech text-white px-3 py-1 rounded-full text-xs font-medium transition-transform duration-200 hover:scale-105">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className="flex gap-3 flex-wrap">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 gradient-accent text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            {project.demo ? 'Demo' : ''}
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProjectsPage;