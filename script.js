// Dữ liệu sản phẩm mỹ phẩm
const products = [
    {
        id: 1,
        name: "Serum Vitamin C Cao Cấp",
        category: "skincare",
        price: 4550000,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Serum vitamin C với công thức đặc biệt giúp làm sáng da, giảm thâm nám và chống lão hóa hiệu quả."
    },
    {
        id: 2,
        name: "Son Lì Matte Premium",
        category: "lipstick",
        price: 280000,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Son lì matte với độ bền màu lên đến 12 giờ, không khô môi và có nhiều màu sắc thời trang."
    },
    {
        id: 3,
        name: "Kem Dưỡng Ẩm Collagen",
        category: "skincare",
        price: 320000,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Kem dưỡng ẩm chứa collagen tự nhiên giúp da căng mịn, giảm nếp nhăn và tăng độ đàn hồi."
    },
    {
        id: 4,
        name: "Mascara Siêu Dài Mi",
        category: "makeup",
        price: 180000,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Mascara với công nghệ mới giúp mi dài và cong tự nhiên, không bị vón cục và bền màu cả ngày."
    },
    {
        id: 5,
        name: "Phấn Nền Liquid Foundation",
        category: "makeup",
        price: 350000,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Phấn nền dạng lỏng với độ che phủ cao, không gây bít tắc lỗ chân lông và có nhiều tone màu."
    },
    {
        id: 6,
        name: "Son Bóng Gloss Shine",
        category: "lipstick",
        price: 220000,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Son bóng với hiệu ứng shine tự nhiên, không dính và có hương thơm nhẹ nhàng."
    },
    {
        id: 7,
        name: "Mặt Nạ Dưỡng Ẩm Overnight",
        category: "skincare",
        price: 280000,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Mặt nạ dưỡng ẩm qua đêm với thành phần tự nhiên, giúp da mềm mịn và tươi sáng vào sáng hôm sau."
    },
    {
        id: 8,
        name: "Eyeshadow Palette 12 Màu",
        category: "makeup",
        price: 420000,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Bảng phấn mắt với 12 màu sắc đa dạng, dễ blend và có độ bền màu cao suốt cả ngày."
    }
];

// Giỏ hàng
let cart = [];
let cartCount = 0;

// DOM Elements
const productGrid = document.getElementById('productGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartIcon = document.querySelector('.cart-icon');
const cartCountElement = document.querySelector('.cart-count');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Khởi tạo trang
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    setupEventListeners();
    setupScrollAnimations();
});

// Hiển thị sản phẩm
function displayProducts(productsToShow) {
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Tạo thẻ sản phẩm
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${formatPrice(product.price)} VNĐ</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
            </button>
        </div>
    `;
    return card;
}

// Lấy tên danh mục
function getCategoryName(category) {
    const categoryNames = {
        'skincare': 'Chăm sóc da',
        'makeup': 'Trang điểm',
        'lipstick': 'Son môi'
    };
    return categoryNames[category] || category;
}

// Định dạng giá tiền
function formatPrice(price) {
    return price.toLocaleString('vi-VN');
}

// Thêm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartCount();
        showNotification(`${product.name} đã được thêm vào giỏ hàng!`);
    }
}

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;
}

// Hiển thị thông báo
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 3000;
        font-weight: 500;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Thiết lập event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(product => product.category === filter);
            
            displayProducts(filteredProducts);
        });
    });
    
    // Cart icon click
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        showCartModal();
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navMenu.classList.remove('active');
            }
        });
    });
    
    // CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
    });
}

// Hiển thị modal giỏ hàng
function showCartModal() {
    cartModal.style.display = 'block';
    updateCartModal();
}

// Cập nhật modal giỏ hàng
function updateCartModal() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">Giỏ hàng của bạn đang trống</p>';
        cartTotal.innerHTML = '<h3>Tổng cộng: 0 VNĐ</h3>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)} VNĐ</div>
                <div style="margin-top: 0.5rem;">
                    <button onclick="updateQuantity(${item.id}, -1)" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">-</button>
                    <span style="margin: 0 10px; font-weight: 600;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" style="background: #27ae60; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">+</button>
                    <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-left: 10px;">Xóa</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerHTML = `
        <h3>Tổng cộng: ${formatPrice(total)} VNĐ</h3>
        <button class="checkout-btn" onclick="checkout()">Thanh toán</button>
    `;
}

// Cập nhật số lượng sản phẩm
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            updateCartModal();
        }
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
    showNotification('Sản phẩm đã được xóa khỏi giỏ hàng!');
}

// Thanh toán
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng của bạn đang trống!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Thanh toán thành công! Tổng tiền: ${formatPrice(total)} VNĐ`);
    
    cart = [];
    updateCartCount();
    cartModal.style.display = 'none';
}

// Thiết lập animation khi scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Quan sát các phần tử có class fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Thêm hiệu ứng hover cho các card
document.addEventListener('DOMContentLoaded', function() {
    // Thêm hiệu ứng loading cho các hình ảnh
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Thêm hiệu ứng parallax cho hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// Thêm tính năng tìm kiếm (có thể mở rộng)
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Thêm tính năng sắp xếp sản phẩm
function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            return;
    }
    
    displayProducts(sortedProducts);
}

// Thêm tính năng yêu thích sản phẩm
let favorites = [];

function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('Đã xóa khỏi danh sách yêu thích!');
    } else {
        favorites.push(productId);
        showNotification('Đã thêm vào danh sách yêu thích!');
    }
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-product-id'));
        if (favorites.includes(productId)) {
            btn.classList.add('favorited');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            btn.classList.remove('favorited');
            btn.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

// Thêm tính năng chia sẻ sản phẩm
function shareProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: product.description,
            url: window.location.href
        });
    } else {
        // Fallback cho trình duyệt không hỗ trợ Web Share API
        const shareText = `Xem sản phẩm: ${product.name} - ${product.description}`;
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Đã copy link sản phẩm!');
        });
    }
}
