type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const unchangebleData: User = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };

  return { ...unchangebleData, ...initialValues };
}

const newUserData = createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
