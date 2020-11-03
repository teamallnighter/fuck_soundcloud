window.addEventListener("load", event => {

   const iconTopExpand = document.querySelector(".icon.topExpand"),
         iconBottomExpand = document.querySelector(".icon.bottomExpand"),
         topContent = document.querySelector(".topContent"),
         bottomContent = document.querySelector(".bottomContent"),
         playBtn = document.querySelector(".btnPlay"),
         musicGroups = document.querySelector(".swiper-wrapper.slider-two"),
         swipperWrapper = document.querySelector(".swiper-wrapper.slider-one"),
         imageBg = document.querySelector(".imageBg"),
         albumBg = document.querySelector(".albumBg"),
         wrapper = document.querySelector(".wrapper"),
         bodyBg = document.querySelector(".bodyBg"),
         next = document.querySelector(".swiper-button-next"),
         prev = document.querySelector(".swiper-button-prev");

   // Songs
   const songs = [
      {
         img: "https://www.notediscover.com/art/track/taylor-swift-we-are-never-ever-getting-back-together-161.jpg",
         artistName: "Taylor Swift",
         songName: "Taylor Swift - We Are Never Getting Back Together (Unnessary Roughness Remix)",
         song: "https://music.chrisconnelly.dev/music/tswangbt.mp3",
         color: "#FF69B4"
      },
      {
         img: "https://upload.wikimedia.org/wikipedia/en/1/16/Panic%21_at_the_Disco_-_I_Write_Sins_Not_Tragedies.png",
         artistName: "Panic! At The Disco",
         songName: "I Write Sins Not Tragedies (Unnessary Roughness Remix)",
         song: "https://music.chrisconnelly.dev/music/patd.mp3",
         color: "#8b0000"
      },
      {
         img: "https://upload.wikimedia.org/wikipedia/en/a/ae/Tlc-noscubs2.jpg",
         artistName: "TLC",
         songName: "No Scrubs (Unnessary Roughness Remix)",
         song: "https://music.chrisconnelly.dev/music/tlcns.mp3",
         color: "#0000CD"
      },
      {
         img: "data:image/jpeg;base64,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",
         artistName: "Lizzo",
         songName: "Truth Hurts (Unnessary Roughness Remix)",
         song: "https://music.chrisconnelly.dev/music/lth.mp3",
         color: "#1b1b1b"
      },
      {
         img: "https://music.chrisconnelly.dev/ur.png",
         artistName: "Unnecessary Roughness",
         songName: "VIP (WIP)",
         song: "https://music.chrisconnelly.dev/music/vip.mp3",
         color: "#0000CD"
      },
      {
         img: "https://music.chrisconnelly.dev/wap.png",
         artistName: "Cardi B & Megan Thee Stallion",
         songName: "WAP (Unnecessary Roughness Remix)",
         song: "https://music.chrisconnelly.dev/music/wap.mp3",
         color: "#FF69B4"
      },
      {
         img: "https://music.chrisconnelly.dev/ninja.png",
         artistName: "Die Antwoord",
         songName: "Enter The Ninja (Unnecessary Roughness Remix)",
         song: "https://music.chrisconnelly.dev/music/ninja.mp3",
         color: "#FF69B4"
      },
      {
         img: "https://music.chrisconnelly.dev/intergalactic.png",
         artistName: "Beastie Boys",
         songName: "Intergalactic (Unnecessary Roughness Remix)",
         song: "https://music.chrisconnelly.dev/music/intergalactic.mp3",
         color: "#ffa500 "
      },

   ];

   // Music Groups
   const groups = [
      {
         title: "Songs",
         img: "http://localhost:5500/music/ur.png"
      },
      {
         title: "Artists",
         img: "http://localhost:5500/music/ur.png"
      },
      {
         title: "Playlists",
         img:
         "http://localhost:5500/music/ur.png"
      },
      {
         title: "Favourites",
         img: "http://localhost:5500/music/ur.png"
      },
   ];

   // Playlists
   const playlists = [
      {
         title: "My Remixes",
         img:
         "http://localhost:5500/music/ur.png"
      },
      {
         title: "Originals",
         img:
         "http://localhost:5500/music/ur.png"
      }
   ];

   ////////////////
   // Events
   ////////////////

   iconTopExpand.addEventListener("click", expandTop);
   iconBottomExpand.addEventListener("click", expandBottom);
   playBtn.addEventListener("click", playSong);

   ////////////////
   // Functions
   ////////////////

   function playSong() {
      if (playBtn.classList.contains("pause")) {
         playBtn.classList.remove("pause");
         document.querySelector(".swiper-slide-active audio").pause();
      } else {
         playBtn.classList.add("pause");
         document.querySelector(".swiper-slide-active audio").play();
      }
      progressBar();
   }

   function expandTop() {
      if (topContent.classList.contains("expand")) {
         topContent.classList.remove("expand");
      } else {
         topContent.classList.add("expand");

         //Swiper Music Goups
         var mySwiper2 = new Swiper(".swiper-container.slider-two", {
            // Optional parameters
            direction: "horizontal",
            slidesPerView: "auto",
            draggable: true
         });
      }
      albumSize();
   }

   function expandBottom() {
      if (bottomContent.classList.contains("expand")) {
         bottomContent.classList.remove("expand");
      } else {
         bottomContent.classList.add("expand");
      }
      albumSize();
      progressBar();
   }

   // change Album size

   function albumSize() {
      const albumContent = document.querySelectorAll(".albumContent");

      if (
         topContent.classList.contains("expand") &&
         bottomContent.classList.contains("expand")
      ) {
         albumContent.forEach(function(el) {
            el.classList.add("small");
         });
      } else {
         albumContent.forEach(function(el) {
            el.classList.remove("small");
         });
      }
   }

   //Swiper Albums

   songs.forEach(function(el) {
      let template = `
<div class="swiper-slide">
<div class="settings">
<div class="icon heart"></div>
<div class="icon plus"></div>
</div>
<audio src="${el.song}"></audio>
<div class="albumContent">
<div class="albumCover" style="background-color:${
      el.color
      }"><img src="${el.img}"></div>
<p class="artistName">${el.artistName}</p>
<p class="songName">${el.songName}</p></div>
<div class="playlistsContent">
<div class="icon close"></div>
</div>
</div>`;

      swipperWrapper.insertAdjacentHTML("beforeend", template);
   });

   // To Create Playlists
   playlists.forEach(function(el) {
      let templatePlaylist = `
<div class="playlist">
<span class="checkbox"></span>
<figure class="playlistBg"><img src="${el.img}"></figure>
<figure class="playlistThumb"><img src="${el.img}"></figure>
<p class="playlistTitle">${el.title}</p></div>`;

      var playlistContent = document.querySelectorAll(".playlistsContent");

      playlistContent.forEach(function(el) {
         el.insertAdjacentHTML("beforeend", templatePlaylist);
      });
   });

   // Slider Songs (Middle)

   var mySwiper = new Swiper(".swiper-container.slider-one", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 600,
      allowTouchMove: false,
      effect: "coverflow",

      coverflowEffect: {
         rotate: 40,
         slideShadows: false
      },

      // Navigation arrows
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
      }
   });

   // Change Song & Album BG
   next.addEventListener("click", changeSong);
   prev.addEventListener("click", changeSong);

   function changeSong() {
      if (playBtn.classList.contains("pause")) {
         document.querySelectorAll("audio").forEach(function(el) {
            el.pause();
         });
         document.querySelector(".swiper-slide-active audio").play();
      }
      changeBg();
      progressBar();
      closePlaylists();
      changeBgColor();
   }

   function changeBg() {
      albumBg.classList.add("animeBg");

      setTimeout(() => {
         imageBg.src = document.querySelector(
            ".slider-one .swiper-slide-active img"
         ).src;
      }, 300);

      setTimeout(() => {
         albumBg.classList.remove("animeBg");
      }, 700);
   }

   function changeBgColor() {
      var getColor = document.querySelector(
         ".slider-one .swiper-slide-active .albumCover"
      ),
          activeColor = getColor.style.backgroundColor;

      setTimeout(() => {
         bodyBg.style.backgroundColor = activeColor;
      }, 200);
   }

   // Music Groups

   for (let i = 0; i < groups.length; i++) {
      const { title, img } = groups[i];

      var template2 = `<div class="swiper-slide group">
<figure><img src="${img}"></figure>
<p class = "titleGroup">${title}</p>
</div>`;

      musicGroups.insertAdjacentHTML("beforeend", template2);
   }

   // Add favourites & Playlist

   const heart = document.querySelectorAll(".heart"),
         plus = document.querySelectorAll(".plus"),
         close = document.querySelectorAll(".close"),
         playlist = document.querySelectorAll(".playlist");

   heart.forEach(function(el) {
      el.addEventListener("click", addFave);
   });

   plus.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   close.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   playlist.forEach(function(el) {
      el.addEventListener("click", addPlaylist);
   });

   function addFave(e) {
      if (e.currentTarget.classList.contains("fave")) {
         e.currentTarget.classList.remove("fave");
      } else {
         e.currentTarget.classList.add("fave");
      }
   }

   function openPlaylists(e) {
      if (
         e.currentTarget
         .closest(".swiper-slide-active")
         .classList.contains("open")
      ) {
         e.currentTarget
            .closest(".swiper-slide-active")
            .classList.remove("open");
      } else {
         e.currentTarget.closest(".swiper-slide-active").classList.add("open");
      }
   }

   function closePlaylists() {
      document.querySelector(".swiper-slide-active").classList.remove("open");
   }

   function addPlaylist(e) {
      if (e.currentTarget.classList.contains("selected")) {
         e.currentTarget.classList.remove("selected");
      } else {
         e.currentTarget.classList.add("selected");
      }
   }

   // Song Progress Bar

   function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
   }

   function progressBar() {
      var songDuration = document.querySelector(".swiper-slide-active audio")
      .duration,
          endTime = document.querySelector(".endTime"),
          songAudio = document.querySelector(".swiper-slide-active audio"),
          currentTime = document.querySelector(".currentTime");

      endTime.innerHTML = formatTime(songDuration);

      songAudio.ontimeupdate = function() {
         var progress = document.querySelector(".progress");
         progress.style.width =
            songAudio.currentTime * 100 / songDuration + "%";
         currentTime.innerHTML = formatTime(songAudio.currentTime);
      };
   }

   ////////////////
   // Call Functions
   ////////////////

   changeBg();
   progressBar();
   changeBgColor();

   wrapper.style.height = window.innerHeight + "px";

   console.log(window.innerHeight);
});