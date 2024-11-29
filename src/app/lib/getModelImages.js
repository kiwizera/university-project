export default async function getModelImages(id) {
    const res = await fetch(`https://pi-3-eta.vercel.app//api/images/${id}`);
    const images = await res.json();

    return images
}