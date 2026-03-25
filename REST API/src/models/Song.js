import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Song = sequelize.define(
    "songs",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        songImage: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }
);