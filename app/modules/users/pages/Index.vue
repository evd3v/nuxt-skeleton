<template>
  <div>
    TEST ENV: {{ $config.baseURL }}
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>
