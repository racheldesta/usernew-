const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    email: { type: DataTypes.STRING, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    location: { type: DataTypes.STRING, allowNull: true },
    profilePicture: { type: DataTypes.STRING },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    role: { type: DataTypes.STRING, allowNull: false },
    verificationToken: { type: DataTypes.STRING },
    verified: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    resetToken: { type: DataTypes.STRING },
    resetTokenExpires: { type: DataTypes.DATE },
    passwordReset: { type: DataTypes.DATE },
    created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE },
    isVerified: {
      type: DataTypes.VIRTUAL,
      get() {
        return !!(this.verified || this.passwordReset);
      }
    }
  };

  const options = {
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ['passwordHash'] }
    },
    scopes: {
      withHash: { attributes: {} }
    }
  };

  return sequelize.define('account', attributes, options);
}