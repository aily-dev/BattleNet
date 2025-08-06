let slide = `
<div class="max-w-[1500px] mx-auto my-10 px-4" style="height: 360px;">
    <div class="relative h-full">
        <!-- Main banner with swiper -->
        <button id="prevBtn" 
            class="absolute z-10 w-10 h-16 md:w-12 md:h-20 left-2 top-1/2 transform -translate-y-1/2 bg-[#23252b] border border-gray-700 rounded-md text-white flex items-center justify-center transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 md:w-8 md:h-8" aria-labelledby="blz-icon-title-bn-chevron-left-filled" viewBox="0 0 24 24" part="icon">
                <title id="blz-icon-title-bn-chevron-left-filled">Chevron Left</title>
                <path d="M14.646 5.353a.5.5 0 0 1 .707 0l.704.704a.5.5 0 0 1 0 .706L10.83 12l5.227 5.236a.5.5 0 0 1 0 .707l-.703.703a.5.5 0 0 1-.708 0l-6.293-6.293a.5.5 0 0 1 0-.707z"></path>
            </svg>
        </button>
        <button id="nextBtn" 
            class="absolute z-10 w-10 h-16 md:w-12 md:h-20 right-2 top-1/2 transform -translate-y-1/2 bg-[#23252b] border border-gray-700 rounded-md text-white flex items-center justify-center transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 md:w-8 md:h-8" aria-labelledby="blz-icon-title-bn-chevron-right-filled" viewBox="0 0 24 24" part="icon">
                <title id="blz-icon-title-bn-chevron-right-filled">Chevron Right</title>
                <path d="M9.354 5.354a.5.5 0 0 0-.707 0l-.704.703a.5.5 0 0 0 0 .707L13.17 12l-5.227 5.236a.5.5 0 0 0 0 .707l.704.703a.5.5 0 0 0 .707 0l6.293-6.292a.5.5 0 0 0 0-.707L9.354 5.353Z"></path>
            </svg>
        </button>

        <div class="swiper mySwiper h-full">
            <div class="swiper-wrapper">
                <div class="swiper-slide bg-white relative">
                    <img class="w-full h-full object-cover" src="./public/images/OW2_S15_MythicWeaponSkin_Widowmaker_BNET_Shop_Carousel_Desktop_1600x500.avif" alt="">
                </div>
                <div class="swiper-slide bg-black relative">
                    <img class="w-full h-full object-cover" src="./public/images/-Bnet_Game-Banner_Desktop-EN-1600x500_(4)_(1).webp" alt="">
                </div>
                <div class="swiper-slide bg-black relative"></div>
            </div>

            <!-- Combined controls container -->
            <div class="controls-container absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
                <!-- Play/Pause button -->
                <div class="play-pause-btn text-white text-lg md:text-xl cursor-pointer" id="playPauseBtn">
                    <span id="pauseIcon">▐▐</span>
                    <span id="playIcon" class="hidden">▶</span>
                </div>
                <div class="custom-pagination flex gap-2" id="customPagination"></div>
            </div>
        </div>
    </div>
</div>
<br>
<div class="re"></div>
<br>
`;

let show = document.querySelector("#slide");
show.insertAdjacentHTML("afterbegin", slide);

const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Play/Pause functionality
const playPauseBtn = document.getElementById("playPauseBtn");
const pauseIcon = document.getElementById("pauseIcon");
const playIcon = document.getElementById("playIcon");

playPauseBtn.addEventListener("click", function () {
    if (playIcon.classList.contains("hidden")) {
        swiper.autoplay.stop();
        pauseIcon.classList.add("hidden");
        playIcon.classList.remove("hidden");
    } else {
        swiper.autoplay.start();
        pauseIcon.classList.remove("hidden");
        playIcon.classList.add("hidden");
    }
});

// Create custom pagination bullets
const customPagination = document.getElementById("customPagination");
const totalSlides = document.querySelectorAll(".swiper-slide").length;

for (let i = 0; i < totalSlides; i++) {
    const bullet = document.createElement("span");
    bullet.className = "swiper-pagination-bullet w-6 h-1 md:w-10 md:h-2 bg-gray-400 rounded-none cursor-pointer transition-all duration-300";
    if (i === 0) bullet.classList.add("bg-white");

    bullet.addEventListener("click", function () {
        document.querySelectorAll(".swiper-pagination-bullet").forEach((b) => {
            b.classList.remove("bg-white");
            b.classList.add("bg-gray-400");
        });
        bullet.classList.add("bg-white");
        bullet.classList.remove("bg-gray-400");
        swiper.slideToLoop(i);
    });
    customPagination.appendChild(bullet);
}

// Sync pagination with slide change
swiper.on("slideChange", () => {
    const activeIndex = swiper.realIndex;
    document.querySelectorAll(".swiper-pagination-bullet").forEach((bullet, index) => {
        if (index === activeIndex) {
            bullet.classList.add("bg-white");
            bullet.classList.remove("bg-gray-400");
        } else {
            bullet.classList.remove("bg-white");
            bullet.classList.add("bg-gray-400");
        }
    });
});

// Navigation buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
    swiper.slidePrev();
});

nextBtn.addEventListener("click", () => {
    swiper.slideNext();
});

export default slide;