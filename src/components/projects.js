import * as React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import H2 from '../styles/H2';
import { Card, CardContent, CardHeader, CardActions, CardMedia, CardActionArea } from '@material-ui/core';
import cx from 'clsx';

import TextInfoCardContent from '@mui-treasury/components/cardContent/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useText04CardContentStyles } from '@mui-treasury/styles/cardContent/text04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';




function Projects() {

  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 343,
      margin: '16',
      borderRadius: 12,
      padding: 12,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    media: {
      borderRadius: 6,
    },
  }));

  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useText04CardContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
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
                    openGraphImageUrl
                    url
                    description
                    viewerHasStarred
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
      }) => {
        return (<Container
          maxWidth="xl"
          id="projects"
        >
          <H2>My Projects</H2>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
            spacing={6}
          >
            {edges.map(({ node }) => ((node.viewerHasStarred === true) ?
              <Grid
                item
                key={node.id}
                xs={6}
                style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
              >
                <Card
                  className={cx(styles.root, shadowStyles.root)}
                  style={{
                    textAlign: 'center',
                    display: 'block',
                    width: '30vw',
                    justifyContent: "space-between",
                    height: '100%'
                  }}
                >
                  <CardMedia
                    className={cx(styles.media, mediaStyles.root)}
                    image={node.openGraphImageUrl}
                  />
                  <CardContent className={styles.content}>
                    <CardHeader title={node.name} />
                    <TextInfoCardContent
                      classes={textCardContentStyles}
                      overline={node.title}
                      heading={node.title}
                      body={
                        node.description
                      }
                    />
                  </CardContent>
                  <CardActionArea>
                    <CardActions style={{ justifyContent: 'center' }}>
                      <Button
                        size="small"
                        variant="outlined"
                      >
                        <a
                          key={node.id}
                          href={node.url}
                          as="a"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {node.name}
                        </a>
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
              : null))}
          </Grid>
        </Container>);
      }}
    />
  )
}

export default Projects 