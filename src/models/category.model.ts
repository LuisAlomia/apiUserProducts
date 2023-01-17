import { DataTypes } from "sequelize";

import { sequelize } from "../database/connectDb";
import { Category as CategoryEntity } from "../categories/category.entity";

export const Category = sequelize.define<CategoryEntity>(
  "category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);
