# Prototype Website - RM Pepes Jambal H. Emin

Repositori ini berisi *source code* untuk *prototype* website *company profile* RM Pepes Jambal H. Emin (Walahar, Karawang). Proyek ini dibangun dengan fokus pada performa pemuatan halaman yang maksimal, optimasi SEO lokal, dan integrasi ulasan pelanggan secara dinamis.

## 🚀 Teknologi yang Digunakan

*   **Framework:** [Astro](https://astro.build/) - Dipilih karena kemampuannya menghasilkan situs statis (SSG) dengan *Zero-JS* secara bawaan, memastikan website memuat dengan sangat cepat.
*   **Hosting:** GitHub Pages - Untuk *deployment* yang cepat, gratis, dan sangat andal untuk mendemonstrasikan *prototype*.
*   **Integrasi Pihak Ketiga:** Google Reviews Embed/Iframe untuk menampilkan ulasan *real-time* dari pelanggan.

## ✨ Fitur Utama

1.  **Performa Maksimal:** Menggunakan arsitektur statis yang di- *host* di jaringan CDN, memastikan website tidak akan *down* saat *traffic* tinggi.
2.  **SEO Lokal Karawang:** Struktur HTML dirancang agar mudah diindeks oleh mesin pencari seperti Google untuk pencarian kuliner lokal.
3.  **Ulasan Dinamis:** Pengunjung dapat membaca ulasan Google Maps terbaru langsung dari website tanpa membebani server utama.
4.  **Arah Peta (Google Maps):** Memudahkan pelanggan dari luar kota untuk menemukan rute menuju lokasi.

## 🛠️ Cara Menjalankan di Komputer Lokal

Jika Anda ingin menjalankan atau memodifikasi kode ini di komputer lokal, ikuti langkah-langkah berikut:

1. Pastikan [Node.js](https://nodejs.org/) sudah terinstal.
2. *Clone* repositori ini:
   ```bash
   git clone https://github.com/hanafi-digital/pepes-emin.git
   ```
3. Masuk ke folder proyek:
   ```bash
   cd pepes-emin
   ```
4. Instal semua dependensi:
   ```bash
   npm install
   ```
5. Jalankan server lokal:
   ```bash
   npm run dev
   ```
6. Buka `http://localhost:4321` di *browser* Anda.

## 📂 Struktur Direktori Utama

*   `src/pages/` - Berisi file *routing* utama (misal: `index.astro` untuk halaman depan).
*   `src/components/` - Berisi potongan kode antarmuka yang bisa digunakan ulang (misal: *Header*, *Footer*, atau *Review Widget*).
*   `public/` - Direktori untuk menyimpan aset statis seperti gambar menu, logo, atau *favicon*.

## 🌐 Status Deployment

*Prototype* ini dapat diakses secara langsung melalui:
[https://hanafi-digital.github.io/pepes-emin](https://hanafi-digital.github.io/pepes-emin)

## ✅ Continuous Integration

Setiap *pull request* dan *push* ke `main` menjalankan pemeriksaan otomatis lewat GitHub Actions:
audit dependensi, *type check*, build, validasi data terstruktur, dan Lighthouse CI (Performance,
Accessibility, Best Practices, SEO — target ≥ 95 pada mobile). *Branch* `main` sebaiknya diberi
proteksi agar status CI yang hijau menjadi syarat sebelum *merge* diizinkan.
