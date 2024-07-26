const { Type } = require('@sinclair/typebox');

const UserSchema = Type.Object({
  name: Type.String({ minLength: 3, maxLength: 30 }),
  email: Type.String({ format: 'email' }),
  password: Type.String({ minLength: 6 }),
  role: Type.Optional(Type.Enum(['admin', 'user']))
});

const LoginSchema = Type.Object({
  email: Type.String({ format: 'email' }),
  password: Type.String({ minLength: 6 })
});

module.exports = {
  UserSchema,
  LoginSchema
};