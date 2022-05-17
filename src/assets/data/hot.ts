import { PartialProductsCategory, ProductCategory } from "../../types";
import borsch from '../images/hot/borsch.jpeg';
import chickenNoodles from '../images/hot/chickenNoodles.jpeg';
import mushroom from '../images/hot/mushroom.jpeg';

export const hotData: PartialProductsCategory = [
  {
    title: "Борщ",
    image: borsch,
    price: 280,
    ingredients: "(Бульон говяжий, лук, морковь, картофель, капуста белокочанная, свекла, перец, зелёный лук) 250гр",
    category: ProductCategory.Hot,
  },
  {
    title: "Куриная лапша",
    image: chickenNoodles,
    price: 230,
    ingredients: "(Куриный бульон, курица, лапша домашняя) 250 гр",
    category: ProductCategory.Hot,
  },
  {
    title: "Грибная лапша",
    image: mushroom,
    price: 230,
    ingredients: "(Бульон куриный, шампиньоны, лапша домашняя, лук, морковь, зелень) 250 гр",
    category: ProductCategory.Hot,
  }
];