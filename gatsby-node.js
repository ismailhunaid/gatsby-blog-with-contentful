const path = require('path')

module.exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions
    const huffazTemplate = path.resolve('./src/templates/huffazTemplate.js')

    const response= await graphql(`
    query MyQuery {
        allContentfulHuffaz {
          edges {
            node {
              slug
            }
          }
        }
      }
      
    
    `

    );

response.data.allContentfulHuffaz.edges.forEach((edge)=>{
    createPage({
        component:huffazTemplate,
        path:`inspirational-stories/${edge.node.slug}`,
        context:{
            slug:edge.node.slug
        }

    })
})

};



    