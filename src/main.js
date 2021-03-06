import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
import VueDisqus from 'vue-disqus'

import '~/assets/main.css';
import 'prismjs/themes/prism.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faLinkedin, faPinterest);

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.use(VueDisqus)
}
