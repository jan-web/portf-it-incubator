import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

export const Header: React.FC = () => {
	return (
		<StyledHeader>
            <Logo />
            <Menu />
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
    background-color: #93c093;
`
