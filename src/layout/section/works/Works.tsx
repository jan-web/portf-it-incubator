import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/proj-1.png';
import timerImg from './../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import {S} from './Works_Styles';

const items = ['All', 'landing page', 'React', 'spa'];

const worksData = [
	{
			title: 'Social Network',
			src: socialImg,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			type: "spa",
			id: 1
	},

	{
			title: 'Timer',
			src: timerImg,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
			type: "react",
			id: 2
	},
	{
			title: 'Social Network',
			src: socialImg,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			type: "landing",
			id: 3
	},
	{
			title: 'Social Network',
			src: socialImg,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			type: "landing",
			id: 4
	},
	{
			title: 'Timer',
			src: timerImg,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
			type: "react",
			id: 5
	},
	{
			title: 'Timer',
			src: timerImg,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
			type: "react",
			id: 6
	},
]

export const Works: React.FC = () => {
	return (
		<S.Works>
			<Container>


				<SectionTitle>Works</SectionTitle>
				<TabMenu menuItems={items} />
				<FlexWrapper justify='space-between' align={"flex-start"} wrap={'wrap'}>
					{worksData.map(work => (
					<Work
						title={work.title}
						text={work.text}
						src={work.src}
					/>
					))}


				</FlexWrapper>
			</Container>
		</S.Works>
	);
};


