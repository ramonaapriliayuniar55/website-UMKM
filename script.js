alert("Selamat datang di Website UMKM Kimbab Cihuyy! 🍙");

const namaUMKM = "Kimbab Cihuyy";
console.log("Nama UMKM:", namaUMKM);

let jumlahProduk = 10;
console.log("Jumlah produk awal:", jumlahProduk);

jumlahProduk += 5;
console.log("Setelah menambah produk baru, total produk:", jumlahProduk);

let KimbabOriginal = 8;
let KimbabPedas = 4;
let KimbabKeju = 3;

console.log("Kimbab Original:", KimbabOriginal);
console.log("Kimbab Pedas:", KimbabPedas);
console.log("Kimbab Keju:", KimbabKeju);

let totalKimbab = KimbabOriginal + KimbabPedas + KimbabKeju;
console.log("Total semua Kimbab:", totalKimbab);

console.log("Terima kasih telah mendukung UMKM lokal 💕");

function cekUsia() {
  let usia = document.getElementById("usiaInput").value;
  let hasil = "";

  if (usia < 13) {
    hasil = "Anak-anak";
  } else if (usia >= 13 && usia <= 17) {
    hasil = "Remaja";
  } else if (usia >= 18 && usia <= 60) {
    hasil = "Dewasa";
  } else if (usia > 60) {
    hasil = "Lansia";
  } else {
    hasil = "Masukkan usia yang valid";
  }

  document.getElementById("hasilUsia").textContent = "Kategori: " + hasil;
}

const testimoni = [
  { teks: "Kimbab Cihuyy mantap, anak-anak suka!", nama: "Rina, Pekalongan" },
  { teks: "Harga terjangkau, rasa bintang lima!", nama: "Bayu, Pemalang" },
  { teks: "Selalu fresh setiap pesan ulang.", nama: "Sinta, Comal" },
  { teks: "Enak disantap pas hangat maupun dingin.", nama: "Dedi, Petarukan" },
  { teks: "Rekomendasi buat pecinta kuliner Korea!", nama: "Nana, Moga" }
];

const container = document.getElementById("testimoni-container");

testimoni.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("testimoni-card");

  card.innerHTML = `
    <p>"${item.teks}"</p>
    <p class="nama">- ${item.nama}</p> `;
  container.appendChild(card);
});

function hitungTotal() {
  let harga = parseFloat(document.getElementById("harga").value);
  let jumlah = parseInt(document.getElementById("jumlah").value);
  let total = harga * jumlah;

  document.getElementById("hasilTotal").textContent =
    "Total Belanja Anda: Rp " + total.toLocaleString("id-ID");

  return false; 
}

