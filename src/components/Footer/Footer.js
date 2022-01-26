import React from 'react'
import * as S from './Footer.styles.js'
import {animateScroll as scroll} from "react-scroll"
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'

/**
 * Main footer
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <S.Footer>
            <S.Footer__Wrapper>
                <S.Footer__LinksContainer>
                    <S.Footer__LinksWrapper>
                        <S.Footer__LinkItems>
                            <S.Footer__LinkTitle>About us</S.Footer__LinkTitle>
                            <S.Footer__Link to='/'>How it works</S.Footer__Link>
                            <S.Footer__Link to='/'>Testimonials</S.Footer__Link>
                            <S.Footer__Link to='/'>Careers</S.Footer__Link>
                            <S.Footer__Link to='/'>Investors</S.Footer__Link>
                            <S.Footer__Link to='/'>Terms of Service</S.Footer__Link>
                        </S.Footer__LinkItems>
                    </S.Footer__LinksWrapper>
                    <S.Footer__LinksWrapper>
                        <S.Footer__LinkItems>
                            <S.Footer__LinkTitle>Videos</S.Footer__LinkTitle>
                            <S.Footer__Link to='/'>Submit Video</S.Footer__Link>
                            <S.Footer__Link to='/'>Ambassadors</S.Footer__Link>
                            <S.Footer__Link to='/'>Agency</S.Footer__Link>
                            <S.Footer__Link to='/'>Influenced</S.Footer__Link>
                        </S.Footer__LinkItems>
                    </S.Footer__LinksWrapper>
                    <S.Footer__LinksWrapper>
                        <S.Footer__LinkItems>
                            <S.Footer__LinkTitle>Contact us</S.Footer__LinkTitle>
                            <S.Footer__Link to='/'>Contact</S.Footer__Link>
                            <S.Footer__Link to='/'>Support</S.Footer__Link>
                            <S.Footer__Link to='/'>Destinations</S.Footer__Link>
                            <S.Footer__Link to='/'>Sponsorship</S.Footer__Link>
                        </S.Footer__LinkItems>
                    </S.Footer__LinksWrapper>
                    <S.Footer__LinksWrapper>
                        <S.Footer__LinkItems>
                            <S.Footer__LinkTitle>Social Media</S.Footer__LinkTitle>
                            <S.Footer__Link to='/'>Instagram</S.Footer__Link>
                            <S.Footer__Link to='/'>Facebook</S.Footer__Link>
                            <S.Footer__Link to='/'>Youtube</S.Footer__Link>
                            <S.Footer__Link to='/'>Twitter</S.Footer__Link>
                        </S.Footer__LinkItems>
                    </S.Footer__LinksWrapper>
                </S.Footer__LinksContainer>
                <S.Footer__Social>
                    <S.Footer__SocialWrapper>
                        <S.Footer__Logo to='/' onClick={toggleHome}>dolla</S.Footer__Logo>
                        <S.Footer__Copyright>dolla © {new Date().getFullYear()} All rights reserved.</S.Footer__Copyright>
                        <S.Footer__SocialIcons>
                            <S.Footer__SocialLink href='/' tagret='blank' aria-label='Facebook'>
                                <FaFacebook />
                            </S.Footer__SocialLink>
                            <S.Footer__SocialLink href='/' tagret='blank' aria-label='Instagram'>
                                <FaInstagram />
                            </S.Footer__SocialLink>
                            <S.Footer__SocialLink href='/' tagret='blank' aria-label='Youtube'>
                                <FaYoutube />
                            </S.Footer__SocialLink>
                            <S.Footer__SocialLink href='/' tagret='blank' aria-label='Twitter'>
                                <FaTwitter />
                            </S.Footer__SocialLink>
                            <S.Footer__SocialLink href='/' tagret='blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </S.Footer__SocialLink>
                        </S.Footer__SocialIcons>
                    </S.Footer__SocialWrapper>
                </S.Footer__Social>
            </S.Footer__Wrapper>
        </S.Footer>
    );
}

export default Footer;
