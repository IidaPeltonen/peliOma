$(function () {

    $("#kortti1").flip({
      axis: 'x',
      trigger: 'click'
  });
  $("#kortti2").flip({
      axis: 'y',
      trigger: 'click'
  });
  $("#kortti3").flip({
      axis: 'x',
      trigger: 'click'
  });
  $("#kortti4").flip({
      axis: 'y',
      trigger: 'click'
  });
  $("#kortti5").flip({
      axis: 'x',
      trigger: 'click'
  });
  $("#kortti6").flip({
      axis: 'y',
      trigger: 'click'
  });
  $("#kortti7").flip({
      axis: 'x',
      trigger: 'click'
  });
  $("#kortti8").flip({
      axis: 'y',
      trigger: 'click'
  });
  $("#kortti9").flip({
      axis: 'x',
      trigger: 'click'
  }); 
  $("#kortti10").flip({
    axis: 'y',
    trigger: 'click'
  });
  $("#kortti11").flip({
      axis: 'x',
      trigger: 'click'
  });
  $("#kortti12").flip({
      axis: 'y',
      trigger: 'click'
  });
  $("#kortti13").flip({
      axis: 'x',
      trigger: 'click'
  });
  $("#kortti14").flip({
      axis: 'y',
      trigger: 'click'
  });
  $("#kortti15").flip({
      axis: 'x',
      trigger: 'click'
  }); 
  $("#kortti16").flip({
    axis: 'y',
    trigger: 'click'
  });
  $("#kortti17").flip({
    axis: 'x',
    trigger: 'click'
  });
  $("#kortti18").flip({
    axis: 'y',
    trigger: 'click'
  });
  $("#kortti19").flip({
    axis: 'x',
    trigger: 'click'
  });
  $("#kortti20").flip({
    axis: 'y',
    trigger: 'click'
  });



//kuvakirjastot eri teemoille, taulukkoina
var library = {
    
    kissat: [
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/kikkis.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/liisa.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/lilli.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/lissu.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/miukku.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/onni.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/repa.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/simo.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/ulpu.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/vake.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/kikkis.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/liisa.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/lilli.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/lissu.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/miukku.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/onni.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/repa.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/simo.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/ulpu.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/kissat/vake.JPG'
    ],
    pokemon: [
      'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980025/memory/Pokemon/Bulbasaur.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980083/memory/Pokemon/Charmander.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980101/memory/Pokemon/Squirtle.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980116/memory/Pokemon/Pikachu.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980129/memory/Pokemon/Mewtwo.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980142/memory/Pokemon/Mew.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980154/memory/Pokemon/Articuno.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980164/memory/Pokemon/Zapdos.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980175/memory/Pokemon/Moltres.png',
      'https://res.cloudinary.com/beumsk/image/upload/v1547980186/memory/Pokemon/Eevee.png'
    ],
    koirat: [
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/alma.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/esko.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/kettu.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/lola.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira17.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira15.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira14.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira11.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira3.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira7.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/alma.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/esko.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/kettu.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/lola.JPG',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira17.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira15.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira14.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira11.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira3.jpg',
      'https://www.students.oamk.fi/~n0peii00/kuvia/koirat/koira7.jpg'
    ],
    kortit: [
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/hertta6.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/herttaQ.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/pata2.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/pataA.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/pataJ.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/pataQ.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/risti7.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/ristiA.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/ristiQ.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/ruutuQ.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/hertta6.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/herttaQ.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/pata2.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/pataA.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/pataJ.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/pataQ.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/risti7.png',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/ristiA.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/ristiQ.jpeg',
        'https://www.students.oamk.fi/~n0peii00/kuvia/kortit/ruutuQ.png',
        ]
  }
  
  //muuttujat palapelille
  var kuvat = [];
  var tempElt1 = "";
  var tempElt2 = "";
  var click = -1;
  var voitot = 0;
  var pisteet = 0;
  var aika = 0;
  
  //muuttujat laskureille, pisteille, jne
  var preElt = document.querySelector("#pre");
  var teematElt = document.querySelector("#themes");
  var boxElts = document.getElementsByClassName("box");
  var mainElt = document.querySelector(".main");
  var aikaElt = document.querySelector("#aika");
  var pisteetElt = document.querySelector("#pisteet");
  var postElt = document.querySelector("#post");
  var finalElt = document.querySelector("#final");
  var againElt = document.querySelector("#again");
  
  // kertoo minkä teeman käyttäjä valitsi
  teematElt.addEventListener("click", function(e) {
    if (e.target.classList.contains("themes")) {
      activateTheme(e.target.id);
      preElt.classList.add("hidden");
    }
  });
  
  //aktivoi valitun teeman
  function activateTheme(theme) {
    // insert theme in images array
    for (let i = 0; i < 20; i++) {kuvat.push(library[theme][i]);}  
    // insert images in memory game
    for (let i = 0; i < 20; i++) {
      var rand = Math.floor(Math.random() * (kuvat.length - 1));
      boxElts[i].innerHTML = "<img src='" + kuvat[rand] + "' alt='image' class='hidden'>";
      kuvat.splice(rand, 1);
    }
  }

  //pelin käsittely
  mainElt.addEventListener("click", gameLogic);
  
  function gameLogic(e) {
    //varmista boksin käsittely
    if (e.target.classList.contains("play")) {
      e.target.firstChild.classList.remove("hidden");
      //lasketaan ekat kaksi klikkiä
      if (click < 1) {
        tempElt1 = e.target;
        //ajastinn
        if (click === -1) {
          timer = setInterval(function() {
            aika++;
            aikaElt.innerHTML = aika;
          }, 1000);
        }
        click = 1;
      }
  
      //toinen klikkaus
      else if (e.target !== tempElt1) {
        tempElt2 = e.target;
        //ei paria
        if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
          mainElt.removeEventListener("click", gameLogic);
          setTimeout( function() {
            tempElt1.firstChild.classList.add("hidden");
            tempElt2.firstChild.classList.add("hidden");
            mainElt.addEventListener("click", gameLogic);
          }, 400);
          if (pisteet > 0) {
            pisteet -= 2;
          }
          pisteetElt.innerHTML = pisteet;
        }
  
        //pari
        else {
          pisteet += 10;
          voitot += 2;
          tempElt1.firstChild.classList.add("outlined");
          tempElt2.firstChild.classList.add("outlined");
          tempElt1.classList.remove("play");
          tempElt2.classList.remove("play");
          pisteetElt.innerHTML = pisteet;
  
          //voitettu peli
          if (voitot === 20) {
            clearInterval(timer);
            finalElt.innerHTML = "Sait " + pisteet + " pistettä <br> " + aika + "ssa sekunnissa";
            postElt.classList.remove("hidden");
          }
        }
        click = 0;
      }
    }
  }
  
  againElt.addEventListener("click", resetGame);
  
  function resetGame() {
    // aloittaa pelin alusta
    tempElt1 = "";
    tempElt2 = "";
    click = -1;
    voitot = 0;
    pisteet = 0;
    aika = 0;
    postElt.classList.add("hidden");
    preElt.classList.remove("hidden");
    for (let i = 0; i < 20; i++) {
      boxElts[i].classList.add("play");
      boxElts[i].firstChild.classList.add("hidden");
    }
    aikaElt.textContent = aika;
    pisteetElt.textContent = pisteet;
  }

});