import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zezhen Wu',
  tagline: 'Ph.D. | Behavioral Scientist | Data Science for Social Impact',
  favicon: 'img/favicon.ico',

  url: 'https://zezhenwu.com',
  baseUrl: '/',

  organizationName: 'littlehifive',
  projectName: 'zezhen-wu-personal-website',

  onBrokenLinks: 'warn',
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
        sitemap: {
          changefreq: 'weekly',
          priority: null,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/zezhen-profile.jpg',
    metadata: [
      {name: 'keywords', content: 'Zezhen Wu, behavioral scientist, data science, social impact, AI ethics, educational interventions, psychology research, Ph.D.'},
      {name: 'author', content: 'Zezhen Wu'},
      {name: 'description', content: 'Zezhen Wu, Ph.D. - Behavioral Scientist specializing in data science for social impact, AI systems evaluation, and evidence-based interventions for underserved communities.'},
      {property: 'og:type', content: 'profile'},
      {property: 'og:title', content: 'Zezhen Wu - Behavioral Scientist & Data Scientist'},
      {property: 'og:description', content: 'Ph.D. Behavioral Scientist at The Agency Fund specializing in data science for social impact, AI systems evaluation, and educational interventions.'},
      {property: 'og:image', content: 'https://zezhenwu.com/img/zezhen-profile.jpg'},
      {property: 'og:url', content: 'https://zezhenwu.com'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Zezhen Wu - Behavioral Scientist & Data Scientist'},
      {name: 'twitter:description', content: 'Ph.D. Behavioral Scientist specializing in data science for social impact and AI systems evaluation.'},
      {name: 'twitter:image', content: 'https://zezhenwu.com/img/zezhen-profile.jpg'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
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
          href: 'https://github.com/littlehifive/zezhen-wu-personal-website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Zezhen Wu. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;