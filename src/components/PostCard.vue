<template>
  <article class="mb-8">
    <div>
      <g-image alt="Cover image" v-if="post.coverImage" :src="post.coverImage" />
    </div>
    <div>
      <g-link :to="post.path"><h3 class="font-semibold mb-1" v-html="post.title" /></g-link>
      <p class="mb-2" v-html="post.description" />

      <post-meta :post="post" />
      <post-tags :post="post" />
    </div>
  </article >
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style>
</style>
