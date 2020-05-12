import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import LargeTitle from "../components/large-title";
import SubNavigation from "../components/sub_navigation";
import BreakLine from "../components/Break-line";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { navItems } from "../config/about-nav-items";

export const AboutPageTemplate = ({ title, content }) => {
  return (
    <div>
      <div className="govuk-width-container main-height">
        <BreakLine pixels={"40"}/>
        <div className="grid-row">
          <div className="column-one-quarter">
            <SubNavigation navItems={navItems}/>
          </div>
          <div className="column-five-eighths">
            <LargeTitle text={title}/>
            <MDXRenderer>{content}</MDXRenderer>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { mdx: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        content={post.body}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
