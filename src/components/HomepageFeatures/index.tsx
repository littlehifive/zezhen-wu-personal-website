import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Research Focus',
    Svg: require('@site/static/img/research.svg').default,
    description: (
      <>
        My research interests span across various domains in computer science,
        with a focus on innovative solutions to complex problems.
      </>
    ),
  },
  {
    title: 'Academic Publications',
    Svg: require('@site/static/img/publications.svg').default,
    description: (
      <>
        Explore my peer-reviewed publications and research contributions
        to the academic community.
      </>
    ),
  },
  {
    title: 'Blog & Insights',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Read my thoughts on technology, research, and academic life through
        regular blog posts and insights.
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