import React from 'react';
import styled from 'styled-components';

const CreateStar = ({ filled }) => {
  const starClassName = filled ? 'star-filled' : 'star-empty';

  return (
    <Wrapper>
    <span className={`star ${starClassName}`}>
      &#9733; {/* Unicode star character */}
    </span>

    </Wrapper>
   
  );
};

const Wrapper = styled.section`

`

export default CreateStar;