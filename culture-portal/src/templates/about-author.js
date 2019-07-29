import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Link from '../components/Link';

import Layout from '../components/layout';


export default function Template(props) {
  const { data } = props;
  console.log('template data: ', props);
  const { frontmatter } = data.javascriptFrontmatter;
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="blog-post">
        <Link to="/">{t('Home')}</Link>
        <br />
        <Link to="/search">Search</Link>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.birth}</p>
        <p>{frontmatter.description}</p>
        <img alt="" style={{ width: '200px' }} src={frontmatter.authorImage} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    javascriptFrontmatter(frontmatter: {path: {eq: $path}}) {
    frontmatter {
      birth
      title
      description
      authorImage
    }
  }
  }
`;

// const AboutAuthor = () => (
//   <Layout>
//     <Link to="/page-1/">Home</Link>
//     <Link to="/page-2/">List of Authors</Link>
//     <h1>Author name</h1>
//     <p>About author</p>
//     <p>Here timeline</p>
//     <p>Photo Exhibitions</p>
//     <Button>I am Video</Button>
//     <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//       <Image />
//     </div>
//   </Layout>
// );
