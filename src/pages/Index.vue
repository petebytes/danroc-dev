<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <section class="mb-4">
      <author :show-title="true" />
    </section>
    <div class="home">
      <section class="content mb-8 sm:ml-12 sm:mb-12 md:w-1/2 lg:m-0 lg:w-full">
        <p>
        I'm <strong>Daniel da Rocha</strong>, a Brazilian architect and web developer.
        </p><p>
        I apply skills learned in architecture to my development efforts: the ability to deal with complex problems, to devise simple and elegant solutions, and to deal with
        diverse and complex team configurations.
        </p>
        <p>
          I am currently building <strong>Awarded</strong>, The Architecture List, The Foreign Architect, and Berlin Architectural Network.
        </p>
        <dl>
          <dt class="text-gray-500 uppercase text-xs trackign wide">Homebase</dt>
          <dd>🇩🇪Berlin</dd>
          <dt class="text-gray-500 uppercase text-xs trackign wide">Currently in</dt>
          <dd>🇧🇷S&atilde;o Paulo</dd>
        </dl>
      </section>
      <section></section>
      <section></section>
      <!-- List posts -->
      <section class="posts">
        <h2 class="uppercase text-base tracking-wide text-gray-500 mb-4">Latest articles</h2>
        <div class="post-grid sm:ml-12 md:w-1/2 lg:w-full lg:ml-0 xl:w-2/3">
          <post-card v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
      </section>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.posts h2::before {
    display: block;
    content: "";
    @apply w-24 mb-2 border-t-2 border-blue-400;
}
@screen lg {
  .home {
    display: grid;
    grid-template-columns: 30% 1fr;
    grid-gap: 2rem;
  }
}
</style>
