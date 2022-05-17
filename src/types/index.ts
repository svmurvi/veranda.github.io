enum ProductCategory {
  Grill = "grill",
  Hot = "hot",
  Salad = "salad",
  Desserts = "desserts",
}

type PartialProduct = Partial<Product>;
type PartialProductsCategory = PartialProduct[];
type ProductsCategory = PartialProduct[] & Pick<Product, 'category'>;

type Product = {
  title: string;
  text: string;
  price: number;
  image: string;
  ingredients: string;
  category: ProductCategory;
};

export { ProductCategory };

export type { Product, PartialProduct, PartialProductsCategory, ProductsCategory };
