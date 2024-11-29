export default async function getModelImages(id) {
    const res = await fetch(`http://localhost:3000/api/images/${id}`);
    const images = await res.json();

    return images
}