import React from 'react'
import avatar from '../../../assets/images/avatar.webp';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi There</span>
          <Name>I am Dart Vader</Name>
          <MainTitle>A Web Developer.</MainTitle>

        </div>
        <Avatar src={avatar} alt="avatar" />
      </FlexWrapper>


    </StyledMain>
  )
}

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fff5e7;
`

const Avatar = styled.img`
  width: 350px;
  height: 588px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`

`