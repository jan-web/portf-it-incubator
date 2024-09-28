import React from 'react'
import { Icon } from '../../components/Icon/icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import {S} from './Footer_Styles';


const socialItemData = [
  { iconId: 'instagram', href: 'https://www.instagram.com/' },
  { iconId: 'telegram', href: 'https://www.instagram.com/' },
  { iconId: 'vk', href: 'https://www.instagram.com/' },
  { iconId: 'github', href: 'https://github.com/' },
]

export const Footer = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={'column'} align='center'>


        <S.Name>Dart Vader</S.Name>
        <S.SocialList>
          {socialItemData.map(item => (
            <S.SocialItem key={item.iconId}>
              <S.SocialLink>
                <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={item.iconId} />

              </S.SocialLink>
            </S.SocialItem>
          ))}


        </S.SocialList>
        <S.Copyright>© 2024 Dart Vader, All Rights Reserved.</S.Copyright>
      </FlexWrapper>

    </S.Footer>
  )
}

