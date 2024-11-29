export default async function getUser(id) {
    const res = await fetch(`${process.env.SITE_URL}/api/users/${id}`);
    const user = await res.json();

    return user
}