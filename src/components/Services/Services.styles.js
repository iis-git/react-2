import styled from 'styled-components';

export const ServicesSection = styled(`section`)`
    height: 800px;
    display: flex;    
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    background-color: var(--color-dark); 
    
    @media screen and (max-width: 768px) {
      height: 1250px;
    }
    
     @media screen and (max-width: 480px) {
      height: 1400px;
    }
`;

export const Services__Wrapper = styled(`div`)`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 60px;
    padding: 0 50px;
    
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }
`;

export const Services__Card = styled(`div`)`
    background: var(--color-light);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: var(--border-radius);
    max-height: 340px;
    padding: 30px;
    box-shadow: var(--box-shadow);
    transition: all var(--transition-transform);
    
    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
`;

export const Services__Icon = styled(`img`)`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesHeading = styled(`h2`)`
    font-size: 3.5rem;
    color: var(--color-light);
    margin-bottom: 64px;
   
   @media screen and (max-width: 480px) {
    font-size: 2rem;
   }
`;

export const Services__CardHeading = styled(`h3`)`
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 700;
`;

export const Services__CardText = styled(`p`)`
    font-size: 1.5rem;
    text-align: center;
`;
