import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - Behavioral Scientist`}
      description="Zezhen Wu, Ph.D. - Behavioral Scientist at The Agency Fund specializing in data science for social impact, educational interventions, and evidence-based research with vulnerable populations.">
      
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
              <strong> I strive to be a polymath. </strong> <br />
              I evaluate AI systems on their impact to human lives. 
              I design social interventions to help underserved communities. I use and develop 
              data science tools to improve research efficiency. I bridge academic research 
              with real-world challenges in fast-paced working environments.
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
          </div>
          
        </div>
      </main>
    </Layout>
  );
}