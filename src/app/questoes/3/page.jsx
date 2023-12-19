'use client';

import { useEffect, useState } from 'react';

const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Questao3() {
  const [soma, setSoma] = useState(0)

  const somaPares = (numeros) => {
    let total = 0
    numeros.forEach(numero => {
      if (numero % 2 == 0) {
        total = total + numero;
      }

    });
    setSoma(total)
  }

  useEffect(() => {
    somaPares(numerosInteiros);
  }, []);


  return (
    <>
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      <p>Soma: {soma}</p>
    </>
  );
}
