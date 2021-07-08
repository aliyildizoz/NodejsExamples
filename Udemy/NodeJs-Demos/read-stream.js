const http = require("http");
const fs = require("fs");
const file =
  "D:/Kurslar/Udemy/Programlama/Other/Sıfırdan Her Yönüyle JavaScript ve Node.JS/11. Streams (Yayınlar)/3. Yazılabilir Stream oluşturmak (fs.createWriteStream()).mp4";

const readStream = fs.createReadStream(file);
let progress = 0;

fs.stat(file, (err, data) => {
  const total = data.size;

  readStream.on("data", (chunk) => {
    progress += chunk.length;
    console.log("%"+Math.round((100 * progress) / total));
  });

  readStream.on("end", (chunk) => {
    console.log("Veri okunması bitti:", progress);
  });
});
