function esPalindromo(texto) {
    // Normalizar: quitar espacios y poner en minúsculas
    texto = texto.replace(/\s+/g, '').toLowerCase();
  
    // Comparar con la versión invertida
    let invertido = texto.split('').reverse().join('');
    return texto === invertido;
  }
  
  // Ejemplos de prueba
  const pruebas = ["Radar", "oso", "JavaScript", "Anita lava la tina"];
  
  pruebas.forEach(palabra => {
    if (esPalindromo(palabra)) {
      console.log(`${palabra} ✅ es un palíndromo`);
    } else {
      console.log(`${palabra} ❌ no es un palíndromo`);
    }
  });
