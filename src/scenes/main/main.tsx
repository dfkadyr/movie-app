import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { IStore } from '../../store/interface';
import { getReferenceExports } from '../../store/movies';
import { Card } from '../../components/card';
import { Button } from '../../components/button';
import { SimplePagination } from '../../components/pagination';


import { GENRE_LIST } from './config'
import { IProps, IFilterProps } from './interface'
import { MoviesContainer, GenresContainer, GenresTitle, GenresList, Wrapper } from './styles'

export const MainPage: React.FunctionComponent<IProps> = () => {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState<IFilterProps>({
    pageNumber: 1,
    genres: [],
  });
  const {isFetching} = useSelector((state: IStore) => state.movies);
  const movies = useSelector((state: IStore) => state.movies.result);

  useEffect(() => {
    dispatch(getReferenceExports(filters));
  }, [filters]);

  const handleChangePagination = useCallback((pageNumber: number) => {
    setFilters({
      ...filters,
      pageNumber
    })
  },[filters]);

  const handleChangeGenres = useCallback((event) => {
    let genresArray: number[] = filters.genres;
    const genderId: number = Number(event.target.getAttribute('data-id'));

    if (genresArray.includes(genderId)) {
      const indexItem = genresArray.indexOf(genderId);
      genresArray.splice(indexItem, 1)
    } else {
      genresArray.push(genderId)
    }

    setFilters({
      ...filters,
      genres: genresArray
    })
  },[]);

  const  renderMovies = useMemo(() => {
    if (!isFetching && movies) {
      return (
        <MoviesContainer>
          {movies.results.map(movie => <Card key={movie.id} data={movie}>Text</Card>)}
        </MoviesContainer>
      )
    }

    return <div>Идёт Загрузка</div>;
  },[movies]);

  const renderPagination = useMemo(() => {
    if (!isFetching && movies) {
      return (
        <SimplePagination
          hideDisabled
          activePage={movies.page}
          itemsCountPerPage={movies.total_pages}
          totalItemsCount={movies.total_results}
          onChange={handleChangePagination}
        />
      )
     }
 
     return null;
  },[movies]);

  const renderGenre = useMemo(() => {
    return (
      <GenresContainer>
        <GenresTitle>По жанрам</GenresTitle>
        <GenresList>
          {GENRE_LIST.map(genre => {
            const isActive = filters.genres.includes(genre.id);
            return (
              <Button active={isActive} key={genre.id} name={genre.name} onClick={handleChangeGenres} dataId={genre.id} />
            );
          })}
        </GenresList>
      </GenresContainer>
    )
  } ,[GENRE_LIST, filters])

  return (
    <Wrapper>
      {renderGenre}
      {renderMovies}
      {renderPagination}
    </Wrapper>
  ) 
}
