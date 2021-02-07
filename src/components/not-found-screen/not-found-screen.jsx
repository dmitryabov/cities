import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <section className="game">
      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
};

export default NotFoundScreen;
