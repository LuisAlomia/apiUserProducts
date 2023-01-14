import { DataTypes } from "sequelize";

import { sequelize } from "../database/connectDb";
import { User as UserEntity } from "../users/user.entity";

export const User = sequelize.define<UserEntity>("User", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM("administrator", "cashier"),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    validate: {
      max: 80,
      min: 18,
    },
  },
});
