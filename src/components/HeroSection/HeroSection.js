import React, {useState } from 'react';
import * as S from './HeroSection.styles.js';
import Video from '../../assets/video/video.mp4';
import { Button } from '../Button.styles.js';

/**
 * Hero section
 * @returns {JSX.Element}
 * @constructor
 */

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <S.Hero id='home'>
            <S.Hero__Bg>
                <S.Video__Bg autoPlay loop muted src={Video} type='video/mp4' />
            </S.Hero__Bg>
            <S.Hero__Content>
                <S.Hero__H1>Virtual Banking Made Easy</S.Hero__H1>
                <S.Hero__P>Sign for a new account to day and receive $250 in credit towards your next payment.</S.Hero__P>
                <S.Hero__BtnWrapper>
                    <Button
                        to='signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'>
                        Get Started {hover ? <S.ArrowForward /> : <S.ArrowRight />}
                    </Button>
                </S.Hero__BtnWrapper>
            </S.Hero__Content>
        </S.Hero>
    );
};

export default HeroSection;
