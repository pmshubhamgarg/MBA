import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const quarters = [
  {
    label: 'Quarter 5',
    subjects: [
      {name: 'Advanced Corporate Finance', path: '/docs/q5/acf/', desc: 'EVA, capital structure, payout policy, derivatives, and risk management'},
      {name: 'Cross Cultural Management', path: '/docs/q5/ccm/', desc: 'Managing cultural differences in global business'},
      {name: 'Communication for Leaders', path: '/docs/q5/cfl/', desc: 'Leadership communication, persuasion, and executive presence'},
      {name: 'Corporate Strategy & Structure', path: '/docs/q5/css/', desc: 'Corporate-level strategy, diversification, and organizational design'},
    ],
  },
  {
    label: 'Quarter 6',
    subjects: [
      {name: 'Marketing in Digital World', path: '/docs/q6/mdw/', desc: 'Digital-era marketing strategy, segmentation, personas, and the unscaled economy'},
      {name: 'Product Management', path: '/docs/q6/pdm/', desc: 'Product lifecycle, customer value, positioning, and go-to-market strategy'},
    ],
  },
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
          {quarters.map((q) => (
            <div key={q.label} style={{marginBottom: '2rem'}}>
              <Heading as="h2">{q.label}</Heading>
              <div className="row">
                {q.subjects.map((s) => (
                  <SubjectCard key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
