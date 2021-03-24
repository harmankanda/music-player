var isDrawerOpen = false,
    isNavOpen = false,
    mediaPlayer,
    audioSource,
    isPlaying = false,
    bufferingStats,
    bottomBar,
    progressTimeDuration,
    songListDuration,
    isReady = false,
    bottomProgress,
    drawerCurrentTime,
    drawerSongDuration,
    drawerBar,
    dawerProgress,
    isHindi = false,
    baseUrl = "https://harmankanda.github.io/music-player/",
    accentColorAr = [
        '#ff4b66',
        '#ffb300',
        '#ffb762',
        '#3444ff',
        '#16e0aa',
        '#8f1fff',
        '#70de00',
        '#000000'
    ];

var songs, Punjabi = [

    {
        name: "Jatt Te Jawani",
        singer: "Dilpreet Dhillon",
        duration: "04:00",
        url: "songs/Punjabi/Jatt_Te_Jawani.mp3",
        albumArt: "images/Punjabi/Jatt_Te_Jawani.jpg"
    },

    {
        name: "Area De Jatt",
        singer: "Darsh Dhaliwal",
        duration: "04:13",
        url: "songs/Punjabi/Area_Je_Jatt.mp3",
        albumArt: "images/Punjabi/Area_Je_Jatt.jpg"
    },

    {
        name: "12 Dia 12",
        singer: "Sippy Gill",
        duration: "03:29",
        url: "songs/Punjabi/12_Dia_12.mp3",
        albumArt: "images/Punjabi/12_Dia_12.jpg"
    },

    {
        name: "Asle",
        singer: "Gurman Sandhu",
        duration: "03:06",
        url: "songs/Punjabi/Asle.mp3",
        albumArt: "images/Punjabi/Asle.jpg"
    },

    {
        name: "Das Ja",
        singer: "Lehmber Hussainpuri",
        duration: "03:55",
        url: "songs/Punjabi/Das_Ja.mp3",
        albumArt: "images/Punjabi/Das_Ja.jpg"
    },

    {
        name: "Dilbar",
        singer: "Khan Bhaini",
        duration: "04:13",
        url: "songs/Punjabi/Dilbar.mp3",
        albumArt: "images/Punjabi/Dilbar.jpg"
    },

    {
        name: "Hukam",
        singer: "Karan Aujla",
        duration: "03:49",
        url: "songs/Punjabi/Hukam.mp3",
        albumArt: "images/Punjabi/Hukam.jpg"
    },

    {
        name: "Jaan",
        singer: "Barbie Maan",
        duration: "03:17",
        url: "songs/Punjabi/Jaan.mp3",
        albumArt: "images/Punjabi/Jaan.jpg"
    },

    {
        name: "Teeji Seat",
        singer: "Kaka",
        duration: "02:24",
        url: "songs/Punjabi/Teeji_Seat.mp3",
        albumArt: "images/Punjabi/Teeji_Seat.jpg"
    },

    {
        name: "Jatta De Munde",
        singer: "Tarsem Jassar",
        duration: "04:01",
        url: "songs/Punjabi/Jatt_De_Munde.mp3",
        albumArt: "images/Punjabi/Jatt_De_Munde.jpg"
    },

    {
        name: "Jigra",
        singer: "Varinder Brar",
        duration: "03:14",
        url: "songs/Punjabi/Jigra.mp3",
        albumArt: "images/Punjabi/Jigra.jpg"
    },

    {
        name: "Lamborghini",
        singer: "Khan Bhaini",
        duration: "03:05",
        url: "songs/Punjabi/Lamborghini.mp3",
        albumArt: "images/Punjabi/Lamborghini.jpg"
    },

    {
        name: "Vadda Bai",
        singer: "Gurtaj",
        duration: "02:39",
        url: "songs/Punjabi/Vadda_Bai.mp3",
        albumArt: "images/Punjabi/Vadda_Bai.jpg"
    },

    {
        name: "Mera Mahi Tu Pateya",
        singer: "Lehmber Hussainpuri",
        duration: "04:26",
        url: "songs/Punjabi/Mera_Mahi_Tu_Pateya.mp3",
        albumArt: "images/Punjabi/Mera_Mahi_Tu_Pateya.jpg"
    },

    {
        name: "Mexico",
        singer: "Karan Aujla",
        duration: "03:26",
        url: "songs/Punjabi/Mexico.mp3",
        albumArt: "images/Punjabi/Mexico.jpg"
    },

    {
        name: "Note Muqabla",
        singer: "Goldy Desi Crew",
        duration: "03:25",
        url: "songs/Punjabi/Note_Muqabla.mp3",
        albumArt: "images/Punjabi/Note_Muqabla.jpg"
    },

    {
        name: "Pind De Ghere",
        singer: "Rupinder Handa",
        duration: "03:00",
        url: "songs/Punjabi/Pind_De_Ghere.mp3",
        albumArt: "images/Punjabi/Pind_De_Ghere.jpg"
    },

    {
        name: "Rayban",
        singer: "Sukh Lotey",
        duration: "03:28",
        url: "songs/Punjabi/Rayban.mp3",
        albumArt: "images/Punjabi/Rayban.jpg"
    },

    {
        name: "Scratch",
        singer: "Gursewak Dhillon",
        duration: "03:16",
        url: "songs/Punjabi/Scratch.mp3",
        albumArt: "images/Punjabi/Scratch.jpg"
    },

    {
        name: "Soh_Lagge",
        singer: "Nav Dolorain",
        duration: "03:12",
        url: "songs/Punjabi/Soh_Lagge.mp3",
        albumArt: "images/Punjabi/Soh_Lagge.jpg"
    },

    {
        name: "Tommy",
        singer: "Diljit Dosanjh",
        duration: "02:50",
        url: "songs/Punjabi/Tommy.mp3",
        albumArt: "images/Punjabi/Tommy.jpg"
    },

    {
        name: "Tappe",
        singer: "Ammy Virk",
        duration: "03:30",
        url: "songs/Punjabi/Tappe.mp3",
        albumArt: "images/Punjabi/Tappe.jpg"
    },

    {
        name: "",
        singer: "",
        duration: "",
        url: "",
        albumArt: ""
    }
];

