import React from "react"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import SEO from "../components/seo"
import Navbar from '../components/Navbar';
import Layout from "../components/layout";

export default class About extends React.Component {

    render() {
        const style = {
            top: '20px'
        };

        const theme = createMuiTheme({
            palette: {
                primary: blue,
                secondary: orange,
            },
            status: {
                danger: 'red',
            },
        });
        //TODO: Set the div style in CSS file
        //TODO: Set images and "contact me" div on the right panel 
        //TODO: Move skills to section as component
        return (
            <MuiThemeProvider theme={theme}>
                <Navbar />
                <Layout location={this.props.location}>
                    <SEO
                        title="All posts"
                        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                    />
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>This Guy...</h1>
                    <div>
                        <div style={{ marginTop: style.top }}>Thanks for coming to my site. I'm Alfonso Lopez, an enthusiastic nerd that's curious about virtually anything, except reality TV shows.</div>

                        <div style={{ marginTop: style.top }}>My career has largely been in some combination of technical account management, project management, and sales. My passions largely lie in the evolving technical landscape and generating the most value for my clients by advising them how best they can devote their resouces from a project management point of view.</div>

                        <div style={{ marginTop: style.top }}>I'm a full-stack web developer with a bit of a passing interest in React and machine learning and divide my time between those two areas of development. In short, I am experienced with the following technologies:
                        <ul>
                                <li>Python</li>
                                <li>TensorFlow</li>
                                <li>Pandas</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Node.js</li>
                                <li>Handlebars.js</li>
                                <li>React.js</li>
                                <li>SQL/MySQL</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                                <li>AWS</li>
                                <li>Heroku</li>
                                <li>And plenty of other popular technologies/libraries under JS and Python I haven't mentioned</li>
                            </ul>
                        </div>

                        <div style={{ marginTop: style.top }}>
                            When not coding or working with clients, I am usually reading or jealously watching someone else's pet. I am a huge fan of whisk(e)ys and look for local tastings.
                        </div>
                        <br />
                    </div>

                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>This Site...</h1>
                    <div>
                        <div style={{ marginTop: style.top }}>This site was developed using Gatsby.js with the React framework. The blog posts are written in markdown and queried using GraphQL. Much of the style and a few of the UI components are borrowed from the Material UI framework.</div>
                    </div>
                    <br />
                </Layout>
            </MuiThemeProvider >
        )
    }
}