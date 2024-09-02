import React from 'react';
import styled from 'styled-components';
export const HeaderMenu = (props: {menuItems: Array<string>}) => {
	return (
		<StyledHeaderMenu>
			<ul>
				{props.menuItems.map((item, index) =>
				(<ListItem key={index}>
					<Link href={item}>

          <Mask>
            <span>{item}</span>
          </Mask>
          <Mask>
            <span>{item}</span>
          </Mask>
          </Link>
				</ListItem>)
				)}


			</ul>
		</StyledHeaderMenu>
	);
};

const StyledHeaderMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
		justify-content: center;
	}
`;
const ListItem = styled.li`
  position: relative;
`;
const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size:30px;
  text-align: center;
  color: #7572d5;
`;
const Mask = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
`;
