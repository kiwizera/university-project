export default async function getUserFavorites(id) {
    const site_url = process.env.SITE_URL;
    const res = await fetch(`${site_url}/api/favorites/${id}`);
    const favorites = await res.json();

    return favorites
}
