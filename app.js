// Utilities
const VND = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
const byId = (id) => document.getElementById(id);
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

// Data (example)
const categories = [
  'Tất cả',
  'SÉT DƯỠNG DA',
  'KEM CHỐNG NẮNG',
  'SỮA RỬA MẶT',
  'NƯỚC TẨY TRANG',
  'DẦU GỘI',
  'THỰC PHẨM CHỨC NĂNG',
  'SÂM NẤM',
  'KEM ĐÁNH RĂNG',
  'KEM DƯỠNG DA',
  'TẨY DA CHẾT',
  'NƯỚC HỒNG SÂM',
  'KẸO HỒNG SÂM',
  'SERUM DƯỠNG DA',
  'VIÊN UỐNG',
  'DẦU NÓNG',
  'CAO DÁN',
  'TINH DẦU',
  'VIÊN CANXI',
  'XỊT CHỐNG NẮNG',
  'BỌT TUYẾT',
  'KEM TRỊ NÁM'
];

const products = [
  { id: 'p1', name: 'SET DƯỠNG SU:M37 VÀNG 9 MÓN MẪU MỚI – TÁI SINH DA, CHỐNG LÃO HÓA', category: 'SÉT DƯỠNG DA', price: 0, priceOld: 14990000, rating: 4.7, image: 'https://bizweb.dktcdn.net/thumb/medium/100/027/493/products/df3164a90c7d40a5a6ec16c546316d34.jpg?v=1755577113620', createdAt: Date.now()-1000*60*60*24*10, hoverDesc: 'Set dưỡng Su:m37 Losec Summa Elixir 9sp – phiên bản mới nhất – dòng cao cấp đình đám giúp tái tạo và trẻ hóa da toàn diện.\n\nCông dụng:\n- Tái tạo, phục hồi da yếu, da mụn, da lão hóa.\n- Chống nhăn, chống chảy xệ, tăng độ đàn hồi và trẻ hóa da.\n- Se khít lỗ chân lông, hỗ trợ trị mụn, làm sáng mịn da.\n- Chiết xuất thiên nhiên, an toàn, không gây kích ứng – kể cả da nhạy cảm.\n\nBộ 9 món cao cấp gồm:\n- Nước hoa hồng 150ml + 20ml\n- Sữa dưỡng 130ml + 20ml\n- Kem Su:m vàng Losec 10ml\n- Tinh chất essence 8ml\n- Kem dưỡng mắt 10ml\n- Sữa rửa mặt Su:m vàng 60ml\n- Nước thần Su:m 12ml\n\nSet dưỡng Su:m vàng – giải pháp toàn diện cho làn da căng mướt, mềm mịn, trẻ trung rạng rỡ.' },
  { id: 'p2', name: 'Bộ Kem Lót & Kem Nền Su:m37 Summa Losec Make Up Special Set', category: 'SÉT DƯỠNG DA', price: 0, priceOld: 21990000, rating: 4.5, image: 'https://bizweb.dktcdn.net/thumb/medium/100/027/493/products/2777d8d0ca1040a2a89198a701bb5876.jpg?v=1755505456417', createdAt: Date.now()-1000*60*60*24*2, hoverDesc: 'Bộ trang điểm Su:m37 Summa Losec Make Up Special Set là sự kết hợp hoàn hảo giữa kem lót và kem nền chống lão hóa, mang đến lớp trang điểm mịn màng, tự nhiên mà vẫn bảo vệ da toàn diện. Đây là dòng sản phẩm cao cấp của Su:m37, giúp bạn vừa trang điểm chuyên nghiệp, vừa nuôi dưỡng làn da sáng khỏe, tươi trẻ.\n\n✨ Ưu điểm:\n- Kem lót: Kết cấu dạng sệt, thấm nhanh, không nhờn dính. Chứa tinh chất vàng lấp lánh, giúp cấp ẩm, lấp đầy nếp nhăn & lỗ chân lông, tạo lớp nền mềm mịn và bền màu.\n\n- Kem nền: Siêu mịn, che phủ khuyết điểm tự nhiên, mỏng nhẹ, không gây bết dính. Giúp da đều màu, căng bóng, sáng mịn. Tích hợp chống nắng SPF 30/PA++, bảo vệ da khỏi tia UV.\n\n- Giữ lớp makeup lâu trôi, bền tone, mang lại diện mạo rạng rỡ, chuyên nghiệp.\n\n📦 Bộ sản phẩm bao gồm:\n- Kem lót chống lão hóa Su:m37 (20ml)\n- Kem nền chống lão hóa Su:m37 (20ml)\n- Kem dưỡng môi Lipcerin (15ml)\n- 05 sample son dưỡng Skin-Stay 0.5ml\n\n🌸 Công dụng chính\n- Trang điểm chuyên nghiệp, tạo lớp nền mịn đẹp.\n- Bảo vệ da, chống lão hóa, ngăn tác động từ mỹ phẩm và môi trường.\n- Cấp ẩm, dưỡng sáng, chống nắng nhẹ nhàng cho làn da luôn khỏe mạnh.' },
  { id: 'p3', name: 'Pretty Skin Centella Asiatica Mist The Pure Jeju Cica 99 Mist (100ml)', category: 'XỊT KHOÁNG', price: 200000, priceOld: 250000, rating: 4.8, image: 'https://bizweb.dktcdn.net/100/027/493/products/spanbr-pp-pp-style-text-align-center-27-739ade9d84c04052b80736539f6c4939-grande.jpg?v=1713427236387', createdAt: Date.now()-1000*60*60*24*5, hoverDesc: 'Pretty Skin Centella Asiatica Mist The Pure Jeju Cica 99 Mist (100ml) – cứu tinh cho mọi loại da, mang lại cảm giác dễ chịu, làm dịu da tức thì. Công dụng: Cung cấp khoáng chất và độ ẩm cho da. Làm dịu da ngay lập tức khi sử dụng. Phù hợp trong điều kiện thời tiết khô hoặc phòng máy lạnh. An toàn, lành tính cho mọi loại da. Xịt khoáng Pretty Skin Cica Mist – bí quyết giữ da luôn tươi mát, ẩm mịn và khỏe mạnh mỗi ngày.' },
  { id: 'p3', name: 'Sữa Rửa Mặt Dưỡng Ẩm Trà Xanh Innisfree Green Tea Amino Hydrating 150g (Mới 2023)', category: 'SỮA RỬA MẶT', price: 190000, priceOld: 230000, rating: 4.7, image: 'https://bizweb.dktcdn.net/100/027/493/products/s2740538-av-7-zoom-49039.jpg?v=1715238654410', createdAt: Date.now()-1000*60*60*24*3, hoverDesc: 'Sữa Rửa Mặt Innisfree Green Tea Amino Hydrating Cleansing Foam chiết xuất trà xanh, 16 loại amino acid giúp làm sạch sâu, cấp ẩm vượt trội, mang lại làn da sáng khỏe.' },
{ id: 'p4', name: 'Kem Chống Nắng Pretty Skin Multi Hydra B5 Oil Control Sun Cream - 50ml', category: 'KEM CHỐNG NẮNG', price: 320000, priceOld: 350000, rating: 4.8, image: 'https://bizweb.dktcdn.net/100/027/493/products/496220881-1000445328909955-3808972106607767227-n.jpg?v=1754292645287', createdAt: Date.now()-1000*60*60*24*6, hoverDesc: 'Pretty Skin Hydra B5 Oil Control Sun Cream SPF50+ PA++++, 9 màng lọc chống tia UVA/UVB/HEV, bảo vệ da, kiềm dầu hiệu quả suốt cả ngày.' },
{ id: 'p5', name: 'Tẩy Da Chết Rau Má Prettyskin The Pure Jeju Cica Peeling Gel 150ml', category: 'TẨY DA CHẾT', price: 200000, priceOld: 230000, rating: 4.6, image: 'https://bizweb.dktcdn.net/100/027/493/products/pretty-skin-jeju-tay-te-bao-da-myphamlan-4.jpg?v=1708500164830', createdAt: Date.now()-1000*60*60*24*7, hoverDesc: 'Pretty Skin Jeju Cica Peeling Gel chiết xuất rau má, làm sạch bụi bẩn, bã nhờn, tẩy tế bào chết dịu nhẹ, giúp da sáng khỏe, mịn màng.' },
{ id: 'p6', name: 'Bộ Trị Nám Dongsung Premium Skin Care Set', category: 'BỘ TRỊ NÁM', price: 1300000, priceOld: 1500000, rating: 4.9, image: 'https://bizweb.dktcdn.net/100/027/493/products/3857f515366e49698044c70650b5f21b.jpg?v=1701507293667', createdAt: Date.now()-1000*60*60*24*9, hoverDesc: 'Dongsung Rannce Premium Skin Care Set – trị nám lâu năm, làm sáng da, tái tạo làn da mịn màng, trắng hồng rạng rỡ.' },
{ id: 'p7', name: 'Kem Chống Nắng Nâng Tone Innisfree Tone Up No Sebum Sunscreen SPF50+ PA++++ 60ml (Mẫu mới)', category: 'KEM CHỐNG NẮNG', price: 320000, priceOld: 400000, rating: 4.7, image: 'https://bizweb.dktcdn.net/100/027/493/products/img08-1625d58dbc364a10b0c6c72ac030932e-1024x1024.jpg?v=1699845489680', createdAt: Date.now()-1000*60*60*24*2, hoverDesc: 'Innisfree Tone Up No Sebum Sunscreen SPF50+ PA++++ – chống nắng, nâng tone da tự nhiên, kiềm dầu, cho làn da sáng khỏe.' },
{ id: 'p8', name: 'Kem Dưỡng Prettyskin Retinal BakuChiol A-Mazing Night Cream (30ml)', category: 'KEM DƯỠNG DA', price: 390000, priceOld: 420000, rating: 4.8, image: 'https://bizweb.dktcdn.net/100/027/493/products/vn-11134207-7r98o-lmvvpklspwwv00.jpg?v=1699669050180', createdAt: Date.now()-1000*60*60*24*4, hoverDesc: 'Pretty Skin Retinal Bakuchiol Night Cream – phục hồi, tái tạo da, giảm nếp nhăn, mờ đốm nâu, dưỡng da trẻ trung.' },
{ id: 'p9', name: 'Nước Hoa Hồng Dr.Pepti Centella Toner Ex 180ml', category: 'NƯỚC HOA HỒNG', price: 340000, priceOld: 350000, rating: 4.7, image: 'https://bizweb.dktcdn.net/100/027/493/products/07f170953a814783b8a6057050add35a.jpg?v=1755059424707', createdAt: Date.now()-1000*60*60*24*1, hoverDesc: 'Dr.Pepti Centella Toner Ex 66,28% chiết xuất rau má tự nhiên, làm sạch dịu nhẹ, cấp ẩm, cho da căng bóng, mềm mại.' },
{ id: 'p10', name: 'Nước Tẩy Trang Pretty Skin B5 Cleansing Water (500ml)', category: 'TẨY TRANG', price: 250000, priceOld: 270000, rating: 4.6, image: 'https://bizweb.dktcdn.net/100/027/493/products/post-app-2919-z4654556728424-92155e27350c0823e1502bd66425f216.jpg?v=1698395692070', createdAt: Date.now()-1000*60*60*24*8, hoverDesc: 'Pretty Skin B5 Cleansing Water – tẩy trang phục hồi cho da nhạy cảm, dịu nhẹ, không cồn, không hương liệu, an toàn cho da.' },
{ id: 'p11', name: 'Kem Dưỡng Dr.Pepti Centella Moist Soothing Gel Cream 70ml', category: 'KEM DƯỠNG ẨM', price: 450000, priceOld: 500000, rating: 4.9, image: 'https://bizweb.dktcdn.net/100/027/493/products/524705677-724222650591653-5237146652593789239-n.jpg?v=1754468445490', createdAt: Date.now()-1000*60*60*24*5, hoverDesc: 'Dr.Pepti Centella Moist Soothing Gel Cream chiết xuất rau má, cấp ẩm vượt trội, làm dịu da, mang lại làn da khỏe mạnh, mịn màng.' },
{ id: 'p13', name: 'Thuốc đặc trị hôi nách Hàn Quốc Driclor 20ml (Mẫu mới)', category: 'LĂN KHỬ MÙI', price: 290000, priceOld: 350000, rating: 4.8, image: 'https://bizweb.dktcdn.net/100/027/493/products/z4400379758981-7ab424ec3bf34858fdd93065c565715a.jpg?v=1685780997687', createdAt: Date.now()-1000*60*60*24*3, hoverDesc: 'Lăn khử mùi Driclor số 1 Hàn Quốc, ngăn tiết mồ hôi hiệu quả, được bác sĩ da liễu khuyên dùng, dành cho người ra nhiều mồ hôi.' },

{ id: 'p14', name: 'Kem Dưỡng Trắng Da Nâng Tông Louvcell Crystal Whitening Body Lotion 250ml', category: 'KEM DƯỠNG BODY', price: 400000, priceOld: 450000, rating: 4.7, image: 'https://bizweb.dktcdn.net/100/027/493/products/d862f3dae48c454ea7fdf38a2e2bab9b.jpg?v=1755145743640', createdAt: Date.now()-1000*60*60*24*6, hoverDesc: 'Louvcell Crystal Whitening Body Lotion – dưỡng trắng, cấp ẩm, nâng tone tức thì, mờ thâm, ngăn nám, 3 mùi hương sang trọng.' },

{ id: 'p15', name: 'Cao Hồng Sâm Cô Đặc K-Best Food Hàn Quốc (Hộp 2 lọ/4 lọ)', category: 'THỰC PHẨM BỔ SUNG', price: 1200000, priceOld: 1500000, rating: 4.9, image: 'https://bizweb.dktcdn.net/100/027/493/products/z5871979874590-f8335f042f5d6133819f8496ceb3f3dd.jpg?v=1727662149160', createdAt: Date.now()-1000*60*60*24*4, hoverDesc: 'Cao hồng sâm cô đặc K-Best Food – bí quyết duy trì sức khỏe, tăng đề kháng, bồi bổ cơ thể cho cả gia đình.' },

{ id: 'p16', name: 'Nấm Linh Chi Hàn Quốc Sangju City', category: 'THẢO DƯỢC', price: 1600000, priceOld: 1720000, rating: 4.8, image: 'https://bizweb.dktcdn.net/100/027/493/products/z2782896241727-580c3b286b84c2b7ba0e8fd5931de3cb.jpg?v=1632283551523', createdAt: Date.now()-1000*60*60*24*7, hoverDesc: 'Nấm linh chi Sangju City – hỗ trợ tuần hoàn, ổn định huyết áp, lọc máu, giảm mệt mỏi, tăng cường sức khỏe toàn diện.' },

{ id: 'p17', name: 'Nước Hồng Sâm Nhung Hươu Linh Chi 365 Hansusam Hàn Quốc (Hộp 30 Gói x 70ml)', category: 'NƯỚC HỒNG SÂM', price: 500000, priceOld: 600000, rating: 4.7, image: 'https://bizweb.dktcdn.net/100/027/493/products/293b1e016c5f49aebf0ed3db6d0eafdd.jpg?v=1755574963003', createdAt: Date.now()-1000*60*60*24*2, hoverDesc: 'Hồng sâm 6 năm tuổi kết hợp nhung hươu và linh chi – bồi bổ cơ thể, tăng đề kháng, giảm mệt mỏi, phục hồi sức khỏe nhanh chóng.' },

{ id: 'p18', name: 'Nước Hồng Sâm Pocheon Hàn Quốc 6 năm tuổi (Hộp 30 Gói)', category: 'NƯỚC HỒNG SÂM', price: 500000, priceOld: 600000, rating: 4.9, image: 'https://bizweb.dktcdn.net/100/027/493/products/nuoc-hong-sam-han-quoc-pocheon-hop-30-goi.jpg?v=1576570458410', createdAt: Date.now()-1000*60*60*24*5, hoverDesc: 'Hồng sâm Pocheon 6 năm tuổi – bồi bổ cơ thể, hỗ trợ huyết áp, đường huyết, cải thiện giấc ngủ, quà tặng sức khỏe sang trọng.' },
{ id: 'p19', name: 'Sữa rửa mặt Hàn Quốc Innisfree Jeju Volcanic Pore Cleansing Foam', category: 'SỮA RỬA MẶT', price: 200000, priceOld: 250000, rating: 4.7, image: 'https://tiki.vn/blog/wp-content/uploads/2023/08/sua-rua-mat-innisfree-jeju_1.jpg', createdAt: Date.now()-1000*60*60*24*3, hoverDesc: 'Sữa rửa mặt tro núi Jeju – làm sạch sâu, thông thoáng lỗ chân lông, ngừa mụn cám & mụn đầu đen, dưỡng ẩm, dưỡng trắng, kháng viêm hiệu quả.' },

{ id: 'p20', name: 'Sữa rửa mặt Hàn Quốc Innisfree Green Tea Cleansing Foam', category: 'SỮA RỬA MẶT', price: 170000, priceOld: 240000, rating: 4.8, image: 'https://tiki.vn/blog/wp-content/uploads/2023/08/sua-rua-mat-innisfree-tra-xanh-1-1536x1536.jpg', createdAt: Date.now()-1000*60*60*24*4, hoverDesc: 'Sữa rửa mặt trà xanh 88% từ Jeju – làm sạch sâu, dưỡng ẩm, chống oxy hóa, loại bỏ dầu thừa, hương trà xanh dịu nhẹ, phù hợp da thường & hỗn hợp.' },

// Sản phẩm 21-43
{ id: 'p21', name: 'Kem Đánh Răng Giúp Trắng Răng, Giảm Ố, Loại Bỏ Mùi Hôi Median Dental IQ 93%', category: 'KEM ĐÁNH RĂNG', price: 60000, priceOld: 0, rating: 4.6, image: 'https://product.hstatic.net/1000006063/product/anh_bia_median_kem_danh_rang_5e84b761193e45e2aebeb9588cbc6a0e_1024x1024.jpg  ', createdAt: Date.now()-1000*60*60*24*1, hoverDesc: 'Kem đánh răng Median Dental IQ 93% giúp ngăn ngừa vi khuẩn gây ra hiện tượng cao răng, răng ố vàng lên đến 93%. Mang lại hơi thở thơm mát, giảm thiểu tình trạng hôi miệng. Thành phần: Vitamin E, SIO2, Florua, oryzanol giúp răng trắng sáng tự nhiên.' },
{ id: 'p22', name: 'Kem Dưỡng Forencos vàng Wonderwerk Marula Tone Up Cream 50ml', category: 'KEM DƯỠNG DA', price: 500000, priceOld: 625000, rating: 5.0, image: 'https://xachtaynhat.net/wp-content/uploads/2022/01/kem-duong-Forencos.jpg', createdAt: Date.now()-1000*60*60*24*2, hoverDesc: 'Kem dưỡng Forencos vàng Wonderwerk Marula Tone Up Cream có khả năng tái tạo, dưỡng trắng da ban đêm, trị nám và tàn nhang. Cứu cánh cho những làn da khô sạm, thiếu độ ẩm, xỉn màu và bắt đầu xuất hiện dấu hiệu lão hóa.' },
{ id: 'p23', name: 'Tẩy Tế Bào Chết 3W Clinic Moisture Peeling Gel Hàn Quốc 180ml', category: 'TẨY DA CHẾT', price: 100000, priceOld: 0, rating: 4.7, image: 'https://myphamtrangnhung.org/wp-content/uploads/2018/12/tay-da-chet-3w-clinic-han-quoc.jpg', createdAt: Date.now()-1000*60*60*24*3, hoverDesc: 'Chiết xuất từ cám gạo chứa nhiều dưỡng chất và chất làm sạch giúp loại bỏ lớp da già nua, tế bào chết trên da. Giúp sản sinh các tế bào da mới, tái tạo da, ngăn ngừa lão hóa cho da. Loại bỏ mụn cám, mụn đầu đen, xóa mờ vùng da bị sạm.' },
{ id: 'p24', name: 'Arrahan Tẩy Tế Bào Chết Peeling Gel Hàn Quốc', category: 'TẨY DA CHẾT', price: 110000, priceOld: 0, rating: 4.5, image: 'https://product.hstatic.net/200000673127/product/tay-da-chet-arrahan-peeling-gel-myphamngan_c2b476b87f4f4e919ea06ec3f9fd6354_grande.jpg', createdAt: Date.now()-1000*60*60*24*4, hoverDesc: 'Dòng sản phẩm tẩy tế bào chết dưỡng da thương hiệu Arrahan đến từ Hàn Quốc. Chiết xuất từ những thành phần từ thiên nhiên, giúp làm sạch đi lớp tế bào chết trên làn da, kích thích tái tạo làn da mới.' },
{ id: 'p25', name: 'Sữa Rửa Mặt Innisfree Tro Núi Lửa Cho Da Bít Tắc', category: 'SỮA RỬA MẶT', price: 200000, priceOld: 0, rating: 4.6, image: 'http://www.yeulanda.net/wp-content/uploads/2023/09/SRM-Innisfree-tro-n%C3%BAi-l%E1%BB%ADa.png', createdAt: Date.now()-1000*60*60*24*5, hoverDesc: 'Sữa rửa mặt Innisfree tro núi lửa cho da bít tắc, đã được thử nghiệm hiệu quả trên đối tượng người dùng ở độ tuổi trưởng thành. Đặc biệt hiệu quả cho da dầu và da có vấn đề về mụn.' },
{ id: 'p26', name: 'Nước Hồng Sâm Trẻ Em Korean Ginseng Kid & Friend Bio', category: 'NƯỚC HỒNG SÂM', price: 700000, priceOld: 0, rating: 4.8, image: 'https://hangchuan247.com/wp-content/uploads/2017/03/hong-sam-baby-600x600.jpg', createdAt: Date.now()-1000*60*60*24*6, hoverDesc: 'Hộp 30 gói, mỗi gói 20ml. Hồng sâm baby được chiết xuất từ tinh chất sâm 10% và thành phần Nhung hươu, Mật ong, Đương quy, Canxi, Vitamin D3, B2, C và các khoáng chất cần thiết cho cơ thể trẻ em.' },
{ id: 'p27', name: 'Nước Hồng Sâm Baby Sanga Hàn Quốc 3 Hộp x 10 Gói 10ml', category: 'NƯỚC HỒNG SÂM', price: 550000, priceOld: 0, rating: 4.7, image: 'https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/product/2024/12/han-quoc-hong-sam-giup-tre-tang-chieu-cao-va-an-ngon-mieng-6757ee789649b-10122024143208.jpg', createdAt: Date.now()-1000*60*60*24*7, hoverDesc: 'Hồng sâm nước Baby Sanga Hàn Quốc cho các bé yêu từ 2 tuổi trở lên. Chứa 54% hàm lượng hồng sâm cô đặc 6 năm tuổi, cùng 7 loại chiết xuất berry tinh lọc. Không đường, không phẩm màu, không chất bảo quản.' },
{ id: 'p28', name: 'Kẹo Hồng Sâm Dẻo Hàn Quốc 280g', category: 'KẸO HỒNG SÂM', price: 60000, priceOld: 0, rating: 4.5, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzhli7iv5okhc3@resize_w900_nl.webp.jpg', createdAt: Date.now()-1000*60*60*24*8, hoverDesc: 'Kẹo sâm được làm theo dạng jelly mềm dẻo, dai thơm rất dễ ăn, phù hợp sử dụng cho nhiều đối tượng. Giúp có được hơi thở thơm tho với mùi sâm tự nhiên. Vị ngọt không quá gắt, phù hợp với khẩu vị người Việt Nam.' },
{ id: 'p29', name: 'Tinh Chất Serum Vàng 24k Gold Prime Ampoule 99.9% Pure Gold Anjo 90ml', category: 'SERUM DƯỠNG DA', price: 360000, priceOld: 0, rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFwJ0yti9nfgSMi1M8feWC-KLeLfKJ4Yafg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFwJ0yti9nfgSMi1M8feWC-KLeLfKJ4Yafg&.png', createdAt: Date.now()-1000*60*60*24*9, hoverDesc: 'Tinh chất đậm đặc 24K Gold Prime Ampoule 99.9% Pure Gold được chiết xuất từ 99,9% VÀNG 24K NGUYÊN CHẤT. Mang lại hiệu quả cao trong việc ngăn chặn quá trình lão hóa da, cải thiện các nếp nhăn, tăng cường độ đàn hồi cho da.' },
{ id: 'p31', name: 'Viên Uống Tinh Dầu Hoa Anh Thảo Hàn Quốc Gamma Linolenic Acid 300 viên', category: 'VIÊN UỐNG', price: 650000, priceOld: 0, rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytof2IAp-AlQ_rD9K3NAl7626SM9wJCBcJA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytof2IAp-AlQ_rD9K3NAl7626SM9wJCBcJA&s.png', createdAt: Date.now()-1000*60*60*24*11, hoverDesc: 'Tinh Dầu Hoa Anh Thảo và Dưỡng Chất Vitamin E thường được nhắc đến với tác dụng duy và điều hòa nội tiết tố nữ. Giảm mụn giảm rụng tóc giúp da và tóc khỏe đẹp, giảm đau bụng kinh, giảm cân đẩy lùi quá trình lão hóa.' },
{ id: 'p32', name: 'Vitamin E Hàn Quốc 1000IU Hộp 60 Viên', category: 'VIÊN UỐNG', price: 490000, priceOld: 0, rating: 4.7, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mdmiowne3i6da3_tn.jpg', createdAt: Date.now()-1000*60*60*24*12, hoverDesc: 'Vitamin E cực kỳ quan trọng trong việc tái tạo da, làm sáng da, chống chảy xệ, giảm nám, giảm mụn trứng cá. Hàm lượng vitamin E gấp 5 lần E vàng bình thường nên chỉ sau 10 ngày uống da mặt tươi sáng hồng hào thấy rõ luôn.' },
{ id: 'p33', name: 'Viên Uống Vitamin C 1000mg Eundan Hàn Quốc Hỗ Trợ Tăng Sức Đề Kháng', category: 'VIÊN UỐNG', price: 330000, priceOld: 0, rating: 4.6, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mdmiowne3i6da3_tn.jpg', createdAt: Date.now()-1000*60*60*24*13, hoverDesc: 'Hộp 120 viên. Hỗ trợ mờ thâm mụn, mang lại làn da đều màu tươi sáng. Tăng cường sức đề kháng, giúp bảo vệ sức khỏe, giảm cảm cúm thông thường. Vitamin C có khả năng chống oxy hoá, loại bỏ cacbon hoạt tính gây hại cho cơ thể.' },
{ id: 'p34', name: 'Dầu Nóng Hàn Quốc Antiphlamine 100ml Mẫu Mới', category: 'DẦU NÓNG', price: 100000, priceOld: 0, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qtXHWLbg9CRgMLY-skihFNxLhtkuPUPhsg&s.png', createdAt: Date.now()-1000*60*60*24*14, hoverDesc: 'Dầu Nóng Xoa Bóp Antiphlamine 100ml giúp giảm đau nhức cơ bắp và xương khớp. Với thành phần chính là Methyl Salicylate và I-Menthol, giúp giảm đau nhanh chóng và làm dịu cảm giác ngứa do côn trùng cắn.' },
{ id: 'p35', name: 'Cao Dán Hồng Sâm Hàn Quốc 20 và 25 Miếng', category: 'CAO DÁN', price: 40000, priceOld: 0, rating: 4.4, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnzgnwmbv916bd@resize_w900_nl.webp.jpg', createdAt: Date.now()-1000*60*60*24*15, hoverDesc: 'Cao dán hồng sâm sâm túi xanh/đỏ- korea glu red ginseng. Miếng dán nhân sâm gồm 1 lớp bề mặt với chiết xuất nhân sâm thấm trực tiếp vào da, giúp giảm nhanh cơn đau thúc đẩy vùng đau phục hồi.' },
{ id: 'p36', name: 'Tinh Dầu Thông Đỏ Samsung Pine Mega Max Hàn Quốc 120 Viên', category: 'TINH DẦU', price: 890000, priceOld: 0, rating: 4.9, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-luymskxdkaatfc@resize_w900_nl.webp.jpg', createdAt: Date.now()-1000*60*60*24*16, hoverDesc: 'Tinh Dầu Thông Đỏ 100%. Chứa Paclitaxel và Docetaxel giúp phòng ngừa và ức chế các tế bào ung thư phát triển. Cung cấp nhiều Vitamin giúp tăng đề kháng như Vitamin A, E, K, Axit Amin, Protein.' },
{ id: 'p37', name: 'Viên Canxi Đỏ Hàn Quốc, Hộp 120 viên x 400mg', category: 'VIÊN CANXI', price: 400000, priceOld: 0, rating: 4.7, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzez0o8jlob16f@resize_w900_nl.webp.jpg', createdAt: Date.now()-1000*60*60*24*17, hoverDesc: 'Viên bổ xung Canxi Hanmi Hàn Quốc cung cấp Canxi, giúp cho xương, răng chắc khỏe, chống lão hóa, giảm nguy cơ loãng xương nhất là đối với người cao tuổi. Thúc đẩy sự hoạt động của enzym trong cơ thể.' },
{ id: 'p38', name: 'Viên Uống Bổ Sung Sắt Hemoron Chong Kun Dang Hàn Quốc 120 viên', category: 'VIÊN UỐNG', price: 650000, priceOld: 0, rating: 4.8, image: 'https://cdn.chiaki.vn/unsafe/0x960/left/top/smart/filters:quality(75)/https://chiaki.vn/upload/seller/1695614748-lo1600160469-1600160470-1.jpg', createdAt: Date.now()-1000*60*60*24*18, hoverDesc: 'Viên uống bổ sung sắt Hemoron Chong Kun Dang Hàn Quốc giúp bổ sung sắt cho cơ thể, hỗ trợ tạo máu, giảm thiếu máu do thiếu sắt. Phù hợp cho phụ nữ mang thai, cho con bú và người thiếu máu.' },
{ id: 'p39', name: 'Đạm Sâm Nhung Hươu Hàn Quốc Kana Hộp 120 viên', category: 'VIÊN UỐNG', price: 500000, priceOld: 0, rating: 4.6, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj89f36cotu402@resize_w900_nl.webp.jpg.', createdAt: Date.now()-1000*60*60*24*19, hoverDesc: 'Bổ sung vitamin, tăng sức đề kháng cho cơ thể. Phục hồi sức khỏe trước và sau khi ốm, phụ nữ sau sinh. Tăng cường miễn dịch, phòng ngừa các khối u hình thành. Giải độc gan, thận, điều hoà huyết áp, tim mạch.' },
{ id: 'p40', name: 'Xịt Chống Nắng Toàn Thân JMsolution SPF50+ PA++++ 180ml', category: 'XỊT CHỐNG NẮNG', price: 190000, priceOld: 0, rating: 4.7, image: 'https://media.hcdn.vn/catalog/product/o/g/og-image-auto-xit-chong-nang-toan-than-jmsolution-chiet-xuat-hoa-hong-spf50-pa-180ml_1XVgJ2EJFzZy3tDg.png', createdAt: Date.now()-1000*60*60*24*20, hoverDesc: 'Xịt chống nắng JM Solution với chỉ số SPF50+ PA++++, bảo vệ da hiệu quả khỏi tác hại của tia UV. Dưỡng ẩm và làm sáng da, mang lại làn da rạng rỡ suốt cả ngày. Dạng xịt tiện lợi cho cả mặt và toàn thân.' },
{ id: 'p41', name: 'Bọt Tuyết Quyến Rũ Moonlook – Dung Dịch Vệ Sinh Hàn Quốc', category: 'BỌT TUYẾT', price: 240000, priceOld: 0, rating: 4.8, image: 'https://haligroup.vn/wp-content/uploads/2022/09/avt-bot-tuyet-moonlook-phien-ban-moi-1.jpg', createdAt: Date.now()-1000*60*60*24*21, hoverDesc: 'Bọt Tuyết Quyến Rũ Moonlook là sản phẩm mới của nhà Moonlook được chị em phụ nữ yêu thích, đặc biệt được mệnh danh là dung dịch vệ sinh hàng hiệu siêu xịn xò với nhiều công dụng vượt trội.' },
{ id: 'p42', name: 'Kem Dưỡng Trắng Giảm Nám DongSung Rannce Cream 70g', category: 'KEM TRỊ NÁM', price: 490000, priceOld: 0, rating: 4.9, image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m5zepajuo1s346_tn.jpg', createdAt: Date.now()-1000*60*60*24*22, hoverDesc: 'Kem dưỡng trắng, giảm nám Dongsung Rannce Cream Hàn Quốc. Dưỡng da trắng bằng chiết xuất của hoa Chamimile. Ngăn mọi phát triển của sắc tố melanin, ngăn Tyrosinase. Axit Kojic giúp da đều màu, loại bỏ độc tố.' },
{ id: 'p43', name: 'Kem Dưỡng Da Chiết Xuất Đậu Bắp DONGSUNG RANNCE Okra Cream 50g', category: 'KEM DƯỠNG DA', price: 500000, priceOld: 0, rating: 4.7, image: 'https://hanminhgroup.com/wp-content/uploads/kem-dong-sung-Okra-Cream-scaled.jpg', createdAt: Date.now()-1000*60*60*24*23, hoverDesc: 'Kem dưỡng da chiết xuất đậu bắp DONGSUNG RANNCE Okra Cream. Giảm thiểu nếp nhăn, dưỡng trắng tự nhiên đồng thời bổ sung Collagen giúp tăng độ đàn hồi. Ức chế tổng hợp Melanin, dưỡng ẩm sâu.' },
{ 
  id: 'p44', 
  name: 'Samsung Korean Woohwang Cheongsimwon (An Cung Ngưu Hoàng Hoàn) Hộp Gỗ 60 Viên', 
  category: 'THỰC PHẨM BỔ SUNG', 
  price: 1000000, 
  priceOld: 0, 
  rating: 4.7, 
  image: 'http://bizweb.dktcdn.net/thumb/large/100/404/312/products/fdb8cb2983b6751b231fccac4b3c3e25-c233022488f94bf1ad140ab252063541.jpg?v=1696652094430', 
  createdAt: Date.now()-1000*60*60*24*1, 
  hoverDesc: 'An Cung Ngưu Hoàng Hoàn Samsung Hàn Quốc hộp gỗ 60 viên giúp hỗ trợ phòng ngừa và điều trị tai biến, cải thiện tuần hoàn máu, giảm đau đầu, chóng mặt, rối loạn tiền đình. Sản phẩm giúp an thần, bổ khí huyết, phục hồi chức năng thần kinh và phòng ngừa đột quỵ.' 
},];
// Expose catalog for product detail page 
try { localStorage.setItem('products_v1', JSON.stringify(products)); } catch {}

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
      <a class="card__media${p.hoverDesc ? ' has-overlay' : ''}" href="product.html?id=${p.id}">
        <img class="card__img" src="${p.image}" alt="${p.name}" />
        ${p.hoverDesc ? `<div class="card__overlay"><div class="card__overlay-content">${p.hoverDesc.replace(/\n/g, '<br/>')}</div></div>` : ''}
      </a>
      <div class="card__body">
        <a class="title" title="${p.name}" href="product.html?id=${p.id}">${p.name}</a>
        <div class="price">
          <span class="price__current">${VND.format(p.price)}</span>
          ${p.priceOld && p.priceOld > p.price ? `<span class="price__old">${VND.format(p.priceOld)}</span>` : ''}
        </div>
        <div class="rating">${'★'.repeat(Math.round(p.rating || 0))}${'☆'.repeat(5-Math.round(p.rating || 0))} <span style="color:var(--muted)">(${(p.rating||0).toFixed(1)})</span></div>
        <div class="card__actions">
          <button class="btn btn--primary" data-add="${p.id}">Thêm vào giỏ</button>
          <a class="btn" href="product.html?id=${p.id}">Xem chi tiết</a>
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

// Image Zoom Modal functionality
{
  const modal = byId('imageZoomModal');
  const zoomedImg = byId('zoomedImage');
  const zoomableImages = document.querySelectorAll('.zoomable-image');

  // Add click event listeners to zoomable images
  zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
      zoomedImg.src = img.src;
      zoomedImg.alt = img.alt;
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Close modal when clicking overlay or close button
  const closeModal = () => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
  };

  modal.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
}


