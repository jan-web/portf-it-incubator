import React from 'react'
import { Icon } from '../../../../components/Icon/icon'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import {S} from '../Skills_Styles'

type skillPropsType = {
  iconId: string
  title: string
  description: string
}

export const Skill = (props: skillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction={'column'} align={'center'}>
        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>
        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>{props.description}</S.SkillText>
      </FlexWrapper>

    </S.Skill>
  )
}

