import styled from 'styled-components';

export const InfoSection = styled(`section`)`
    color: var(--color-light);
    background:${({lightBg}) => (lightBg ? 'var(--bg-light)' : 'var(--color-dark)')};
    
    @media screen and (max-width: 768px) {
      padding: 100px 0;
    };
`;

export const InfoSection__Wrapper = styled(`div`)`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoSection__Row = styled(`div`)`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas:  ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
      grid-template-areas:  ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1' 'col1' 'col2' 'col2'`)};
    }
`;

export const InfoSection__Column1 = styled(`div`)`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const InfoSection__Column2 = styled(`div`)`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const InfoSection__TextWrapper = styled(`div`)`
    max-width: 540px;
    padding: 0 0 60px;
`;

export const InfoSection__TopLine = styled(`p`)`
    color: var(--color-primary);
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const InfoSection__Heading = styled(`h2`)`
    margin-bottom: 24px;
    font-size: 4.8rem;
    line-height: 1.1;
    font-weight: 700;
    
    background:${({ lightText }) => (lightText ? '' +
    'background:-moz-radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(255, 255, 255, 1) 64%);/* ff 3.6+ */\n' +
    '  background:-webkit-radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(255, 255, 255, 1) 64%);/* safari 5.1+,chrome 10+ */\n' +
    '  background:-o-radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(255, 255, 255, 1) 64%);/* opera 11.10+ */\n' +
    '  background:-ms-radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(255, 255, 255, 1) 64%);/* ie 10+ */\n' +
    '  background:radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(255, 255, 255, 1) 64%);/* global 92%+ browsers support */' 
    : 
    '  background:-moz-radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(0, 0, 0, 1) 64%);/* ff 3.6+ */\n' +
    '  background:-webkit-radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(0, 0, 0, 1) 64%);/* safari 5.1+,chrome 10+ */\n' +
    '  background:-o-radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(0, 0, 0, 1) 64%); /* opera 11.10+ */\n' +
    '  background:-ms-radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(0, 0, 0, 1) 64%);/* ie 10+ */\n' +
    '  background:radial-gradient(circle at 32% 50%, rgba(1, 191, 113, 1) 0%, rgba(0, 0, 0, 1) 64%);/* global 92%+ browsers support */')};
   
     color:transparent;
     -webkit-background-clip: text;
     background-clip: text;
    
    @media screen and (max-width: 480px) {
      font-size: 3.2rem;
    }
`;

export const InfoSection__Subtitle = styled(`p`)`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 1.8rem;
    line-height: 1.3;
    color: ${({ darkText }) => (darkText ? 'var(--color-dark)' : 'var(--color-light)')};
`;

export const InfoSection__BtnWrapper = styled(`div`)`
    display: flex;
    justify-content: flex-start;
`;

export const InfoSection__ImgWrapper = styled(`div`)`
    max-width: 555px;
    height: 100%;
`;

export const InfoSection__Img = styled(`img`)`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
