import { useContext } from "react";

import { CartContext } from "@/contexts/CartContext";
import { ProductProps } from "@/reducers/reducer";

import { PurchaseActions } from "@/pages/Home/components/PurchaseActions";

import {
  Badge,
  BadgeText,
  Container,
  ContainerBadge,
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
  const { addProduct, removeProduct } = useContext(CartContext);

  function handleUpdatePriceProduct(price: number) {
    if (price <= 0) {
      return removeProduct(id);
    }

    const product: ProductProps = {
      id,
      image,
      badges,
      title,
      subtitle,
      price
    };

    addProduct(product);
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

      <PurchaseActions price={price} totalPrice={(price) => handleUpdatePriceProduct(price)} />
    </Container>
  );
}
