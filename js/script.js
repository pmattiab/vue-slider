// var per vue js
var app = new Vue(
    {
        // elemento con id root
        el: "#root",

        // data
        data: {
            indiceImgCorrente: 0,
            arrayImmagini: [
                "campagna.jpg",
                "cascate.webp",
                "fiori.jpeg",
                "montagne.webp"
            ],
        },

        // methods (funzioni)
        methods: {

            prossimaImg() {

                const indiceProsImg = this.indiceImgCorrente + 1;

                if (indiceProsImg == this.arrayImmagini.length) {
                    this.indiceImgCorrente = 0;
                } else {
                    this.indiceImgCorrente = indiceProsImg;
                }
            },

            precedenteImg() {

                const indicePrecImg = this.indiceImgCorrente - 1;

                if (indicePrecImg == -1) {
                    this.indiceImgCorrente = this.arrayImmagini.length - 1;
                } else {
                    this.indiceImgCorrente = indicePrecImg;
                }
            }
        },

        // funzioni da far partire al caricamento della pagina
        created() {

            setInterval(this.prossimaImg, 3000);
            
        }
    }
);