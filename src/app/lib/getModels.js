export default async function getModel(id) {
    const site_url = process.env.SITE_URL;
    const res = await fetch(`${site_url}/api/models/${id}`);
    const model = await res.json();

    return model
}
