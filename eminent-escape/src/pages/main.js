const valorInput = document.getElementById("valor");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const resultado = document.getElementById("resultado");

// Factores a METROS
const factores = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000
};

function convertir() {
  const valor = parseFloat(valorInput.value);

  if (isNaN(valor)) {
    resultado.textContent = "Resultado: --";
    return;
  }

  // Paso 1: convertir a metros
  const enMetros = valor * factores[origen.value];

  // Paso 2: convertir a unidad destino
  const resultadoFinal = enMetros / factores[destino.value];

  resultado.textContent = `Resultado: ${resultadoFinal}`;
}

// Eventos
valorInput.addEventListener("input", convertir);
origen.addEventListener("change", convertir);
destino.addEventListener("change", convertir);