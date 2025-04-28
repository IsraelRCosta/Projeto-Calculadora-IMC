function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
  
    if (!peso || !altura) {
      resultado.innerHTML = "Por favor, preencha todos os campos.";
      resultado.style.color = "red";
      return;
    }
  
    const imc = peso / (altura * altura);
  
    let classificacao = "";
  
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso ideal (Parabéns)";
    } else if (imc < 29.9) {
      classificacao = "Levemente acima do peso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
      classificacao = "Obesidade grau 2 (severa)";
    } else {
      classificacao = "Obesidade grau 3 (mórbida)";
    }
  
    resultado.style.color = "black";
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  }
  