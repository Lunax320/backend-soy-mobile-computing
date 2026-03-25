import { User } from "./User.js";
import { Review } from "./Review.js";

export function setupRelations(){
    User.hasMany(Review, {
        foreignKey: "userId",
        as: "reviews",
        onDelete: "cascade",
        hooks: true
    });

    Review.belongsTo(User, {
        foreignKey: "userId",
        as: "user"
    });
}