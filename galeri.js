// Class ES6 untuk item galeri
class GaleriItem {
    constructor(img, text) {
        this.img = img;
        this.text = text;
        this.sembunyikan(); // awalnya sembunyi
    }

    tampilkan = () => {
        this.text.style.display = "block";
        this.text.classList.add("fadeIn"); // animasi
    }

    sembunyikan = () => {
        this.text.style.display = "none";
        this.text.classList.remove("fadeIn");
    }
}

// Fungsi utama modul
const initGaleri = () => {
    const cards = document.querySelectorAll(".card");
    const items = [];

    // Loop semua card
    for (const card of cards) {
        const { firstElementChild: img, lastElementChild: text } = card;
        const item = new GaleriItem(img, text);
        items.push(item);

        // Klik gambar
        img.addEventListener("click", () => {
            // Sembunyikan semua teks dulu
            items.forEach(i => i.sembunyikan());
            // Tampilkan teks yang diklik
            item.tampilkan();
            console.log(`Gambar diklik: ${img.alt}`);
        });

        // Hover efek
        img.addEventListener("mouseenter", () => card.classList.add("hover-aktif"));
        img.addEventListener("mouseleave", () => card.classList.remove("hover-aktif"));
    }
};

export default initGaleri;
