import expressoAmericano from "@/assets/coffee-types/americano.png";
import arabe from "@/assets/coffee-types/arabe.png";
import cafeComLeite from "@/assets/coffee-types/cafe-com-leite.png";
import expressoGelado from "@/assets/coffee-types/cafe-gelado.png";
import capuccino from "@/assets/coffee-types/capuccino.png";
import chocolateQuente from "@/assets/coffee-types/chocolate-quente.png";
import cubano from "@/assets/coffee-types/cubano.png";
import expressoCremoso from "@/assets/coffee-types/expresso-cremoso.png";
import expresso from "@/assets/coffee-types/expresso.png";
import havaiano from "@/assets/coffee-types/havaiano.png";
import irlandes from "@/assets/coffee-types/irlandes.png";
import latte from "@/assets/coffee-types/latte.png";
import macchiato from "@/assets/coffee-types/macchiato.png";
import mochaccino from "@/assets/coffee-types/mochaccino.png";

export const products = [
  {
    id: 1,
    title: "Expresso Tradicional",
    subtitle: "O tradicional café feito com água quente e grãos moídos",
    badge: ["Tradicional"],
    image: expresso,
    price: 9.9
  },
  {
    id: 2,
    title: "Expresso Americano",
    subtitle: "Expresso diluído, menos intenso que o tradicional",
    badge: ["Tradicional"],
    image: expressoAmericano,
    price: 9.9
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    subtitle: "Café expresso tradicional com espuma cremosa",
    badge: ["Tradicional"],
    image: expressoCremoso,
    price: 9.9
  },
  {
    id: 4,
    title: "Expresso Gelado",
    subtitle: "Bebida preparada com café expresso e cubos de gelo",
    badge: ["Tradicional", "Gelado"],
    image: expressoGelado,
    price: 9.9
  },
  {
    id: 5,
    title: "Café com Leite",
    subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
    badge: ["Tradicional", "Com leite"],
    image: cafeComLeite,
    price: 9.9
  },
  {
    id: 6,
    title: "Latte",
    subtitle: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    badge: ["Tradicional", "Com leite"],
    image: latte,
    price: 9.9
  },
  {
    id: 7,
    title: "Capuccino",
    subtitle: "Bebida com canela feita de doses iguais de café, leite e espuma",
    badge: ["Tradicional", "Com leite"],
    image: capuccino,
    price: 9.9
  },
  {
    id: 8,
    title: "Macchiato",
    subtitle: "Café expresso misturado com um pouco de leite quente e espuma",
    badge: ["Tradicional", "Com leite"],
    image: macchiato,
    price: 9.9
  },
  {
    id: 9,
    title: "Mocaccino",
    subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
    badge: ["Tradicional", "Com leite"],
    image: mochaccino,
    price: 9.9
  },
  {
    id: 10,
    title: "Chocolate Quente",
    subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    badge: ["Especial", "Com leite"],
    image: chocolateQuente,
    price: 9.9
  },
  {
    id: 11,
    title: "Cubano",
    subtitle: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    badge: ["Especial", "Alcoólico", "Gelado"],
    image: cubano,
    price: 9.9
  },
  {
    id: 12,
    title: "Havaiano",
    subtitle: "Bebida adocicada preparada com café e leite de coco",
    badge: ["Especial"],
    image: havaiano,
    price: 9.9
  },
  {
    id: 13,
    title: "Árabe",
    subtitle: "Bebida preparada com grãos de café árabe e especiarias",
    badge: ["Especial"],
    image: arabe,
    price: 9.9
  },
  {
    id: 14,
    title: "Irlandês",
    subtitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    badge: ["Especial", "Alcoólico"],
    image: irlandes,
    price: 9.9
  }
];
