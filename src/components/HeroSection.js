import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { GlobalStyle } from '../GlobalStyle';

const HeroSection = ({myData}) => {
    const {name} = myData;

  return (
    <Wrapper>
        
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>{name}</h1>
                    <p>
                     The Moon is a barren, rocky world without air and water. It has dark lava plain on 
                     its surface. The Moon is filled wit craters. It has no light of its own. It gets 
                     its light from the Sun. The Moo keeps changing its shape as it moves round the
                      Earth. It spins on its axis in 27.3 days stars were named after the Edwin Aldrin
                       were the first ones to set their foot on the Moon on 21 July 1969 They reached
                        the Moon in their space craft named Apollo II.
                    </p>
                    <NavLink>
                        <Button>Shop Now</Button>
                    </NavLink>

                </div>

                <div className='hero-section-image'>
                    <figure>
                        <img src='miami_beach.jpg' alt='ICON' className='image-style'/>
                    </figure>

                </div>

            </div>

        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 35rem;
    height: 35rem;
  }

  .container {
    max-width: 110rem;
    margin: 0 auto;
  }
  
  .grid {
    display: grid;
    gap: 9rem;
  }
  
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  
  }
  

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection