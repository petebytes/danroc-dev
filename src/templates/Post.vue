<template>
  <Layout>
    <article class="md:w-2/3 lg:pl-8  xl:w-1/2">
      <header>
        <h1 class="font-semibold leading-tight mb-8">
          {{ $page.post.title }}
        </h1>

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
      </section>

      <author class="post-author" />
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
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style>
@screen sm {
  .post-content p, .post-content h3, .post-content ul, .post-content ol  {
    @apply ml-8;
  }
}
@screen md {
  .post-content p, .post-content h3, .post-content ul, .post-content ol  {
    @apply ml-12;
  }
  .content pre {
    @apply -mr-48;
  }
}

.content p, .content ul, .content ol {
  @apply mb-4;
}
.content ul > li::before {
  content: "×";
  @apply font-bold text-pink-500 mr-2;
}
.content ol {
  @apply list-decimal;
}
.content h2 {
  @apply mt-8 mb-2;
}
.content h2::before {
    display: block;
    content: "";
    @apply w-24 mb-2 border-t-2 border-blue-400;
}
.content-code {
  @apply inline-block font-mono text-sm bg-gray-100 text-black rounded border border-gray-200;
}
.content pre {
  @apply font-mono text-sm bg-gray-100  my-8 w-auto overflow-x-scroll p-4 rounded border border-gray-200;
}

</style>
