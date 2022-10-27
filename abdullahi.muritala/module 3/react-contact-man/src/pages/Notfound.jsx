import React from 'react';
import Link from '../components/Link.styles';

function Notfound() {
  return (
    <div className="not-found">
      <h1>Error 404</h1>
      <p>
        Something went wrong, we are unable to find the page you requested. Go back to{' '}
        <Link to="./">home</Link>
      </p>
    </div>
  );
}

export default Notfound;
