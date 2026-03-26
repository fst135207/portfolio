'use client';

import {
  Grid,
  Column,
  Heading,
  Button,
  ClickableTile,
  Tile,
  Tag,
} from '@carbon/react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from '@carbon/icons-react';

export default function LandingPage() {
  return (
    <main
      style={{
        backgroundColor: '#ffffff',
        marginLeft: '13rem',
        marginTop: '-2rem',
      }}
    >
      <section
        aria-label="Hero image"
        style={{
          position: 'relative',
          width: '100vw',
          height: '550px',
          marginLeft: 'calc(-15rem)',
          overflow: 'hidden',
          backgroundColor: '#161616',
        }}
      >
        <Image
          src="/images/elmt2.png"
          alt="Cybersecurity"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.78) saturate(0.95)',
          }}
        />
      </section>

      <section
        id="intro"
        style={{
          padding: '4rem 2rem 4rem',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Grid fullWidth>
          <Column sm={4} md={8} lg={10}>
            <Heading
              as="h3"
              className="cds--type-heading-03"
              style={{
                marginBottom: '1.5rem',
                maxWidth: '28ch',
                color: '#161616',
              }}
            >
              System Administrator mit Fokus auf Netzwerk, Cloud und Storage
            </Heading>

            <p
              className="cds--type-body-long-02"
              style={{
                maxWidth: '760px',
                color: '#525252',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Ich plane, betreibe und optimiere IT-Infrastrukturen mit Fokus auf
              stabile Netzwerke, sichere Systemarchitekturen und nachhaltige
              technische Lösungen.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Link href="#contact" style={{ textDecoration: 'none' }}>
                <Button kind="primary">Kontakt</Button>
              </Link>

              <Link href="#qualifications" style={{ textDecoration: 'none' }}>
                <Button kind="tertiary">Qualifikationen</Button>
              </Link>
            </div>
          </Column>
        </Grid>
      </section>

      <section
        id="about"
        style={{
          padding: '4rem 2rem',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Grid fullWidth>
          <Column sm={4} md={8} lg={4}>
            <p
              className="cds--type-heading-02"
              style={{ marginBottom: '1rem' }}
            >
              Über mich
            </p>
          </Column>

          <Column sm={4} md={8} lg={8}>
            <p
              className="cds--type-body-long-02"
              style={{
                color: '#525252',
                lineHeight: 1.7,
                maxWidth: '760px',
              }}
            >
              Ich bin ein disziplinierter Mensch, für den Respekt und
              Zielstrebigkeit eine zentrale Rolle im Leben spielen. Ich arbeite
              gerne am Computer, sowohl alleine als auch im Team. Das gemeinsame
              Arbeiten an Projekten und der Austausch im Team liegen mir sehr.
              Neues zu lernen, Lösungen zu entwickeln und dabei ständig zu
              wachsen, macht mich glücklich und ist mein Treibstoff für den Tag.
              In meiner Freizeit fordere ich mich gerne sportlich heraus, sei es
              beim Schwimmen, Ringen oder Kraftsport.
            </p>
          </Column>
        </Grid>
      </section>

      <section
        id="qualifications"
        style={{
          padding: '4rem 2rem',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Grid fullWidth>
          <Column sm={4} md={8} lg={4}>
            <p
              className="cds--type-heading-02"
              style={{ marginBottom: '1rem' }}
            >
              Weiterbildung
            </p>
          </Column>

          <Column sm={4} md={8} lg={8}>
            <div style={{ display: 'grid', gap: '2rem' }}>
              <div>
                <Heading
                  as="h4"
                  className="cds--type-heading-compact-02"
                  style={{ marginBottom: '0.25rem' }}
                >
                  Dipl. Informatiker:in HF – Cyber Security & Computer Networks
                </Heading>

                <p
                  className="cds--type-label-01"
                  style={{
                    color: '#6f6f6f',
                    marginBottom: '0.75rem',
                  }}
                >
                  2025 – 2028
                </p>

                <p
                  className="cds--type-body-long-01"
                  style={{
                    color: '#525252',
                    marginBottom: '0.75rem',
                    maxWidth: '720px',
                    lineHeight: 1.7,
                  }}
                >
                  Weiterbildung mit Fokus auf Cybersecurity, Netzwerke und
                  moderne IT-Infrastrukturen.
                </p>
              </div>
            </div>
          </Column>
        </Grid>
      </section>

      <section
        id="certificates"
        style={{
          padding: '4rem 2rem',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Grid fullWidth>
          <Column sm={4} md={8} lg={4}>
            <p
              className="cds--type-heading-02"
              style={{ marginBottom: '1rem' }}
            >
              Zertifikate
            </p>
          </Column>

          <Column sm={4} md={8} lg={8}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <Heading
                  as="h4"
                  className="cds--type-heading-compact-02"
                  style={{ marginBottom: '0.25rem' }}
                >
                  Cisco Certified Network Associate
                </Heading>

                <p
                  className="cds--type-label-01"
                  style={{
                    color: '#6f6f6f',
                    marginBottom: '0.75rem',
                  }}
                >
                  02.2026
                </p>

                <p
                  className="cds--type-body-long-01"
                  style={{
                    color: '#525252',
                    marginBottom: '0.75rem',
                    lineHeight: 1.7,
                  }}
                >
                  CCNA mit fundierten Kenntnissen in Routing, Switching,
                  Netzwerkgrundlagen und Troubleshooting.
                </p>
              </div>
            </div>
          </Column>
        </Grid>
      </section>

      <section
        id="projects"
        style={{
          padding: '4rem 2rem',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Grid fullWidth>
          <Column sm={4} md={8} lg={4}>
            <p
              className="cds--type-heading-02"
              style={{ marginBottom: '1rem' }}
            >
              Projekte
            </p>
          </Column>

          {/* TILE 1 */}
          <Column sm={4} md={4} lg={4}>
            <ClickableTile
              href="#"
              style={{
                height: '320px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
              }}
            >
              <div>
                <Heading
                  as="h4"
                  className="cds--type-heading-compact-01"
                  style={{ marginBottom: '0.5rem' }}
                >
                  Private Cloud
                </Heading>

                <p
                  className="cds--type-body-long-01"
                  style={{ color: '#525252', marginBottom: '1rem' }}
                >
                  Selbst betriebene Private Cloud in einer Homelab-Umgebung auf
                  Basis von OpenStack zur Bereitstellung und Verwaltung
                  virtueller Ressourcen.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <ArrowRight size={20} />
              </div>
            </ClickableTile>
          </Column>

          <Column sm={4} md={4} lg={4}>
            <ClickableTile
              href="#"
              style={{
                height: '320px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
              }}
            >
              <div>
                <Heading
                  as="h4"
                  className="cds--type-heading-compact-01"
                  style={{ marginBottom: '0.5rem' }}
                >
                  Corporate Network
                </Heading>

                <p
                  className="cds--type-body-long-01"
                  style={{ color: '#525252', marginBottom: '1rem' }}
                >
                  Implementierung von Sicherheitsservices für moderne
                  Infrastruktur.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <ArrowRight size={20} />
              </div>
            </ClickableTile>
          </Column>

          {/* TILE 3 */}
          <Column sm={4} md={4} lg={4}>
            <ClickableTile
              href="https://github.com/fst135207/HFINF2025C_PSA_PROJECT"
              style={{
                height: '320px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
              }}
            >
              <div>
                <Heading
                  as="h4"
                  className="cds--type-heading-compact-01"
                  style={{ marginBottom: '0.5rem' }}
                >
                  Relay Messaging System
                </Heading>

                <p
                  className="cds--type-body-long-01"
                  style={{ color: '#525252', marginBottom: '1rem' }}
                >
                  Entwicklung eines Hi-Perf. Relay Messaging System im Rahmen
                  des Moduls PSA.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <ArrowRight size={20} />
              </div>
            </ClickableTile>
          </Column>
        </Grid>
      </section>

      <footer
        id="contact"
        style={{
          padding: '4rem 2rem',
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#f4f4f4',
        }}
      >
        <Grid fullWidth>
          <Column sm={4} md={8} lg={4}>
            <p className="cds--type-heading-02">Kontakt</p>
          </Column>

          <Column sm={4} md={8} lg={8}>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <p className="cds--type-body-long-01">Felix Stalder</p>

              <a
                href="mailto:felix.stalder.bsu@gmail.com"
                className="cds--type-body-long-01"
                style={{ color: '#525252' }}
              >
                felix.stalder.bsu@gmail.com
              </a>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://www.linkedin.com/in/felix-stalder-6b20472a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/fst135207"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Column>
        </Grid>
      </footer>
    </main>
  );
}
