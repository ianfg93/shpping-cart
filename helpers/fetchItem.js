const fetchItem = async (itemID) => {
  const endPoint = `https://api.mercadolibre.com/items/${itemID}`;
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
    fetchItem,
  };
}
