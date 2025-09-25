// Utilities
const VND = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
const byId = (id) => document.getElementById(id);
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

// Data (example)
const categories = [
  'Tất cả',
  'Điện thoại',
  'Laptop',
  'Phụ kiện',
  'Thời trang',
  'Nhà cửa',
  'Sức khỏe',
  'Thể thao'
];

const products = [
  { id: 'p1', name: 'Điện thoại XPhone 12 128GB', category: 'Điện thoại', price: 12500000, priceOld: 14990000, rating: 4.7, image: 'https://picsum.photos/seed/p1/600/600', createdAt: Date.now()-1000*60*60*24*10 },
  { id: 'p2', name: 'Laptop UltraBook 14" i5 16GB', category: 'Laptop', price: 18990000, priceOld: 21990000, rating: 4.5, image: 'https://picsum.photos/seed/p2/600/600', createdAt: Date.now()-1000*60*60*24*2 },
  { id: 'p3', name: 'Tai nghe Bluetooth Pro', category: 'Phụ kiện', price: 790000, priceOld: 1290000, rating: 4.3, image: 'https://picsum.photos/seed/p3/600/600', createdAt: Date.now()-1000*60*60*24*20 },
  { id: 'p4', name: 'Áo thun Basic Unisex', category: 'Thời trang', price: 99000, priceOld: 149000, rating: 4.2, image: 'https://picsum.photos/seed/p4/600/600', createdAt: Date.now()-1000*60*60*24*1 },
  { id: 'p5', name: 'Bộ nồi Inox 5 món', category: 'Nhà cửa', price: 1290000, priceOld: 1590000, rating: 4.6, image: 'https://picsum.photos/seed/p5/600/600', createdAt: Date.now()-1000*60*60*24*60 },
  { id: 'p6', name: 'Máy massage cổ thông minh', category: 'Sức khỏe', price: 550000, priceOld: 890000, rating: 4.1, image: 'https://picsum.photos/seed/p6/600/600', createdAt: Date.now()-1000*60*60*24*4 },
  { id: 'p7', name: 'Giày chạy bộ AirRun', category: 'Thể thao', price: 690000, priceOld: 990000, rating: 4.4, image: 'https://picsum.photos/seed/p7/600/600', createdAt: Date.now()-1000*60*60*24*6 },
  { id: 'p8', name: 'Bàn phím cơ RGB 87 phím', category: 'Phụ kiện', price: 890000, priceOld: 1290000, rating: 4.6, image: 'https://picsum.photos/seed/p8/600/600', createdAt: Date.now()-1000*60*60*24*3 },
  { id: 'p9', name: 'Điện thoại MegaPixel 64MP', category: 'Điện thoại', price: 8200000, priceOld: 9990000, rating: 4.0, image: 'https://picsum.photos/seed/p9/600/600', createdAt: Date.now()-1000*60*60*24*12 },
  { id: 'p10', name: 'Laptop Pro 15" Ryzen 7', category: 'Laptop', price: 23990000, priceOld: 27990000, rating: 4.8, image: 'https://picsum.photos/seed/p10/600/600', createdAt: Date.now()-1000*60*60*24*0.5 },
  { id: 'p11', name: 'Bình giữ nhiệt 900ml', category: 'Nhà cửa', price: 159000, priceOld: 199000, rating: 4.5, image: 'https://picsum.photos/seed/p11/600/600', createdAt: Date.now()-1000*60*60*24*14 },
  { id: 'p12', name: 'Khẩu trang 3D hộp 50 chiếc', category: 'Sức khỏe', price: 79000, priceOld: 99000, rating: 4.3, image: 'https://picsum.photos/seed/p12/600/600', createdAt: Date.now()-1000*60*60*24*40 }
];

// State
let state = {
  query: '',
  category: 'Tất cả',
  onlyDiscount: false,
  maxPrice: '',
  sort: 'pop',
  cart: loadCart(),
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  byId('year').textContent = new Date().getFullYear();
  mountCategories();
  bindFilters();
  render();
  setupCartDrawer();
});

// Rendering
function render() {
  const filtered = applyFilters();
  const sorted = applySort(filtered);
  renderProducts(sorted);
  byId('resultsCount').textContent = `${sorted.length} sản phẩm`;
  updateCartBadge();
}

function mountCategories() {
  const top = byId('topCategories');
  const side = byId('sideCategories');
  const cats = categories;
  top.innerHTML = '';
  side.innerHTML = '';

  cats.forEach(c => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = c;
    if (c === state.category) a.classList.add('active');
    a.addEventListener('click', (e) => {
      e.preventDefault();
      state.category = c;
      mountCategories();
      render();
    });
    li.appendChild(a);
    top.appendChild(li);

    const li2 = document.createElement('li');
    const a2 = a.cloneNode(true);
    a2.addEventListener('click', (e) => {
      e.preventDefault();
      state.category = c;
      mountCategories();
      render();
    });
    li2.appendChild(a2);
    side.appendChild(li2);
  });
}

