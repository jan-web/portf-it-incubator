import React from 'react'
import avatar from '../../../assets/images/avatar.webp';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>I am <span>Dart Vader</span></Name>
            <MainTitle>A Web Developer.</MainTitle>

          </div>
          <PhotoWrapper>
            <Avatar src={avatar} alt="avatar" />

          </PhotoWrapper>
        </FlexWrapper>
      </Container>

    </StyledMain>
  )
}

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
  padding-top: 20px;
`

const Avatar = styled.img`
  /* width: 350px; */
  height: 517px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 5px;
      background-color: tomato;

      position: absolute;
      bottom: 20px;
      z-index: -1;
    }
  }
`
const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  top: 24px;
  left: -60px;

  &::before {
      content: '';
      width: 360px;
      height: 470px;
      border: 5px solid ${theme.colors.accent};

      top: -24px;
      left: 24px;
      position: absolute;
      z-index: -1;
  }

`