import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu, TabsStatusType } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/proj-1.png';
import timerImg from './../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import {S} from './Works_Styles';

const tabsItems: Array<{status: TabsStatusType, title: string}> = [
	{
		title: 'All',
		status: 'all'
	},
	{
		title: 'landing page',
		status: 'landing'
	},
	{
		title: 'React',
		status: 'react'
	},
	{
		title: 'spa',
		status: 'spa'
	},
]

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
	const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
	let filteredWorks = worksData;

	if (currentFilterStatus === 'landing') {
		filteredWorks= worksData.filter(work => work.type === 'landing')
	}
	if (currentFilterStatus === 'react') {
		filteredWorks= worksData.filter(work => work.type === 'react')
	}
	if (currentFilterStatus === 'spa') {
		filteredWorks= worksData.filter(work => work.type === 'spa')
	}

	function changeFilterStatus(value: 'all' | 'landing' | 'react' | 'spa') {
		setCurrentFilterStatus(value);
	}

	return (
		<S.Works>
			<Container>


				<SectionTitle>Works</SectionTitle>
				<TabMenu tabsItems={tabsItems}
				changeFilterStatus={changeFilterStatus}
				currentFilterStatus={currentFilterStatus}
				/>
				<FlexWrapper justify='space-between' align={"flex-start"} wrap={'wrap'}>
					{filteredWorks.map(work => (
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


