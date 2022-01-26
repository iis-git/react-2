import React from 'react';
import * as S from './Services.styles.js';
import Icon1 from '../../assets/images/svg-6.svg';
import Icon2 from '../../assets/images/svg-5.svg';
import Icon3 from '../../assets/images/svg-4.svg';

/**
 * Services section
 * @returns {JSX.Element}
 * @constructor
 */
const Services = () => {
    return (
        <S.ServicesSection id='services'>
            <S.ServicesHeading>Our Services</S.ServicesHeading>
            <S.Services__Wrapper>

                <S.Services__Card>
                    <S.Services__Icon src={Icon1}/>
                    <S.Services__CardHeading>Reduce expenses</S.Services__CardHeading>
                    <S.Services__CardText>We help reduce your fees and increase your overall revenue</S.Services__CardText>
                </S.Services__Card>

                <S.Services__Card>
                    <S.Services__Icon src={Icon2}/>
                    <S.Services__CardHeading>Virtual offices</S.Services__CardHeading>
                    <S.Services__CardText>You can access our platform online anywhere in the world</S.Services__CardText>
                </S.Services__Card>

                <S.Services__Card>
                    <S.Services__Icon src={Icon3}/>
                    <S.Services__CardHeading>Premium benefits</S.Services__CardHeading>
                    <S.Services__CardText>Unlock our special membership card that returns 5% cash back</S.Services__CardText>
                </S.Services__Card>
            </S.Services__Wrapper>
        </S.ServicesSection>
    );
}

export default Services;
