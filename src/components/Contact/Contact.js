import React, { useState } from 'react';
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
    Error,
    Linkedin} from './ContactStyled';
const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email){
            setError("Morate uneti email adresu!");
        }


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
                            <FormInput type="email" name="email" autoComplete="off" onChange={(e)=> setEmail(e.target.value)} value={email}></FormInput>
                            {error && <Error>{error}</Error>}
                            <FormLabel htmlFor="subject">Naslov poruke</FormLabel>
                            <FormInput type="text" name="subject" autoComplete="off" onChange={(e)=> setSubject(e.target.value)} value={subject}></FormInput>
                            <FormLabel htmlFor="message">Poruka</FormLabel>
                            <FormTextArea name="message" onChange={(e)=> setMessage(e.target.value)} value={message}></FormTextArea>
                            <FormButton type="submit">Posalji</FormButton>
                        </ContactForm>
                    </FormWrapper>
                    <ContactContent>
                        <H4>Javite nam se na:</H4>
                        <Content>
                        <Phone /><ContactText>(+381)61 624 4877</ContactText>
                        </Content>
                        <Content>
                        <Email /><ContactText>creativemediahub.cmh@gmail.com</ContactText>
                        </Content>
                        <H4>Zapratite nas na drustvenim mrezama:</H4>
                        <Content>
                        <Facebook /><ContactSocial href="https://www.facebook.com/Creative-Media-Hub-348377959851415">Facebook Link</ContactSocial>
                        </Content>
                        <Content>
                        <Instagram /><ContactSocial href="https://www.instagram.com/creative_media_hub/">Instagram Link</ContactSocial>
                        </Content>
                        <Content>
                        <Linkedin/><ContactSocial href="https://www.linkedin.com/in/creative-media-hub-cmh-712a2320a/">Linkedin Link</ContactSocial>
                        </Content>
                    </ContactContent>
                </ContactContainer>
            </Container>
        </>
    )
}

export default Contact
