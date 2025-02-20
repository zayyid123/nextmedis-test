# NextMedis Skill Test

Repository ini dibuat untuk keperluan skill test di NextMedis. Aplikasi ini menggunakan API dari [Reqres](https://reqres.in/) untuk melakukan simulasi pengelolaan data pengguna.

## Tech Stack

- **Next.js** - Framework React untuk pengembangan web
- **Tailwind CSS** - Utility-first CSS framework untuk styling
- **ShadCN** - UI components untuk desain yang modern dan efisien

## Fitur

- Fetch data pengguna dari API Reqres
- Menampilkan daftar pengguna dengan desain modern
- Detail pengguna dengan informasi lengkap
- Responsif dan user-friendly
- **Sign In** untuk autentikasi pengguna
- **Sign Up** untuk registrasi pengguna baru

## Instalasi dan Menjalankan Proyek

1. Clone repository ini:
   ```bash
   git clone https://github.com/zayyid123/nextmedis-test.git
   cd repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan proyek:
   ```bash
   npm run dev
   ```

4. Buka di browser:
   ```
   http://localhost:3000
   ```

## API Endpoint yang Digunakan

- **GET** `/api/users?page=1` - Ambil daftar pengguna
- **GET** `/api/users/{id}` - Ambil detail pengguna berdasarkan ID
- **POST** `/api/register` - Registrasi pengguna baru
- **POST** `/api/login` - Autentikasi pengguna

## Kontributor
- [Mochamad Muzayyid Al Hakim](https://github.com/zayyid123)

## Lisensi
Proyek ini menggunakan lisensi MIT.

