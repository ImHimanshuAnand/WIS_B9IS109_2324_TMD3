import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Himanshu',
    email: 'himanshu@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'test',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
