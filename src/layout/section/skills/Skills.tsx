import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import {S} from './Skills_Styles';

const skillData = [
	{
			iconId: 'code',
			title: 'html5',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

	},
	{
			iconId: 'css',
			title: 'css3',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

	},
	{
		iconId: 'react',
		title: 'React',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

	},
	{
		iconId: 'ts',
		title: 'TypeScript',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

},
	{
			iconId: 'styled',
			title: 'styled components',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

	},
	{
			iconId: 'figma',
			title: 'WEB DESIGN',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',

	},



]

export const Skills = () => {
	return (
		<S.Skills>

			<Container>
				<SectionTitle>My Skills</SectionTitle>
				<FlexWrapper wrap={'wrap'} justify={'space-between'}>
					{skillData.map(slill => (
											<Skill
											iconId={slill.iconId}
											title={slill.title}
											description={slill.description}
											key={slill.title}
										/>
					))}

				</FlexWrapper>
			</Container>
		</S.Skills>
	);
};


