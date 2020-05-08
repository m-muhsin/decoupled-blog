import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default NotFoundPage;
