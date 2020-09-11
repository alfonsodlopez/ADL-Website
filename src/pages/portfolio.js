import React from "react";
import SEO from "../components/seo";
import Navbar from '../components/Navbar';
import Layout from "../components/layout";
import Projects from "../components/projects";

export default class Portfolio extends React.Component {
    render() {
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