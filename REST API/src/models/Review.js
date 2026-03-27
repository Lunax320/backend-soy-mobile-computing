import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


console.log("ENTRA O NO ENTRA");
export const Review = sequelize.define(
    "reviews",
    {

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
        },
        songId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "songs",
                key: "id"
            },
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        reviewText: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
            model: "reviews",
            key: "id"
            },
        },
    }
);