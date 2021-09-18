<template>
  <div class="default">
    <TheNavbar />
    <nuxt />
  </div>
</template>

<script>
import TheNavbar from '~/components/global/TheNavbar';

export default {
  name: 'DefaultLayout',
  components: { TheNavbar },
};
</script>
