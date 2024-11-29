export default async function getOrders(user_id) {
    const res = await fetch(`https://pi-3-eta.vercel.app//api/orders/${user_id}`);
    const orders = await res.json();

    return orders
}