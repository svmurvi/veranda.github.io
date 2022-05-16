import { Product, ProductCategory } from "../../types";

const categories = [
  { name: "Мангал", key: ProductCategory.Grill },
  { name: "Европейская", key: ProductCategory.Europe },
  { name: "Японская", key: ProductCategory.Japan },
  { name: "Напитки", key: ProductCategory.Drinks },
];

const product: Partial<Product> = {
  title: "Калифорния",
  text: "Этот ролл является ярким представителем смешения различных кулинарных традиций, то есть фьюжн блюдом. В классический ролл Калифорния входят огурец, краб и авокадо, однако в последнее время для придания более нежного вкуса в его состав повсеместно стали включать японский омлет и майонез.",
  image: "https://jasushi.ru/wp-content/uploads/2018/05/kaliforniia.jpg",
  price: 290,
  ingredients:
    "Рис, огурец, крем краб, икра тобико оранжевая, креветка тигровая в панировке, соус унаги, кунжут белый",
  category: ProductCategory.Grill,
};

const getProduct = (category: ProductCategory) => {
  return {
    ...product,
    category,
  };
};

const products = [
  ...new Array(15).fill(getProduct(ProductCategory.Grill)),
  ...new Array(15).fill(getProduct(ProductCategory.Drinks)),
  ...new Array(15).fill(getProduct(ProductCategory.Japan)),
  ...new Array(15).fill(getProduct(ProductCategory.Europe)),
];

export { categories, products };
