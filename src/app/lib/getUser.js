export default async function getUser(id) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const user = await res.json();

    return user
}