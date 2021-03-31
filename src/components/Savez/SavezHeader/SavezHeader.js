import React from 'react'
import {Container} from '../../../GlobalStyle';
import {
    H2, 
    Text, 
    UnderLine} from './SavezHeaderStyled';
    
const SavezHeader = () => {
    return (
        <>
            <Container>
                <H2>Savez udruženja</H2>
                <UnderLine />
                <Text>Savez udruženja Creative media HUB je nevladino i neprofitno udruženje osnovano na neodređeno vreme, radi ostvarivanja ciljeva u oblastima kreativne industrije, informacionih i komunikacionih tehnologija, kulture, ekologije, regionalne i međunarodne saradnje, neformalne edukacije, društvene participacije i aktivizma mladih. Naš savez trenutno okuplja tri udruženja: "Res Polis","Zelena Dolina(Green Valley)" i "Edukativni gradjanski centar" radio ostvarivanja gore pomenutih ciljeva. Kao savesz koji okuplja veliki broj mladih ljudi zalažemo se za povećavanje digitalne pismenosti društva i razvoj socijalnog preduzetništva kroz rad na edukativnim IKT programima.</Text>
            </Container>
        </>
    )
}

export default SavezHeader
