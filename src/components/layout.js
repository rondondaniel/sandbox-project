import * as React from 'react';
import PropTypes from "prop-types"
import { Link , useStaticQuery, graphql } from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
  } from './layout.module.css';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  } 
  `)

  return (
      <div className={container}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to='/' className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/about' className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to='/blog' className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
        <Footer />
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout