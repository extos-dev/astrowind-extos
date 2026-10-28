import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Extensions',
      href: getPermalink('/#extensions'),
    },
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faqs'),
    },
    {
      text: 'Blog & Guides',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    {
      text: 'Chrome Web Store',
      href: 'https://chromewebstore.google.com',
      target: '_blank',
      icon: 'tabler:brand-chrome',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Extensions',
      links: [
        { text: 'Tab OS', href: getPermalink('/#extensions') },
        { text: 'Clip OS', href: getPermalink('/#extensions') },
        { text: 'Prompt OS', href: getPermalink('/#extensions') },
        { text: 'Focus OS', href: getPermalink('/#extensions') },
      ],
    },
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'FAQ', href: getPermalink('/#faqs') },
        { text: 'Changelog & Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About ExtOS', href: getPermalink('/about') },
        { text: 'Contact & Support', href: getPermalink('/contact') },
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
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: 'https://x.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} <a class="text-blue-600 underline dark:text-muted" href="https://extos.win">ExtOS.win</a> · All rights reserved.
  `,
};
