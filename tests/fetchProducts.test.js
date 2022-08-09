require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it ('Verifica se a função é função', () => {
  expect(typeof fetchProducts). toBe('function') 
  });
  it ('Verifica se está chamando a fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it ('Verifica o url da fetch', async () => {
    expect.assertions(1);
    const produto = 'computador'
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url);
  });
  it ('Verifica se estrutura de dados igual ao objeto', async () => {
   const comp = await fetchProducts('computador');
   expect(comp).toBe(computadorSearch)

  })
  it ('Verifica se retronar um erro quando vazio', async () => {
    try {
      await fetchProducts ();
    } catch (error) {
      expect (error).toEqual(new Error('You must provide an url'));
    }
  })
});
