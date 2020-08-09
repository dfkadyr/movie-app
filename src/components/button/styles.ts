import styled from 'styled-components';

export const StyledButton = styled.button<{active: boolean}>`
	padding: 5px 10px;

	color: ${({theme, active}) => active ? theme.colors.white : theme.colors.font};

	border-radius: 10px;
	background-color: ${({theme, active}) => active ? theme.colors.blue : theme.colors.white};
	border: 1px solid ${({theme}) => theme.colors.shadow};
	box-shadow: 0 0 5px 0 ${({theme}) => theme.colors.shadow};

	transition: all 0.25s ease-out;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 10px 0 ${({theme}) => theme.colors.shadow};
	}
`