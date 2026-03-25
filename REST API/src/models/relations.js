import { User } from "./User.js";
import { Review } from "./Review.js";
import { Follower } from "./Follower.js";

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


    User.belongsToMany(User, {
        through: Follower,
        as: "following",
        foreignKey: "followerId",
        otherKey: "followingId",
    })

    User.belongsToMany(User, {
        through: Follower,
        as: "followers",
        foreignKey: "followingId",
        otherKey: "followerId",
    })

}