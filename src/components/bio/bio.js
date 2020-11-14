import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import './bio.scss';

// https://www.gatsbyjs.org/docs/static-query/

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <>
            <div className="bio">
              <Image
                className="bio__avatar"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
              />

              <p>
                <span
                  className="bio__hand"
                  role="img"
                  aria-label="a waving hand"
                >
                  👋🏻
                </span>{' '}
                <strong>Hi, I&#39;m Ricky noviansyah</strong>. I am a software developer, Network enginerring, System enginerring, DevOps
                in Tangerang 🎸 that enjoys solving interesting problems and
                making cool things for the web.
              </p>
            </div>
          </>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/ricky_gatsby.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`;

export default Bio;
