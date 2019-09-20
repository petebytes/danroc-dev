<template>
	<g-link class="font-mono text-pink-500" to="/">
	  &larr; {{ $static.metadata.siteName }}
	</g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style >

</style>
