import React from 'react';
import Link from '../components/Link';
import { useTranslation } from 'react-i18next';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Footer from '../components/footer';

import '../components/translate/i18n';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/search/">Search</Link>
      <h1>{t('welcome')}</h1>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
