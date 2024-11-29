export default async function getUser(id) {
    const res = await fetch(`/api/users/${id}`);
    const user = await res.json();

    return user
}