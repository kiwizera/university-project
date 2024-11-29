export default async function getModel(id) {
    const res = await fetch(`https://pi-3-eta.vercel.app//api/models/${id}`);
    const model = await res.json();

    return model
}