// const {CourseCategory} = require("../models/course_category");

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      course_category_id: {
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
      tableName: "courses",
      timestamps: true
    }
  );

  // Course.belongsTo(CourseCategory);
  // Course.associate = ()
  Course.associate = (models) => {
    Course.belongsTo(models.CourseCategory, {
      foreignKey: 'course_category_id'
    });

    Course.hasMany(models.UserCourse, {
      foreignKey: 'course_id'
    })
  }


  return Course;
}