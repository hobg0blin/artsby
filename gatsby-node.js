const express = require(`express`)
const path = require("path")
const {createFilePath, loadNodeContent} = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript and CSS build
  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
// Enable development support for serving HTML from `./static` folder
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`static`))
}

exports.createPages = async ({graphql, actions, reporter}) =>  {
  const { createPage } = actions

  const result = await graphql(
    `{
  allFile(filter: {base: {eq: "index.html"}}) {
    edges {
      node {
        id
        absolutePath
        relativePath
        internal {
          content
        }
      }
    }
  }
}
`
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const workTemplate = path.resolve(`src/templates/work.js`)
  result.data.allFile.edges.forEach(async ({ node }) => {
    const content = await loadNodeContent(node)
    const url =  node.relativePath.split('/')[0]
    const path = 'works/' + url  +'/view.html'
    createPage({
      path,
      component: workTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        content: content,
        url: url
      }
    })
  })
}
