// Deklarasi pilihan player
// var pBatu = document.getElementById("batuPlayer");
// var pKertas = document.getElementById("kertasPlayer");
// var pGunting = document.getElementById("guntingPlayer");
var player = document.getElementById("player");

// deklarasi pilihan komputer
// var cBatu = document.getElementById("batuCom");
// var cKertas = document.getElementById("kertasCom");
// var cGunting = document.getElementById("guntingCom");
var com = document.getElementById("com");

// deklasrasi hasil
const info = document.getElementById("info");
const refresh = document.getElementById("refresh");

// Pilihan Komputer
function getPilihanComputer() {
  const com = Math.random();
  // logika komputer
  if (com < 0.34) {
    const cBatu = document.querySelector(".batuCom");
    cBatu.style.backgroundColor = "gray";
    cBatu.style.width = "100px";
    cBatu.style.height = "100px";
    return cBatu.className;
  }
  if (com >= 0.34 && com < 0.67) {
    const cKertas = document.querySelector(".kertasCom");
    cKertas.style.backgroundColor = "gray";
    cKertas.style.width = "100px";
    cKertas.style.height = "100px";
    return cKertas.className;
  }
  const cGunting = document.querySelector(".guntingCom");
  cGunting.style.backgroundColor = "gray";
  cGunting.style.width = "100px";
  cGunting.style.height = "100px";
  return cGunting.className;
}
// Akhir Pilihan Komputer

// Rules Games
function getHasil(player, com) {
  // Kondisi Hasil Seri
  if (player == "batuPlayer" && com == "batuCom") return "DRAW";
  if (player == "kertasPlayer" && com == "kertasCom") return "DRAW";
  if (player == "guntingPlayer" && com == "guntingCom") return "DRAW";

  // Kondisi Menang
  if (player == "batuPlayer" && com == "guntingCom") return "PLAYER WIN";
  if (player == "kertasPlayer" && com == "batuCom") return "PLAYER WIN";
  if (player == "guntingPlayer" && com == "kertasCom") return "PLAYER WIN";

  // Kondisi Kalah
  if (player == "batuPlayer" && com == "kertasCom") return "COM WIN";
  if (player == "kertasPlayer" && com == "guntingCom") return "COM WIN";
  if (player == "guntingPlayer" && com == "batuCom") return "COM WIN";
}
// Akhir Rules games

// Area Bermain
const pBatu = document.querySelector(".batuPlayer");
pBatu.addEventListener("click", function () {
  pBatu.style.backgroundColor = "gray";
  pBatu.style.width = "120px";
  pBatu.style.height = "100px";
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pBatu.className;
  console.log("Com :" + pilihanComputer);
  console.log("Player :" + pilihanPlayer);
  const hasil = getHasil(pilihanPlayer, pilihanComputer);
  console.log(" Hasil :" + hasil);
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pKertas = document.querySelector(".kertasPlayer");
pKertas.addEventListener("click", function () {
  pKertas.style.backgroundColor = "gray";
  pKertas.style.width = "120px";
  pKertas.style.height = "100px";
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pKertas.className;
  console.log("Com :" + pilihanComputer);
  console.log("Player :" + pilihanPlayer);
  const hasil = getHasil(pilihanPlayer, pilihanComputer);
  console.log(" Hasil :" + hasil);
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pGunting = document.querySelector(".GuntingPlayer");
pGunting.addEventListener("click", function () {
  pGunting.style.backgroundColor = "gray";
  pGunting.style.width = "120px";
  pGunting.style.height = "100px";
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGunting.className;
  console.log("Com :" + pilihanComputer);
  console.log("Player :" + pilihanPlayer);
  const hasil = getHasil(pilihanPlayer, pilihanComputer);
  console.log(" Hasil :" + hasil);
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});
// Akhir Area Bermain
