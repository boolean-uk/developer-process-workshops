import { Menu, ProductExtendedData, Product } from "../types";

const extendMenu = (menu: Menu, titles: Array<ProductExtendedData>): Menu => {
  menu.categories.forEach((category) => {
    category.products = extendProducts(category.products, titles);
  });

  return menu;
};

const extendProducts = (products: Array<Product>, titles: Array<ProductExtendedData>): Array<Product> => {
  return products.map((product) => {
    const foundTitle = titles.find((item) => item.id === product.id);

    if (!foundTitle) return product;

    return {
      ...product,
      title: foundTitle.title,
    };
  });
};

export default extendMenu;
