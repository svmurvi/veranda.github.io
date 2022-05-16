enum ProductCategory {
  Grill = "grill",
  Europe = "europe",
  Japan = "japan",
  Drinks = "drinks",
}

type Product = {
  title: string;
  text: string;
  price: number;
  image: string;
  ingredients: string;
  category: ProductCategory;
};

export { ProductCategory };

export type { Product };
