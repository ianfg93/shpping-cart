const cartItems = document.querySelector('.cart__items');
const addElementos = document.querySelector('.items');
const valorTotal = document.querySelector('.total-price');
const btnLimpar = document.querySelector('.empty-cart');
const sessao = document.querySelector('.container');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// SALVANDO PRODUTO
const salvar = () => {
  const produto = cartItems.innerHTML;
  localStorage.setItem('listaSalva', produto);
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// SALVANDO NO LOCAL STORAGE
const salvandoLocalStorage = () => {
  const produto = cartItems.innerHTML;
  saveCartItems(JSON.stringify(produto));
};

// REMOVENDO ITENS
const cartItemClickListener = (event) => {
  event.target.remove();
  salvar();
  salvandoLocalStorage();
  saveCartItems(cartItems.innerHTML);
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// ADD AO CARRINHO
const produtoSelec = async (event) => {
  const id = getSkuFromProductItem(event.target.parentNode);
  console.log(id);
  const item = await fetchItem(id);
  console.log(item);
  const carrinho = createCartItemElement(item);
  console.log(carrinho);
  cartItems.appendChild(carrinho);
  salvandoLocalStorage();
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const addCarrinho = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addCarrinho.addEventListener('click', produtoSelec);
  section.appendChild(addCarrinho);

  return section;
};

// LISTANDO OS PRODUTOS NA PAGINA
const addProdutos = async () => {
const produtos = await fetchProducts('computador');
produtos.results.forEach((element) => {
const produto = createProductItemElement(element);
addElementos.appendChild(produto);
});
};

// LIMPANDO CARRINHO
btnLimpar.addEventListener('click', () => {
  cartItems.innerHTML = '';
});

// INICIANDO PAGINA COM 'CARREGANDO'
function iniciando() {
  const msgInicil = document.createElement('section');
  msgInicil.className = 'loading';
  msgInicil.innerText = 'carregando...';
  sessao.appendChild(msgInicil);
  setTimeout(() => {
  sessao.removeChild(msgInicil);
  }, 2000);
}

const inicil = async () => {
  iniciando();
};

window.onload = async () => { 
  addProdutos();
  salvandoLocalStorage();
  await inicil();
};
