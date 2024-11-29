export default async function getOrders(user_id) {
    const site_url = process.env.SITE_URL;
    const res = await fetch(`${site_url}/api/orders/${user_id}`);
    const orders = await res.json();

    return orders
}
