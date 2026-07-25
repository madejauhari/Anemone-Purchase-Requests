import calistung1 from '../../../assets/calistung.jpg';
import calistung2 from '../../../assets/buku.png'; // Menggunakan buku.png sebagai variasi modul level 2
import tas from '../../../assets/tas.png';
import poster from '../../../assets/poster.png';

export const mockProducts = [
  {
    id: 1,
    name: "Modul Calistung Level 1",
    price: 20000,
    stock: 500,
    image: calistung1 // Memasukkan variabel gambar
  },
  {
    id: 2,
    name: "Modul Calistung Level 2",
    price: 20000,
    stock: 70,
    image: calistung2
  },
  {
    id: 3,
    name: "Tas Desain Terbaru",
    price: 100000,
    stock: 1500,
    image: tas
  },
  {
    id: 4,
    name: "Poster Abjad & Angka",
    price: 15000,
    stock: 0,
    image: poster
  }
];