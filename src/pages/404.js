import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import './../scss/404.scss';

const NotFoundPage = () => (
  <>
    <SEO title="404" />
    <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<Link to="/">Homepage</Link>
		</div>
	</div>
  </>
);

export default NotFoundPage;
