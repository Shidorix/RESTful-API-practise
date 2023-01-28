const path = require('path');
const { sequelize } = require('../DB');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    photo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    gender: {
        type: DataTypes.ENUM(['male', 'female']),
        allowNull: true
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },


}, {
    indexes: [
        { allowNull: false, unique: true, fields: ['email'] },
        { allowNull: false, fields: ['password'] },
        { allowNull: false, fields: ['first_name'] },
        { allowNull: false, fields: ['last_name'] },
        { allowNull: true, fields: ['country'] },
        { allowNull: true, fields: ['city'] },
    ],
    // Other model options go here
    tableName: 'users',
    timestamps: false
});

module.exports = { User };