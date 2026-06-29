import { absoluteUrl, siteDescription, siteName } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteName}

> ${siteDescription}

${siteName} is a premium Southern Utah mountain hospitality brand focused on Brian Head, Duck Creek, Panguitch Lake, Cedar Breaks, Bryce Canyon, Zion, and nearby mountain communities.

## Primary Pages

- Homepage: ${absoluteUrl("/")}
- Homes: ${absoluteUrl("/homes")}
- Experiences: ${absoluteUrl("/experiences")}
- Why Cedar Mountain: ${absoluteUrl("/why-cedar-mountain")}
- Team: ${absoluteUrl("/team")}
- Owner Income Estimator: ${absoluteUrl("/income-estimator")}

## Core Topics

- Brian Head cabin rentals and mountain retreats
- Duck Creek and Panguitch Lake stays
- Southern Utah ski, snowboard, hiking, mountain biking, fishing, and family travel
- Owner-focused hospitality, housekeeping, guest service, and technology

## Contact

- Phone: 435-990-4004
- Email: brianhead@skyrun.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
