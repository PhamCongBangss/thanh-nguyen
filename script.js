document.addEventListener("DOMContentLoaded", function () {
  const declineBtn = document.querySelector(".decline");
  const acceptBtn = document.querySelector(".accept");
  const message = document.querySelector(".message");
  const buttons = document.querySelector(".buttons");
  const heading = document.querySelector("h1");
  const extraStep = document.querySelector(".extra-step");
  const dayButtons = document.querySelectorAll(".day");
  const feedback = document.querySelector(".feedback");
  const sendFinalBtn = document.querySelector(".send-final");
  const noteInput = document.getElementById("note");

  let hasClicked = false;
  let selectedDay = "";

  function sendResponseToYou(response, day = "", note = "") {
    fetch("https://formspree.io/f/xovlezwj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "no-reply@example.com",
        message: `Người dùng đã chọn: ${response}\nNgày đã chọn: ${day}\nPhản hồi: ${note}`,
        time: new Date().toLocaleString(),
      }),
    });
  }

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

  acceptBtn.addEventListener("click", function () {
    if (hasClicked) return;
    hasClicked = true;

    heading.style.display = "none";
    buttons.style.display = "none";

    message.innerHTML = `
      <p class="accept-message">Cảm ơn bạn vì đã đồng ý nha 😚</p>
    `;

    extraStep.style.display = "flex";
  });

  dayButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedDay = btn.innerText;

      // Ẩn phần chọn lịch
      extraStep.style.display = "none";

      // Hiện phần điền phản hồi
      feedback.style.display = "flex";

      message.innerHTML = `
        <p class="accept-message">Bạn đã chọn: ${selectedDay} 🗓️</p>
        <p class="accept-message">Bạn có lời nào muốn nhắn nhủ với mình từ chuyến đi chơi lần trước
              để mình cải thiện không?</p>
      `;
    });
  });

  sendFinalBtn.addEventListener("click", () => {
    const note = noteInput.value.trim();

    if (note.length < 5) {
      alert("Bạn ơi nhập lời nhắn ít nhất 5 ký tự nha 🥺");
      return;
    }

    message.innerHTML = `
      <p class="accept-message">Tui nhận được phản hồi rùi, cảm ơn bạn nhiều lắm 😭❤️</p>
    `;
    feedback.style.display = "none";

    sendResponseToYou("Đồng ý", selectedDay, note);
  });
});
