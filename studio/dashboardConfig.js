export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '62bdc87e740ce937ee0942ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vmewosma',
                  apiId: '2fb35e81-d34b-47d4-9ccb-4119b0003dcb'
                },
                {
                  buildHookId: '62bdc87ebe6f8437634c451d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hgbnvic3',
                  apiId: '7426af15-63bb-4a6f-8255-a672e23cf3e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kashifulhaque/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hgbnvic3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
