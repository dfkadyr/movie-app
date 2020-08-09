export interface IAction<T> {
	type: string;
	payload: T;
	error?: boolean;
}

export interface IError {
	success: boolean;
	status_message: string;
	status_code: number;
}

export interface IMovie {
	popularity: number;
	vote_count: string;
	video: boolean;
	poster_path: string;
	id: number;
	adult: boolean;
	backdrop_path: string;
	original_language: string;
	original_title: string;
	genre_ids: Array<number>;
	title: string;
	vote_average: number;
	overview: string;
	release_date: string;
}

export interface IResult {
	page: number;
	total_results: number;
	total_pages: number;
	poster_path: string;
	results: Array<IMovie>;
}

export interface IMoviesState {
	isFetching: boolean;
	result: IResult | null;
	error: IError | null;
}