import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignIn = styled(`section`)`
    min-height: 692px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
   
    background:-moz-radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 1) 9%, rgba(1, 191, 113, 1) 50%, rgba(0, 0, 0, 1) 100%); /* ff 3.6+ */
    background:-webkit-radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 1) 9%, rgba(1, 191, 113, 1) 50%, rgba(0, 0, 0, 1) 100%);/* safari 5.1+,chrome 10+ */
    background:-o-radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 1) 9%, rgba(1, 191, 113, 1) 50%, rgba(0, 0, 0, 1) 100%);/* opera 11.10+ */
    background:-ms-radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 1) 9%, rgba(1, 191, 113, 1) 50%, rgba(0, 0, 0, 1) 100%);/* ie 10+ */
    background:radial-gradient(circle at 0% 0%, rgba(0, 0, 0, 1) 9%, rgba(1, 191, 113, 1) 50%, rgba(0, 0, 0, 1) 100%); /* global 92%+ browsers support */
`;

export const SignIn__FormWrap = styled(`div`)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 480px) {
      height: 80%;
    };
`;

export const SignIn__Logo = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: var(--color-light);
    font-weight: 700;
    font-size: 2rem;
    transition: color var(--transition-color);
    
    &:hover {
      color: var(--color-primary);
    }
`;

export const SingIn__FormContent = styled(`div`)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
     @media screen and (max-width: 480px) {
      padding: 10px;
    }
`;

export const SignIn__Form = styled(`form`)`
    background-color: var(--color-dark);
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    
     @media screen and (max-width: 400px) {
      padding: 32px;
    }
`;

export const SignIn__FormHeading = styled(`h1`)`
    color: var(--color-light);
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 40px;
`;

export const SignIn__FormLabel = styled(`label`)`
    font-size: 0.8rem;
    color: var(--color-light);
    margin-bottom: 8px;
`;

export const SignIn__FormInput = styled(`input`)`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: var(--border-radius);
`;

export const SignIn__FormButton = styled(`button`)`
    background-color: var(--color-primary);
    padding: 16px 0;
    border: none;
    border-radius: var(--border-radius-btn);
    color: var(--color-light);
`;

export const SignIn__FormForgotLink = styled(`span`)`
    color: var(--color-light);
    font-size: 1.2rem;
    text-align: center;
    margin-top: 24px;
    transition: color var(--transition-color);
    cursor: pointer;
    
    &:hover {
      color: var(--color-primary);
    }
`;
