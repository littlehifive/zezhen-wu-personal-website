import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Data Science for Social Impact',
    Svg: require('@site/static/img/research.svg').default,
    description: (
      <>
        Behavioral scientist specializing in evidence-based interventions for children 
        and adolescents in challenging contexts. Expert in experimental design, 
        statistical analysis, and measurement development.
      </>
    ),
  },
  {
    title: '15+ Publications',
    Svg: require('@site/static/img/publications.svg').default,
    description: (
      <>
        Published researcher with articles in top-tier journals including 
        <em>Development and Psychopathology</em>, <em>Journal of Social Issues</em>, 
        and <em>Frontiers in Psychology</em>.
      </>
    ),
  },
  {
    title: 'Research Insights',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Sharing insights on behavioral science, educational interventions, 
        research methodology, and the intersection of technology and social good.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}