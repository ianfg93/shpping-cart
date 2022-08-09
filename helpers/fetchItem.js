const fetchItem = () => {
  fetch('https://api.mercadolibre.com/items/MLB1615760527')
  .then((data) => data.json())
  .catch((error) => error);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
