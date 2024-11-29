export default async function getModel(id) {
    const res = await fetch(`${process.env.SITE_URL}/api/models/${id}`);
    const model = await res.json();

    return model
}
