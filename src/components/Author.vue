<template>
	<div class="flex flex-wrap justify-between items-center">
		<!-- <g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="180" height="180" blur="5" /> -->
		<h1 v-if="showTitle" class="font-mono text-pink-600 mb-4">
			{{ $static.metadata.siteName }}
		</h1>
		<ul class="flex mb-4">
			<li class="mr-2 font-base"><a href="//twitter.com/danrocc"  target="_blank" rel="nofollow"><font-awesome :icon="['fab', 'twitter']" class="hover:text-yellow-400"></font-awesome></a></li>
			<li class="mr-2 font-base"><a href="//github.com/danrocha" target="_blank" rel="nofollow"><font-awesome :icon="['fab', 'github']" class="hover:text-blue-400"></font-awesome></a></li>
			<li class="mr-2 font-base"><a href="//linkedin.com/in/danrocha" target="_blank" rel="nofollow"><font-awesome :icon="['fab', 'linkedin']" class="hover:text-green-400"></font-awesome></a></li>
		</ul>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
		siteDescription
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style>

</style>
