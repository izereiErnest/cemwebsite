document.addEventListener("DOMContentLoaded", () => {
// script.js
 const audioPlayer = {
    audio: document.querySelector('#main-audio'),
    playPauseBtn: document.querySelector('.play-pause'),
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),
    playlistBtn: document.querySelector('.playlist-btn'),
    closePlaylistBtn: document.querySelector('.close-playlist'),
    playlistPopup: document.querySelector('.playlist-popup'),
    playlist: document.querySelector('.playlist'),
    progressArea: document.querySelector('.progress-area'),
    progressBar: document.querySelector('.progress-bar'),
    songTitle: document.querySelector('.song-title'),
    artist: document.querySelector('.artist'),
    currentTime: document.querySelector('.current-time'),
    maxDuration: document.querySelector('.max-duration'),
    volumeSlider: document.querySelector('.volume-slider'),
    currentTrack: 0,
    
     songs: [
        {
            title: "Song One",
            artist: "Artist One",
            src: "audio/song1.mp3"
        },
        // Add more songs here
     ],

     init() {
        this.bindEvents();
        this.loadSong(0);
        this.renderPlaylist();
     },

     bindEvents() {
        // Play/Pause button
        this.playPauseBtn.addEventListener('click', () => this.togglePlay());

        // Previous/Next buttons
        this.prevBtn.addEventListener('click', () => this.changeSong('prev'));
        this.nextBtn.addEventListener('click', () => this.changeSong('next'));

        // Playlist toggle
        this.playlistBtn.addEventListener('click', () => this.togglePlaylist());
        this.closePlaylistBtn.addEventListener('click', () => this.togglePlaylist());

        // Progress bar
        this.progressArea.addEventListener('click', (e) => this.setProgress(e));
        
        // Audio events
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.changeSong('next'));
        
        // Volume control
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e));
     },

     togglePlay() {
        if (this.audio.paused) {
            this.audio.play();
            this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            this.audio.pause();
            this.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
     },

     loadSong(index) {
        const song = this.songs[index];
        this.currentTrack = index;
        this.audio.src = song.src;
        this.songTitle.textContent = song.title;
        this.artist.textContent = song.artist;
        
        // Update playlist highlighting
        document.querySelectorAll('.playlist-item').forEach(item => {
            item.classList.remove('playing');
        });
        document.querySelector(`[data-index="${index}"]`)?.classList.add('playing');
     },

     changeSong(direction) {
        let newIndex = this.currentTrack;
        if (direction === 'next') {
            newIndex = (this.currentTrack + 1) % this.songs.length;
        } else {
            newIndex = (this.currentTrack - 1 + this.songs.length) % this.songs.length;
        }
        this.loadSong(newIndex);
        this.audio.play();
        this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
     },

     updateProgress() {
        const duration = this.audio.duration;
        const currentTime = this.audio.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        this.progressBar.style.width = `${progressPercent}%`;
        
        // Update time displays
        this.currentTime.textContent = this.formatTime(currentTime);
        this.maxDuration.textContent = this.formatTime(duration);
     },

    setProgress(e) {
        const width = this.progressArea.clientWidth;
        const clickX = e.offsetX;
        const duration = this.audio.duration;
        this.audio.currentTime = (clickX / width) * duration;
    },

    setVolume(e) {
        const volume = e.target.value / 100;
        this.audio.volume = volume;
    },

    togglePlaylist() {
        this.playlistPopup.classList.toggle('show');
    },

    renderPlaylist() {
        this.playlist.innerHTML = this.songs.map((song, index) => `
            <li class="playlist-item" data-index="${index}" onclick="audioPlayer.playFromPlaylist(${index})">
                <div class="song-details">
                    <span class="playlist-song-name">${song.title}</span>
                    <span class="playlist-artist">${song.artist}</span>
                </div>
                <span class="song-duration">0:00</span>
            </li>
        `).join('');
    },

    playFromPlaylist(index) {
        this.loadSong(index);
        this.audio.play();
        this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        this.togglePlaylist();
    },

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60) || 0;
        const remainingSeconds = Math.floor(seconds % 60) || 0;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
};