var Hindi = [

    {
        name: "Nadiyon Paar",
        singer: "Rashmeet Kaur & Shamur",
        duration: "02:27",
        url: "songs/Hindi/Nadiyon_Paar.mp3",
        albumArt: "images/Hindi/Nadiyon_Paar.jpg"
    },

    {
        name: "Ring Ring",
        singer: "Emiway Bantai",
        duration: "03:17",
        url: "songs/Hindi/Ring_Ring.mp3",
        albumArt: "images/Hindi/Ring_Ring.jpg"
    },

    {
        name: "Saiyaan Ji",
        singer: "Honey Singh ft. Neha",
        duration: "03:25",
        url: "songs/Hindi/Saiyaan_Ji.mp3",
        albumArt: "images/Hindi/Saiyaan_Ji.jpg"
    },

    {
        name: "Vaaste",
        singer: "Dhvani Bhanushali",
        duration: "03:16",
        url: "songs/Hindi/Vaaste.mp3",
        albumArt: "images/Hindi/Vaaste.jpg"
    },

    {
        name: "Yaad Piya Ki Aane Lagi",
        singer: "Neha Kakkar",
        duration: "04:16",
        url: "songs/Hindi/Yaad_Piya_Ki_Aane_Lagi.mp3",
        albumArt: "images/Hindi/Yaad_Piya_Ki_Aane_Lagi.jpg"
    },

    {
        name: "Naach Meri Rani",
        singer: "Guru Randhawa",
        duration: "3:32",
        url: "songs/Hindi/Naach_Meri_Rani.mp3",
        albumArt: "images/Hindi/Naach_Meri_Rani.jpg"
    },

    {
        name: "Khairiyat",
        singer: "Arijit Singh",
        duration: "04:30",
        url: "songs/Hindi/Khairiyat.mp3",
        albumArt: "images/Hindi/Khairiyat.jpg"
    },

    {
        name: "Kaun Tujhe",
        singer: "Palak Muchhal",
        duration: "04:01",
        url: "songs/Hindi/Kaun_Tujhe.mp3",
        albumArt: "images/Hindi/Kaun_Tujhe.jpg"
    },

    {
        name: "Genda Phool",
        singer: "Badshah & Payal Dev",
        duration: "02:50",
        url: "songs/Hindi/Genda_Phool.mp3",
        albumArt: "images/Hindi/Genda_Phool.jpg"
    },

    {
        name: "Gal Karke",
        singer: "Asees Kaur",
        duration: "02:37",
        url: "songs/Hindi/Gal_Karke.mp3",
        albumArt: "images/Hindi/Gal_Karke.jpg"
    },

    {
        name: "Baby Girl",
        singer: "Guru Randhawa ft. Dhvani",
        duration: "03:43",
        url: "songs/Hindi/Baby_Girl.mp3",
        albumArt: "images/Hindi/Baby_Girl.jpg"
    },

    {
        name: "Aankh Marey",
        singer: "Neha, Mika & Kumar Sanu",
        duration: "03:32",
        url: "songs/Hindi/Aankh_Marey.mp3",
        albumArt: "images/Hindi/Aankh_Marey.jpg"
    },

    {
        name: "",
        singer: "",
        duration: "",
        url: "",
        albumArt: ""
    }
];

