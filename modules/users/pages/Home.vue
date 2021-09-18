<template>
  <div>
    hello I'm users page
    <nuxt-link :to="{ name: 'home' }">back to home</nuxt-link>

    <SharedBaseCard />
    <TestComponent />
  </div>
</template>

<script>
import TestComponent from '@users/components/TestComponent';
import SharedBaseCard from '~/components/_shared/BaseCard';

export default {
  name: 'Home',
  components: { SharedBaseCard, TestComponent },
};
</script>
