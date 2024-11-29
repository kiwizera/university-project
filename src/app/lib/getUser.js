export default async function getUser(id) {
    const res = await fetch(`https://pi-3-eta.vercel.app//api/users/${id}`);
    const user = await res.json();

    return user
}