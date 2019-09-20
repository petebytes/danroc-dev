<template>
   <section class="text-sm uppercase text-gray-500 tracking-wide">
      Posted {{ post.date }}.
      <template v-if="post.timeToRead">
        {{ post.timeToRead }} min read.
      </template>
    </section>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style>

</style>