var currentProfile = {
    name: "",
    singer: "",
    duration: "",
    url: "",
    albumArt: "",
    id: 0,
    accentColor: "#8f1fff"
};

window.onload = function () {

    mediaPlayer = document.getElementById('media-player'),
        audioSource = document.getElementById('audio-source');

    document.getElementById("loading").style.display = "none";

    mediaPlayer.addEventListener("progress", function () {
        if (isReady)
            bufferingStats.style.opacity = 1;

        var bufferedEnd = mediaPlayer.buffered.end(mediaPlayer.buffered.length - 1);
        var mduration = mediaPlayer.duration;
        if (mduration > 0) {
            document.getElementById('bufferedBar').style.width = ((bufferedEnd / mduration) * 100) + "%";
            document.getElementById('drawerBufferedBar').style.width = ((bufferedEnd / mduration) * 100) + "%";
        }

    });

    $('#drawerStopButton').click(function () {
        mediaPlayer.pause();
        mediaPlayer.currentTime = 0;
        isPlaying = false;
        $('#play-btn').text('play_arrow');
        $('#drawerPlay').text('play_arrow');
    });

    document.getElementById("toast")
        .addEventListener("webkitAnimationEnd", function () {
            toast.style.animation = "none";
        });

    changeTheme(0);

};

$(document).ready(function () {

    $(".main-container").css("height", window.innerHeight + "px");

    generateElements(false);
    setCurrentProfile(0);

    $('.nav').click(function (e) {
        e.stopPropagation();
    });

    mediaPlayer = document.getElementById('media-player'),
        audioSource = document.getElementById('audio-source'),
        bufferingStats = document.querySelector('.bufferingStats'),
        bottomBar = document.getElementById('bottomBar'),
        progressTimeDuration = document.getElementById('progressTimeDuration'),
        songListDuration = document.getElementsByClassName('song-list-duration'),
        bottomProgress = document.getElementById('bottomProgress'),
        drawerCurrentTime = document.getElementById('drawerCurrentTime'),
        drawerSongDuration = document.getElementById('drawerSongDuration'),
        drawerBar = document.getElementById('drawerBar'),
        dawerProgress = document.getElementById('dawerProgress');

    mediaPlayer.addEventListener('timeupdate', function () {
        writeProgressAndDuration();
        bufferingStats.style.opacity = 0;
    });

    bottomProgress.addEventListener('click', function (e) {

        var clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;
        var jumpTime = clickPosition * mediaPlayer.duration;

        mediaPlayer.currentTime = jumpTime;

        if (!isPlaying)
            playPause();

    });

    dawerProgress.addEventListener('click', function (e) {
        var clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;
        var jumpTime = clickPosition * mediaPlayer.duration;

        mediaPlayer.currentTime = jumpTime;

        if (!isPlaying)
            playPause();

    });

    function writeProgressAndDuration() {
        var time = parseInt(mediaPlayer.currentTime, 10),
            songDuration = parseInt(mediaPlayer.duration, 10),
            currentSec = 0,
            totalSec = 0,
            prog;

        prog = parseInt(((time / songDuration) * 100), 10) + "%";
        bottomBar.style.width = prog;
        drawerBar.style.width = prog;

        var minutes = Math.floor(time / 60),
            seconds = time - minutes * 60,
            songDurationMinutes = Math.floor(songDuration / 60),
            songDurationSeconds = Math.floor(songDuration - songDurationMinutes * 60);

        currentSec = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
        totalSec = str_pad_left(songDurationMinutes, '0', 2) + ':' + str_pad_left(songDurationSeconds, '0', 2);

        progressTimeDuration.textContent = currentSec + ' / ' + totalSec;

        songListDuration[currentProfile.id].textContent = currentSec;
        drawerSongDuration.textContent = totalSec;

        drawerCurrentTime.textContent = currentSec;

        function str_pad_left(string, pad, length) {
            return (new Array(length + 1).join(pad) + string).slice(-length);
        }
    }

    $("#favorite").click(function () {
        if (this.textContent == 'favorite')
            this.textContent = 'favorite_border';
        else {
            this.textContent = 'favorite';
            showToast("Favorited");
        }
    });

    $("#repeat").click(function () {
        if (this.textContent == 'repeat') {
            this.textContent = 'repeat_one';
            showToast("Repeat One");
        } else {
            this.textContent = 'repeat';
            showToast("Repeat All");
        }

    });

});

