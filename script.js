document.addEventListener("DOMContentLoaded", function () {
  const declineBtn = document.querySelector(".decline");
  const acceptBtn = document.querySelector(".accept");
  const message = document.querySelector(".message");
  const buttons = document.querySelector(".buttons");
  const heading = document.querySelector("h1"); // "Dear Thanh Nguyên"
  const originalMessage = message.innerHTML;

  // Khi bấm "Không đi được"
  declineBtn.addEventListener("click", function () {
    heading.style.display = "none";
    buttons.style.display = "none";

    message.innerHTML =
      '<p class="reject-message">Ai cho hông đi mà bấm hông! Bấm lại đi mò 😤</p>';

    setTimeout(() => {
      heading.style.display = "block";
      buttons.style.display = "flex";
      message.innerHTML = originalMessage;
    }, 2000);
  });

  // Khi bấm "Đồng ý đi thuii"
  acceptBtn.addEventListener("click", function () {
    heading.style.display = "none";
    buttons.style.display = "none";

    message.innerHTML =
      '<p class="accept-message">Cảm ơn bạn vì đã đồng ý nha, bạn có thể đi lúc nào thì nói cho tui biết nhé 😚</p>';
  });
});
