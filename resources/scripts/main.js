document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM locked and loaded");

  // to simulate a single page application, simply
  // might be a bad approach
  // particalurly if we need to redirect to one of these pages later
  // or end up using php anyway...

  const tabs = document.querySelectorAll(".nav-item button");
  const sections = document.querySelectorAll("main section");

  const hash = window.location.hash.substring(1);
  let activeId = hash || "about";

  sections.forEach(sec => sec.classList.add("hidden"));
  const activeSection = document.getElementById(activeId);
  if (activeSection) activeSection.classList.remove("hidden");

  tabs.forEach(btn => btn.classList.remove("active"));
  const activeTab = document.querySelector(`.nav-item button[data-target="${activeId}"]`);
  if (activeTab) activeTab.classList.add("active");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      sections.forEach(sec => sec.classList.add("hidden"));

      document.getElementById(tab.dataset.target).classList.remove("hidden");

      tabs.forEach(btn => btn.classList.remove("active"));
      tab.classList.add("active");

      history.replaceState(null, "", `#${tab.dataset.target}`);
    });
  });


  /**
   * so that clicking the header takes us to about
   */

  document.querySelector("header a").addEventListener("click", e => {
    e.preventDefault();
    const aboutTab = document.querySelector('.nav-item button[data-target="about"]');
    if (aboutTab) aboutTab.click();
  });

});
