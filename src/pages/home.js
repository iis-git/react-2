import React, { useState } from "react";
import { Navbar, Sidebar, HeroSection, InfoSection, Services, Footer } from '../components';
import { InfoSectionData1, InfoSectionData2, InfoSectionData3 } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...InfoSectionData1}/>
            <InfoSection {...InfoSectionData2}/>
            <Services />
            <InfoSection {...InfoSectionData3}/>
            <Footer />
        </>
    );
};

export default Home;
