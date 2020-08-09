import styled from 'styled-components';

export const PaginationContainer = styled.div`
	ul {
		display: flex;

		padding: 10px;
	}

	li {
		margin: 2px;
		padding: 5px 10px;

		background-color: ${({theme}) => theme.colors.white};
		border-radius: 4px;
		border: 1px solid ${({theme}) => theme.colors.shadow};

		&.active {
			background-color: ${({theme}) => theme.colors.blue};

			> a {
				color: ${({theme}) => theme.colors.white};
		 	}
		}

		 > a {
			color: ${({theme}) => theme.colors.font};
		 }
	}
`