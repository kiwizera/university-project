export default async function getUser(id) {
    const site_url = process.env.SITE_URL;
    const res = await fetch(`${site_url}/api/users/${id}`);
    const user = await res.json();

    return user
}
