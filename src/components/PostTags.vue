<template>
  <section class="text-sm text-gray-500">
    <g-link v-for="tag in post.tags" :key="tag.id" :to="tag.path" class="link mr-2">
      #{{ tag.title }}
    </g-link>
  </section>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style >

</style>
