import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
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
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        followersCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        followingCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    }
);