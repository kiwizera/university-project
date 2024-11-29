export default async function getModelImages(id) {
    const site_url = process.env.SITE_URL;
    const res = await fetch(`${site_url}/api/images/${id}`);
    const images = await res.json();

    return images
}
