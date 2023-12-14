function checkInputLength() {
  const inputElement = document.getElementById("datetimeInput");
  const datetimeString = inputElement.value;

  if (datetimeString.length === 14) {
    formatDateTime(datetimeString);
  }
}

function formatDateTime(datetimeString) {
  const year = datetimeString.slice(0, 4);
  const month = datetimeString.slice(4, 6);
  const day = datetimeString.slice(6, 8);
  const hours = datetimeString.slice(8, 10);
  const minutes = datetimeString.slice(10, 12);
  const seconds = datetimeString.slice(12, 14);

  const date = new Date(
    `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
  );

  const outputElement = document.getElementById("output");
  outputElement.innerHTML = ""; // 결과 초기화

  const formats = [
    "YYYY년 MM월 DD일 HH시 mm분 ss초",
    "YYYY-MM-DD HH:mm:ss",
    "YYYY.MM.DD HH:mm:ss",
    "YYYY/MM/DD HH:mm:ss",
    "MM/DD/YYYY HH:mm:ss",
    "DD-MM-YYYY HH:mm:ss",
    "YY-MM-DDTHH:mm:ssZ",
    "MM-DD-YYYY HH:mm:ss",
    "DD/MM/YYYY HH:mm:ss",
    "HH:mm:ss YYYY-MM-DD",
    // 필요한 만큼 포맷을 추가할 수 있습니다.
  ];

  formats.forEach((format) => {
    const formattedDateTime = format
      .replace("YYYY", year)
      .replace("YY", year.slice(-2))
      .replace("MM", month)
      .replace("DD", day)
      .replace("HH", hours)
      .replace("mm", minutes)
      .replace("ss", seconds);

    const formattedOutput = document.createElement("p");
    formattedOutput.textContent = `${format}: ${formattedDateTime}`;
    outputElement.appendChild(formattedOutput);
  });
}
