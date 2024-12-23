import React from "react";
import { ExperienceCard } from '@/components/ui/ExperienceCard';

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
          <div className="absolute left-0 top-0 h-full w-0.5 bg-zinc-800" />

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
          </div>
        </div>
      </div>
    </div>
  );
}