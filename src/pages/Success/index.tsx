import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "@/contexts/CartContext";

import delivery from "@/assets/delivery.svg";
import { defaultTheme } from "@/styles/theme/default";

import { Container, Heading, Info, InfoContent, Order } from "@/pages/Success/styles";

export function Success() {
  const { orders } = useContext(CartContext);

  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));

  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro"
  };

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={defaultTheme.white}
                style={{ backgroundColor: defaultTheme.purple }}
                size={32}
              />

              <div>
                <span>
                  Entrega em{" "}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                color={defaultTheme.white}
                style={{ backgroundColor: defaultTheme.yellow }}
                size={32}
              />

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={defaultTheme.white}
                style={{ backgroundColor: defaultTheme["yellow-dark"] }}
                size={32}
              />

              <div>
                <span>Pagamento na entrega</span>

                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>

      <img src={delivery} alt="Pedido concluído" />
    </Container>
  );
}
