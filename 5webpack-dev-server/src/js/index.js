import '../css/index.css';
import textico from './text';

textico();

if (module.hot) {
  module.hot.accept('./text.js', () => {
    console.log('cambio en caliente');
    textico();
  });
}
