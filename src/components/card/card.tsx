import * as React from 'react';
import { FavoriteButton } from '../favorites-button';

import { IProps } from './interface';
import { Container, CardImage, Title } from './styles';

export const Card: React.FunctionComponent<IProps> = ({data}) => {
	const { title, poster_path } = data;

	return (
		<Container>
			<CardImage path={poster_path}/>
			<Title>{title}</Title>
			<FavoriteButton active={true} name="test" dataId={10} onClick={() => console.log('object')}/>
		</Container>
	)
};
