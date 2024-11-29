import Sidebar from "@/components/sidebar";
import styles from './page.module.css';
import { cookies } from "next/headers";
import getUser from "../lib/getUser";
import AuthService from "@/modules/auth/services/auth-service";
import getOrders from "../lib/getOrders";
import OrdersList from "@/components/ordersList";

export default async function Garagem() {

    const jwt = (await cookies()).get('session').value;
    const {sub} = await AuthService.openSessionToken(jwt);

    const resUser = await getUser(sub);
    const user = resUser.user;

    const resOrders = await getOrders(sub);
    const orders = resOrders.orders;

    return (
        <div className={styles.page}>
            <Sidebar data={user} active='garagem' />
            <div className={styles.content}>
                <h1>Meus pedidos</h1>
                <OrdersList orders={orders} />
            </div>
        </div>
    );
}
  