import { PartialProductsCategory, ProductCategory } from "../../types";
import greek from '../images/salad/greek.jpeg';
import royal from '../images/salad/royal.jpeg';
import summer from '../images/salad/summer.jpeg';

export const saladData: PartialProductsCategory = [
  {
    title: "Греческий",
    image: greek,
    price: 290,
    ingredients: "(Огурцы, томаты ,сыр фета, лук репчатый, салат айсберг, маслины, перец болгарский, масло оливковое) 170 гр.",
    category: ProductCategory.Salad,
  },
  {
    title: "Королевский",
    image: royal,
    price: 360,
    ingredients: "(Курица отварная, шампиньоны, лук репчатый, яйцо, сыр, соус шосетсу) 170 гр",
    category: ProductCategory.Salad,
  },
  {
    title: "Летний",
    image: summer,
    price: 230,
    ingredients: "(Огурцы, томаты, салат айсберг, масло подсолнечное, зелень)170 гр.",
    category: ProductCategory.Salad,
  }
];