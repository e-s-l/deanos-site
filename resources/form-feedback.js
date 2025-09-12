document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");
  const feedback = document.createElement("div");
  feedback.classList.add("feedback");
  form.after(feedback);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Server error");

      const result = await response.json();

      feedback.textContent = result.message;
      feedback.className = "feedback success show";
      form.reset();

    } catch (err) {
      feedback.textContent = "Sorry, something went wrong.";
      feedback.className = "feedback error show";
    }

    setTimeout(() => {
      feedback.textContent = "";
      feedback.classList.remove("show");
    }, 3000);

  });
});
