import { DataTypes } from "sequelize";
import sequelize from "../lib/db.js";

const Candidate = sequelize.define("Candidate", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  commScore: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  reactScore: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  expressScore: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  dsaScore: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  notes: {
    type: DataTypes.TEXT,
  },
});

export default Candidate;
