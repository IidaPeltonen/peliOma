$(function () {

    //kortit taulukkoon
    let kortit = [
        //nolla-indeksiin tyhjä kuva, tätä ei voi tulla arvonnasta, muttase muuttaa taulukon indeksinumeroa
        '<img src="">', //indeksi 0
        '<img src="img/pata/pataA.png">', //indeksi 1
        '<img src="img/pata/pata2.png">', //indeksi 2
        '<img src="img/pata/pata3.png">', //indeksi 3
        '<img src="img/pata/pata4.png">', //indeksi 4
        '<img src="img/pata/pata5.png">', //indeksi 5
        '<img src="img/pata/pata6.png">', //indeksi 6
        '<img src="img/pata/pata7.png">', //indeksi 7
        '<img src="img/pata/pata8.jpeg">', //indeksi 8
        '<img src="img/pata/pata9.png">', //indeksi 9
        '<img src="img/pata/pata10.jpeg">', //indeksi 10
        '<img src="img/pata/pataJ.png">', //indeksi 11
        '<img src="img/pata/pataQ.jpeg">', //indeksi 12
        '<img src="img/pata/pataK.png">', //indeksi 13
        '<img src="img/risti/ristiA.jpeg">', //indeksi 14
        '<img src="img/risti/risti2.png">', //indeksi 15
        '<img src="img/risti/risti3.png">', //indeksi 16
        '<img src="img/risti/risti4.jpg">', //indeksi 17
        '<img src="img/risti/risti5.png">', //indeksi 18
        '<img src="img/risti/risti6.png">', //indeksi 19
        '<img src="img/risti/risti7.png">', //indeksi 20
        '<img src="img/risti/risti8.png">', //indeksi 21
        '<img src="img/risti/risti9.png">', //indeksi 22
        '<img src="img/risti/risti10.png">', //indeksi 23
        '<img src="img/risti/ristiJ.jpeg">', //indeksi 24
        '<img src="img/risti/ristiQ.jpeg">', //indeksi 25
        '<img src="img/risti/ristiK.jpeg">', //indeksi 26
        '<img src="img/hertta/herttaA.png">', //indeksi 27
        '<img src="img/hertta/hertta2.png">', //indeksi 28
        '<img src="img/hertta/hertta3.jpeg">', //indeksi 29
        '<img src="img/hertta/hertta4.jpeg">', //indeksi 30
        '<img src="img/hertta/hertta5.jpeg">', //indeksi 31
        '<img src="img/hertta/hertta6.jpeg">', //indeksi 32
        '<img src="img/hertta/hertta7.jpeg">', //indeksi 33
        '<img src="img/hertta/hertta8.jpeg">', //indeksi 34
        '<img src="img/hertta/hertta9.jpeg">', //indeksi 35
        '<img src="img/hertta/hertta10.png">', //indeksi 36
        '<img src="img/hertta/herttaJ.png">', //indeksi 37
        '<img src="img/hertta/herttaQ.jpeg">', //indeksi 38
        '<img src="img/hertta/herttaK.jpeg">', //indeksi 39
        '<img src="img/ruutu/ruutuA.jpg">', //indeksi 40
        '<img src="img/ruutu/ruutu2.png">', //indeksi 41
        '<img src="img/ruutu/ruutu3.png">', //indeksi 42
        '<img src="img/ruutu/ruutu4.jpeg">', //indeksi 43
        '<img src="img/ruutu/ruutu5.png">', //indeksi 44
        '<img src="img/ruutu/ruutu6.png">', //indeksi 45
        '<img src="img/ruutu/ruutu7.png">', //indeksi 46
        '<img src="img/ruutu/ruutu8.png">', //indeksi 47
        '<img src="img/ruutu/ruutu9.png">', //indeksi 48
        '<img src="img/ruutu/ruutu10.png">', //indeksi 49
        '<img src="img/ruutu/ruutuJ.JPG">', //indeksi 50
        '<img src="img/ruutu/ruutuQ.png">', //indeksi 51
        '<img src="img/ruutu/ruutuK.jpeg">', //indeksi 52
    ];

    //asetetaan sijainnit täyteen nollia -> jos sijainnissa ei ole nollaa, se on jo varattu
    let poyta = [];
    for (let i = 0; i < 13; i++) {
        poyta.push("0");
    }

    //asetetaan pakka-taulu täyteen nollia -> jos sijainnissa ei ole nollaa, se on jo varattu
    let pakka = [];
    for (let i = 0; i < 52; i++) {
        pakka.push("0");
    }
    
    $("#arvo").on("click", function () {

        //piilotetaan arvo uudet-nappi
        $("#arvo").addClass("invisible");

        //näytetään arvo uudet-nappi
        $("#uusi").removeClass("invisible");

        //asetetaan kaikkien korttien taustakuvaksi sama tausta
        $("#tausta").html('<img src="img/tausta.jpg">');
        $("#tausta2").html('<img src="img/tausta.jpg">');
        $("#tausta3").html('<img src="img/tausta.jpg">');
        $("#tausta4").html('<img src="img/tausta.jpg">');
        $("#tausta5").html('<img src="img/tausta.jpg">');
        $("#tausta6").html('<img src="img/tausta.jpg">');
        $("#tausta7").html('<img src="img/tausta.jpg">');
        $("#tausta8").html('<img src="img/tausta.jpg">');
        $("#tausta9").html('<img src="img/tausta.jpg">');
        $("#tausta10").html('<img src="img/tausta.jpg">');
        $("#tausta11").html('<img src="img/tausta.jpg">');
        $("#tausta12").html('<img src="img/tausta.jpg">');

        //luodaan muuttuja ekan sijainnin arvontaa varten
        let sijainti = 0;
        //arvotaan paikka, johon kortti arvotaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti = (Math.floor(Math.random() * 12) + 1).toString()
         } while (poyta[sijainti] != "0");
        //arvotaan kortti kyseiseen paikkaan, varmistetaan ettei sitä ole jo käytetty
        let eka = 0;
        do {
            eka = Math.floor(Math.random() * 52) + 1;
        } while (pakka[eka] != 0);
        //asetetaan kortti arvottuun paikkaan
        $("#" + sijainti).html(kortit[eka]);
        //varataan paikka poyta- ja kortit-taulukosta
        poyta[sijainti] = 1;
        pakka[eka] = 1;
        //luodaan muuttuja ekan kortin parille
        let sijainti2 = 0;
        //arvotaan paikka, johon pari asetetaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti2 = (Math.floor(Math.random() * 12) + 1).toString()
        } while (poyta[sijainti2] != "0");
        //asetetaan pari kyseiseen paikkaan
        $("#" + sijainti2).html(kortit[eka]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti2] = 1;

        //luodaan muuttuja kolmannen sijainnin arvontaa varten
        let sijainti3 = 0;
        //arvotaan paikka, johon kortti arvotaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti3 = (Math.floor(Math.random() * 12) + 1).toString()
         } while (poyta[sijainti3] != "0");
        //arvotaan kortti kyseiseen paikkaa, varmistetaan ettei sitä ole jo käytetty
        let toka = 0;
        do {
            toka = Math.floor(Math.random() * 52) + 1;
        } while (pakka[toka] != 0);
        //asetetaan kortti arvottuun paikkaan
        $("#" + sijainti3).html(kortit[toka]);
         //varataan paikka poyta- ja kortit-taulukosta
         poyta[sijainti3] = 1;
         pakka[pakka] = 1;
        //luodaan muuttuja kolmannen kortin parille
        let sijainti4 = 0;
        //arvotaan paikka, johon pari asetetaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti4 = (Math.floor(Math.random() * 12) + 1).toString()
        } while (poyta[sijainti4] != "0");
        //asetetaan pari kyseiseen paikkaan
        $("#" + sijainti4).html(kortit[toka]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti4] = 1;

        //luodaan muuttuja viidennen sijainnin arvontaa varten
        let sijainti5 = 0;
        //arvotaan paikka, johon kortti arvotaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti5 = (Math.floor(Math.random() * 12) + 1).toString()
         } while (poyta[sijainti5] != "0");
        //arvotaan kortti kyseiseen paikkaa, varmistetaan ettei sitä ole jo käytetty
        let kolmas = 0;
        do {
            kolmas = Math.floor(Math.random() * 52) + 1;
        } while (pakka[kolmas] != 0);
        //asetetaan kortti arvottuun paikkaan
        $("#" + sijainti5).html(kortit[kolmas]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti5] = 1;
        pakka[kolmas] = 1;
        //luodaan muuttuja viidennen kortin parille
        let sijainti6 = 0;
        //arvotaan paikka, johon pari asetetaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti6 = (Math.floor(Math.random() * 12) + 1).toString()
        } while (poyta[sijainti6] != "0");
        //asetetaan pari kyseiseen paikkaan
        $("#" + sijainti6).html(kortit[kolmas]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti6] = 1;

        //luodaan muuttuja seikan sijainnin arvontaa varten
        let sijainti7 = 0;
        //arvotaan paikka, johon kortti arvotaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti7 = (Math.floor(Math.random() * 12) + 1).toString()
         } while (poyta[sijainti7] != "0");
       //arvotaan kortti kyseiseen paikkaa, varmistetaan ettei sitä ole jo käytetty
       let neljas = 0;
       do {
        neljas = Math.floor(Math.random() * 52) + 1;
       } while (pakka[neljas] != 0);
        //asetetaan kortti arvottuun paikkaan
        $("#" + sijainti7).html(kortit[neljas]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti7] = 1;
        pakka[neljas] = 1;
        //luodaan muuttuja viidennen kortin parille
        let sijainti8 = 0;
        //arvotaan paikka, johon pari asetetaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti8 = (Math.floor(Math.random() * 12) + 1).toString()
        } while (poyta[sijainti8] != "0");
        //asetetaan pari kyseiseen paikkaan
        $("#" + sijainti8).html(kortit[neljas]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti8] = 1;


        //luodaan muuttuja ysin sijainnin arvontaa varten
        let sijainti9 = 0;
        //arvotaan paikka, johon kortti arvotaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti9 = (Math.floor(Math.random() * 12) + 1).toString()
         } while (poyta[sijainti9] != "0");
        //arvotaan kortti kyseiseen paikkaa, varmistetaan ettei sitä ole jo käytetty
       let viides = 0;
       do {
        viides = Math.floor(Math.random() * 52) + 1;
       } while (pakka[viides] != 0);
        //asetetaan kortti arvottuun paikkaan
        $("#" + sijainti9).html(kortit[viides]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti9] = 1;
        pakka[viides] = 1;
        //luodaan muuttuja viidennen kortin parille
        let sijainti10 = 0;
        //arvotaan paikka, johon pari asetetaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti10 = (Math.floor(Math.random() * 12) + 1).toString()
        } while (poyta[sijainti10] != "0");
        //asetetaan pari kyseiseen paikkaan
        $("#" + sijainti10).html(kortit[viides]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti10] = 1;

        //luodaan muuttuja 11 sijainnin arvontaa varten
        let sijainti11 = 0;
        //arvotaan paikka, johon kortti arvotaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti11 = (Math.floor(Math.random() * 12) + 1).toString()
         } while (poyta[sijainti11] != "0");
        //arvotaan kortti kyseiseen paikkaa, varmistetaan ettei sitä ole jo käytetty
       let kuudes = 0;
       do {
        kuudes = Math.floor(Math.random() * 52) + 1;
       } while (pakka[kuudes] != 0);
        //asetetaan kortti arvottuun paikkaan
        $("#" + sijainti11).html(kortit[kuudes]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti11] = 1;
        pakka[kuudes] = 1;
        //luodaan muuttuja viidennen kortin parille
        let sijainti12 = 0;
        //arvotaan paikka, johon pari asetetaan ja tarkistetaan että paikalla ei ole jo korttia
        do {
            sijainti12 = (Math.floor(Math.random() * 12) + 1).toString()
        } while (poyta[sijainti12] != "0");
        //asetetaan pari kyseiseen paikkaan
        $("#" + sijainti12).html(kortit[kuudes]);
        //varataan paikka myös poyta-taulukosta
        poyta[sijainti12] = 1;
    });

    //sivun uudelleen alustava nappi
    $("#uusi").on("click", function () {
        location.reload();
    });

    //kääntymiset korteille
    $("#card1").flip({
        axis: 'y',
        trigger: 'click'
    });

    $("#card2").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card3").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card4").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card5").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card6").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card7").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card8").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card9").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card10").flip({
        axis: 'x',
        trigger: 'click'
    });
    $("#card11").flip({
        axis: 'y',
        trigger: 'click'
    });
    $("#card12").flip({
        axis: 'x',
        trigger: 'click'
    });

});
