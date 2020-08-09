import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	position: relative;

	width: 250px;
	height: 320px;

	margin: 10px;

	border-radius: 10px;
	box-shadow: 0 0 10px 0 ${({theme}) => theme.colors.shadow};

	transition: all 0.25s ease-out;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 25px 0 ${({theme}) => theme.colors.shadow};
	}
`

export const CardImage = styled.div<{path: string}>`
	display: block;
	height: calc(100% - 40px);

	background-image: ${({ path }) => `url(https://image.tmdb.org/t/p/w500/${path})`};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`

export const Title = styled.div`
	position: absolute;
	bottom: 0;

	width: 100%;

	padding: 10px;
	font-size: 18px;

	background-color: ${({theme}) => theme.colors.white};
`