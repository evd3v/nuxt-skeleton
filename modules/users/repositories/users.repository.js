const userRepository = (axios) => ({
  fetchUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  },
});

export default userRepository;
