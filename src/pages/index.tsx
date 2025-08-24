import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zezhen Wu",
    "jobTitle": "Behavioral Scientist",
    "description": "Ph.D. Behavioral Scientist specializing in data science for social impact, AI systems evaluation, and educational interventions",
    "url": "https://zezhenwu.com",
    "image": "https://zezhenwu.com/img/zezhen-profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/zezhenwu/",
      "https://github.com/littlehifive"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "The Agency Fund"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University (Ph.D. in Behavioral Science)"
      }
    ],
    "knowsAbout": [
      "Behavioral Science",
      "Data Science",
      "AI Ethics",
      "Educational Interventions",
      "Psychology Research",
      "Social Impact"
    ]
  };

  return (
    <Layout
      title={`${siteConfig.title} - Behavioral Scientist`}
      description="Zezhen Wu, Ph.D. - Behavioral Scientist at The Agency Fund specializing in data science for social impact, educational interventions, and evidence-based research with vulnerable populations.">
      
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta name="google-site-verification" content="" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.container}>
          
          {/* Profile Section */}
          <div className={styles.profileSection}>
            <img 
              src={useBaseUrl('/img/zezhen-profile.jpg')}
              alt="Zezhen Wu" 
              className={styles.profileImage}
            />
            <h1 className={styles.name}>Zezhen Wu, Ph.D.</h1>
          </div>

          {/* Mission Section */}
          <div className={styles.missionSection}>
            <p className={styles.missionText}>
              <strong>I strive to be a polymath.</strong> <br /><br />
              I evaluate AI systems on their impact to human lives. <br /><br />
              I design social interventions to help underserved communities. <br /><br />
              I use and develop data science tools to address real-world challenges.
            </p>
          </div>

          {/* Navigation Section */}
          <div className={styles.navigationSection}>
            <Link to="/about" className={styles.navLink}>About</Link>
            <span className={styles.separator}>•</span>
            <Link to="/publications" className={styles.navLink}>Publications</Link>
            <span className={styles.separator}>•</span>
            <Link to="/blog" className={styles.navLink}>Blog</Link>
            <span className={styles.separator}>•</span>
            <a href={useBaseUrl('/cv.pdf')} className={styles.navLink} target="_blank" rel="noopener noreferrer">CV</a>
            <span className={styles.separator}>•</span>
            <a href="https://www.linkedin.com/in/zezhenwu/" className={styles.navLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          
        </div>
      </main>
    </Layout>
  );
}