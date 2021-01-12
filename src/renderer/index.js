const searchParams = new URLSearchParams(location.search);
const route = searchParams.get('route');

// Trick some libraries into thinking they're not running in node
window.module = undefined;

if (route === 'editor') {
  import('./gui/gui.jsx');
} else if (route === 'about') {
  import('./about/about.jsx');
} else {
  alert(`Invalid route: ${route}`);
}
