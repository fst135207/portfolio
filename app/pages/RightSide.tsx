import React from "react";
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { getRepoStats } from "@/utilis/github";

export async function RightSide() {
    const projects = [
        {
          name: "XAUUSD-Forecast",
          owner: "fst135207",
          description: "Python-based XAUUSD forecaster uses the ARMA Model to predict gold prices (XAU/USD)",
          language: "Python",
          githubUrl: "https://github.com/fst135207/XAUUSD-Forecast.git"
        },
        {
          name: "Portfolio",
          owner: "fst135207",
          description: "Current portfolio built with Next.js and TypeScript",
          language: "TypeScript",
          githubUrl: "https://github.com/fst135207/portfolio.git"
        },
        {
          name: "Pixoo",
          owner: "fst135207",
          description: "Programming Pixoo64 pixel display with python (adaptiv weather Icons, temperature, date, time)",
          language: "Python",
          githubUrl: "https://github.com/fst135207/pixoo.git"
        },
        
      ];
    
      const projectsWithStats = await Promise.all(
        projects.map(async (project) => {
          const { stars, forks } = await getRepoStats(project.owner, project.name);
          return { ...project, stars, forks };
        })
      );

  return (
    <div className="flex flex-col gap-6 sm:mt-16">
      {/* Kleine Beschreibung */}
      <div className="space-y-2">
        <p className="text-sm text-zinc-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et
        </p>
      </div>

      {/* Werdegang / Erfahrung */}
      <div>
        <h2 className="text-lg font-semibold">Professional Experience</h2>

        <div className="mt-4 relative">
          {/* Timeline Linie */}
          <div className="absolute left-0 top-0 w-0.5 bg-zinc-800" style={{ 
            height: 'calc(100% - 13rem)'
          }} />

          {/* Experience Items */}
          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="relative pl-6">
              <div className="absolute left-[-3px] top-[-18px] flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs text-zinc-400 ml-5">
                  01/08/2022 - Present
                </span>
              </div>

              <div className="mt-8">
                <ExperienceCard
                  company="Identitas AG"
                  role="Platform Engineer"
                  description="Throughout the apprenticeship I was able to work in different areas of fields where I was able to gain and learn many new skills."
                  skills={['Linux', 'Azure', 'Powershell', 'SQL']}
                  projects={[
                    {
                      name: "Infrastructure Automation",
                      description: "Automated deployment of Azure resources using Terraform",
                      github: "https://github.com/fst135207"
                    },
                  ]}
                />
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-6">
              <div className="absolute left-[-3px] top-[-18px] flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs text-zinc-400 ml-5">
                  01/08/2022 - Present
                </span>
              </div>

              <div className="mt-8">
                <ExperienceCard
                  company="Bict AG"
                  role="Platform Engineer"
                  description="Throughout the apprenticeship I was able to work in different areas of fields where I was able to gain and learn many new skills."
                  skills={['Linux', 'Azure', 'Powershell', 'SQL']}
                  projects={[
                    {
                      name: "Infrastructure Automation",
                      description: "Automated deployment of Azure resources using Terraform",
                      github: "https://github.com/fst135207"
                    },
                  ]}
                />
              </div>
            </div>
              {/* Experience 2 */}
            <div className="relative pl-6">
              <div className="absolute left-[-3px] top-[-18px] flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs text-zinc-400 ml-5">
                  01/08/2022 - Present
                </span>
              </div>

              <div className="mt-8">
                <ExperienceCard
                  company="10 ICT-Schuljahr"
                  role="Platform Engineer"
                  description="Throughout the apprenticeship I was able to work in different areas of fields where I was able to gain and learn many new skills."
                  skills={['Linux', 'Azure', 'Powershell', 'SQL']}
                  projects={[
                    {
                      name: "Infrastructure Automation",
                      description: "Automated deployment of Azure resources using Terraform",
                      github: "https://github.com/fst135207"
                    },
                  ]}
                />
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Section */}
        {/* Section Header mit Describtion */}
        <div className="relative z-10">
        <h2 className="text-lg font-semibold">My Projects</h2>
          <p className="text-sm text-zinc-300">
            A collection of projects I've worked on
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsWithStats.map((project) => (
          <div key={project.name} className="transition-all duration-300 hover:translate-y-[-4px]">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
