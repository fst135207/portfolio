'use client';

import {
  Header,
  HeaderName,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenuItem,
  SideNavMenu,
  SideNavLink,
  StoryContent,
} from '@carbon/react';

const TutorialHeader = () => (
  <section>
    <Header aria-label="Portfolio Felix Stalder">
      <SkipToContent />
      <HeaderName href="#" prefix="Felix Stalder">
        [Portfolio]
      </HeaderName>
    </Header>
    <SideNav
      isFixedNav
      expanded={true}
      isChildOfHeader={false}
      aria-label="Side navigation"
    >
      <SideNavItems>
        <SideNavLink href="#qualifications">Weiterbildungen</SideNavLink>
        <SideNavLink href="#certificates">Zertifizierungen</SideNavLink>
        <SideNavLink href="#projects">Projekte</SideNavLink>
        <SideNavLink href="#contact">Kontakt</SideNavLink>
      </SideNavItems>
    </SideNav>
  </section>
);

export default TutorialHeader;
