import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MBA Notes',
  tagline: 'Class notes, resources, and session summaries',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://pmshubhamgarg.github.io',
  baseUrl: '/MBA/',

  organizationName: 'pmshubhamgarg',
  projectName: 'MBA',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'MBA Notes',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mbaSidebar',
            position: 'left',
            label: 'Subjects',
          },
          {
            href: 'https://github.com/pmshubhamgarg/MBA',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `MBA Notes — Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
