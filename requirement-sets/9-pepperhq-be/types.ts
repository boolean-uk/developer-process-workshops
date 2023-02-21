import { Response } from "express";

type ResponsePlus = {
  originalSend: Function
}

export type AugmentedResponse = Response & ResponsePlus;

type BaseProduct = {
  id: string;
  price: number;
};

type CompleteProduct = {
  id: string;
  title: string;
  price: number;
};

export type Product = BaseProduct | CompleteProduct;

export type ProductExtendedData = {
  id: string;
  title: string;
};

type ItemCategory = {
  id: string;
  products: Array<Product>;
};

export type Menu = {
  categories: Array<ItemCategory>;
};
