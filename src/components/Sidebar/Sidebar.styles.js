import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

export const Sidebar__Container = styled(`aside`)`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--bg-secondary-dark);
  display: grid;
  align-items: center;
  left: 0;
  transition: all var(--transition-reveal);
  opacity: ${({ isOpen}) => (isOpen ? `100%` : `0`)};
  top: ${({ isOpen}) => (isOpen ? `0` : `100%`)};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--color-light);
  width: 25px;
  height: 25px;
`;

export const Icon = styled(`div`)`
    position: absolute;
    top: 3rem;
    right: 2.5rem;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const Sidebar__Wrapper = styled(`div`)`
    color: var(--color-light);
`;

export const Sidebar__Menu = styled(`ul`)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
    
    @media screen and (min-width: 768px) {
       grid-template-rows: repeat(6, 80px);
    }
`;

export const Sidebar__Link = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    text-decoration: none;
    list-style: none;
    color: var(--color-light);
    cursor: pointer;
    
    &:hover {
      color: var(--color-primary);
    }
`;

export const Sidebar__BtnWrap = styled(`div`)`
    display: flex;
    justify-content: center;
`;

export const Sidebar__Route = styled(LinkR)`
    border-radius: var(--border-radius-btn);
    background-color: var(--color-primary);
    white-space: nowrap;
    padding: 16px 64px;
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
