import Sidebar from "@/components/sidebar";
import styles from './page.module.css';
import { cookies } from "next/headers";
import AuthService from "@/modules/auth/services/auth-service";
import getUser from "@/app/lib/getUser";
import getUserFavorites from "@/app/lib/getUserFavorites";
import FavoritesList from "@/components/favoritesList";

export default async function Favoritos() {

    const jwt = (await cookies()).get('session').value;
    const {sub} = await AuthService.openSessionToken(jwt);

    const resUser = await getUser(sub);
    const user = resUser.user

    const resFavorites = await getUserFavorites(sub);
    const favorites = resFavorites.favorites;

    return (
        <div className={styles.page}>
            <Sidebar data={user} active='favoritos' />
            <div className={styles.content}>
                <h1>Meus favoritos</h1>
                <FavoritesList favorites={favorites} />
            </div>
        </div>
    );
}
  