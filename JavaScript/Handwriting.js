document.addEventListener("DOMContentLoaded", () => {
  const mainTitle = document.getElementById("mainTitle");
  const subTitle = document.getElementById("subTitle");

  if (mainTitle) {
    setTimeout(() => {
      mainTitle.classList.add("title-animate-in");
    }, 200);

    function highlightTitle() {
      mainTitle.style.color = "#E1B808";
    }

    function resetTitleColor() {
      mainTitle.style.color = "";
    }

    mainTitle.addEventListener("mouseover", highlightTitle);
    mainTitle.addEventListener("mouseout", resetTitleColor);
    mainTitle.addEventListener("touchstart", highlightTitle);
  }

  if (subTitle) {
    setTimeout(() => {
      subTitle.classList.add("title-animate-in");
    }, 600);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("title-animate-in");
        }
      });
    });

    observer.observe(subTitle);
  }

  
  async function fetchExampleData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log("Fetched data:", data); 
    } catch (error) {
      console.error("API fetch failed:", error);
    }
  }

  fetchExampleData();
});
