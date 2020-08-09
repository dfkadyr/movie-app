export interface IProps {
	active: boolean;
	dataId: number | string;
	name: string;
	onClick: (event: React.MouseEvent<HTMLElement>) => void; 
}