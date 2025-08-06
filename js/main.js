import getter from "../js/api.js";
import header from "../js/header.js"; 
import nav from "../js/nav.js";
import slide from "../js/slider.js";
import foot from "../js/footer.js";

const hover= document.querySelectorAll(".hoverme");

hover.forEach(hav => {
  const toggleBackground = (e) => {
    hav.classList.toggle("bg-[#23252B]", e.type === "mouseover");
  };

  hav.addEventListener("mouseover", toggleBackground);
  hav.addEventListener("mouseout", toggleBackground);
});


