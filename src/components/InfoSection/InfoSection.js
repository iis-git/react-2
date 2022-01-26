import React from 'react';
import * as S from './InfoSection.styles.js';
import { Button } from '../Button.styles.js';

/**
 * Blank info section
 * @param lightBg - background color
 * @param id - section id
 * @param imgStart - content direction
 * @param topLine - subtitle text content
 * @param lightText - heading text color
 * @param darkText - paragraph text color
 * @param headline - headline text content
 * @param description - description text content
 * @param buttonLabel - button label
 * @param img - image url and alt content
 * @param primary - button color
 * @param dark - button label color
 * @returns {JSX.Element}
 * @constructor
 */

const InfoSection = ({
        lightBg,
        id,
        imgStart,
        topLine,
        lightText,
        darkText,
        headline,
        description,
        buttonLabel,
        img,
        primary,
        dark}) => {
    return (
        <S.InfoSection lightBg={lightBg} id={id}>
            <S.InfoSection__Wrapper>
                <S.InfoSection__Row imgStart={imgStart}>
                    <S.InfoSection__Column1>
                        <S.InfoSection__TextWrapper>
                            <S.InfoSection__TopLine>{topLine}</S.InfoSection__TopLine>
                            <S.InfoSection__Heading lightText={lightText}>{headline}</S.InfoSection__Heading>
                            <S.InfoSection__Subtitle darkText={darkText}>{description}</S.InfoSection__Subtitle>
                            <S.InfoSection__BtnWrapper>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0 }
                                dark={dark ? 1 : 0 }>{buttonLabel}</Button>
                            </S.InfoSection__BtnWrapper>
                        </S.InfoSection__TextWrapper>
                    </S.InfoSection__Column1>
                    <S.InfoSection__Column2>
                        <S.InfoSection__ImgWrapper>
                            <S.InfoSection__Img src={img.url} alt={img.alt} />
                        </S.InfoSection__ImgWrapper>
                    </S.InfoSection__Column2>
                </S.InfoSection__Row>
            </S.InfoSection__Wrapper>
        </S.InfoSection>
    );
};

export default InfoSection;
