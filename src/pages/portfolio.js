import React from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import SEO from "../components/seo";
import Navbar from '../components/Navbar';
import Layout from "../components/layout";
import Projects from "../components/projects";

export default class Portfolio extends React.Component {
    render() {
        /*         const theme = createMuiTheme({
                    palette: {
                        primary: blue,
                        secondary: orange,
                    },
                    status: {
                        danger: 'red',
                    },
                        return (
                            <MuiThemeProvider theme={theme}>
                                <Navbar />
                
                                <Layout location={this.props.location}>
                                    <SEO
                                        title="All posts"
                                        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                                    />
                                    <Projects />
                                </Layout>
                            </MuiThemeProvider>
                }); */
        return (
            <div>
                <Navbar />

                <Layout location={this.props.location}>
                    <SEO
                        title="All posts"
                        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                    />
                    <Projects />
                </Layout>
            </div>
        )
    }
}