import { hotData } from './hot';
import { PartialProductsCategory, ProductCategory } from "../../types";
import { brazierData } from "./brazier";
import { dessertsData } from "./desserts";
import { saladData } from "./salad";

const categories = [
  { name: "Мангал", key: ProductCategory.Grill },
  { name: "Горячие блюда", key: ProductCategory.Hot },
  { name: "Салаты", key: ProductCategory.Salad },
  { name: "Десерты", key: ProductCategory.Desserts },
];

const getProduct = (category: ProductCategory, categoryProducts: PartialProductsCategory) => categoryProducts.map(product => ({...product, category}));

const products = [
  ...getProduct(ProductCategory.Grill, brazierData),
  ...getProduct(ProductCategory.Desserts, dessertsData),
  ...getProduct(ProductCategory.Salad, saladData),
  ...getProduct(ProductCategory.Hot, hotData),
]

export { categories, products };
