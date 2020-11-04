import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/gatsby-icon.png'
import bgImage from '../images/pro-amore-equitum.jpg'
import styled from 'styled-components'
// background: #717e8e;

const HeaderWrapper = styled.div`
  // background-image: url("https://res.cloudinary.com/abadfish/image/upload/v1604331524/blog/pro-amore-equitum.jpg");
  background: url("${bgImage}");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  // background: #d3d3d3;
  margin-bottom: 0.45rem;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;


const Header = ({ siteTitle, data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Logo"/>
        </Link>
      </h1>
      <nav>
          <p>
            <Link to='/'>Home</Link>
          </p>
          <p>
            <Link to='/about'>About</Link>
          </p>
          <p>
            <Link to='/page-2'>Page 2</Link>
          </p>
      </nav>

    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
