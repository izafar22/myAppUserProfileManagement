
const User = require('./user');
const Role = require('./role');

User.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(User, { foreignKey: 'roleId' });

module.exports.User = User;
module.exports.Role = Role;