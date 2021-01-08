/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react"
import { Helmet } from "react-helmet"
import CardLayout from "../../components/CardLayout"
import styled from 'styled-components';
import Signin from "../../components/Signin"

const Container = styled.div`
height:100vh;
justify-content:center;
align-items:center;
display:flex;
`

const HomePage = ({history}) => (
  <Container>
  <article>
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="A React.js Boilerplate application homepage"
      />
    </Helmet>
      <CardLayout>
        <Signin history={history}/>
      </CardLayout>
  </article>
  </Container>
)

export default HomePage
