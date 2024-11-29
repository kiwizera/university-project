export default async function getUserFavorites(id) {
    const res = await fetch(`https://pi-3-eta.vercel.app//api/favorites/${id}`);
    const favorites = await res.json();

    return favorites
}