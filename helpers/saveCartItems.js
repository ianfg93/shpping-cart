const saveCartItems = (listaSalva) => {
localStorage.setItem('listaSalva', listaSalva);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
