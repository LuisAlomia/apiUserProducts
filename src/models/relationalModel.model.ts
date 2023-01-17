import { Category } from "./category.model";
import { Product } from "./product.model";

export const relationInit = (): void => {
  Category.hasMany(Product);
  Product.belongsTo(Category);
};
