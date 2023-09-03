document.getElementById("calcular").addEventListener("click", () => {
  ConvertirMinutos();
});

const audio = new Audio();
audio.src = 'laralaralarelei.mp3'




function ConvertirMinutos() {
  audio.play()  
  let MinutoACT = document.getElementById("MinutoACT").value;
  let MinutoSuma = document.getElementById("MinutoSuma").value;

  const myArrayACT = MinutoACT.split(":");
  const myArraySUMA = MinutoSuma.split(":");

  let minSalto = parseInt(myArrayACT[0]) + parseInt(myArraySUMA[0]);
  let segSalto = parseInt(myArrayACT[1]) + parseInt(myArraySUMA[1]);

  for (let i; segSalto > 60; i++) {
    segSalto = segSalto - 60;
    minSalto = minSalto + 1;
  }
  let puntoDesalto = "";
  if (segSalto < 10) {
    puntoDesalto = minSalto + ":" + "0" + segSalto;
  } else {
    puntoDesalto = minSalto + ":" + segSalto;
  }

  document.getElementById("PuntoDeSalto").innerHTML = puntoDesalto;
}
