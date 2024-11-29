export default async function getModelImages(id) {
    const res = await fetch(`/api/images/${id}`);
    const images = await res.json();

    return images
}