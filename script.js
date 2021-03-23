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
    isKorean = false,
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
        url: "songs/Jatt_Te_Jawani.mp3",
        albumArt: "images/Jatt_Te_Jawani.jpg"
    },

    {
        name: "Area De Jatt",
        singer: "Darsh Dhaliwal",
        duration: "04:13",
        url: "songs/Area_Je_Jatt.mp3",
        albumArt: "images/Area_Je_Jatt.jpg"
    },

    {
        name: "12 Dia 12",
        singer: "Sippy Gill",
        duration: "03:29",
        url: "songs/12_Dia_12.mp3",
        albumArt: "images/12_Dia_12.jpg"
    },

    {
        name: "Asle",
        singer: "Gurman Sandhu",
        duration: "03:06",
        url: "songs/Asle.mp3",
        albumArt: "images/Asle.jpg"
    },

    {
        name: "Das Ja",
        singer: "Lehmber Hussainpuri",
        duration: "03:55",
        url: "songs/Das_Ja.mp3",
        albumArt: "images/Das_Ja.jpg"
    },

    {
        name: "Dilbar",
        singer: "Khan Bhaini",
        duration: "04:13",
        url: "songs/Dilbar.mp3",
        albumArt: "images/Dilbar.jpg"
    },

    {
        name: "Hukam",
        singer: "Karan Aujla",
        duration: "03:49",
        url: "songs/Hukam.mp3",
        albumArt: "images/Hukam.jpg"
    },

    {
        name: "Jaan",
        singer: "Barbie Maan",
        duration: "03:17",
        url: "songs/Jaan.mp3",
        albumArt: "images/Jaan.jpg"
    },

    {
        name: "Teeji Seat",
        singer: "Kaka",
        duration: "02:24",
        url: "songs/Teeji_Seat.mp3",
        albumArt: "images/Teeji_Seat.jpg"
    },

    {
        name: "Jatta De Munde",
        singer: "Tarsem Jassar",
        duration: "04:01",
        url: "songs/Jatt_De_Munde.mp3",
        albumArt: "images/Jatt_De_Munde.jpg"
    },

    {
        name: "Jigra",
        singer: "Varinder Brar",
        duration: "03:14",
        url: "songs/Jigra.mp3",
        albumArt: "images/Jigra.jpg"
    },

    {
        name: "Lamborghini",
        singer: "Khan Bhaini",
        duration: "03:05",
        url: "songs/Lamborghini.mp3",
        albumArt: "images/Lamborghini.jpg"
    },

    {
        name: "Mera Mahi Tu Pateya",
        singer: "Lehmber Hussainpuri",
        duration: "04:26",
        url: "songs/Mera_Mahi_Tu_Pateya.mp3",
        albumArt: "images/Mera_Mahi_Tu_Pateya.jpg"
    },

    {
        name: "Mexico",
        singer: "Karan Aujla",
        duration: "03:26",
        url: "songs/Mexico.mp3",
        albumArt: "images/Mexico.jpg"
    },

    {
        name: "Note Muqabla",
        singer: "Goldy Desi Crew",
        duration: "03:25",
        url: "songs/Note_Muqabla.mp3",
        albumArt: "images/Note_Muqabla.jpg"
    },

    {
        name: "Pind De Ghere",
        singer: "Rupinder Handa",
        duration: "03:00",
        url: "songs/Pind_De_Ghere.mp3",
        albumArt: "images/Pind_De_Ghere.jpg"
    },

    {
        name: "Rayban",
        singer: "Sukh Lotey",
        duration: "03:28",
        url: "songs/Rayban.mp3",
        albumArt: "images/Rayban.jpg"
    },

    {
        name: "Scratch",
        singer: "Gursewak Dhillon",
        duration: "03:16",
        url: "songs/Scratch.mp3",
        albumArt: "images/Scratch.jpg"
    },

    {
        name: "Soh_Lagge",
        singer: "Nav Dolorain",
        duration: "03:12",
        url: "songs/Soh_Lagge.mp3",
        albumArt: "images/Soh_Lagge.jpg"
    },

    {
        name: "Tommy",
        singer: "Diljit Dosanjh",
        duration: "02:50",
        url: "songs/Tommy.mp3",
        albumArt: "images/Tommy.jpg"
    },

    {
        name: "Tappe",
        singer: "Ammy Virk",
        duration: "03:30",
        url: "songs/Tappe.mp3",
        albumArt: "images/Tappe.jpg"
    },

    {
        name: "",
        singer: "",
        duration: "",
        url: "",
        albumArt: ""
    }
];

var korean = [

    {
        name: "Kill This Love",
        singer: "BlackPink",
        duration: "03:13",
        url: "k-pop/Kill_This_Love.mp3",
        albumArt: "k-pop/Kill_This_Love.jpg"
    },

    {
        name: "Boy With Luv",
        singer: "BTS Feat. Halsey",
        duration: "04:12",
        url: "k-pop/Boy_With_Luv.mp3",
        albumArt: "k-pop/Boy_With_Luv.jpg"
    },

    {
        name: "Fake Love",
        singer: "BTS",
        duration: "04:02",
        url: "k-pop/Fake_Love.mp3",
        albumArt: "k-pop/Fake_Love.jpg"
    },

    {
        name: "Blood Sweat & Tears",
        singer: "BTS",
        duration: "06:03",
        url: "k-pop/Blood_Sweat_And_Tears.mp3",
        albumArt: "k-pop/Blood_Sweat_And_Tears.jpg"
    },

    {
        name: "FANCY",
        singer: "Twice",
        duration: "03:38",
        url: "k-pop/FANCY.mp3",
        albumArt: "k-pop/FANCY.jpg"
    },

    {
        name: "Not Today",
        singer: "BTS",
        duration: "04:50",
        url: "k-pop/Not_Today.mp3",
        albumArt: "k-pop/Not_Today.jpg"
    },

    {
        name: "Ddu-Du Ddu-Du",
        singer: "BlackPink",
        duration: "03:33",
        url: "k-pop/Ddu-Du_Ddu-Du.mp3",
        albumArt: "k-pop/Ddu-Du_Ddu-Du.jpg"
    },

    {
        name: "Feel Special",
        singer: "Twice",
        duration: "03:40",
        url: "k-pop/Feel_Special.mp3",
        albumArt: "k-pop/Feel_Special.jpg"
    },

    {
        name: "Whistle",
        singer: "BlackPink",
        duration: "03:34",
        url: "k-pop/Whistle.mp3",
        albumArt: "k-pop/Whistle.jpg"
    },

    {
        name: "Save ME",
        singer: "BTS",
        duration: "03:36",
        url: "k-pop/Save_ME.mp3",
        albumArt: "k-pop/Save_ME.jpg"
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

    if (isKorean) {
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
        songs = korean;
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

    this.isKorean = ko;

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
