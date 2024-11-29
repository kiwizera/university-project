export default async function getOrders(user_id) {
    const res = await fetch(`http://localhost:3000/api/orders/${user_id}`);
    const orders = await res.json();

    return orders
}