import styled from 'styled-components';

export const Section = styled.section`
    min-width:100%;
    min-height:65vh;
    margin-bottom: 30px;

     @media screen and (max-width:1337px){
        margin-bottom:30px;
    } 

`
export const Cont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const TextPart = styled.div`
    text-align:center;
    max-width:50%;
    padding-top:50px;

    @media screen and (max-width: 1050px){
        max-width:80%;
        padding: 20px 20px;
    }

    @media screen and (max-width: 769px){
        max-width:100%;
        padding: 20px 20px;
    }

    @media screen and (max-width: 468px){
        max-width:100%;
        padding: 20px 20px;
    }
`
export const Text = styled.p`
    font-size:2.2rem;
    text-align:center;

    @media screen and (max-width:468px){
        font-size:1.5rem;
    }

`
export const ContainerImg = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:70px;
    background: linear-gradient(173deg, rgba(140,33,177,1) 10%, rgba(112,39,217,1) 30%, rgba(140,33,177,1) 50%, rgba(112,39,217,1) 70%, rgba(140,33,177,1) 90%);
    box-shadow: 0px 0px 12px 3px rgba(0,0,0,0.75);

    @media screen and (max-width:1600px){
        display:flex;
        flex-wrap:wrap;
    }
    @media screen and (max-width:1050px){
        display:flex;
        flex-wrap:wrap;
    }
    @media screen and (max-width:769px){
        display:flex;
        flex-wrap:wrap;
    }
    @media screen and (max-width:468px){
        display:flex;
        margin-left:auto;
        margin-right:auto;
        padding:20px;
        
    }
    @media screen and (max-width:321px){
        padding: 0 50px;
    }
   
`
export const ImgPart = styled.div`
    padding: 20px 100px;
    transition: ease-in-out 0.3s;

    &:hover{
        transform: scale(1.1);
        transition: ease-in-out 0.3s;
    }

    @media screen and (max-width: 1600px){
        padding: 10px 70px;
    }

    @media screen and (max-width: 1337px){
        padding:10px 40px;
    }

    @media screen and (max-width:1050px){
        padding-left: 55px;
        margin: 0 40px 0 70px;
    }

    @media screen and (max-width:769px){
        padding: 20px 10px;
        margin: 0 50px 0 60px;
    }
    @media screen and (max-width:468px){
        padding-left: 10px;
        margin: 0 10px 0 20px;
    }
    @media screen and (max-width: 321px){
        margin-right:auto;
        margin-left:auto;
        padding-left:15px;
    }
 
`
export const Img = styled.img`
    width:175px;
    height:120px;

    @media screen and (max-width:1050px){
        width:180px;
        height:150px;
    }
    @media screen and (max-width:769px){
        width:175px;
        height:120px;
    }
`
export const P = styled.p`
    font-size: 1.2rem;
    text-align:center;
    font-weight:bold;
`
