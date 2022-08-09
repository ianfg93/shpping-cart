require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se a fetchItem é função', () => {
    expect(typeof fetchItem).toBe('function') 
    });
  it('Verifica se está chamando a fetch', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
    });
  it('Verifica o url da fetch', async () => {
    expect.assertions(1);
    const produto = 'MLB1615760527'
    const url = `https://api.mercadolibre.com/items/${produto}`
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
    });
  it('Verifica se estrutura de dados igual ao objeto', async () => {
    const itens = await fetchItem('MLB1615760527');
    expect(itens).toEqual(item);  
    })
  it('Verifica se retronar um erro quando vazio', async () => {
    try{
      await fetchItem ();
    }catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
    })
});
