import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/Icon/icon'
import { SectionTitle } from '../../../components/SectionTitle'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper>
          <Skill>
            <Icon iconId={"code"}/>
            <SkillTitle>html5</SkillTitle>
            <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim</SkillText>
          </Skill>
        </FlexWrapper>

    </StyledSkills>
  )
}


const StyledSkills = styled.section `

`