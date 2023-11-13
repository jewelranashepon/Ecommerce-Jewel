import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
        <h2 className="common-heading">Contact Page</h2>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.247648122126!2d90.42207424603482!3d23.825286502266334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1697901223100!5m2!1sen!2sbd"
         width="80%" 
         height="450" 
         style={ {border:0} } 
         allowFullScreen="" 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade">

        </iframe>

        <div className="container">
          <div className="contact-form">

            <form action="https://formspree.io/f/mjvqlked"
             method="POST" className="contact-inputs">
           
                <input type="text" name="username" placeholder="username" required autoComplete="off"/>
       
                <input type="text" name="Email" placeholder="Email" required autoComplete="off" />
                       
                <textarea
                  name="Meaasge"
                  placeholder="Enter your message"
                  cols="30"
                  rows="10"
                  autoComplete="off"
                  required>
                 </textarea>
            
              <input type="submit" value="submit" />

            </form>

          </div>

        </div>
        
        

      
    </Wrapper>
  )
}


const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;


export default Contact