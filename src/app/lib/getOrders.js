export default async function getOrders(user_id) {
    const res = await fetch(`${process.env.SITE_URL}/api/orders/${user_id}`);
    const orders = await res.json();

    return orders
}