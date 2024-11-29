import styles from './checkout-content.module.css';
import AuthActions from '../actions/auth-actions';
import Container from '@/components/container';
import { cookies } from 'next/headers';
import AuthService from '../services/auth-service';

export default async function CheckoutContent({ data }) {

    function numberWithPoint(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }

    const formatedModelPrice = numberWithPoint(data.price);
    const formatedShippingPrice = numberWithPoint(1000);
    const formatedTotalPrice = numberWithPoint(data.price + 1000);

    const jwt = (await cookies()).get('session').value;
    const {sub} = await AuthService.openSessionToken(jwt);

    const orderData = {
        usuario_id: sub,
        produto_id: data.id,
        pedido_preco: data.price
    }

    return (
        <div className={styles.content} id='checkout'>
            <Container>
                <div className={styles.checkout}>
                    <div className={styles.form}>
                        <h2>Endereço de entrega</h2>
                        <form action={AuthActions.createShippingAndOrder}>
                            <input type='text' id='logradouro' name='logradouro' placeholder='Logradouro' required />
                            <input type='text' id='nome' name='nome' placeholder='Endereço' required />
                            <input type='text' id='numero' name='numero' placeholder='Número' required />
                            <input type='text' id='complemento' name='complemento' placeholder='Complemento' required />
                            <input type='text' id='cep' name='cep' placeholder='CEP' required />
                            <input type='text' id='cidade' name='cidade' placeholder='Cidade' required />
                            <input type='text' id='estado' name='estado' placeholder='Estado' required />

                            <input type='text' id='usuario_id' name='usuario_id' className={styles.hidden_input} value={orderData.usuario_id} readOnly required />
                            <input type='text' id='produto_id' name='produto_id' className={styles.hidden_input} value={orderData.produto_id} readOnly required />
                            <input type='text' id='pedido_preco' name='pedido_preco' className={styles.hidden_input} value={orderData.pedido_preco} readOnly required />

                            <input type='submit' value='Concluir pedido' />
                        </form>
                    </div>
                    <div className={styles.checkout_content}>
                        <h2>Informações do Pedido</h2>
                        <p>Tempo de entrega: até 30 dias</p>
                        <p>Garantia com a loja: 90 dias</p>
                        <hr />
                        <div>
                            <p>Subtotal</p>
                            <span className={styles.price}>R$ {formatedModelPrice}</span>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <span className={styles.price}>R$ {formatedShippingPrice}</span>
                        </div>
                        <hr />
                        <div>
                            <p>Total</p>
                            <span className={styles.price}>R$ {formatedTotalPrice}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}