function changeTheme(id) {

    document.documentElement.style.setProperty('--accent-color', accentColorAr[id]);
    currentProfile.accentColor = accentColorAr[id];
    if (id == 7) {
        currentProfile.accentColor = "#000000";
        showToast("Expermental Dark");
    }
    var card = document.getElementsByClassName('card');
    songListDuration[currentProfile.id].style.color = currentProfile.accentColor;
    if (id == 7)
        card[currentProfile.id].style.color = "#ffffff";
    else
        card[currentProfile.id].style.color = currentProfile.accentColor;

    if (isHindi) {
        $('.left-pannel__anime').css('color', currentProfile.accentColor);
    } else {
        $('.left-pannel__favorite').css('color', currentProfile.accentColor);
    }

}

function navHandler() {

    if (isNavOpen) {
        closeNav();
    } else {
        openNav();
    }

    function openNav() {
        $('.nav-container').show();
        $('.nav').animate({ width: "75vw" }, 700, function () {
            $('.nav p').show();
            $('.themes').css('display', 'flex');
            setTimeout(function () {
                $('.theme').css('transform', 'scale(1)');
            }, 100);
            isNavOpen = true;
        });

    }

    function closeNav() {
        $('.nav p').hide();
        $('.themes').hide();
        $('.theme').css('transform', 'scale(0)');
        $('.nav').animate({ width: "0vw" }, 700, function () {
            $('.nav-container').hide();
            isNavOpen = false;
        });
    }
}

function drawerHandler() {

    if (isDrawerOpen) {
        closeDrawer();
    } else {
        openDrawer();
    }

    function openDrawer() {

        $('.bottom-drawer').show();
        $('#drawerSongName').text(currentProfile.name);
        $('#drawerSingerName').text(currentProfile.singer);
        $('#songAlbumArt').css("background-image", "url(" + baseUrl + currentProfile.albumArt + ")");
        $('.bottom-pannel .bottom__up-arrow').css('transform', 'rotate(180deg)');
        $('.drawer-holder').animate({ height: "60vh" }, 1000, function () {

            $('.bottom-drawer .bottom__up-arrow').css('transform', 'rotate(180deg)');
            $('.column').css('display', 'flex');
            isDrawerOpen = true;
        });

    }

    function closeDrawer() {
        $('.column').hide();
        $('.drawer-holder').animate({ height: "12vh" }, 1000, function () {
            isDrawerOpen = false;
            $('.bottom-drawer').hide();
            $('.bottom-pannel .bottom__up-arrow').css('transform', 'rotate(0deg)');
            $('.bottom-drawer .bottom__up-arrow').css('transform', 'rotate(0deg)');
        });
    }

}

