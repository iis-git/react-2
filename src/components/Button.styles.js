import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: var(--border-radius-btn);
    background: ${({primary}) => (primary ? 'var(--color-primary)' : 'var(--color-dark)')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};;
    color: ${({dark}) => (dark ? 'var(--color-dark)' : 'var(--color-light)')};;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all var(--transition-bg-color);
    cursor: pointer;
    
    &:hover {
      background: ${({primary}) => (primary ? 'var(--color-light)' : 'var(--color-primary)')};
    }
`;
