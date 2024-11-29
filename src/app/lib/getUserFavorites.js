export default async function getUserFavorites(id) {
    const res = await fetch(`${env('SITE_URL')}/api/favorites/${id}`);
    const favorites = await res.json();

    return favorites
}
