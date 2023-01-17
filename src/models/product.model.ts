import { DataTypes } from "sequelize";

import { sequelize } from "../database/connectDb";
import { Product as ProductEntity } from "../products/product.entity";
import { Category } from "./category.model";

export const Product = sequelize.define<ProductEntity>("product", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    field: "category_id",
    references: {
      key: "id",
      model: Category,
    },
  },
});
