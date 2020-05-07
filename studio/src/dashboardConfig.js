export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb3e733cd3e6067f60b72c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7q54pi4a',
                  apiId: '316615e8-e5cf-4bb3-aa3f-f4e9678ed537'
                },
                {
                  buildHookId: '5eb3e73378f00272416badec',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-51v7ubaz',
                  apiId: '49f08616-16d6-42a4-9643-b356b8ac040f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/falafelinthesky/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-51v7ubaz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
