import React from 'react';
import * as S from './Sidebar.styles.js';

/**
 * Mobile navigation
 * @param isOpen - open state
 * @param toggle - toggle func
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <S.Sidebar__Container isOpen={isOpen} onClick={toggle}>
            <S.Icon onClick={toggle}>
                <S.CloseIcon />
            </S.Icon>
            <S.Sidebar__Wrapper>
                <S.Sidebar__Menu>
                    <S.Sidebar__Link onClick={toggle} to='about'>
                        About
                    </S.Sidebar__Link>
                    <S.Sidebar__Link onClick={toggle} to='discover'>
                        Discover
                    </S.Sidebar__Link>
                    <S.Sidebar__Link onClick={toggle} to='services'>
                        Services
                    </S.Sidebar__Link>
                    <S.Sidebar__Link onClick={toggle} to='signup'>
                        Sign Up
                    </S.Sidebar__Link>
                </S.Sidebar__Menu>
                <S.Sidebar__BtnWrap>
                    <S.Sidebar__Route to='/signin'>Sign In</S.Sidebar__Route>
                </S.Sidebar__BtnWrap>
            </S.Sidebar__Wrapper>
        </S.Sidebar__Container>
    );
}

export default Sidebar;
