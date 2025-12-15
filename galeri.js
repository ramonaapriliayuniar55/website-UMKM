class GaleriItem {
    constructor(img, text) {
        this.img = img;
        this.text = text;
        this.sembunyikan();
    }

    tampilkan() {
        this.text.style.display = "block";
        this.text.classList.add("fadeIn");
    }

    sembunyikan() {
        this.text.style.display = "none";
        this.text.classList.remove("fadeIn");
    }
}

const initGaleri = () => {
    const cards = document.querySelectorAll(".card");
    const items = [];

    cards.forEach(card => {
        const img = card.querySelector("img");
        const text = card.querySelector(".card-body");
        const item = new GaleriItem(img, text);
        items.push(item);

        img.addEventListener("click", () => {
            items.forEach(i => i.sembunyikan());
            item.tampilkan();
        });
    });
};

export default initGaleri;
