import { DataTypes } from "sequelize";

import { sequelize } from "../database/connectDb";
import { Product as ProductEntity } from "../products/product.entity";

export const Product = sequelize.define<ProductEntity>("Product", {
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
});
