import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {Container} from '../../GlobalStyle';
import {
    H2, 
    H4, 
    UnderLine, 
    ContactContainer,
    ContactForm,
    ContactContent,
    Content,
    ContactText,
    Phone,
    Email,
    ContactSocial,
    Facebook,
    Instagram,
    FormWrapper,
    FormLabel,
    FormInput,
    FormTextArea,
    FormButton,
    Linkedin,
    Alert} from './ContactStyled';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault()
            setLoader(true);
    
            emailjs.sendForm('service_hoxa9i6', 'template_pv5l9zl', e.target, 'user_IO8AVRpp3H9TMHnI3MX6b')
            .then((result) => {
                console.log(result.text);
                setLoader(false);
                setMsg('Uspešno ste poslali poruku!');
            }, (error) => {
                console.log(error.text);
                setLoader(false);
            });


        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <>
            <Container>
                <H2>Kontakt</H2>
                <UnderLine />
                <ContactContainer>
                    <FormWrapper>
                        <ContactForm onSubmit={handleSubmit}>
                            <FormLabel htmlFor="name">Ime i prezime</FormLabel>
                            <FormInput type="text" name="name" autoComplete="off" onChange={(e)=> setName(e.target.value)} value={name}></FormInput>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput type="email" name="email" autoComplete="off" onChange={(e)=> setEmail(e.target.value)} value={email} required></FormInput>
                            <FormLabel htmlFor="subject">Naslov poruke</FormLabel>
                            <FormInput type="text" name="subject" autoComplete="off" onChange={(e)=> setSubject(e.target.value)} value={subject}></FormInput>
                            <FormLabel htmlFor="message">Poruka</FormLabel>
                            <FormTextArea name="message" onChange={(e)=> setMessage(e.target.value)} value={message}></FormTextArea>
                            <FormButton type="submit" style={{background: loader ? "#ccc" : "#000", color: loader ? "#4d4d4d" : "#5c0099"}}>Pošalji</FormButton>
                            {msg && <Alert>{msg}</Alert>}
                        </ContactForm>
                    </FormWrapper>
                    <ContactContent>
                        <H4>Javite nam se na:</H4>
                        <Content>
                        <Phone /><ContactText>(+381)61 624 4877</ContactText>
                        </Content>
                        <Content mail>
                        <Email /><ContactText>creativemediahub.cmh@gmail.com</ContactText>
                        </Content>
                        <H4>Zapratite nas na društvenim mrežama:</H4>
                        <Content>
                        <Facebook /><ContactSocial href="https://www.facebook.com/Creative-Media-Hub-348377959851415">Facebook</ContactSocial>
                        </Content>
                        <Content>
                        <Instagram /><ContactSocial href="https://www.instagram.com/creative_media_hub/">Instagram</ContactSocial>
                        </Content>
                        <Content>
                        <Linkedin/><ContactSocial href="https://www.linkedin.com/in/creative-media-hub-cmh-712a2320a/">Linkedin</ContactSocial>
                        </Content>
                    </ContactContent>
                </ContactContainer>
            </Container>
        </>
    )
}

export default Contact
