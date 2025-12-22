//    Anime For Search
const anime_list=[
    {title:"Naruto",genre:"Action, Adventure, Fantasy, and Shonen"},
    {title:"Naruto Shippuden",genre:"Action, Adventure, Fantasy, and Shonen"},
    {title:"Dragon Ball",genre:"Martial Arts, Fantasy, Sci-Fi, Action, Shonen, Adventure, Fantasy, and Comedy"},
    {title:"Dragon Ball Z",genre:"Martial Arts, Fantasy, Sci-Fi, Action, Shonen, Adventure, Fantasy, and Comedy"},
    {title:"Dragon Ball Super",genre:"Martial Arts, Fantasy, Sci-Fi, Action, Shonen, Adventure, Fantasy, and Comedy"},
    {title:"Dragon Ball GT",genre:"Martial Arts, Fantasy, Sci-Fi, Action, Shonen, Adventure, Fantasy, and Comedy"},
    {title:"Bleach",genre:"Action, Adventure, Supernatural, Fantasy, Psychological Thriller, Mystery, Comedy, Slice of Life, Horror and Shonen"},
    {title:"Bleach: Thousand-Year Blood War Arc",genre:"Action, Adventure, Supernatural, Fantasy, Psychological Thriller, Mystery, Comedy, Slice of Life, Horror and Shonen"},
    {title:"Bleach: Thousand-Year Blood War - The Separation",genre:"Action, Adventure, Supernatural, Fantasy, Psychological Thriller, Mystery, Comedy, Slice of Life, Horror and Shonen"},
    {title:"Bleach: Thousand-Year Blood War - The Conflict",genre:"Action, Adventure, Supernatural, Fantasy, Psychological Thriller, Mystery, Comedy, Slice of Life, Horror and Shonen"},
    {title:"One Piece",genre:"Action, Adventure, Comedy, Shonen, Drama, Sci-Fi, and Fantasy"},
    {title:"Attack On Tittans",genre:"Mystery, Military, Psychological thriller, Dark Fantasy, Action, Post-Apocalyptic, Horror, and Drama"},
    {title:"Death Note",genre:"Supernatural Mystery Thriller with strong elements of Psychological Drama, Crime, Horror, and Fantasy"},
    {title:"OverFlow",genre:"Adult, Ecchi, Romance, Slice of Life"},
    {title:"High School DxD",genre:"Action, Comedy, Harem, Ecchi, Romance, and Supernatural"},
    {title:"HunterxHunter",genre:"Shonen Action, Adventure, Fantasy, Supernatural, and Martial Arts"},
    {title:"Overlord",genre:"Dark Fantasy, Isekai, Supernatural and Fantasy"},
    {title:"Jujutsu Kaisan",genre:"Dark Fantasy, Supernatural, Shonen, mature, intense themes, body horror, and Action"},
]

const searchInput = document.getElementById("search_input");

    search_input.addEventListener("input", () => {
       console.log(searchInput.value);
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filteredAnime = anime_list.filter(anime =>
    title.toLowerCase(query)
  );

  console.log(filteredAnime);
});

// Hero Section
var currentSlide = 0;
        var isAutoPlaying = true;
        var autoPlayTimer;
        var slides = document.querySelectorAll('.slide');
        var dots = document.querySelectorAll('.dot');
        var totalSlides = slides.length;

        function showSlide(index) {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            for (var i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            var next = (currentSlide + 1) % totalSlides;
            showSlide(next);
            stopAutoPlay();
        }

        function prevSlide() {
            var prev = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prev);
            stopAutoPlay();
        }

        function goToSlide(index) {
            showSlide(index);
            stopAutoPlay();
        }

        function startAutoPlay() {
            autoPlayTimer = setInterval(function() {
                if (isAutoPlaying) {
                    nextSlide();
                }
            }, 5000);
        }

        function stopAutoPlay() {
            isAutoPlaying = false;
            clearInterval(autoPlayTimer);
        }

        startAutoPlay();

