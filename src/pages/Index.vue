<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <section class="mb-4">
      <author :show-title="true" />
    </section>
    <div class="home">
      <section class="mb-8 content sm:ml-12 sm:mb-12 md:w-1/2 lg:m-0 lg:w-full">
        <p>
        I'm <strong>Daniel da Rocha</strong>, a Brazilian architect and web developer.
        </p>
        <p>
        I apply skills learned in architecture to my development efforts: the ability to deal with complex problems, to devise simple and elegant solutions, and to deal with
        diverse and complex team configurations.
        </p>
        <p>
          Things I am currently building include: <a href="//awarded.to" target="_blank" class="font-semibold link">Awarded</a>,
          <a href="//thearchitecturelist.com" target="_blank" class="font-semibold link">The Architecture List</a>,
          <a href="//theforeignarchitect" target="_blank" class="font-semibold link">The Foreign Architect</a>,
          and <strong>Berlin Architectural Network</strong> (WIP).
        </p>
        <dl class="flex mt-8">
          <div class="mr-8">
            <dt class="text-xs text-gray-500 uppercase trackign wide">Homebase & Currently in</dt>
            <dd>🇩🇪Berlin</dd>
          </div>
          <!-- <div>
            <dt class="text-xs text-gray-500 uppercase trackign wide">Currently in</dt>
            <dd>also 🇩🇪 Berlin</dd>
          </div> -->
        </dl>
      </section>
      <section></section>
      <section></section>
      <!-- List posts -->
      <section class="posts">
        <h2 class="mb-4 text-base tracking-wide text-gray-500 uppercase">Latest articles</h2>
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
