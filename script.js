document.addEventListener("DOMContentLoaded", function () {
  const declineBtn = document.querySelector(".decline");
  const acceptBtn = document.querySelector(".accept");
  const thinkBtn = document.querySelector(".think");
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

  // Khi bấm "Cho tui suy nghĩ"
  thinkBtn.addEventListener("click", function () {
    heading.style.display = "none";
    buttons.style.display = "none";

    let countdown = 5;
    message.innerHTML = `<p class="thinking-message">Cho bạn suy nghĩ ${countdown} giây...</p>`;

    const interval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        message.innerHTML = `<p class="thinking-message">Cho bạn suy nghĩ ${countdown} giây...</p>`;
      } else {
        clearInterval(interval);
        message.innerHTML = `<p class="thinking-message">Đã hết thời gian suy nghĩ, lựa chọn lại đi nha 😗</p>`;

        setTimeout(() => {
          heading.style.display = "block";
          message.innerHTML = originalMessage;

          // Ẩn nút "Cho tui suy nghĩ", chỉ còn 2 nút
          thinkBtn.style.display = "none";
          buttons.style.display = "flex";
        }, 2000);
      }
    }, 1000);
  });
});
