const scriptURL =
  "https://script.google.com/macros/s/AKfycbxW4BERZA_YBi2MjHpX5YrnnBr12AxFBZsHvVvUX2UOLh2ZXa0QQ3chhlxqtLWyumhMdg/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
