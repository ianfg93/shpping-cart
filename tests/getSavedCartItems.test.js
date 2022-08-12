const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se o método é chamando', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
    });
  it('Verifica se o método é chamando com dois parâmetros', async () => {
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toBeCalled();
    });
});
