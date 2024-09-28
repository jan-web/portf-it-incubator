import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Icon } from '../../../components/Icon/icon'
import { Slider } from '../../../components/slider/Slider'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { IconWrapper } from '../skills/Skills_Styles'
import { Container } from '../../../components/Container'

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={'column'} align={'center'}>
          <IconWrapper>
            <Icon iconId={'commas'} />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>


    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  background-color: #aeb9ff;
  min-height: 50vh;


  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`