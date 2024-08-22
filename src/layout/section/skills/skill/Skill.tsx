import React from 'react'
import { Icon } from '../../../../components/Icon/icon'
import styled from 'styled-components'

type skillPropsType = {
  iconId: string
  title: string
  description: string
}

export const Skill = (props: skillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.title}</SkillTitle>
      <SkillText>{props.description}</SkillText>
    </StyledSkill>
  )
}

const StyledSkill = styled.div `
  width: 30%;
  background: rgba(255, 255, 255, 0.56);
  margin: 10px;
`
const SkillTitle = styled.h3 `

`
const SkillText = styled.p `

`