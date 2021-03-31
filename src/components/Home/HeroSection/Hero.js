import React from 'react';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroH1Hub} from './HeroStyled';

const Hero = () => {
    return (
        <HeroContainer>
             <HeroContent>
                <HeroItems>
                    <HeroH1>Creative Media</HeroH1>
                </HeroItems>
                <HeroItems>
                    <HeroH1Hub>Hub</HeroH1Hub>
                </HeroItems>
                <HeroItems>
                    <HeroP>Nase ideje pomeraju granice kreativnosti!</HeroP>
                </HeroItems>
            </HeroContent> 
        </HeroContainer>
    )
}

export default Hero
