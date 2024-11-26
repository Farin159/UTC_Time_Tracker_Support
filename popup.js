function updateTime() {
  const now = new Date();
  const currentUtcTime = now.toISOString().split("T")[1].split(".")[0];
  document.getElementById("currentTime").innerText = `Current UTC Time: ${currentUtcTime}`;

  // Calculate time until 12:00 UTC
  const twelveUtc = new Date();
  twelveUtc.setUTCHours(12, 0, 0, 0);
  if (now > twelveUtc) {
    twelveUtc.setUTCDate(twelveUtc.getUTCDate() + 1);
  }
  const timeUntil12 = twelveUtc - now;
  const hours12 = Math.floor(timeUntil12 / (1000 * 60 * 60));
  const minutes12 = Math.floor((timeUntil12 % (1000 * 60 * 60)) / (1000 * 60));
  const seconds12 = Math.floor((timeUntil12 % (1000 * 60)) / 1000);
  document.getElementById("timeUntil12").innerText = `Time until 12:00 UTC: ${hours12}h ${minutes12}m ${seconds12}s`;

  // Calculate time until 14:00 UTC
  const fourteenUtc = new Date();
  fourteenUtc.setUTCHours(14, 0, 0, 0);
  if (now > fourteenUtc) {
    fourteenUtc.setUTCDate(fourteenUtc.getUTCDate() + 1);
  }
  const timeUntil14 = fourteenUtc - now;
  const hours14 = Math.floor(timeUntil14 / (1000 * 60 * 60));
  const minutes14 = Math.floor((timeUntil14 % (1000 * 60 * 60)) / (1000 * 60));
  const seconds14 = Math.floor((timeUntil14 % (1000 * 60)) / 1000);
  document.getElementById("timeUntil14").innerText = `Time until 14:00 UTC: ${hours14}h ${minutes14}m ${seconds14}s`;
}

// Update every second
setInterval(updateTime, 1000);
updateTime();
