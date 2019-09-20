<template>
  <div id="app">
    <header v-if="showLogo" class="mb-12">
      <logo  />
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="border-t border-gray-500 text-sm my-8 pt-4 text-gray-500">
      <span >Copyright © {{ new Date().getFullYear() }}. </span>
      <span >Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
  }
}
</script>

<style></style>
