import imgSrc1 from '../../assets/images/svg-1.svg';
import imgSrc2 from '../../assets/images/svg-2.svg';
import imgSrc3 from '../../assets/images/svg-3.svg';

export const InfoSectionData1 = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get started',
    imgStart: false,
    img: {
        url: imgSrc1,
        alt: 'Car'
    },
    dark: true,
    primary: true,
    darkText: false
};

export const InfoSectionData2 = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel: 'Learn more',
    imgStart: true,
    img: {
        url: imgSrc2,
        alt: 'Piggybank'
    },
    dark: false,
    primary: false,
    darkText: true
};

export const InfoSectionData3 = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready under 10 minutes. All you need to do is add your information and you\'re ready to go',
    buttonLabel: 'Sign up',
    imgStart: false,
    img: {
        url: imgSrc3,
        alt: 'Girl social media'
    },
    dark: false,
    primary: false,
    darkText: true
};
