import { MdEmail, MdLock } from 'react-icons/md';
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";

import { api } from '../../services/api';

import { Column, Container, Row, SubtitleLogin, SignIn, Title, TitleLogin, Wrapper } from "./styles";
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  }).required();

const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        } catch {
            alert('Houve um erro, tente novamente.')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                   A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empres mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="Nome completo" errorMessage={errors?.email?.message} control={control} placeholder="Nome completo" leftIcon={<BsPersonFill />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO. </SubtitleLogin>                        
                    </Row>
                    <Row>
                        <SignIn>Já tenho conta. Fazer login </SignIn>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }