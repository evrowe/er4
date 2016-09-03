import React from 'react';

export default () => (
  <div className='container text-center'>
    <h1>Ah Ah Ah!</h1>
    <p>You didn't say the magic word, ya dingus!</p>
    <img
      src='/img/ahahah.gif'
      alt='Dennis Nedry shaking his finger gif from Jurassic Park'
      title='Boy this is a fun cliched developer joke. But you know what? I regret nothing.' />
    <p>
      <a className='button' href='/service/auth/login'>Say the Magic Word</a>
    </p>
  </div>
);
