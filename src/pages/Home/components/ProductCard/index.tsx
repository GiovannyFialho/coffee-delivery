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
  image: string;
  badges: string[];
  title: string;
  subtitle: string;
  price: number;
}

export function ProductCard({
  image,
  badges,
  title,
  subtitle,
  price
}: ProductCardProps) {
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

      <PurchaseActions price={price} />
    </Container>
  );
}
