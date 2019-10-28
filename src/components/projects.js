import * as React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import H2 from '../styles/H2';
import Content from '../styles/Content.js';
import { CardContent, CardHeader, CardActions } from '@material-ui/core';

function Projects() {
  return (
    <StaticQuery
      query={graphql`
			{
				github {
					repositoryOwner(login: "alfonsodlopez") {
              repositories(first: 6, orderBy: {field: STARGAZERS, direction: DESC}) {
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
            <H2>My Projects</H2>
            <Grid
              container
              spacing={2}
              direction="column"
              alignItems="stretch"
            >
              {edges.map(({ node }) => (
                <Grid item xs={12}>
                  <Card>
                    <Content>
                      <CardHeader
                        title={node.name}
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {node.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">
                          <a
                            key={node.id}
                            href={node.url}
                            as="a"
                            target="_blank"
                            rel="noopener noreferrer"
                          >Repository
                          </a>
                        </Button>
                      </CardActions>
                    </Content>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </ Container>
        )}
    />
  )
}

export default Projects 