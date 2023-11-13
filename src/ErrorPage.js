import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'>

      <h2>404</h2>
      <h3>UH OH! You're lost.</h3>
      <p>
        The page you are looking for doesn't exist. How you got here is a mystery. But you can click the 
        button below to go back to the homepage.
      </p>

      <NavLink to='/'>
        <Button>Go Homepage</Button>

      </NavLink>

      </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.0rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage