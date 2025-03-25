const ponteiroHoras = document.querySelector(".ponteiro.horas");
const ponteiroMinutos = document.querySelector(".ponteiro.minutos");
const ponteiroSegundos = document.querySelector(".ponteiro.segundos");

const setRotation = (element, porcentagemDeRotacao) => {
  element.style.setProperty("--rotation", porcentagemDeRotacao * 360);
};

const setClock = () => {
  const horaAtual = new Date();

  const porcentagemDeSegundos = horaAtual.getSeconds() / 60;
  const porcentagemDeMinutos =
    (porcentagemDeSegundos + horaAtual.getMinutes()) / 60;
  const porcentagemDeHoras = (porcentagemDeMinutos + horaAtual.getHours()) / 12;

  setRotation(ponteiroSegundos, porcentagemDeSegundos);
  setRotation(ponteiroMinutos, porcentagemDeMinutos);
  setRotation(ponteiroHoras, porcentagemDeHoras);
};

setClock();

setInterval(setClock, 1000);
