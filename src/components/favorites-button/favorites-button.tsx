import * as React from 'react';

import { IProps } from './interface';
import { StyledButton } from './styles';

export const FavoriteButton: React.FunctionComponent<IProps> = ({active, dataId, name, onClick}) => {
	return (
		<StyledButton active={active} data-id={dataId} onClick={onClick} />
	)
};
