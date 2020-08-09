export interface IProps {
	hideDisabled: boolean;
	activePage: number;
	itemsCountPerPage: number;
	totalItemsCount: number;
	onChange: (pageNumber: number) => void;
}