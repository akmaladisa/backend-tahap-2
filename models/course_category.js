// const {Course} = require("../models");

module.exports = (sequelize, DataTypes) => {
  const CourseCategory = sequelize.define(
    "CourseCategory",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
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
      tableName: "course_categories",
      timestamps: true
    }
  );

  CourseCategory.associate = (models) => {
    CourseCategory.hasMany(models.Course, {
      foreignKey: 'course_category_id'
    })
  };

  return CourseCategory;
}