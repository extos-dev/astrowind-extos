/**
 * The three extensions built so far, described from their shipped manifests and
 * store-listing copy in `Workspace/Builds/`.
 *
 * Availability is deliberately explicit: no product has a public Chrome Web
 * Store listing yet. When one goes live, set `storeUrl` here and every page,
 * card and button picks it up.
 */

export type Availability = 'pipeline' | 'review' | 'live';

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductPermission {
  name: string;
  why: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  icon: string;
  version: string;
  availability: Availability;
  storeUrl?: string;
  formats?: string[];
  features: ProductFeature[];
  permissions: ProductPermission[];
  dataNote: string;
}

export function availabilityLabel(product: Product): string {
  if (product.storeUrl) return 'Available on the Chrome Web Store';
  if (product.availability === 'review') return 'In Chrome Web Store review';
  return 'Pre-release — no public listing yet';
}

export const products: Product[] = [
  {
    slug: 'tabwize-data-extractor',
    name: 'TabWize Data Extractor',
    shortName: 'TabWize',
    tagline: 'Turn any page into a clean dataset',
    summary:
      'Point it at a table, a list, a card grid or an article and export clean CSV, Excel, JSON or Markdown — including pages that only load as you scroll.',
    description:
      'TabWize Data Extractor reads the page you are already looking at and turns the part you want into a structured file. It works in a side panel: choose a table, list, card grid or article, check the preview, then export. Pages that load more rows as you scroll can be captured in one pass, and a capture you repeat can be saved as a recipe instead of rebuilt from scratch.',
    icon: 'tabler:table',
    version: '0.1.0',
    availability: 'pipeline',
    formats: ['CSV', 'Excel (XLSX)', 'JSON', 'Markdown'],
    features: [
      {
        title: 'Four kinds of structure',
        description: 'Detects tables, lists, card grids and article bodies instead of dumping raw HTML.',
        icon: 'tabler:list-details',
      },
      {
        title: 'Infinite scroll capture',
        description: 'Keeps collecting rows while the page loads more, so long feeds come out complete.',
        icon: 'tabler:arrows-down-up',
      },
      {
        title: 'Reusable recipes',
        description: 'Save the selection and column mapping, then re-run the same capture on another page.',
        icon: 'tabler:bookmark',
      },
      {
        title: 'Clean exports',
        description: 'Preview and edit before exporting to CSV, XLSX, JSON or Markdown.',
        icon: 'tabler:download',
      },
      {
        title: 'Side-panel workspace',
        description: 'The capture UI lives in the side panel, so the page stays visible while you work.',
        icon: 'tabler:layout-sidebar-right',
      },
    ],
    permissions: [
      {
        name: 'Read the current page',
        why: 'Runs only when you start a capture, to read the table, list or article you selected.',
      },
      { name: 'Downloads', why: 'Saves the exported file to your computer.' },
      { name: 'Storage', why: 'Keeps your recipes and settings locally, in Chrome storage.' },
      { name: 'Side panel', why: 'Hosts the capture and preview interface.' },
      { name: 'Clipboard', why: 'Lets you copy a capture instead of downloading it.' },
      { name: 'Lemon Squeezy', why: 'Only used if you activate a Pro licence; handles the licence check.' },
    ],
    dataNote:
      'Captures are processed on your device and written straight to a local file. The only outbound request is an optional Pro licence check with Lemon Squeezy.',
  },
  {
    slug: 'invoicesnap-local',
    name: 'InvoiceSnap Local',
    shortName: 'InvoiceSnap',
    tagline: 'Invoices to spreadsheets, without uploading files',
    summary:
      'Pull invoice fields out of PDFs and images and export accounting-ready CSV, XLSX or JSON. The OCR runs in your browser, on your machine.',
    description:
      'InvoiceSnap Local is for the pile of invoices that arrive as PDFs and phone photos. Drop them in and it reads the fields you need — vendor, date, number, totals, tax — then exports a file your bookkeeping tools can open. Recognition runs in an in-browser worker with an offscreen document; the extension has no server of its own and your documents are not uploaded.',
    icon: 'tabler:file-invoice',
    version: '1.0.0',
    availability: 'pipeline',
    formats: ['CSV', 'Excel (XLSX)', 'JSON'],
    features: [
      {
        title: 'PDF and image input',
        description: 'Handles scanned invoices and photographed receipts, not just text-based PDFs.',
        icon: 'tabler:photo-scan',
      },
      {
        title: 'On-device OCR',
        description: 'Text recognition runs in a bundled worker; no document is sent to a server.',
        icon: 'tabler:scan',
      },
      {
        title: 'Accounting-ready exports',
        description: 'One row per invoice in CSV, XLSX or JSON, with the fields your bookkeeping needs.',
        icon: 'tabler:file-spreadsheet',
      },
      {
        title: 'Batch review',
        description: 'See extracted values side by side and correct anything the OCR got wrong before exporting.',
        icon: 'tabler:checklist',
      },
    ],
    permissions: [
      { name: 'Side panel', why: 'Hosts the invoice queue and review screen.' },
      { name: 'Storage', why: 'Keeps your working queue and settings locally.' },
      { name: 'Downloads', why: 'Saves the exported spreadsheet or JSON file.' },
      { name: 'Offscreen document', why: 'Runs OCR off the visible page so the panel stays responsive.' },
    ],
    dataNote:
      'Your invoices are processed in an in-browser worker and are never uploaded. The extension has no backend of its own.',
  },
  {
    slug: 'extension-security-audit',
    name: 'Extension Security Audit',
    shortName: 'Security Audit',
    tagline: 'See what every extension in your browser can do',
    summary:
      'A local inventory of your installed extensions, the permissions each one holds, and a transparent 0–100 risk score — checked against a public list of known-malicious IDs.',
    description:
      'Most people install extensions once and never look again. Extension Security Audit lists everything installed in Chrome, shows the permissions each extension actually holds, and scores the risk with reasons you can read — a suspicious permission adds points, a match against a known-malicious list adds a lot more. The scoring is a plain, auditable heuristic, not a black box, and the list of known-malicious extension IDs is a public CC BY 4.0 dataset.',
    icon: 'tabler:shield-check',
    version: '1.0.0',
    availability: 'pipeline',
    features: [
      {
        title: 'Full inventory',
        description: 'Every installed extension with its version, install type and enabled state.',
        icon: 'tabler:list',
      },
      {
        title: 'Readable risk score',
        description:
          'Each point traces to a specific reason: a sensitive permission, broad host access, a sideloaded build.',
        icon: 'tabler:gauge',
      },
      {
        title: 'Known-malicious check',
        description: 'Compares installed IDs against a public list of roughly 7,300 known-malicious extensions.',
        icon: 'tabler:bug-off',
      },
      {
        title: 'Works offline',
        description: 'A bundled snapshot is used when the daily blocklist refresh cannot reach GitHub.',
        icon: 'tabler:wifi-off',
      },
      {
        title: 'New-risk alerts',
        description: 'A local notification when a newly installed extension scores high or critical.',
        icon: 'tabler:bell',
      },
    ],
    permissions: [
      {
        name: 'Manage extensions',
        why: 'Reads the list of installed extensions, their permissions and states. Read-only.',
      },
      { name: 'Storage', why: 'Caches the scan and blocklist locally.' },
      { name: 'Alarms', why: 'Schedules the daily blocklist refresh and rescan.' },
      { name: 'Notifications', why: 'Shows a local alert for newly installed high-risk extensions.' },
      { name: 'GitHub raw content', why: 'Fetches the public blocklist JSON once a day. No user data is sent.' },
    ],
    dataNote:
      'Scanning and scoring stay on your device. The only network request is an anonymous GET for the public blocklist; nothing about your extensions is transmitted.',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
