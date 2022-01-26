import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';


export const Navbar = styled(`nav`)`
    background: ${({ scrollNav}) => (scrollNav ? 'var(--color-dark)' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:  1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: background var(--transition-mainnav-color);
    }
`;

export const Navbar__Container = styled(`div`)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const Navbar__Logo = styled(LinkR)`
    color: var(--color-light);
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: color .3s ease-out;
    
    &:hover {
      color: #01bf71;
    }
`;

export const MobileIcon = styled(`div`)`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--color-light);
    
    & > svg {
      width: 25px;
      height: 25px;
    }
    
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const Navbar__Menu = styled(`ul`)`
    display: none;
    
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        margin-right: -22px;
    }
`;

export const Navbar__Item = styled('li')`
    height: 80px;
`;

export const Navbar__Links = styled(LinkS)`
    color: var(--color-light);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;
    transition: color var(--transition-color);
    
    &:hover {
      color: #01bf71;
    };
    
    &.active::before {
    content: '';
    width: 100%;
    position: absolute;
    height: 3px;
    background-color: var(--color-primary);
    bottom: 10px;
    left: 0;
    };
`;

export const Navbar__Btn = styled(`nav`)`
  display: none;
  
  @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
  }
`;

export const Navbar__BtnLink = styled(LinkR)`
    border-radius: var(--border-radius-btn);
    background-color: var(--color-primary);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--color-dark);
    font-size: 1.6rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;
    
    &:hover {
      background-color: var(--color-light);
      color: var(--color-dark);
    }
`;
