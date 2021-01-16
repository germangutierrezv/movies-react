import { Row, Col } from 'antd';
import useFetch from '../../hooks/useFetch';
import { URL_API, API } from '../../utils/constants'
import SliderMovies from '../../components/SliderMovies';
import MovieList from '../../components/MovieList';
import Footer from '../../components/Footer';

function Home() {
	const urlNewMovies = `${URL_API}/movie/now_playing/?api_key=${API}&language=es-ES&page=1`
	const urlPopularMovies = `${URL_API}/movie/popular/?api_key=${API}&language=es-ES&page=1`
	const urlTopRatedMovies = `${URL_API}/movie/top_rated/?api_key=${API}&language=es-ES&page=1`

	const newMovies = useFetch(urlNewMovies);
	const popularMovies = useFetch(urlPopularMovies);
	const topRatedMovies = useFetch(urlTopRatedMovies);

	return (
		<>
			<SliderMovies movies={newMovies}/>
			<Row>
				<Col span={12}>
					<MovieList title="Peliculas Populares" movies={popularMovies} />
				</Col>

				<Col span={12}>
					<MovieList title="Top Mejores Peliculas Puntuada" movies={topRatedMovies} />
				</Col>
			</Row>
			<Footer />
		</>
	)
}

export default Home;