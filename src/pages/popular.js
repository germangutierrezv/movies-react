import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { URL_API, API } from '../utils/constants';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import MovieCatalog from '../components/MovieCatalog';
import Pagination from '../components/Pagination';


function Popular() {
	const [moviesList, setMoviesList] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=${page}`
			);

			const movies = await response.json();
			setMoviesList(movies)
		})()
	}, [page])

	const onChangePage = page => {
		setPage(page);
	};

	return (
		<Row>
			<Col span="24" style={{ textAlign: "center", marginTop: 25}}>
				<h1 style={{ fontSize: 35, fontWeight: "bold" }}>
					Peliculas Populares
				</h1>
			</Col>
			{moviesList.results ? (
				<>
					<Row span={24}>
						<MovieCatalog movies={moviesList}/>
					</Row>
					<Col span={24} style={{ textAlign: 'center'}}>
						<Pagination
							currentPage={moviesList.page}
							totalItems={moviesList.total_results}
							onChangePage={onChangePage}
						/>
					</Col>
				</>
			): (
				<Col span={24}>
					<Loading />
				</Col>
			)}
			<Col span={24}>
				<Footer />
			</Col>
		</Row>
	);
}

export default Popular;