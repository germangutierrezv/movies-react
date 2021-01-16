import { Link } from 'react-router-dom';

import './error404.scss';

function Error404() {
	return (
		<div className="error404">
			<h1>Error 404</h1>
			<h2>Pagina no encontrada</h2>
			<Link to="/">
				Volver al inicio
			</Link>
		</div>
	);
}

export default Error404;