function generateElements(ko) {

    var cards = "", songList = "";

    $('.cards-holder').html("");
    $('.list-view').html("");

    if (ko) {
        songs = Hindi;
        $('.left-pannel__anime').text('_Hindi');
        $('.left-pannel__anime').css('color', currentProfile.accentColor);
        $('.left-pannel__favorite').text('Punjabi');
        $('.left-pannel__favorite').css('color', "black");
    } else {
        songs = Punjabi;
        $('.left-pannel__favorite').text('_Punjabi');
        $('.left-pannel__favorite').css('color', currentProfile.accentColor);
        $('.left-pannel__anime').text('Hindi');
        $('.left-pannel__anime').css('color', "black");
    }

    for (var i = 0; i < songs.length; i++) {

        cards = cards + `<div class="card" onclick="playSong(` + i + `);" style="background-image: url(` +
            baseUrl + songs[i].albumArt
            + `)">
<div class="card__song-info">
<div class="card__song-artist-title">
<div class="card__song-info__name">
`+ songs[i].name + `
</div>

<div class="card__song-info__singer">
`+ songs[i].singer + `
</div>
</div>

</div>
</div>`;

    }

    $('.cards-holder').html(cards);

    for (var i = 0; i < songs.length - 1; i++) {
        songList = songList + `<div class="song-list" onclick="playSong(` + i + `)">
<div class="song-list__info">
<img src="`+ baseUrl + songs[i].albumArt + `">
<div>
<div class="song-list__name">`+ songs[i].name + `</div>
<div id="songListPlayedTime">`+ songs[i].singer + `</div>
</div>
</div>
<div id="songListDuration" class="song-list-duration">`+ songs[i].duration + `</div>
</div>`
    }

    $('.list-view').html(songList);

    this.isHindi = ko;

}

function playSong(songId, checkPause) {

    var card = document.getElementsByClassName('card');

    if (checkPause == undefined)
        if (currentProfile.name == songs[songId].name) {
            songListDuration[songId].style.color = currentProfile.accentColor;
            card[songId].style.color = currentProfile.accentColor;
            playPause();
            return;
        }
    if (currentProfile.id != songId) {
        songListDuration[songId].style.color = currentProfile.accentColor;
        songListDuration[currentProfile.id].style.color = "grey";
        songListDuration[currentProfile.id].textContent = currentProfile.duration;
        card[songId].style.color = currentProfile.accentColor;
        card[currentProfile.id].style.color = "#ffffff";
    }
    setCurrentProfile(songId);
    audioSource.src = baseUrl + currentProfile.url;
    $("#bottomSongName").text(currentProfile.name);
    $('#bottomSingerName').text(currentProfile.singer);
    mediaPlayer.load();
    mediaPlayer.play();
    $('#play-btn').text('pause');
    $('#drawerPlay').text('pause');
    isPlaying = true;
    isReady = true;
}

function playPause() {
    isReady = true;
    if (!isPlaying) {
        isPlaying = true;
        mediaPlayer.play();
        $('#play-btn').text('pause');
        $('#drawerPlay').text('pause');
    } else {
        isPlaying = false;
        mediaPlayer.pause();
        $('#play-btn').text('play_arrow');
        $('#drawerPlay').text('play_arrow');
    }

    var card = document.getElementsByClassName('card');
    songListDuration[currentProfile.id].style.color = currentProfile.accentColor;
    card[currentProfile.id].style.color = currentProfile.accentColor;
}

window.onerror = function () {
    console.error = null;
    return true;
};

function nextSong() {
    var songId = 0;
    if (currentProfile.id == songs.length - 2)
        songId = 0;
    else
        songId = currentProfile.id + 1;
    playSong(songId, true);
    setCurrentProfile(songId);
    $('#drawerSongName').text(currentProfile.name);
    $('#drawerSingerName').text(currentProfile.singer);
    $('#songAlbumArt').css("background-image", "url(" + baseUrl + currentProfile.albumArt + ")");

}

function prevSong() {
    var songId = 0;
    if (currentProfile.id == 0)
        songId = songs.length - 2;
    else
        songId = currentProfile.id - 1;
    playSong(songId, true);
    setCurrentProfile(songId);
    $('#drawerSongName').text(currentProfile.name);
    $('#drawerSingerName').text(currentProfile.singer);
    $('#songAlbumArt').css("background-image", "url(" + baseUrl + currentProfile.albumArt + ")");
}

function showToast(text) {
    var toast = document.getElementById("toast");
    document.getElementById("toastText").textContent = text;
    toast.style.animation = "fade 2s";
    toast.style.anmationFillMode = "forwards";
}

function setCurrentProfile(id) {
    currentProfile.id = id;
    currentProfile.name = songs[id].name;
    currentProfile.singer = songs[id].singer;
    currentProfile.duration = songs[id].duration;
    currentProfile.url = songs[id].url;
    currentProfile.albumArt = songs[id].albumArt;
}
