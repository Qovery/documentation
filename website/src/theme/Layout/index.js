import React from 'react';

import AnnouncementBar from '@theme/AnnouncementBar';
import Head from '@docusaurus/Head';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import TabGroupChoiceProvider from '@theme/TabGroupChoiceProvider';
import ThemeProvider from '@theme/ThemeProvider';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from 'react-router-dom';

import './styles.css';

// purposefully hardcoded to protect against people copying our site
const VECTOR_HOST = 'https://docs.qovery.com';

function Layout(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {
    title: siteTitle,
    themeConfig: {image: defaultImage},
    url: siteUrl,
  } = siteConfig;
  const {
    children,
    title,
    noFooter,
    description,
    image,
    keywords,
    version,
  } = props;
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaImage = image || defaultImage;
  const metaImageUrl = siteUrl + useBaseUrl(metaImage);
  const location = useLocation();
  let canonURL = location ?
    (VECTOR_HOST + (location.pathname.endsWith('/') ? location.pathname : (location.pathname + '/'))) :
    null;

  return (
    <ThemeProvider>
      <TabGroupChoiceProvider>
        <Head>
          {/* TODO: Do not assume that it is in english language */}
          <html lang="en" />

          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {metaTitle && <title>{metaTitle}</title>}
          {metaTitle && <meta property="og:title" content={metaTitle} />}
          <link rel="icon" href="/favicons/favicon.svg" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
          {description && <meta name="description" content={description} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          {version && <meta name="docsearch:version" content={version} />}
          {keywords && keywords.length && (
            <meta name="keywords" content={keywords.join(',')} />
          )}
          {metaImage && <meta property="og:image" content={metaImageUrl} />}
          {metaImage && (
            <meta property="twitter:image" content={metaImageUrl} />
          )}
          {metaImage && (
            <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
          )}
          {canonURL && (
            <meta property="og:url" content={canonURL} />
          )}
          <meta name="twitter:card" content="summary" />
          {canonURL && (
            <link rel="canonical" href={canonURL} />
          )}
        </Head>
        <AnnouncementBar />
        <Navbar />
        <div className="main-wrapper">{children}</div>
        {!noFooter && <Footer />}
      </TabGroupChoiceProvider>
    </ThemeProvider>
  );
}

export default Layout;
