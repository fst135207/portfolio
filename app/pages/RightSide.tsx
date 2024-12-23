import React from "react";
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function RightSide() {
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
          <div className="transition-all duration-300 hover:translate-y-[-4px]">
            <ProjectCard 
              name="Project 1"
              description="Describiton Project 1"
              language="Shell"
              githubUrl="https://github.com/fst135207"
            />
          </div>
          
          <div className="transition-all duration-300 hover:translate-y-[-4px]">
            <ProjectCard 
              name="Project 2"
              description="Describiton Project 2"
              language="Powershell"
              githubUrl="https://github.com/fst135207"
            />
          </div>
          
          <div className="transition-all duration-300 hover:translate-y-[-4px]">
            <ProjectCard 
              name="Project 3"
              description="Describiton Project 3"
              language="PowerShell"
              githubUrl="https://github.com/fst135207"
            />
          </div>
          <div className="transition-all duration-300 hover:translate-y-[-4px]">
            <ProjectCard 
            name="Project 4"
              description="Describiton Project 4"
            language="PowerShell"
            githubUrl="https://github.com/fst135207"
            />
        </div>
        </div>
    </div>
  );
} 
