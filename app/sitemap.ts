import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wrapflow.site";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/wrap-cost-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/wheel-fitment-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/job-timeline-estimator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/vinyl-material-estimator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog/vehicle-wrap-cost-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/vehicle-wrap-vs-paint`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/how-long-does-a-wrap-last`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/quoted-too-low-lost-money`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/wheels-rub-after-install`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/missed-install-deadline`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/ran-out-of-vinyl-mid-job`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/client-says-quote-too-high`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/wrap-bubbling-lifting`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/spacers-vs-new-wheels`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/ppf-vs-vinyl-pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/how-a-car-gets-wrapped`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/diy-vs-professional-wrap`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/wrap-removal-damaged-paint`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/wrinkles-on-bumpers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/stunning-wrap-transformations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/chrome-color-shift-wraps`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/best-wrap-colors-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/cost-to-wrap-truck-suv`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}