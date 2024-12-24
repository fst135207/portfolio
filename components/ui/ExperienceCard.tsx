'use client';
import { useState } from 'react';

interface ExperienceCardProps {
  company: string;
  role: string;
  description: string;
  skills: string[];
  projects?: {
    name: string;
    description: string;
    github?: string;
  }[];
}

export function ExperienceCard({
  company,
  role,
  description,
  skills,
  projects
}: ExperienceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-[200px] perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-full flex flex-col">
            <div className="flex-grow">
              <h3 className="text-blue-400">{company}</h3>
              <p className="text-sm text-zinc-400">{role}</p>
              <p className="text-sm text-zinc-300 mt-2">{description}</p>
            </div>
            
            <div className="flex justify-between items-end">
              {/* Skills unten links */}
              <div className="flex flex-wrap gap-2 max-w-[70%]">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-zinc-800 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Show Projects Button unten rechts */}
              {projects && (
                <button
                  onClick={() => setIsFlipped(true)}
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  Show Projects
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 h-full">
            <h4 className="text-blue-400 mb-2">Projects at {company}</h4>
            <div className="space-y-3 overflow-y-auto max-h-[120px] pr-2">
              {projects?.map((project) => (
                <div key={project.name}>
                  <p className="text-sm font-medium text-zinc-200">
                    {project.name}
                  </p>
                  <p className="text-xs text-zinc-400">{project.description}</p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 mt-1"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => setIsFlipped(false)}
                className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}