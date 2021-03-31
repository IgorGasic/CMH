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
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur consequatur natus facilis odio perferendis, voluptatem numquam architecto rem? Voluptates suscipit, placeat id labore tenetur quia quos aliquam sapiente dignissimos adipisci corporis asperiores dolor at itaque, rem quibusdam sit saepe non obcaecati, sint explicabo. Soluta, sunt quasi. Sit, voluptatem officia. asdsads addasda sdasdasdasd asdasdasds dasdasdas das das dasd sadsads adsad sadasd s ad.</Text>
                    </AboutUsColumn>
                    <AboutUsColumn>
                        <AboutUsImg>
                            <Img src={slika} alt="onama"/>
                        </AboutUsImg>
                    </AboutUsColumn>
                    <AboutUsColumn>
                        <Text large>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt enim cumque quis dignissimos. Fuga, officia. Dicta, magnam sit fugiat inventore deleniti natus, molestias voluptate, amet quia officiis nesciunt. Omnis natus expedita voluptatem reiciendis, ex vitae mollitia, dolore est illo magni ipsam non ipsa, quidem quis nam! A eos beatae iure.</Text>
                    </AboutUsColumn>
                </AboutUsRow>
            </Container>  
        </>
    )
}

export default AboutUs
