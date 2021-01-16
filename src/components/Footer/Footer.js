import { Layout } from 'antd';

import "./Footer.scss";

function Footer() {
	const { Footer } = Layout;

	return (
		<Footer className="footer">
			<p>Desarrollado por <strong>German Gutierrez</strong></p>
		</Footer>
	)
}

export default Footer;