const getter = async () => {
  try {
    const response = await fetch("http://localhost:5173/games.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);

    if (!data.games || !Array.isArray(data.games)) {
      throw new Error("Data does not contain a 'games' array");
    }

    const container = document.querySelector(".container");
    if (!container) {
      throw new Error("Container element not found");
    }

    container.classList.add(
      "w-full",
      "max-w-[1500px]",
      "mx-auto",
      "grid",
      "grid-cols-1",         
      "sm:grid-cols-2",      
      "md:grid-cols-3",      
      "lg:grid-cols-4",      
      "xl:grid-cols-5",     
      "gap-6",
      "md:gap-8",
      "lg:gap-10",
      "px-4",
      "py-6",
      "justify-items-center"
    );

    const html = data.games.map((elem) => {
      return `
        <div class="w-full bg-[#2B374C] rounded-[4px] flex flex-col transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-5px]">
          <img src="${elem.image}" class="w-full h-[160px] object-cover rounded-t-[4px]" alt="${elem.gameName}">
          <div class="w-full relative flex flex-col gap-4 p-4 sm:p-6 min-h-[200px] sm:min-h-[255px]">
            <div class="w-full flex items-center gap-2">
              <img class="w-5 h-5 sm:w-6 sm:h-6" src="${elem.icon}" alt="">
              <p class="text-xs sm:text-sm font-semibold text-[#FFFFFFB8] truncate">${elem.gameName}</p>
            </div>
            <div class="w-full">
              <p class="text-sm sm:text-base lg:text-lg text-[#FFFFFFD7] font-bold line-clamp-2">${elem.gameTitle}</p>
            </div>
            <div class="w-full">
              <p class="text-xs sm:text-sm lg:text-base text-[#FFB400] line-clamp-3">${elem.desc}</p>
            </div>
            <div class="w-full mt-2 pt-2 border-t border-[#ffffff20] text-sm sm:text-base lg:text-lg text-[#FFFFFFD6] font-bold">
              <p>${elem.price}</p>
            </div>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = html;

  } catch (error) {
    console.error("Error fetching or rendering data:", error);
  }
};

getter();

export default getter;