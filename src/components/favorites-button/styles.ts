import styled from 'styled-components';

export const StyledButton = styled.div<{active: boolean}>`
	width: 50px;
	height: 50px;
	&::before {
		content: "\2605";
		display: block;

		width: 50px;
		height: 50px;
	}	
`