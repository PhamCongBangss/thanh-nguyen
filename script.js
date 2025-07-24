document.addEventListener("DOMContentLoaded", function () {
  const declineBtn = document.querySelector(".decline");
  const acceptBtn = document.querySelector(".accept");
  const thinkBtn = document.querySelector(".think");
  const message = document.querySelector(".message");
  const buttons = document.querySelector(".buttons");
  const heading = document.querySelector("h1");
  const originalMessage = message.innerHTML;

  let hasClicked = false; // Ngăn bấm nhiều lần

  // Gửi dữ liệu tới Formspree
  function sendResponseToYou(response) {
    fetch("https://formspree.io/f/xovlezwj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "no-reply@example.com",
        message: `Người dùng đã chọn: ${response}`,
        time: new Date().toLocaleString(),
      }),
    });
  }

  // Khi bấm nút "Không đi được"
  declineBtn.addEventListener("click", function () {
    if (hasClicked) return;
    hasClicked = true;

    heading.style.display = "none";
    buttons.style.display = "none";

    message.innerHTML = `
      <p class="reject-message">Hông sao đou, có gì hẹn dịp khác nhé 😢</p>
    `;

    sendResponseToYou("Từ chối");
  });

  // Khi bấm nút "Đồng ý đi thuii"
  acceptBtn.addEventListener("click", function () {
    if (hasClicked) return;
    hasClicked = true;

    heading.style.display = "none";
    buttons.style.display = "none";

    message.innerHTML = `
      <p class="accept-message">Cảm ơn bạn vì đã đồng ý nha, bạn có thể đi lúc nào thì nói cho tui biết nhé 😚</p>
    `;

    sendResponseToYou("Đồng ý");
  });

  // Khi bấm nút "Cho tui suy nghĩ"
  thinkBtn.addEventListener("click", function () {
    if (hasClicked) return;

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
          thinkBtn.style.display = "none";
          buttons.style.display = "flex";
        }, 2000);
      }
    }, 1000);
  });
});