// Trending Animes Section     
const trendingAnimeList = [
            { title: "Frieren: Beyond Journey's End", episodes: 28, rating: 9.2, image: "https://example.com/frieren-poster.jpg" },
            { title: "Solo Leveling", episodes: 12, rating: 8.5, image: "https://example.com/solo-leveling-poster.jpg" },
            { title: "Dandadan", episodes: 12, rating: 8.6, image: "https://example.com/dandadan-poster.jpg" },
            { title: "Wind Breaker", episodes: 13, rating: 8.3, image: "https://example.com/wind-breaker-poster.jpg" },
            { title: "Blue Lock Season 2", episodes: 14, rating: 8.1, image: "https://example.com/blue-lock-poster.jpg" },
            { title: "Kaiju No. 8", episodes: 12, rating: 8.4, image: "https://example.com/kaiju-poster.jpg" },
            { title: "Mashle Season 2", episodes: 12, rating: 8.2, image: "https://example.com/mashle-poster.jpg" },
            { title: "Apothecary Diaries", episodes: 24, rating: 8.7, image: "https://example.com/apothecary-poster.jpg" },
            { title: "Shangri-La Frontier", episodes: 25, rating: 8.0, image: "https://example.com/shangri-la-poster.jpg" },
            { title: "Undead Unluck", episodes: 24, rating: 7.9, image: "https://example.com/undead-unluck-poster.jpg" },
            { title: "Oshi no Ko Season 2", episodes: 13, rating: 8.8, image: "https://example.com/oshi-no-ko-poster.jpg" },
            { title: "Ranking of Kings Season 2", episodes: 10, rating: 8.5, image: "https://example.com/ranking-kings-poster.jpg" }
        ];

        const trendingContainer = document.getElementById('trendingContainer');

        // Create Trending Anime Cards
        trendingAnimeList.forEach((anime) => {
            const card = createAnimeCard(anime);
            trendingContainer.appendChild(card);
        });

        function createAnimeCard(anime) {
            const card = document.createElement('div');
            card.className = 'anime-card rounded-lg overflow-hidden cursor-pointer flex-shrink-0 relative';
            card.style.minWidth = '256px';
            card.style.width = '256px';
            card.innerHTML = `
                <div class="relative">
                    <div style="width: 256px; height: 320px; min-height: 320px;" class="bg-gray-700 flex items-center justify-center overflow-hidden">
                        <img src="${anime.image}" alt="${anime.title}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\'text-6xl\'>🎬</span>';">
                    </div>
                    <div class="absolute top-2 right-2 bg-brand-orange text-black px-2 py-1 rounded font-bold flex items-center gap-1 text-sm">
                        <span>★</span>
                        <span>${anime.rating}</span>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-bold mb-2 text-white">${anime.title}</h3>
                    <div class="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <span>📺</span>
                        <span>${anime.episodes} Episodes</span>
                    </div>
                    <button class="w-full bg-brand-orange hover:bg-yellow-600 text-black font-bold py-2 rounded transition-colors">
                        <a href="watch.html" class="block text-center"> Watch Now</a>
                    </button>
                </div>
            `;
            return card;
        }

        function scrollLeft(containerId) {
            document.getElementById(containerId).scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }

        function scrollRight(containerId) {
            document.getElementById(containerId).scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }

// Popular Animes Section
  const animeList = [
            { title: "Attack on Titan", episodes: 87, rating: 9.0, image: "url('public/images/poster/Aot.jpg')" },
            { title: "Demon Slayer", episodes: 44, rating: 8.7, image: "public/images/DemonSlayer.jpg" },
            { title: "My Hero Academia", episodes: 138, rating: 8.4, image: "public/images/MyHeroAcademia.jpg" },
            { title: "One Piece", episodes: 1000, rating: 8.9, image: "public/images/OnePiece.jpg" },
            { title: "Naruto Shippuden", episodes: 500, rating: 8.6, image: "public/images/NarutoShippuden.jpg" },
            { title: "Death Note", episodes: 37, rating: 9.0, image: "public/images/DeathNote.jpg" },
            { title: "Fullmetal Alchemist", episodes: 64, rating: 9.1, image: "public/images/FullmetalAlchemist.jpg" },
            { title: "Jujutsu Kaisen", episodes: 47, rating: 8.6, image: "public/images/JujutsuKaisen.jpg" },
            { title: "One Punch Man", episodes: 24, rating: 8.7, image: "public/images/OnePunchMan.jpg" },
            { title: "Hunter x Hunter", episodes: 148, rating: 9.0, image: "public/images/HunterXHunter.jpg" },
            { title: "Bleach", episodes: 366, rating: 8.2, image: "public/images/Bleach.jpg" },
            { title: "Code Geass", episodes: 50, rating: 8.7, image: "public/images/CodeGeass.jpg" },
            { title: "Dragon Ball Z", episodes: 291, rating: 8.8, image: "public/images/DragonBallZ.jpg" },
            { title: "Re:Zero", episodes: 50, rating: 8.2, image: "public/images/ReZero.jpg" },
            { title: "Black Clover", episodes: 170, rating: 8.2, image: "public/images/BlackClover.jpg" }
        ];

        const container = document.getElementById('scrollContainer');

        animeList.forEach((anime) => {
            const card = document.createElement('div');
            card.className = 'anime-card rounded-lg overflow-hidden cursor-pointer flex-shrink-0 relative';
            card.style.minWidth = '256px';
            card.style.width = '256px';
            card.innerHTML = `
                 <div class="relative">
                    <div style="width: 256px; height: 320px; min-height: 320px;" class="bg-gray-700 flex items-center justify-center overflow-hidden">
                        <img src="${anime.image}" alt="${anime.title}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\'text-6xl\'>🎬</span>';">
                    </div>
                    <div class="absolute top-2 right-2 bg-brand-orange text-black px-2 py-1 rounded font-bold flex items-center gap-1 text-sm">
                        <span>★</span>
                        <span>${anime.rating}</span>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-bold mb-2 text-white">${anime.title}</h3>
                    <div class="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <span>📺</span>
                        <span>${anime.episodes} Episodes</span>
                    </div>
                    <button class="w-full bg-brand-orange hover:bg-yellow-600 text-black font-bold py-2 rounded transition-colors">
                       <a href="watch.html" class="block text-center"> Watch Now</a>
                    </button>
                </div>
            `;
            container.appendChild(card);
        });

        function scrollLeft() {
            document.getElementById('scrollContainer').scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }

        function scrollRight() {
            document.getElementById('scrollContainer').scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }

