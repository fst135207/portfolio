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
        I’m passionate about growing each day, whether it’s through mastering new tech skills, solving complex problems, or improving my physical fitness. I believe in taking small steps forward, whether that’s advancing my knowledge in tech or pushing my limits in workouts. I’m always excited to learn, create, and level up both mentally and physically!
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
                  skills={['Linux', 'Azure', 'Docker', 'SQL', 'Powershell', 'Network and System Administration', 'Virtualization']}
                  projects={[
                    {
                      name: "System Administration and Maintenance of Student Learning Environment",
                      description: "Includes setting up ESXI Hypervisor, Backups, Vmware HA, Firewall & Switch configurations and a lot of different stuff",
                    },
                    {
                      name: "Powershell Scripts",
                      description: "Created a lot of different powershell scripts for System Administration e.g Monitoring scripts for PRTG or AD-User management",
                    },
                    {
                      name: "Automated Deployment of Microsoft Dev Boxes",
                      description: "Created a Azure Pipeline to automatically deploy Microsoft Dev Boxes for National Future Day Event, provided a ready-to-use environment for students to use.",
                    },
                    {
                      name: "Custom Pixoo Clock",
                      description: "Created Custom Pixoo64 pixel display with python (adaptiv weather Icons, temperature, date, time)",
                      github: "https://github.com/fst135207/pixoo.git"
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
                  01/08/2021 - 01/08/2022
                </span>
              </div>

              <div className="mt-8">
                <ExperienceCard
                  company="Bict AG"
                  role="Platform Engineer"
                  description="During the start of my apprenticeship at Bict AG, I focused on building a strong foundational understanding of IT concepts and technologies."
                  skills={['Linux', 'Arduino', 'Powershell', 'SQL', 'Bash']}
                  projects={[
                    {
                      name: "Arduino Device for Room Temperature and Humidity Monitoring",
                      description: "Arduino-based device is designed to monitor room temperature and humidity in real time. It utilizes sensors like the DHT11 or DHT22 to collect environmental data",
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
                  01/08/2020 - 01/08/2021
                </span>
              </div>

              <div className="mt-8">
                <ExperienceCard
                  company="10 ICT-Schuljahr"
                  role="Platform Engineer"
                  description="During the 10th ICT school year, I gained practical experience working with tools like Office 365 and Adobe software, including Illustrator, Photoshop, and Premiere Pro, to support design and multimedia projects."
                  skills={['Office 365', 'Adobe', 'Windows']}
                  projects={[
                    {
                      name: "Worked on different Adobe Projects",
                      description: "Illustrator, Photoshop, Premiere Pro",
                    },
                    {
                      name: "Build PC & Setting up Windows 10",
                      description: "Builded PC together and installed Windows 10",
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

      {/* Kontakt Sektion */}
          <div className="relative z-10">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="text-sm text-white mt-2">
              Feel free to send me a message if you are interested in getting in touch. You can reach me through{' '}
              <a 
                href="https://www.linkedin.com/in/felix-stalder-6b20472a6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LinkedIn
              </a>{' '}
              or directly via{' '}
              <a 
                href="mailto:felix.stalder.bsu@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                E-Mail
              </a>
              .
            </p>
            <p className="text-sm text-white mt-2">
              If you are curious about my further development, you can follow me on{' '}
              <a 
                href="https://github.com/fst135207" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Github
              </a>
              .
            </p>
          </div>
        </div>
  );
}
