import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const subjects = [
  {name: 'Advanced Corporate Finance', path: '/docs/acf/', desc: 'EVA, capital structure, payout policy, derivatives, and risk management'},
  {name: 'Cross Cultural Management', path: '/docs/ccm/', desc: 'Managing cultural differences in global business'},
  {name: 'Communication for Leaders', path: '/docs/cfl/', desc: 'Leadership communication, persuasion, and executive presence'},
  {name: 'Corporate Strategy & Structure', path: '/docs/css/', desc: 'Corporate-level strategy, diversification, and organizational design'},
];

function SubjectCard({name, path, desc}) {
  return (
    <div className="col col--3" style={{marginBottom: '1.5rem'}}>
      <div className="card" style={{height: '100%'}}>
        <div className="card__header">
          <Heading as="h3">
            <Link to={path}>{name}</Link>
          </Heading>
        </div>
        <div className="card__body">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header style={{padding: '3rem 0', textAlign: 'center'}}>
        <div className="container">
          <Heading as="h1">{siteConfig.title}</Heading>
          <p style={{fontSize: '1.2rem'}}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <div className="container" style={{paddingBottom: '3rem'}}>
          <div className="row">
            {subjects.map((s) => (
              <SubjectCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
