import * as React from 'react';
import Pagination from 'react-js-pagination';

import { IProps } from './interface';
import { PaginationContainer } from './styles';

export const SimplePagination: React.FunctionComponent<IProps> = ({activePage = 1, itemsCountPerPage = 10000, totalItemsCount = 500, onChange}) => {

	return (
		<PaginationContainer>
			<Pagination
				hideDisabled
				activePage={activePage}
				itemsCountPerPage={itemsCountPerPage}
				totalItemsCount={totalItemsCount}
				onChange={onChange}
			/>
		</PaginationContainer>
	)
};
