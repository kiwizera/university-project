export default async function getModelImages(id) {
    const res = await fetch(`${process.env.SITE_URL}/api/images/${id}`);
    const images = await res.json();

    return images
}