const {Course} = require("../models");
const {User} = require("../models");

module.exports = (sequelize, DataTypes) => {
  const UserCourse = sequelize.define(
    "UserCourse",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      users_id: {
        type: DataTypes.BIGINT
      },
      course_id: {
        type: DataTypes.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at"
      }
    },
    {
      tableName: "user_courses",
      timestamps: true
    }
  );

  // UserCourse.belongsTo(Course);
  // UserCourse.belongsTo(User)

  UserCourse.associate = (models) => {
    UserCourse.belongsTo(models.User, {
      foreignKey: 'users_id'
    });

    UserCourse.belongsTo(models.Course, {
      foreignKey: 'course_id'
    });
  }

  return UserCourse

}