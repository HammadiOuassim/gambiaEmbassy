export function serviceSlug(label: string) {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function serviceTitle(slug: string) {
  const words = slug.replace(/-/g, " ").trim();
  if (!words) return "This service";
  return words.charAt(0).toUpperCase() + words.slice(1);
}
