<template>
  <Layout>
    <article class="md:w-2/3 lg:pl-8  xl:w-1/2">
      <header>
        <h1 class="font-semibold leading-tight mb-8">
          {{ $page.post.title }}
        </h1>
        <author class="post-author" />
        <post-meta :post="$page.post" class="mb-4"/>

      </header>

      <section>
        <section class="post__header">
          <g-image alt="Cover image" v-if="$page.post.coverImage" :src="$page.post.coverImage" />
        </section>

        <section class="content post-content mb-12" v-html="$page.post.content" />

        <footer class="mb-8">
          <post-tags :post="$page.post" />
        </footer>
      </section>

      <section class="post-comments">
        <!-- Add comment widgets here -->
        <vue-disqus shortname="danroc-dev" :identifier="$page.post.title"></vue-disqus>
      </section>


    </article>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
  }
}
</page-query>

<style>


</style>
