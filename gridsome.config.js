// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const purgecss = require('@fullhuman/postcss-purgecss');
const tailwind = require('tailwindcss');

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

module.exports = {
  siteName: 'danroc.dev',
  siteDescription:
    'My dev side. Check out the architect side.',

  templates: {
    Post: '/:slug',
    Tag: '/tag/:id',
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
};
