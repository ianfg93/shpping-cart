const fetchProducts = async (produto) => {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  try {
    const resultado = await fetch(endPoint);
    const data = await resultado.json();
    return data;
  } catch (error) {
    return error;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
