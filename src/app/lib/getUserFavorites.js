export default async function getUserFavorites(id) {
    const res = await fetch(`http://localhost:3000/api/favorites/${id}`);
    const favorites = await res.json();

    return favorites
}