import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const years = [
  {
    label: 'Year 1',
    quarters: [
      {
        label: 'Quarter 2',
        subjects: [
          {name: 'Individual and Group Dynamics', path: '/docs/year1/q2/igd/', desc: 'Self-awareness, personality, perception, motivation, teams, and group behaviour'},
          {name: 'Managerial Economics', path: '/docs/year1/q2/me/', desc: 'Demand, supply, costs, market structures, and economic reasoning for managers'},
          {name: 'Managing in the Global Economy', path: '/docs/year1/q2/mge/', desc: 'Macroeconomic forces, policy, trade, and the global business environment'},
        ],
      },
    ],
  },
  {
    label: 'Year 2',
    quarters: [
      {
        label: 'Quarter 5',
        subjects: [
          {name: 'Advanced Corporate Finance', path: '/docs/year2/q5/acf/', desc: 'EVA, capital structure, payout policy, derivatives, and risk management'},
          {name: 'Cross Cultural Management', path: '/docs/year2/q5/ccm/', desc: 'Managing cultural differences in global business'},
          {name: 'Communication for Leaders', path: '/docs/year2/q5/cfl/', desc: 'Leadership communication, persuasion, and executive presence'},
          {name: 'Corporate Strategy & Structure', path: '/docs/year2/q5/css/', desc: 'Corporate-level strategy, diversification, and organizational design'},
        ],
      },
      {
        label: 'Quarter 6',
        subjects: [
          {name: 'Marketing in Digital World', path: '/docs/year2/q6/mdw/', desc: 'Digital-era marketing strategy, segmentation, personas, and the unscaled economy'},
          {name: 'Product Management', path: '/docs/year2/q6/pdm/', desc: 'Product lifecycle, customer value, positioning, and go-to-market strategy'},
          {name: 'Fundamentals of AI', path: '/docs/year2/q6/fai/', desc: 'How AI works, neural networks, CNNs, transformers, LLMs, and responsible deployment'},
          {name: 'Environment, Governance & Sustainability', path: '/docs/year2/q6/EGS/', desc: 'Sustainability as business strategy, materiality, stakeholders, and shared value execution'},
        ],
      },
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
          {years.map((y) => (
            <div key={y.label} style={{marginBottom: '2.5rem'}}>
              <Heading as="h2">{y.label}</Heading>
              {y.quarters.map((q) => (
                <div key={q.label} style={{marginBottom: '1.5rem'}}>
                  <Heading as="h3" style={{marginTop: '1rem'}}>{q.label}</Heading>
                  <div className="row">
                    {q.subjects.map((s) => (
                      <SubjectCard key={s.name} {...s} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
