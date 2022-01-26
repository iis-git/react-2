import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import * as S from './Navbar.styles.js'
import { animateScroll as scroll } from 'react-scroll';


/**
 * Mobile navigation
 * @param toggle - onclick func
 * @returns {JSX.Element}
 * @constructor
 */
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return(
        <S.Navbar scrollNav={scrollNav}>
            <S.Navbar__Container>
                <S.Navbar__Logo to='/' onClick={toggleHome}>dolla</S.Navbar__Logo>
                <S.MobileIcon onClick={toggle}>
                    <FaBars/>
                </S.MobileIcon>
                <S.Navbar__Menu>
                    <S.Navbar__Item>
                        <S.Navbar__Links to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}

                        >About</S.Navbar__Links>
                    </S.Navbar__Item>
                    <S.Navbar__Item>
                        <S.Navbar__Links to='discover'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Discover</S.Navbar__Links>
                    </S.Navbar__Item>
                    <S.Navbar__Item>
                        <S.Navbar__Links to='services'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Services</S.Navbar__Links>
                    </S.Navbar__Item>
                    <S.Navbar__Item>
                        <S.Navbar__Links to='signup'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>Sign Up</S.Navbar__Links>
                    </S.Navbar__Item>
                </S.Navbar__Menu>
                <S.Navbar__Btn>
                    <S.Navbar__BtnLink to='/signin'>Sign In</S.Navbar__BtnLink>
                </S.Navbar__Btn>
            </S.Navbar__Container>
        </S.Navbar>
    )};

export default Navbar;
