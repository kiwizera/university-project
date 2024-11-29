export default async function getModel(id) {
    const res = await fetch(`/api/models/${id}`);
    const model = await res.json();

    return model
}