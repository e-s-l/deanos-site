document.addEventListener("DOMContentLoaded", () => {

  const workPages = [
    "work-1.html",
    "work-2.html",
    "work-3.html"
    // add as needed
  ];

  const pathParts = window.location.pathname.split("/");
  const currentFile = pathParts[pathParts.length - 1];
  let currentIndex = workPages.indexOf(currentFile);

  const prevBtn = document.getElementById("prev-work");
  const nextBtn = document.getElementById("next-work");

  prevBtn.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + workPages.length) % workPages.length;
    window.location.href = workPages[prevIndex];
  });

  nextBtn.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % workPages.length;
    window.location.href = workPages[nextIndex];
  });

  if (currentIndex === 0) prevBtn.disabled = true;
  if (currentIndex === workPages.length - 1) nextBtn.disabled = true;

});
