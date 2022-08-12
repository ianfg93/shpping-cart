const getSavedCartItems = (listaSalva) => {
  localStorage.getItem(listaSalva);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