function bindFilters() {
  const searchInput = byId('searchInput');
  const searchBtn = byId('searchBtn');
  const maxPrice = byId('maxPrice');
  const onlyDiscount = byId('onlyDiscount');
  const applyBtn = byId('applyFilters');
  const clearBtn = byId('clearFilters');
  const sortSelect = byId('sortSelect');

  searchBtn.addEventListener('click', () => { state.query = searchInput.value.trim(); render(); });
  searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { state.query = searchInput.value.trim(); render(); } });
  applyBtn.addEventListener('click', () => {
    state.maxPrice = maxPrice.value;
    state.onlyDiscount = !!onlyDiscount.checked;
    render();
  });
  clearBtn.addEventListener('click', () => {
    maxPrice.value = '';
    onlyDiscount.checked = false;
    state.maxPrice = '';
    state.onlyDiscount = false;
    state.query = '';
    byId('searchInput').value = '';
    state.category = 'Tất cả';
    mountCategories();
    render();
  });
  sortSelect.addEventListener('change', () => { state.sort = sortSelect.value; render(); });
}

function applyFilters() {
  let list = products.slice();
  if (state.category && state.category !== 'Tất cả') {
    list = list.filter(p => p.category === state.category);
  }
  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q));
  }
  if (state.onlyDiscount) {
    list = list.filter(p => (p.priceOld || 0) > p.price);
  }
  if (state.maxPrice) {
    const max = Number(state.maxPrice) || 0;
    if (max > 0) list = list.filter(p => p.price <= max);
  }
  return list;
}

function applySort(list) {
  const arr = list.slice();
  switch (state.sort) {
    case 'price_asc':
      arr.sort((a,b) => a.price - b.price); break;
    case 'price_desc':
      arr.sort((a,b) => b.price - a.price); break;
    case 'new':
      arr.sort((a,b) => b.createdAt - a.createdAt); break;
    default:
      arr.sort((a,b) => (b.rating||0) - (a.rating||0));
  }
  return arr;
}

function renderProducts(list) {
  const grid = byId('productsGrid');
  grid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img class="card__img" src="${p.image}" alt="${p.name}" />
      <div class="card__body">
        <div class="title" title="${p.name}">${p.name}</div>
        <div class="price">
          <span class="price__current">${VND.format(p.price)}</span>
          ${p.priceOld && p.priceOld > p.price ? `<span class="price__old">${VND.format(p.priceOld)}</span>` : ''}
        </div>
        <div class="rating">${'★'.repeat(Math.round(p.rating || 0))}${'☆'.repeat(5-Math.round(p.rating || 0))} <span style="color:var(--muted)">(${(p.rating||0).toFixed(1)})</span></div>
        <div class="card__actions">
          <button class="btn btn--primary" data-add="${p.id}">Thêm vào giỏ</button>
          <button class="btn" data-view="${p.id}">Xem nhanh</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Bind actions
  qsa('[data-add]').forEach(btn => btn.addEventListener('click', () => {
    addToCart(btn.getAttribute('data-add'), 1);
  }));
  qsa('[data-view]').forEach(btn => btn.addEventListener('click', () => {
    openProductModal(btn.getAttribute('data-view'));
  }));
}

// Cart
function loadCart() {
  try { return JSON.parse(localStorage.getItem('cart_v1') || '[]'); } catch { return []; }
}
function saveCart() {
  localStorage.setItem('cart_v1', JSON.stringify(state.cart));
}
function updateCartBadge() {
  const count = state.cart.reduce((s,i)=>s+i.qty,0);
  byId('cartCount').textContent = String(count);
  const subtotal = state.cart.reduce((s, i) => s + i.qty * (products.find(p=>p.id===i.productId)?.price || 0), 0);
  byId('cartSubtotal').textContent = VND.format(subtotal);
}
function addToCart(productId, qty=1) {
  const item = state.cart.find(i => i.productId === productId);
  if (item) item.qty += qty; else state.cart.push({ productId, qty });
  saveCart();
  renderCartItems();
  updateCartBadge();
  openCart();
}
function changeQty(productId, delta) {
  const item = state.cart.find(i => i.productId === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(i => i.productId !== productId);
  saveCart();
  renderCartItems();
  updateCartBadge();
}
function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.productId !== productId);
  saveCart();
  renderCartItems();
  updateCartBadge();
}

