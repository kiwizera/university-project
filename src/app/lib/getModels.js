export default async function getModel(id) {
    const res = await fetch(`http://localhost:3000/api/models/${id}`);
    const model = await res.json();

    return model
}