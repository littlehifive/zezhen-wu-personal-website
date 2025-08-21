import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zezhen Wu',
  tagline: 'Academic Researcher & Developer',
  favicon: 'img/favicon.ico',

  url: 'https://littlehifive.github.io',
  baseUrl: '/zezhen-wu-personal-website/',

  organizationName: 'littlehifive',
  projectName: 'zezhen-wu-personal-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/littlehifive/zezhen-wu-personal-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/littlehifive/zezhen-wu-personal-website/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Zezhen Wu',
      logo: {
        alt: 'Zezhen Wu Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          to: '/research',
          label: 'Research',
          position: 'left',
        },
        {
          to: '/publications',
          label: 'Publications',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/littlehifive',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Research',
              to: '/research',
            },
            {
              label: 'Publications',
              to: '/publications',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/littlehifive',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/your-profile',
            },
            {
              label: 'Email',
              href: 'mailto:your-email@example.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zezhen Wu. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;