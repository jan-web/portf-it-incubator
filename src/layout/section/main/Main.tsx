import React from 'react'
import avatar from '../../../assets/images/avatar.webp';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
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
`

const Avatar = styled.img`
  /* width: 350px; */
  width: 252px;
  /* height: 430px; */
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    /* width: 310px;
    height: 380px; */

  }
`

const MainTitle = styled.h1`
  ${font({family: "'Josefin Sans', sans-serif", weight: 400, Fmax: 27, Fmin: 20})}
`
const Name = styled.h2`
${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}

  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
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

  @media  ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`
const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`
const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  /* top: 24px;
  left: -60px; */

  &::before {
      content: '';
      /* width: 360px;
      height: 470px; */
      width: 311px;
      height: 398px;
      border: 5px solid ${theme.colors.accent};

      top: -2px;
      left: 24px;
      position: absolute;
      z-index: -1;

      @media ${theme.media.mobile} {
        width: 311px;
        height: 398px;
        top: -17px;
        left: 20px;
      }
  }
  @media  ${theme.media.mobile} {
    margin-top: 65px;
  }

`