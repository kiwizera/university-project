export default async function getUserFavorites(id) {
    const res = await fetch(`/api/favorites/${id}`);
    const favorites = await res.json();

    return favorites
}