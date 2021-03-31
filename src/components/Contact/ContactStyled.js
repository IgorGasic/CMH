import styled from 'styled-components';
import {Underline} from '../../GlobalStyle';
import {FiPhoneCall} from 'react-icons/fi';
import {FaFacebookSquare,FaInstagramSquare,FaRegEnvelope} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai'

export const H2 = styled.h2`
    padding-top:50px;
    font-size:3rem;

    @media screen and (max-width:468px){
        padding-top:10px;
        text-align:center;
    }
`
export const ContactContainer = styled.div`
    display:flex;
    margin:70px 0;

    @media screen and (max-width: 1050px){
        display:flex;
        flex-direction:column;
        margin-bottom: 120px;
    }

    @media screen and (max-width:468px){
        display:flex;
        flex-direction:column;
    }
`
export const FormWrapper = styled.div`
    margin-right:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:700px;

    @media screen and (max-width: 1050px){
        margin-right:auto;
        margin-left:auto;
        margin-bottom: 60px;
    }

    @media screen and (max-width:468px){
        max-width:300px;
        max-height:100%;
        margin-right:auto;
        margin-left:auto;
    }

`
export const ContactForm = styled.form`
    width:600px;
    height:600px;
    padding:60px 40px;
    border:none;
    box-sizing:border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);

    @media screen and (max-width:468px){
        margin-top:20px;
        margin-bottom:50px;
        
    }
`
export const FormLabel = styled.label`
    font-size:1.2rem;
    font-weight:bold;
`
export const FormInput = styled.input`
    display:block;
    width:100%;
    background-color:#eee;
    height:40px;
    border-radius:5px;
    border:1px solid #ddd;
    margin: 10px 0 5px 0;
    padding:20px;
    box-sizing:border-box;
`
export const FormTextArea = styled.textarea`
    background-color:#eee;
    width:100%;
    max-height:100px;
    resize:none;
    border-radius:5px;
    border:1px solid #ddd;
    margin:10px 0 0 0;
    padding:20px;
    box-sizing:border-box;
`
export const FormButton = styled.button`
    display:block;
    background-color:#000;
    color:#5c0099;
    font-size:1rem;
    border:0;
    border-radius:5px;
    height:40px;
    margin:25px 0;
    padding: 0 20px;
    cursor: pointer;
    box-sizing:border-box;
    font-weight:bold;
    font-size:1.2rem;
`
export const UnderLine = styled(Underline)`
    max-width:12rem;
    margin:-10px 0 0 0;

    @media screen and (max-width: 468px){
        margin-top:-10px;
        margin-left:auto;
        margin-right:auto;
    }
`
export const ContactContent = styled.div`
    max-width:500px;
    max-height:330px;
    background:#000;
    padding:35px;
    display:flex;
    flex-direction:column;
    line-height:1.3;
    margin-left:110px;
    box-shadow: 0px 0px 16px 4px rgba(92,0,153,1);

    @media screen and (max-width: 1050px){
        margin-left:auto;
        margin-right:auto;
    }

    @media screen and (max-width:468px){
        max-width:300px;
        margin-bottom:50px;
        margin-left:auto;
        margin-right:auto;
    }
`
export const H4 = styled.h4`
    font-size:1.3rem;
    color:#fff;
    font-weight:500;
    padding: 20px 0 5px 0;
`
export const ContactText = styled.p`
    color:#fff;
    font-size:1.4rem;
    padding-left:5px;

    @media screen and (max-width:468px){
        font-size:0.9rem;
    }
`
export const ContactSocial = styled.a`
    text-decoration:none;
    color:#fff;
    font-size:1.4rem;
    padding-left:5px;

`
export const Phone = styled(FiPhoneCall)`
    font-size:1.4rem;
    color:#5c0099;
    margin-top:5px;

    @media screen and (max-width: 468px){
        margin-top:2px;
        font-size:0.8rem;
    }
`
export const Email = styled(FaRegEnvelope)`
    font-size:1.4rem;
    color:#5c0099;
    margin-top:5px;

    @media screen and (max-width: 468px){
        margin-top:-1px;
    }
`
export const Facebook = styled(FaFacebookSquare)`
    font-size:1.4rem;
    color:#5c0099;
    margin-top:2px;
`
export const Instagram = styled(FaInstagramSquare)`
    font-size:1.4rem;
    color:#5c0099;
    margin-top:2px;
`
export const Linkedin = styled(AiFillLinkedin)`
    font-size:1.4rem;
    color:#5c0099;
    margin-top:2px;
`
export const Content = styled.div`
    display:flex;
`
export const Error = styled.p`
    color:red
`