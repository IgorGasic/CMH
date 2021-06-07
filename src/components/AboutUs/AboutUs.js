import React from 'react';
import {Container} from '../../GlobalStyle';
import slika from './slika.jpg'
import {
    AboutUsRow, 
    AboutUsColumn, 
    Title, 
    Text, 
    AboutUsImg, 
    Img,
    UnderLine} from './AboutUsStyled';

const AboutUs = () => {
    return (
        <>
            <Container>
                <AboutUsRow>
                    <AboutUsColumn>
                        <Title>O Udruženju</Title>
                        <UnderLine />
                        <Text>Savez udruženja Creative media Hub, u daljem tekstu CMH, je nevladina neprofitna organizacija koja se zalaže za digitalizaciju i digitalno opismenjavanje građana, a naručito mladih, u Srbiji. Naš savez aktivno daje svoj doprinos zajednici kroz rad na projektima koji se tiču IT-sektora, samozapošljavanja mladih, jačanju neformalnih veština u cilju boljeg pozicioniranja na ljudi u tržišnoj utakmici IT sveta. Teme koje su nam takođe bitne i kojima planiramo da posvetimo pažnju su svakako zaštita životne sredine, digitalizacija kulturnog nasleđa, kao i umrežavanje i umrežavanje mladih iz regiona, ali i Evrope. Naš savez broji tri člana  a to su: Centar za omladinski i društveni razvoj „RES POLIS“ , „ Zelena Dolina” i „Edukativni građanski centar”. Pored redovnih članova tu su i druga udruženja, savezni, formalne i neformalne grupe građana  koje podržavaju naš rad. Naš sveobuhvatni zajednički cilj jeste da svojim aktivnostima doprinesemo suštinskoj promeni društva, izgradnji novih društvenih i omladinskih vrednosti i da promovišemo zdrave i prosperitetne ideje, a u kontekstu IT sektora.</Text>
                    </AboutUsColumn>
                    {/* <AboutUsColumn>
                        <AboutUsImg>
                            <Img src={slika} alt="onama"/>
                        </AboutUsImg>
                    </AboutUsColumn> */}
                </AboutUsRow>
            </Container>  
        </>
    )
}

export default AboutUs
