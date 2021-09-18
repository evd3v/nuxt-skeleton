import userRepository from '@users/repositories/users.repository';

export default class UsersService {
  constructor($axios, store) {
    this.userRepository = userRepository($axios);
    this.store = store;
  }

  async getUsers() {
    const { data } = await this.userRepository.fetchUsers();
    this.store.commit('users/SET_USERS', data);
  }
}
