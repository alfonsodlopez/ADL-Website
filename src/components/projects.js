import * as React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Projects() {
  return (
    <StaticQuery
      query={graphql`
			{
				github {
					repositoryOwner(login: "alfonsodlopez") {
              repositories(first: 8, orderBy: {field: STARGAZERS, direction: DESC}) {
                edges {
                  node {
                    id
                    name
                    url
                    description
                  }
                }
              }
            }
          }
        }
          `}
      render={({
        github: {
          repositoryOwner: {
            repositories: { edges },
          },
        },
      }) => (
          <Container maxWidth="md" id="projects">
            <h2>Projects</h2>
            <Grid>
              {edges.map(({ node }) => (
                <div
                  key={node.id}
                  as="a"
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card>
                    <div>
                      <h4>{node.name}</h4>
                      <p>{node.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </Grid>
          </Container>
        )}
    />
  )
}

export default Projects 