// New Anime Section
const newAnimeList = [
            { title: "Sakamoto Days", episodes: 2, rating: 8.3, image: "https://example.com/sakamoto-poster.jpg" },
            { title: "Lv2 kara Cheat", episodes: 1, rating: 7.8, image: "https://example.com/lv2-poster.jpg" },
            { title: "Trillion Game", episodes: 3, rating: 7.9, image: "https://example.com/trillion-poster.jpg" },
            { title: "Orb: On the Movements", episodes: 4, rating: 8.1, image: "https://example.com/orb-poster.jpg" },
            { title: "Momokuri", episodes: 2, rating: 7.6, image: "https://example.com/momokuri-poster.jpg" },
            { title: "Magic Maker", episodes: 3, rating: 7.7, image: "https://example.com/magic-maker-poster.jpg" },
            { title: "Medalist", episodes: 5, rating: 8.2, image: "https://example.com/medalist-poster.jpg" },
            { title: "Tousouchuu", episodes: 1, rating: 7.5, image: "https://example.com/tousouchuu-poster.jpg" },
            { title: "Tsuma Shougakusei", episodes: 2, rating: 7.4, image: "https://example.com/tsuma-poster.jpg" },
            { title: "Raise wa Tanin", episodes: 3, rating: 7.8, image: "https://example.com/raise-poster.jpg" },
            { title: "Honey Lemon Soda", episodes: 1, rating: 7.9, image: "https://example.com/honey-lemon-poster.jpg" },
            { title: "Maarui Kanojo", episodes: 2, rating: 7.3, image: "https://example.com/maarui-poster.jpg" }
        ];

        const newContainer = document.getElementById('newContainer');

        // Create New Anime Cards
        newAnimeList.forEach((anime) => {
            const card = createAnimeCard(anime);
            newContainer.appendChild(card);
        });

        function createAnimeCard(anime) {
            const card = document.createElement('div');
            card.className = 'anime-card rounded-lg overflow-hidden cursor-pointer flex-shrink-0 relative';
            card.style.minWidth = '256px';
            card.style.width = '256px';
            card.innerHTML = `
                <div class="relative">
                    <div style="width: 256px; height: 320px; min-height: 320px;" class="bg-gray-700 flex items-center justify-center overflow-hidden">
                        <img src="${anime.image}" alt="${anime.title}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\'text-6xl\'>🎬</span>';">
                    </div>
                    <div class="absolute top-2 right-2 bg-brand-orange text-black px-2 py-1 rounded font-bold flex items-center gap-1 text-sm">
                        <span>★</span>
                        <span>${anime.rating}</span>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-bold mb-2 text-white">${anime.title}</h3>
                    <div class="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <span>📺</span>
                        <span>${anime.episodes} Episodes</span>
                    </div>
                    <button class="w-full bg-brand-orange hover:bg-yellow-600 text-black font-bold py-2 rounded transition-colors">
                        <a href="watch.html" class="block text-center"> Watch Now</a>
                    </button>
                </div>
            `;
            return card;
        }

        function scrollLeft(containerId) {
            document.getElementById(containerId).scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }

        function scrollRight(containerId) {
            document.getElementById(containerId).scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }