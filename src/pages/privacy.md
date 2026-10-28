---
title: 'Privacy Policy'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: 28 October 2026

This policy covers the ExtOS.win website and the Chrome extensions published under the ExtOS.win name: TabWize Data Extractor, InvoiceSnap Local and Extension Security Audit. It describes what is processed, where it happens, and what leaves your device.

## The short version

- **This website** is a set of static pages. No cookies, no analytics, no advertising, no accounts.
- **The extensions** process your data on your device. There is no ExtOS account and no ExtOS backend that stores your content.
- **We do not sell data** and we do not share it with advertisers or data brokers.
- **Network requests are named.** Where an extension contacts a server, the product page and this policy say which one and why.

## This website

The site is built as static files and served through Cloudflare. It does not set cookies, load analytics scripts, embed third-party trackers, or use advertising pixels. There is no comment system and no login.

Cloudflare processes standard request metadata (such as IP address, requested URL, user agent and timestamp) to deliver the site and protect it from abuse. That processing is governed by Cloudflare's own privacy terms. We do not build profiles from it and we do not combine it with data from the extensions.

If you email us, your email address and the contents of your message are processed by our email provider so that we can read and answer it. We keep correspondence for as long as needed to resolve the matter and meet legal obligations.

## The extensions

All three extensions are Manifest V3 and run their core work locally. None of them requires an ExtOS account.

### What is stored locally

Settings, saved recipes, working queues and cached scan results are stored with the Chrome storage API on your device. Chrome removes extension storage when you uninstall the extension. Files you export are saved wherever you choose and are not managed by us.

### TabWize Data Extractor

Page content is read only when you start a capture, and is processed in the extension to build the export you asked for. Captures are not uploaded. If you activate a paid licence, the extension validates the licence key with Lemon Squeezy; that request carries the licence key and technical data needed for validation, and Lemon Squeezy's privacy policy applies to the purchase and the validation.

### InvoiceSnap Local

PDFs and images you add are processed in an in-browser worker using a bundled OCR engine. Your documents are not uploaded and the extension has no backend of its own. Exported files are written directly to your device.

### Extension Security Audit

The extension reads the list of installed extensions and their declared permissions through Chrome's management API. Scanning and scoring happen on-device and the results stay in local storage. Once a day the extension makes an anonymous request to `raw.githubusercontent.com` to download a public list of known-malicious extension IDs; no information about your extensions or your browsing is sent. If the request fails, a bundled snapshot is used.

## Payments

When a paid licence is offered, checkout is handled by a third-party payment provider named at checkout (currently Lemon Squeezy for TabWize). The provider processes your payment details and tax information under its own privacy policy. We receive the information needed to confirm a licence — typically an email address, order reference and licence status — and never see or store full card details.

## What we do not do

- We do not sell personal data.
- We do not use browsing history, page content, invoices or extension inventories for advertising.
- We do not run cross-site tracking or build advertising profiles.
- We do not require an account to use an extension.

## Your rights

Depending on where you live, you may have the right to access, correct, delete or port personal data, to object to processing, or to lodge a complaint with a supervisory authority. Because the extensions keep their data on your device, the most direct route is to use the extension's own settings or uninstall it. For anything held on our side — essentially email correspondence and licence status — write to [hello@extos.win](mailto:hello@extos.win) and we will respond within the period required by applicable law.

## Children

The website and extensions are not directed at children under 13, and we do not knowingly collect personal data from them.

## Changes

If this policy changes materially, the date at the top of this page changes and the new version applies from that date. Continued use of the website or an extension after an update means you accept the updated policy.

## Contact

Privacy questions and data requests: [hello@extos.win](mailto:hello@extos.win). Security reports: same address, with `security` in the subject line.
