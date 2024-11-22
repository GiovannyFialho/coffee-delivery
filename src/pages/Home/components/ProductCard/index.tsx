import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useContext, useState } from "react";

import { CartContext } from "@/contexts/CartContext";
// import { ProductProps } from "@/reducers/reducer";

import { defaultTheme } from "@/styles/theme/default";

import { QuantityProduct } from "@/components/QuantityProduct";

import {
  Badge,
  BadgeText,
  ButtonBuy,
  Container,
  ContainerBadge,
  Control,
  Order,
  Price,
  Subtitle,
  Thumb,
  Title
} from "@/pages/Home/components/ProductCard/styles";

interface ProductCardProps {
  id: number;
  image: string;
  badges: string[];
  title: string;
  subtitle: string;
  price: number;
}

export function ProductCard({ id, image, badges, title, subtitle, price }: ProductCardProps) {
  const { addProduct } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddItem() {
    setIsClicked(true);
    addProduct({ id, image, badges, title, subtitle, price, quantity });
    setQuantity(1);

    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  }

  return (
    <Container>
      <Thumb src={image} alt="" />

      <ContainerBadge>
        {badges.map((badge, index) => (
          <Badge key={index}>
            <BadgeText>{badge}</BadgeText>
          </Badge>
        ))}
      </ContainerBadge>

      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Control>
        <Price>
          R$
          <span>
            {price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </span>
        </Price>

        <Order>
          <QuantityProduct
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <ButtonBuy onClick={handleAddItem} purchased={`${isClicked}`}>
            {isClicked ? (
              <CheckFat size={20} color={defaultTheme["base-card"]} weight="fill" />
            ) : (
              <ShoppingCart size={20} color={defaultTheme["base-card"]} weight="fill" />
            )}
          </ButtonBuy>
        </Order>
      </Control>
    </Container>
  );
}
