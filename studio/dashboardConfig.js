export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '62a3b4f531930f19bf78e0ec',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bn5pmnsa',
                  apiId: '1d20c426-2ab9-43b8-b7dd-b4c7b9ffe001'
                },
                {
                  buildHookId: '62a3b4f6af906f17d9619aa5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9jsicvf6',
                  apiId: '21d3afd2-e615-44aa-a5b6-b133fd14d282'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GeauxWeisbeck4/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9jsicvf6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
