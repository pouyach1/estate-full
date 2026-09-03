import { siteConfig } from "@/config/siteConfig";

export function getProperties() {
  return siteConfig.properties.items;
}

export function getProperty(id) {
  return getProperties().find((item) => item.id === id) ?? null;
}

export function getFeaturedProperties() {
  return getProperties().filter((item) => item.featured !== false);
}

export function getSimilarProperties(id, limit = 3) {
  const current = getProperty(id);
  if (!current) return getFeaturedProperties().slice(0, limit);
  return getProperties()
    .filter((item) => item.id !== id)
    .sort((a, b) => {
      const sameNeighborhood =
        Number(b.neighborhood === current.neighborhood) -
        Number(a.neighborhood === current.neighborhood);
      if (sameNeighborhood !== 0) return sameNeighborhood;
      return Math.abs(a.priceValue - current.priceValue) -
        Math.abs(b.priceValue - current.priceValue);
    })
    .slice(0, limit);
}

export function getNeighborhoods() {
  return [...new Set(getProperties().map((item) => item.neighborhood))];
}

export function getAgent(id) {
  return siteConfig.agents.people.find((person) => person.id === id) ?? null;
}

export function getPost(slug) {
  return siteConfig.journal.posts.find((post) => post.slug === slug) ?? null;
}

export function getPosts() {
  return siteConfig.journal.posts;
}