// Initialize the audio player
audioPlayer.init();


    // Hadith Section
    const hadithDisplay = document.getElementById("hadith-display");
    
    const hadiths = [
          "Abu Hurairah (May Allah be pleased with him) reported: Messenger of Allah (ﷺ) said, \"By Him in Whose Hand my soul is! You will not enter Jannah until you believe, and you shall not believe until you love one another. Promote greeting amongst you (by saying As-salamu 'alaikum to one another)\".",
          "The Prophet (ﷺ) said, \"The best of you are those who learn the Qur'an and teach it.\"",
          "The Prophet (ﷺ) said, \"The strong man is not the one who wrestles well, but the strong man is the one who controls himself in a fit of rage.\"",
          "The Messenger of Allah (ﷺ) said, \"The best deeds are those done regularly, even if they are few.\"",
          "The Prophet (ﷺ) said, \"He who believes in Allah and the Last Day should speak good or remain silent.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who learn the Qur'an and teach it.\"",
          "The Prophet (ﷺ) said, \"The strong man is not the one who wrestles well, but the strong man is the one who controls himself in a fit of rage.\"",
          "The Messenger of Allah (ﷺ) said, \"The best deeds are those done regularly, even if they are few.\"",
          "The Prophet (ﷺ) said, \"He who believes in Allah and the Last Day should speak good or remain silent.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: Messenger of Allah (ﷺ) said, \"By Him in Whose Hand my soul is! You will not enter Jannah until you believe, and you shall not believe until you love one another. Promote greeting amongst you (by saying As-salamu 'alaikum to one another).\"",
          "The Prophet (ﷺ) said, \"A Muslim is the one from whose tongue and hand other Muslims are safe.\"",
          "The Prophet (ﷺ) said, \"When a man dies, his deeds come to an end except for three: Sadaqah Jariyah (continuous charity), beneficial knowledge, and a righteous child who prays for him.\"",
          "The Messenger of Allah (ﷺ) said, \"The one who guides to good is like the one who does it.\"",
          "The Prophet (ﷺ) said, \"The strong man is he who is able to control himself when he is angry.\"",
          "The Prophet (ﷺ) said, \"Do not envy one another, do not turn your backs to one another, and do not hate one another. Be brothers, O servants of Allah!\"",
          "The Prophet (ﷺ) said, \"A believer is not the one who eats his fill while his neighbor goes hungry.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"If you were to trust in Allah as He should be trusted, He would provide for you as He provides for the birds. They go out hungry in the morning and return with full bellies in the evening.\"",
          "The Prophet (ﷺ) said, \"Whoever does not show mercy to our young ones and does not acknowledge the rights of our elders is not one of us.\"",
          "The Prophet (ﷺ) said, \"The one who does not thank the people, does not thank Allah.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"Whoever helps a brother in need, Allah will help him in his time of need.\"",
          "The Prophet (ﷺ) said, \"The best among you are those who have the best manners and character.\"",
          "The Prophet (ﷺ) said, \"When you greet one another, greet with the best greeting, for it will be a testimony for you.\"",
          "The Prophet (ﷺ) said, \"Seek knowledge from the cradle to the grave.\"",
          "The Messenger of Allah (ﷺ) said, \"The one who is most beloved to me and will be closest to me on the Day of Judgment is the one who has the best manners.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"Indeed, Allah does not look at your appearance or your wealth, but He looks at your hearts and your deeds.\"",
          "The Prophet (ﷺ) said, \"The one who prays the night prayer with sincere faith and hoping for a reward from Allah will have all his past sins forgiven.\"",
          "The Prophet (ﷺ) said, \"If you help your brother in need, you will be helping yourself.\"",
          "The Prophet (ﷺ) said, \"Take advantage of five before five: Your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busy time, and your life before your death.\"",
          "The Prophet (ﷺ) said, \"Make things easy for the people, and do not make it hard for them, and give them glad tidings and do not drive them away.\"",
          "The Prophet (ﷺ) said, \"He who does not thank the people, does not thank Allah.\"",
          "The Prophet (ﷺ) said, \"The most beloved of deeds to Allah are those which are consistent, even if they are few.\"",
          "The Prophet (ﷺ) said, \"If you trust in Allah, He will suffice you.\"",
          "The Prophet (ﷺ) said, \"The most perfect of the believers in faith is the one who is best in character.\"",
          "The Prophet (ﷺ) said, \"Your wealth has not decreased by charity.\"",
          "The Prophet (ﷺ) said, \"A smile in the face of your brother is an act of charity.\"",
          "The Prophet (ﷺ) said, \"Whoever helps to relieve a Muslim of his hardship, Allah will relieve him of a hardship on the Day of Judgment.\"",
          "The Prophet (ﷺ) said, \"The world is a prison for the believer and a paradise for the disbeliever.\"",
          "The Prophet (ﷺ) said, \"Allah is not merciful to the one who is not merciful to others.\"",
          "The Prophet (ﷺ) said, \"Seek knowledge and the world will be in your hands.\"",
          "The Prophet (ﷺ) said, \"The one who guides to good is like the one who does it.\"",
          "The Prophet (ﷺ) said, \"Do not be angry, and Paradise will be yours.\"",
          "The Prophet (ﷺ) said, \"Every act of goodness is charity.\"",
          "The Prophet (ﷺ) said, \"Charity does not decrease wealth.\"",
          "The Prophet (ﷺ) said, \"The most beloved of people to Allah are those who are most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"It is not lawful for a Muslim to desert his brother for more than three days.\"",
          "The Prophet (ﷺ) said, \"Beware of the two great destructive things: greed and envy.\"",
          "The Prophet (ﷺ) said, \"Fear Allah wherever you are, follow a bad deed with a good one, and behave well towards people.\"",
          "The Prophet (ﷺ) said, \"There is a reward for every act of goodness, including smiling at your brother.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who learn the Qur'an and teach it.\"",
          "The Prophet (ﷺ) said, \"The strong man is not the one who wrestles well, but the strong man is the one who controls himself in a fit of rage.\"",
          "The Messenger of Allah (ﷺ) said, \"The best deeds are those done regularly, even if they are few.\"",
          "The Prophet (ﷺ) said, \"He who believes in Allah and the Last Day should speak good or remain silent.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: Messenger of Allah (ﷺ) said, \"By Him in Whose Hand my soul is! You will not enter Jannah until you believe, and you shall not believe until you love one another. Promote greeting amongst you (by saying As-salamu 'alaikum to one another).\"",
          "The Prophet (ﷺ) said, \"A Muslim is the one from whose tongue and hand other Muslims are safe.\"",
          "The Prophet (ﷺ) said, \"When a man dies, his deeds come to an end except for three: Sadaqah Jariyah (continuous charity), beneficial knowledge, and a righteous child who prays for him.\"",
          "The Messenger of Allah (ﷺ) said, \"The one who guides to good is like the one who does it.\"",
          "The Prophet (ﷺ) said, \"The strong man is he who is able to control himself when he is angry.\"",
          "The Prophet (ﷺ) said, \"Do not envy one another, do not turn your backs to one another, and do not hate one another. Be brothers, O servants of Allah!\"",
          "The Prophet (ﷺ) said, \"A believer is not the one who eats his fill while his neighbor goes hungry.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"If you were to trust in Allah as He should be trusted, He would provide for you as He provides for the birds. They go out hungry in the morning and return with full bellies in the evening.\"",
          "The Prophet (ﷺ) said, \"Whoever does not show mercy to our young ones and does not acknowledge the rights of our elders is not one of us.\"",
          "The Prophet (ﷺ) said, \"The one who does not thank the people, does not thank Allah.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"Whoever helps a brother in need, Allah will help him in his time of need.\"",
          "The Prophet (ﷺ) said, \"The best among you are those who have the best manners and character.\"",
          "The Prophet (ﷺ) said, \"When you greet one another, greet with the best greeting, for it will be a testimony for you.\"",
          "The Prophet (ﷺ) said, \"Seek knowledge from the cradle to the grave.\"",
          "The Messenger of Allah (ﷺ) said, \"The one who is most beloved to me and will be closest to me on the Day of Judgment is the one who has the best manners.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"Indeed, Allah does not look at your appearance or your wealth, but He looks at your hearts and your deeds.\"",
          "The Prophet (ﷺ) said, \"The one who prays the night prayer with sincere faith and hoping for a reward from Allah will have all his past sins forgiven.\"",
          "The Prophet (ﷺ) said, \"If you help your brother in need, you will be helping yourself.\"",
          "The Prophet (ﷺ) said, \"Take advantage of five before five: Your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busy time, and your life before your death.\"",
          "The Prophet (ﷺ) said, \"Make things easy for the people, and do not make it hard for them, and give them glad tidings and do not drive them away.\"",
          "The Prophet (ﷺ) said, \"He who does not thank the people, does not thank Allah.\"",
          "The Prophet (ﷺ) said, \"The most beloved of deeds to Allah are those which are consistent, even if they are few.\"",
          "The Prophet (ﷺ) said, \"If you trust in Allah, He will suffice you.\"",
          "The Prophet (ﷺ) said, \"The most perfect of the believers in faith is the one who is best in character.\"",
          "The Prophet (ﷺ) said, \"Your wealth has not decreased by charity.\"",
          "The Prophet (ﷺ) said, \"A smile in the face of your brother is an act of charity.\"",
          "The Prophet (ﷺ) said, \"Whoever helps to relieve a Muslim of his hardship, Allah will relieve him of a hardship on the Day of Judgment.\"",
          "The Prophet (ﷺ) said, \"The world is a prison for the believer and a paradise for the disbeliever.\"",
          "The Prophet (ﷺ) said, \"Allah is not merciful to the one who is not merciful to others.\"",
          "The Prophet (ﷺ) said, \"Seek knowledge and the world will be in your hands.\"",
          "The Prophet (ﷺ) said, \"The one who guides to good is like the one who does it.\"",
          "The Prophet (ﷺ) said, \"Do not be angry, and Paradise will be yours.\"",
          "The Prophet (ﷺ) said, \"Every act of goodness is charity.\"",
          "The Prophet (ﷺ) said, \"Charity does not decrease wealth.\"",
          "The Prophet (ﷺ) said, \"The most beloved of people to Allah are those who are most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"It is not lawful for a Muslim to desert his brother for more than three days.\"",
          "The Prophet (ﷺ) said, \"Beware of the two great destructive things: greed and envy.\"",
          "The Prophet (ﷺ) said, \"Fear Allah wherever you are, follow a bad deed with a good one, and behave well towards people.\"",
          "The Prophet (ﷺ) said, \"There is a reward for every act of goodness, including smiling at your brother.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"Whoever does not show mercy to others, will not be shown mercy.\"",
          "The Prophet (ﷺ) said, \"The most complete of believers in faith are those who have the best character.\"",
          "The Prophet (ﷺ) said, \"A believer is one who wishes for his brother what he wishes for himself.\"",
          "The Prophet (ﷺ) said, \"The reward of deeds depends on the intention behind them.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the best to their women.\"",
          "The Prophet (ﷺ) said, \"Make things easy and do not make them difficult.\"",
          "The Prophet (ﷺ) said, \"He who does not give up lying and acting upon it, Allah has no need for him to give up his food and drink.\"",
          "The Prophet (ﷺ) said, \"The one who is good to his parents will be rewarded.\"",
          "The Prophet (ﷺ) said, \"The person who visits the sick, the one who feeds the hungry, and the one who consoles the grieving will be rewarded.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most charitable.\"",
          "The Prophet (ﷺ) said, \"Fear Allah wherever you are, and follow a bad deed with a good deed that will wipe it out.\"",
          "The Prophet (ﷺ) said, \"Avoid suspicion, for suspicion is the most false of speech.\"",
          "The Prophet (ﷺ) said, \"None of you truly believes until he loves for his brother what he loves for himself.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who learn the Qur'an and teach it.\"",
          "The Prophet (ﷺ) said, \"The strong man is not the one who wrestles well, but the strong man is the one who controls himself in a fit of rage.\"",
          "The Messenger of Allah (ﷺ) said, \"The best deeds are those done regularly, even if they are few.\"",
          "The Prophet (ﷺ) said, \"He who believes in Allah and the Last Day should speak good or remain silent.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: Messenger of Allah (ﷺ) said, \"By Him in Whose Hand my soul is! You will not enter Jannah until you believe, and you shall not believe until you love one another. Promote greeting amongst you (by saying As-salamu 'alaikum to one another).\"",
          "The Prophet (ﷺ) said, \"A Muslim is the one from whose tongue and hand other Muslims are safe.\"",
          "The Prophet (ﷺ) said, \"When a man dies, his deeds come to an end except for three: Sadaqah Jariyah (continuous charity), beneficial knowledge, and a righteous child who prays for him.\"",
          "The Messenger of Allah (ﷺ) said, \"The one who guides to good is like the one who does it.\"",
          "The Prophet (ﷺ) said, \"The strong man is he who is able to control himself when he is angry.\"",
          "The Prophet (ﷺ) said, \"Do not envy one another, do not turn your backs to one another, and do not hate one another. Be brothers, O servants of Allah!\"",
          "The Prophet (ﷺ) said, \"A believer is not the one who eats his fill while his neighbor goes hungry.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"If you were to trust in Allah as He should be trusted, He would provide for you as He provides for the birds. They go out hungry in the morning and return with full bellies in the evening.\"",
          "The Prophet (ﷺ) said, \"Whoever does not show mercy to our young ones and does not acknowledge the rights of our elders is not one of us.\"",
          "The Prophet (ﷺ) said, \"The one who does not thank the people, does not thank Allah.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"Whoever helps a brother in need, Allah will help him in his time of need.\"",
          "The Prophet (ﷺ) said, \"The best among you are those who have the best manners and character.\"",
          "The Prophet (ﷺ) said, \"When you greet one another, greet with the best greeting, for it will be a testimony for you.\"",
          "The Prophet (ﷺ) said, \"Seek knowledge from the cradle to the grave.\"",
          "The Messenger of Allah (ﷺ) said, \"The one who is most beloved to me and will be closest to me on the Day of Judgment is the one who has the best manners.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"Indeed, Allah does not look at your appearance or your wealth, but He looks at your hearts and your deeds.\"",
          "The Prophet (ﷺ) said, \"The one who prays the night prayer with sincere faith and hoping for a reward from Allah will have all his past sins forgiven.\"",
          "The Prophet (ﷺ) said, \"If you help your brother in need, you will be helping yourself.\"",
          "The Prophet (ﷺ) said, \"Take advantage of five before five: Your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busy time, and your life before your death.\"",
          "The Prophet (ﷺ) said, \"Make things easy for the people, and do not make it hard for them, and give them glad tidings and do not drive them away.\"",
          "The Prophet (ﷺ) said, \"He who does not thank the people, does not thank Allah.\"",
          "The Prophet (ﷺ) said, \"The most beloved of deeds to Allah are those which are consistent, even if they are few.\"",
          "The Prophet (ﷺ) said, \"If you trust in Allah, He will suffice you.\"",
          "The Prophet (ﷺ) said, \"The most perfect of the believers in faith is the one who is best in character.\"",
          "The Prophet (ﷺ) said, \"Your wealth has not decreased by charity.\"",
          "The Prophet (ﷺ) said, \"A smile in the face of your brother is an act of charity.\"",
          "The Prophet (ﷺ) said, \"Whoever helps to relieve a Muslim of his hardship, Allah will relieve him of a hardship on the Day of Judgment.\"",
          "The Prophet (ﷺ) said, \"The world is a prison for the believer and a paradise for the disbeliever.\"",
          "The Prophet (ﷺ) said, \"Allah is not merciful to the one who is not merciful to others.\"",
          "The Prophet (ﷺ) said, \"Seek knowledge and the world will be in your hands.\"",
          "The Prophet (ﷺ) said, \"The one who guides to good is like the one who does it.\"",
          "The Prophet (ﷺ) said, \"Do not be angry, and Paradise will be yours.\"",
          "The Prophet (ﷺ) said, \"Every act of goodness is charity.\"",
          "The Prophet (ﷺ) said, \"Charity does not decrease wealth.\"",
          "The Prophet (ﷺ) said, \"The most beloved of people to Allah are those who are most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"It is not lawful for a Muslim to desert his brother for more than three days.\"",
          "The Prophet (ﷺ) said, \"Beware of the two great destructive things: greed and envy.\"",
          "The Prophet (ﷺ) said, \"Fear Allah wherever you are, follow a bad deed with a good one, and behave well towards people.\"",
          "The Prophet (ﷺ) said, \"There is a reward for every act of goodness, including smiling at your brother.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"Whoever does not show mercy to others, will not be shown mercy.\"",
          "The Prophet (ﷺ) said, \"The most complete of believers in faith are those who have the best character.\"",
          "The Prophet (ﷺ) said, \"A believer is one who wishes for his brother what he wishes for himself.\"",
          "The Prophet (ﷺ) said, \"The reward of deeds depends on the intention behind them.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the best to their women.\"",
          "The Prophet (ﷺ) said, \"Make things easy and do not make them difficult.\"",
          "The Prophet (ﷺ) said, \"He who does not give up lying and acting upon it, Allah has no need for him to give up his food and drink.\"",
          "The Prophet (ﷺ) said, \"The one who is good to his parents will be rewarded.\"",
          "The Prophet (ﷺ) said, \"The person who visits the sick, the one who feeds the hungry, and the one who consoles the grieving will be rewarded.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most charitable.\"",
          "The Prophet (ﷺ) said, \"Fear Allah wherever you are, and follow a bad deed with a good deed that will wipe it out.\"",
          "The Prophet (ﷺ) said, \"Avoid suspicion, for suspicion is the most false of speech.\"",
          "The Prophet (ﷺ) said, \"None of you truly believes until he loves for his brother what he loves for himself.\"",
          "The Prophet (ﷺ) said, \"Help your brother, whether he is an oppressor or oppressed.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who learn the Qur'an and teach it.\"",
          "The Prophet (ﷺ) said, \"The strong man is not the one who wrestles well, but the strong man is the one who controls himself in a fit of rage.\"",
          "The Messenger of Allah (ﷺ) said, \"The best deeds are those done regularly, even if they are few.\"",
          "The Prophet (ﷺ) said, \"He who believes in Allah and the Last Day should speak good or remain silent.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: Messenger of Allah (ﷺ) said, \"By Him in Whose Hand my soul is! You will not enter Jannah until you believe, and you shall not believe until you love one another. Promote greeting amongst you (by saying As-salamu 'alaikum to one another).\"",
          "The Prophet (ﷺ) said, \"A Muslim is the one from whose tongue and hand other Muslims are safe.\"",
          "The Prophet (ﷺ) said, \"When a man dies, his deeds come to an end except for three: Sadaqah Jariyah (continuous charity), beneficial knowledge, and a righteous child who prays for him.\"",
          "The Messenger of Allah (ﷺ) said, \"The one who guides to good is like the one who does it.\"",
          "The Prophet (ﷺ) said, \"The strong man is he who is able to control himself when he is angry.\"",
          "The Prophet (ﷺ) said, \"Do not envy one another, do not turn your backs to one another, and do not hate one another. Be brothers, O servants of Allah!\"",
          "The Prophet (ﷺ) said, \"A believer is not the one who eats his fill while his neighbor goes hungry.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"If you were to trust in Allah as He should be trusted, He would provide for you as He provides for the birds. They go out hungry in the morning and return with full bellies in the evening.\"",
          "The Prophet (ﷺ) said, \"Whoever does not show mercy to our young ones and does not acknowledge the rights of our elders is not one of us.\"",
          "The Prophet (ﷺ) said, \"The one who does not thank the people, does not thank Allah.\"",
          "Abu Hurairah (May Allah be pleased with him) reported: The Messenger of Allah (ﷺ) said, \"Whoever helps a brother in need, Allah will help him in his time of need.\"",
          "The Prophet (ﷺ) said, \"The best among you are those who have the best manners and character.\"",
          "The Prophet (ﷺ) said, \"When you greet one another, greet with the best greeting, for it will be a testimony for you.\"",
          "The Prophet (ﷺ) said, \"Seek knowledge from the cradle to the grave.\"",
          "The Messenger of Allah (ﷺ) said, \"The one who is most beloved to me and will be closest to me on the Day of Judgment is the one who has the best manners.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"Indeed, Allah does not look at your appearance or your wealth, but He looks at your hearts and your deeds.\"",
          "The Prophet (ﷺ) said, \"The one who prays the night prayer with sincere faith and hoping for a reward from Allah will have all his past sins forgiven.\"",
          "The Prophet (ﷺ) said, \"If you help your brother in need, you will be helping yourself.\"",
          "The Prophet (ﷺ) said, \"Take advantage of five before five: Your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your busy time, and your life before your death.\"",
          "The Prophet (ﷺ) said, \"Make things easy for the people, and do not make it hard for them, and give them glad tidings and do not drive them away.\"",
          "The Prophet (ﷺ) said, \"He who does not thank the people, does not thank Allah.\"",
          "The Prophet (ﷺ) said, \"The most beloved of deeds to Allah are those which are consistent, even if they are few.\"",
          "The Prophet (ﷺ) said, \"If you trust in Allah, He will suffice you.\"",
          "The Prophet (ﷺ) said, \"The most perfect of the believers in faith is the one who is best in character.\"",
          "The Prophet (ﷺ) said, \"Your wealth has not decreased by charity.\"",
          "The Prophet (ﷺ) said, \"A smile in the face of your brother is an act of charity.\"",
          "The Prophet (ﷺ) said, \"Whoever helps to relieve a Muslim of his hardship, Allah will relieve him of a hardship on the Day of Judgment.\"",
          "The Prophet (ﷺ) said, \"The world is a prison for the believer and a paradise for the disbeliever.\"",
          "The Prophet (ﷺ) said, \"Allah is not merciful to the one who is not merciful to others.\"",
          "The Prophet (ﷺ) said, \"Seek knowledge and the world will be in your hands.\"",
          "The Prophet (ﷺ) said, \"The one who guides to good is like the one who does it.\"",
          "The Prophet (ﷺ) said, \"Do not be angry, and Paradise will be yours.\"",
          "The Prophet (ﷺ) said, \"Every act of goodness is charity.\"",
          "The Prophet (ﷺ) said, \"Charity does not decrease wealth.\"",
          "The Prophet (ﷺ) said, \"The most beloved of people to Allah are those who are most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"It is not lawful for a Muslim to desert his brother for more than three days.\"",
          "The Prophet (ﷺ) said, \"Beware of the two great destructive things: greed and envy.\"",
          "The Prophet (ﷺ) said, \"Fear Allah wherever you are, follow a bad deed with a good one, and behave well towards people.\"",
          "The Prophet (ﷺ) said, \"There is a reward for every act of goodness, including smiling at your brother.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most beneficial to others.\"",
          "The Prophet (ﷺ) said, \"Whoever does not show mercy to others, will not be shown mercy.\"",
          "The Prophet (ﷺ) said, \"The most complete of believers in faith are those who have the best character.\"",
          "The Prophet (ﷺ) said, \"A believer is one who wishes for his brother what he wishes for himself.\"",
          "The Prophet (ﷺ) said, \"The reward of deeds depends on the intention behind them.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the best to their women.\"",
          "The Prophet (ﷺ) said, \"Make things easy and do not make them difficult.\"",
          "The Prophet (ﷺ) said, \"He who does not give up lying and acting upon it, Allah has no need for him to give up his food and drink.\"",
          "The Prophet (ﷺ) said, \"The one who is good to his parents will be rewarded.\"",
          "The Prophet (ﷺ) said, \"The person who visits the sick, the one who feeds the hungry, and the one who consoles the grieving will be rewarded.\"",
          "The Prophet (ﷺ) said, \"The best of you are those who are the most charitable.\"",
          "The Prophet (ﷺ) said, \"Fear Allah wherever you are, and follow a bad deed with a good deed that will wipe it out.\"",
          "The Prophet (ﷺ) said, \"Avoid suspicion, for suspicion is the most false of speech.\"",
          "The Prophet (ﷺ) said, \"None of you truly believes until he loves for his brother what he loves for himself.\"",
          "The Prophet (ﷺ) said, \"Help your brother, whether he is an oppressor or oppressed.\"",
          "The Prophet (ﷺ) said, \"Whoever believes in Allah and the Last Day, let him speak good or remain silent.\"",
          "The Prophet (ﷺ) said, \"The most beloved of deeds to Allah is the most consistent, even if it is small.\""
    ];
  
    let currentHadithIndex = 0;
  
    function displayHadith() {
      hadithDisplay.textContent = hadiths[currentHadithIndex];
      currentHadithIndex = (currentHadithIndex + 1) % hadiths.length;
    }
  
    // Display first Hadith
    displayHadith();
  
    // Change Hadith every 10 seconds
    setInterval(displayHadith, 20000);
    
     
});    