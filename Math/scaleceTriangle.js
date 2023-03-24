function heightScaleneTriangle (lado1, lado2, lado3) {
    const semiP = (lado1 + lado2 + lado3) / 2;
    const area = Math.sqrt(semiP * (semiP - lado1) * (semiP - lado2) * (semiP - lado3));
    const height = (2 * area) / lado1;
    if (lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1) {
      return Math.round(height);
    }
    else return false
  }