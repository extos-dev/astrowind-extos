import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Extensions', href: getPermalink('/extensions') },
    { text: 'How we build', href: getPermalink('/#principles') },
    { text: 'FAQ', href: getPermalink('/#faqs') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [
    {
      text: 'Talk to us',
      href: getPermalink('/contact'),
      icon: 'tabler:mail',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Extensions',
      links: [
        { text: 'All extensions', href: getPermalink('/extensions') },
        { text: 'TabWize Data Extractor', href: getPermalink('/extensions/tabwize-data-extractor') },
        { text: 'InvoiceSnap Local', href: getPermalink('/extensions/invoicesnap-local') },
        { text: 'Extension Security Audit', href: getPermalink('/extensions/extension-security-audit') },
      ],
    },
    {
      title: 'How we build',
      links: [
        { text: 'Principles', href: getPermalink('/#principles') },
        { text: 'Local-first', href: getPermalink('/#local-first') },
        { text: 'FAQ', href: getPermalink('/#faqs') },
        { text: 'About', href: getPermalink('/about') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/extos-dev' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:hello@extos.win' },
  ],
  footNote: `
    © ${new Date().getFullYear()} <a class="text-blue-600 underline dark:text-muted" href="https://extos.win">ExtOS.win</a> · No cookies, no trackers.
  `,
};

// Kept for the RSS route if the blog is ever re-enabled.
export const rssFeedUrl = getAsset('/rss.xml');
