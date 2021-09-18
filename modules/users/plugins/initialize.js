export default async function ({ $usersService }) {
  await $usersService.getUsers();
}
