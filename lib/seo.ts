export const siteUrl = "https://www.cedarmountainstays.com";

export const siteName = "Cedar Mountain Stays";

export const siteDescription =
  "Luxury cabins, condos, and mountain retreats for Southern Utah adventures near Brian Head, Duck Creek, Panguitch Lake, Cedar Breaks, Bryce Canyon, and Zion.";

export const contactPhone = "+14359904004";

export const contactEmail = "brianhead@skyrun.com";

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteUrl).toString();
}

export function pageTitle(title: string): string {
  return `${title} | ${siteName}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "LodgingBusiness"],
    "@id": absoluteUrl("/#organization"),
    name: siteName,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.png"),
    image: absoluteUrl("/icon.png"),
    description: siteDescription,
    telephone: contactPhone,
    email: contactEmail,
    areaServed: [
      "Brian Head, Utah",
      "Duck Creek Village, Utah",
      "Panguitch Lake, Utah",
      "Cedar Breaks National Monument",
      "Bryce Canyon National Park",
      "Zion National Park",
      "Southern Utah",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brian Head",
      addressRegion: "UT",
      addressCountry: "US",
    },
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteName,
    url: absoluteUrl("/"),
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
