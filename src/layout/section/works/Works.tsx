import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';

const items = ["All", "landing page", "React", "spa"];


export const Works = () => {
	return (
		<StyledWorks>
			<SectionTitle>Works</SectionTitle>
      <Menu menuItems={items}/>
		</StyledWorks>
	);
};

const StyledWorks = styled.section`
	min-height: 100vh;
	background-color: #deefff;
`;
