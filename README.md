# Anemone Purchase Requests - Frontend Technical Test
Repositori ini berisi hasil pengerjaan Technical Test (Take Home Test) untuk posisi Junior Frontend Developer di PT Anemone Educipta Investa. Proyek ini merupakan implementasi slicing UI/UX dari wireframe low-fidelity menjadi desain high-fidelity yang interaktif dan responsif.

## Tautan Penting
- Desain Figma: [https://www.figma.com/design/M1FMs39r3qJ2GssBjGeG0z/Anemone-Purchase-Requests?node-id=0-1&t=1euiwHjto5rpyV1A-1]
- Repository: [https://github.com/madejauhari/Anemone-Purchase-Requests]

## Petunjuk Menjalankan Project
Ikuti langkah-langkah berikut untuk menjalankan proyek di lingkungan lokal Anda:

1. **Clone repositori ini ke direktori lokal Anda:**
   ```bash
   git clone https://github.com/madejauhari/Anemone-Purchase-Requests.git
   ```

2. **Masuk ke direktori proyek:**
   ```bash
   cd Anemone-Purchase-Requests
   ```

3. **Instal semua dependensi yang dibutuhkan:**
   ```bash
   npm install
   ```

4. **Jalankan server development:**
   ```bash
   npm run dev
   ```

5. **Buka aplikasi di browser:**
   Secara *default*, Vite akan menjalankan aplikasi pada port `5173`. Buka tautan berikut di *browser* Anda:
   ```text
   http://localhost:5173
   ```


## Teknologi yang Digunakan
 - React (via Vite) dipilih karena setup-nya yang sangat cepat, Hot Module Replacement (HMR) yang instan, serta performa build yang jauh lebih ringan dan modern dibandingkan CRA.
 - Tailwind CSS (v4) digunakan sebagai utility-first CSS framework untuk mempercepat proses styling dan memastikan desain responsif dengan mudah. Menggunakan versi terbaru (v4) yang terintegrasi langsung melalui plugin Vite tanpa memerlukan file konfigurasi terpisah.
 - Google Fonts (Poppins) diimplementasikan untuk memberikan kesan brand yang membulat, ramah, dan modern.

## Struktur Komponen

Proyek ini menerapkan prinsip Component-Based Architecture dengan pemisahan tanggung jawab (separation of concerns) yang jelas, mengadopsi struktur Feature-Sliced Design berskala kecil:

```text
src/
├── assets/                  # Menyimpan aset statis (gambar, logo)
├── components/              # Komponen global yang dapat digunakan ulang (reusable)
│   ├── layout/              # Komponen pembungkus tata letak (Header, PageContainer)
│   └── ui/                  # Komponen antarmuka dasar (Button, QuantityInput)
└── features/                # Modul yang dipisahkan berdasarkan fitur spesifik
    └── purchase-request/
        ├── components/      # Komponen khusus untuk fitur pemesanan
        │   ├── CartItem.jsx
        │   ├── OrderSummary.jsx
        │   ├── PaymentMethod.jsx
        │   ├── ProductCard.jsx
        │   └── ProductCatalog.jsx
        ├── data/            # Penyimpanan mock data produk statis
        └── PurchaseRequestPage.jsx  # Halaman utama pengelola state
```

## Keputusan UI/UX Utama
1. Adaptasi Brand Identity: Mengadaptasi palet warna utama (`pink-600` dan `pink-500`) serta tipografi (Poppins) yang merujuk langsung pada website resmi Anemone Indonesia agar desain terasa lebih relevan dan memiliki brand awareness.
2. Layout Split-View (Responsif): Pada ukuran desktop/tablet, layar dibagi menjadi dua sisi (sticky sidebar untuk keranjang) agar pengguna bisa melihat total tagihan secara real-time tanpa harus men-scroll naik-turun. Pada mobile, layout bertumpuk secara vertikal.
3. Peningkatan Interaktivitas: Semua elemen yang dapat diklik memiliki state hover, transisi halus, dan indikator fokus untuk aksesibilitas.
4. Optimasi UX pada Keranjang: Menambahkan tombol "Hapus" (ikon tong sampah) eksplisit pada tiap item di keranjang pesanan. Ini mencegah bad UX di mana pengguna harus menekan tombol minus berkali-kali untuk menghapus barang dengan jumlah besar.
5. Modernisasi Form Pembayaran: Mengganti gaya radio button konvensional menjadi card-select interaktif yang jauh lebih ramah terhadap sentuhan jari (touch-friendly) bagi pengguna tablet/HP.

## Asumsi yang Dibuat
1. Sifat Data: Karena tidak terhubung ke backend, seluruh data produk bersifat statis (mock data) dan perubahan stok/keranjang hanya terjadi di client-state sementara (React `useState`).
2. Logika Stok: Pengguna tidak dapat menambahkan produk ke keranjang melebihi batas stok maksimal yang tersedia di Head Office (HO). Tombol (+) akan otomatis disabled saat limit tercapai.
3. Biaya Ekspedisi: Diasumsikan menggunakan flat rate (Rp 50.000) untuk pengiriman kargo yang otomatis tertambahkan ke tagihan jika terdapat minimal satu barang di dalam keranjang.
4. Validasi Submit: Tombol "Proses Pesanan Sekarang" hanya akan aktif jika keranjang tidak kosong dan metode pembayaran telah dipilih. Tombol juga memiliki simulasi loading state (2 detik) untuk mencegah pengiriman form berulang (double submit).

Disusun oleh: Made Jauhari
