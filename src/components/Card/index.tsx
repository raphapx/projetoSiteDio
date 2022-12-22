import React from "react";
import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://media.gettyimages.com/id/1145613646/pt/v%C3%ADdeo/smooth-clean-and-abstract-looped-gradient-background-4k-video-for-underwater-ocean-sky-clouds.jpg?s=640x640&k=20&c=wjSysmubDaVe5StH14Jr5_LBzDPspp5wIYbP6i5vdgg="/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/117788530?v=4"/>
                    <div>
                        <h4>Pablo Henrique</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba mais.</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }