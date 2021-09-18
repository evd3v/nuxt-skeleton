<template>
  <div>
    TEST ENV: {{ $config.baseURL }}
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'Index',
  // async mounted() {
  //   await this.$usersService.getUsers();
  // },
};
</script>
