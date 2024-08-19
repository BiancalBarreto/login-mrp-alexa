type Users = User[];

type User = {
  createdAt: string;
  name: string;
  email: string;
  password: string;
  id: string;
};

type UserStack = {
  Cadastro: { id: string };
  Login: {id: string}
};

type AuthUser = {
  id: number;
  image: string;
  token: string;
}

export { Users, User, UserStack, AuthUser };