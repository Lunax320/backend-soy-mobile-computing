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
        bio: {
            type: DataTypes.STRING(160),
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING(100),
            allowNull: true,
            validate: {
                isUrl: true,
            },
        },
        profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        coverImage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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