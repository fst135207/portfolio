interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  githubUrl: string;
  stars?: number;
  forks?: number;
}

export function ProjectCard({
  name,
  description,
  language,
  githubUrl,
  stars = 0,
  forks = 0
}: ProjectCardProps) {
  return (
    <a 
      href={githubUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="block p-6 bg-zinc-900/50 hover:bg-zinc-900/80 border border-zinc-800 transition-colors w-full h-[150px]"
    >
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
        </svg>
        <span className="text-blue-400">{name}</span>
      </div>
      <p className="text-sm text-zinc-300 mb-3">{description}</p>
      <div className="flex items-center gap-4">
        <span className="text-xs text-zinc-400">{language}</span>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
          </svg>
          <span className="text-xs text-zinc-400">{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 100-1.5.75.75 0 000 1.5zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          </svg>
          <span className="text-xs text-zinc-400">{forks}</span>
        </div>
      </div>
    </a>
  );
}