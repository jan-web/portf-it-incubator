import React from 'react'
import avatar from '../../../assets/images/avatar.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { S } from './Main_Styles'


export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Dart Vader</span></S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontent Developer.'],
                  autoStart: true,
                  loop: true,
                  delay: 200
                }}/>

              </S.MainTitle>

          </div>
          <Tilt>
          <S.PhotoWrapper>
            <S.Avatar src={avatar} alt="avatar" />

          </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>

    </S.Main>
  )
}