function renderCartItems() {
  const wrap = byId('cartItems');
  if (!wrap) return;
  if (state.cart.length === 0) {
    wrap.innerHTML = '<div style="color:var(--muted)">Giỏ hàng trống</div>';
    return;
  }
  wrap.innerHTML = '';
  state.cart.forEach(ci => {
    const p = products.find(p => p.id === ci.productId);
    if (!p) return;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <div>
        <div>${p.name}</div>
        <div class="price"><span class="price__current">${VND.format(p.price)}</span></div>
        <div class="qty">
          <button data-qminus="${p.id}">-</button>
          <input value="${ci.qty}" inputmode="numeric" pattern="[0-9]*" data-qinput="${p.id}" />
          <button data-qplus="${p.id}">+</button>
        </div>
      </div>
      <div>
        <button class="icon-btn" title="Xóa" data-remove="${p.id}">🗑️</button>
      </div>
    `;
    wrap.appendChild(div);
  });

  qsa('[data-qminus]').forEach(b => b.addEventListener('click', () => changeQty(b.getAttribute('data-qminus'), -1)));
  qsa('[data-qplus]').forEach(b => b.addEventListener('click', () => changeQty(b.getAttribute('data-qplus'), +1)));
  qsa('[data-qinput]').forEach(inp => inp.addEventListener('change', () => {
    const id = inp.getAttribute('data-qinput');
    let qty = parseInt(inp.value, 10) || 0;
    const item = state.cart.find(i => i.productId === id);
    if (!item) return;
    if (qty <= 0) { removeFromCart(id); return; }
    item.qty = qty;
    saveCart();
    renderCartItems();
    updateCartBadge();
  }));
  qsa('[data-remove]').forEach(b => b.addEventListener('click', () => removeFromCart(b.getAttribute('data-remove'))));
}

function setupCartDrawer() {
  const btn = byId('cartBtn');
  const close = byId('closeCart');
  const overlay = byId('drawerOverlay');
  btn.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);
  renderCartItems();

  byId('checkoutBtn').addEventListener('click', () => {
    if (state.cart.length === 0) return;
    openCheckout();
  });
}
function openCart() { byId('cartDrawer').setAttribute('aria-hidden', 'false'); }
function closeCart() { byId('cartDrawer').setAttribute('aria-hidden', 'true'); }

// Product modal
function openProductModal(productId) {
  const p = products.find(p => p.id === productId);
  if (!p) return;
  const host = byId('productDetail');
  host.innerHTML = `
    <div class="product-detail">
      <div>
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div>
        <div id="productTitle" class="product-detail__title">${p.name}</div>
        <div class="price" style="margin: 8px 0 12px">
          <span class="price__current">${VND.format(p.price)}</span>
          ${p.priceOld && p.priceOld > p.price ? `<span class="price__old">${VND.format(p.priceOld)}</span>` : ''}
        </div>
        <div class="rating" style="margin-bottom:12px">${'★'.repeat(Math.round(p.rating || 0))}${'☆'.repeat(5-Math.round(p.rating || 0))} <span style="color:var(--muted)">(${(p.rating||0).toFixed(1)})</span></div>
        <div style="display:flex; gap:8px; align-items:center">
          <div class="qty">
            <button id="mQty">-</button>
            <input id="qtyInput" value="1" inputmode="numeric" pattern="[0-9]*" />
            <button id="pQty">+</button>
          </div>
          <button id="modalAdd" class="btn btn--primary">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  `;
  const modal = byId('productModal');
  modal.setAttribute('aria-hidden', 'false');
  qsa('[data-close-modal]', modal).forEach(el => el.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true')));
  const qtyInput = byId('qtyInput');
  byId('mQty').addEventListener('click', () => { qtyInput.value = Math.max(1, (parseInt(qtyInput.value,10)||1) - 1); });
  byId('pQty').addEventListener('click', () => { qtyInput.value = (parseInt(qtyInput.value,10)||1) + 1; });
  byId('modalAdd').addEventListener('click', () => {
    const q = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    addToCart(productId, q);
    modal.setAttribute('aria-hidden', 'true');
  });
}

// Checkout
function openCheckout() {
  closeCart();
  const host = byId('orderSummary');
  host.innerHTML = '';
  let total = 0;
  state.cart.forEach(ci => {
    const p = products.find(p => p.id === ci.productId);
    if (!p) return;
    const line = document.createElement('div');
    const lineTotal = p.price * ci.qty;
    total += lineTotal;
    line.textContent = `${p.name} × ${ci.qty} — ${VND.format(lineTotal)}`;
    host.appendChild(line);
  });
  const totalEl = document.createElement('div');
  totalEl.style.fontWeight = '700';
  totalEl.style.marginTop = '6px';
  totalEl.textContent = `Tổng cộng: ${VND.format(total)}`;
  host.appendChild(totalEl);

  const modal = byId('checkoutModal');
  modal.setAttribute('aria-hidden', 'false');
  qsa('[data-close-modal]', modal).forEach(el => el.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true')));

  const form = byId('checkoutForm');
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = byId('fullName').value.trim();
    const phone = byId('phone').value.trim();
    const addr = byId('address').value.trim();
    if (!name || !phone || !addr) return;
    alert(`Cảm ơn ${name}! Đơn hàng của bạn đang được xử lý.`);
    state.cart = [];
    saveCart();
    renderCartItems();
    updateCartBadge();
    modal.setAttribute('aria-hidden', 'true');
  };
}


