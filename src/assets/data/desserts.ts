import { PartialProductsCategory, ProductCategory } from "../../types";
import cheesecake from '../images/desserts/cheesecake.jpeg';
import fruits from '../images/desserts/fruits.jpeg';
import honey from '../images/desserts/honey.jpeg';

export const dessertsData: PartialProductsCategory = [
  {
    title: "Чизкейк",
    image: cheesecake,
    price: 260,
    ingredients: "120гр",
    category: ProductCategory.Desserts,
  },
  {
    title: "Тирамису",
    image: fruits,
    price: 280,
    ingredients: "125гр",
    category: ProductCategory.Desserts,
  },
  {
    title: "Медовик",
    image: honey,
    price: 240,
    ingredients: "120гр",
    category: ProductCategory.Desserts,
  }
];