import UsersService from '@users/services/users.service';

export default function ({ $axios, store }, inject) {
  const usersService = new UsersService($axios, store);

  inject('usersService', usersService);
}
