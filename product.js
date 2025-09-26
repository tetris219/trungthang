// Minimal product detail page renderer
(function() {
  const byId = (id) => document.getElementById(id);
  const qs = (sel, el = document) => el.querySelector(sel);
  const VND = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

  function loadCatalog() {
    try { return JSON.parse(localStorage.getItem('products_v1') || '[]'); } catch { return []; }
  }

  function loadCart() {
    try { return JSON.parse(localStorage.getItem('cart_v1') || '[]'); } catch { return []; }
  }
  function saveCart(cart) { localStorage.setItem('cart_v1', JSON.stringify(cart)); }

  function getIdFromQuery() {
    const u = new URL(location.href);
    return u.searchParams.get('id');
  }

  function render() {
    const id = getIdFromQuery();
    const products = loadCatalog();
    const p = products.find(x => x.id === id) || products[0];
    if (!p) return;
    const host = document.getElementById('pdHost');
    host.innerHTML = `
      <div class="product-detail">
        <div>
          <img src="${p.image}" alt="${p.name}" />
        </div>
        <div>
          <div class="product-detail__title">${p.name}</div>
          <div class="price" style="margin: 8px 0 12px">
            <span class="price__current">${VND.format(p.price)}</span>
            ${p.priceOld && p.priceOld > p.price ? `<span class="price__old">${VND.format(p.priceOld)}</span>` : ''}
          </div>
          <div class="rating" style="margin-bottom:12px">${'★'.repeat(Math.round(p.rating || 0))}${'☆'.repeat(5-Math.round(p.rating || 0))}</div>
          ${p.hoverDesc ? `<div style="white-space:pre-wrap; line-height:1.6">${p.hoverDesc}</div>` : ''}
          <div style="display:flex; gap:8px; align-items:center; margin-top:12px">
            <div class="qty">
              <button id="mQty">-</button>
              <input id="qtyInput" value="1" inputmode="numeric" pattern="[0-9]*" />
              <button id="pQty">+</button>
            </div>
            <button id="addBtn" class="btn btn--primary">Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    `;

    const qtyInput = document.getElementById('qtyInput');
    document.getElementById('mQty').addEventListener('click', () => { qtyInput.value = Math.max(1, (parseInt(qtyInput.value,10)||1) - 1); });
    document.getElementById('pQty').addEventListener('click', () => { qtyInput.value = (parseInt(qtyInput.value,10)||1) + 1; });
    document.getElementById('addBtn').addEventListener('click', () => {
      const q = Math.max(1, parseInt(qtyInput.value, 10) || 1);
      const cart = loadCart();
      const item = cart.find(i => i.productId === p.id);
      if (item) item.qty += q; else cart.push({ productId: p.id, qty: q });
      saveCart(cart);
      alert('Đã thêm vào giỏ hàng');
    });
  }

  document.addEventListener('DOMContentLoaded', render);
})();


