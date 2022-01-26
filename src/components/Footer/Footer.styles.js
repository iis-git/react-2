import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled(`footer`)`
    background-color: var(--color-footer-bg);
`;

export const Footer__Wrapper = styled(`div`)`
    padding: 48px 24px 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const Footer__LinksContainer = styled(`div`)`
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: 820px) {
      padding-top: 32px;
      flex-wrap: wrap;
    }
`;

export const Footer__LinksWrapper = styled(`div`)`
    display: flex;
    
    @media screen and (max-width: 820px) {
      flex-direction: column;
    }
`;

export const Footer__LinkItems = styled(`div`)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align-last: left;
    width: 160px;
    box-sizing: border-box;
    color: var(--color-light);
    
    @media screen and (max-width: 420px) {
      margin: 0;
      padding: 10px;
      width: 100%;
    }
`;

export const Footer__LinkTitle = styled(`span`)`
    font-size: 1.4rem;
    margin-bottom: 16px;
    font-weight: 700;
`;

export const Footer__Link = styled(Link)`
    color: var(--color-light);
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    transition: color var(--transition-color);
    
    &:hover {
      color: var(--color-primary);
    }
`;

export const Footer__Social = styled(`div`)`
    max-width: 1000px;
    width: 100%;
`;

export const Footer__SocialWrapper = styled(`div`)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0;
    
    @media screen and (max-width: 820px) {
      flex-direction: column;
    }
`;

export const Footer__Logo = styled(Link)`
    color: var(--color-light);
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: 700;
    transition: color var(--transition-color);
    
    &:hover {
      color: var(--color-primary);
    }
`;

export const Footer__Copyright = styled(`small`)`
    color: var(--color-light);
    margin-bottom: 16px;
`;

export const Footer__SocialIcons = styled(`div`)`
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 240px;
`;

export const Footer__SocialLink = styled(`a`)`
    color: var(--color-light);
    font-size: 2.4rem;
    transition: color var(--transition-color);
    
    &:hover {
      color: var(--color-primary);
    }
`;
