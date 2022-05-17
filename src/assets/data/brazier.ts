import { ProductCategory, PartialProductsCategory } from "../../types";
import brazier from '../images/brazier/brazier.jpeg';
import chiken from '../images/brazier/chiken.jpeg';
import fish from '../images/brazier/fish.jpeg';
import wing from '../images/brazier/wing.jpeg';
import miniBrazier from '../images/brazier/mini-brazier.jpeg';

export const brazierData: PartialProductsCategory = [
  {
    title: "Аппетитная куриная грудка с мангала",
    image: chiken,
    price: 330,
    ingredients: "( куриная грудка, соус, лук) 150/50/30 гр",
    category: ProductCategory.Grill,
  },
  {
    title: "Куриные крылышки с хрустящей корочкой",
    image: wing,
    price: 280,
    ingredients: "( куриные крылья, соус, лук) 150/50/30 гр",
    category: ProductCategory.Grill,
  },
  {
    title: "Сет «Пикник»",
    image: brazier,
    price: 2350,
    ingredients: "( свинина, куриная грудка, томаты, шампиньоны, лаваш, соус, лук) 1100 гр",
    category: ProductCategory.Grill,
  },
  {
    title: "Садж «Мангал»",
    image: miniBrazier,
    price: 1600,
    ingredients: "( свинина,куриные крылья, люля из говядины, картофель по деревенски, лук, овощи, лист салата, соус) 660гр",
    category: ProductCategory.Grill,
  },
  {
    title: "Скумбрия на гриле",
    image: fish,
    price: 330,
    ingredients: "( скумбрия, лук, лимон) - 130гр",
    category: ProductCategory.Grill,
  }
];