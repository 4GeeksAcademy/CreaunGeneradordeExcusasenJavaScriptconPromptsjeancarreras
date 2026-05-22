#!/usr/bin/env node

const who = ['Mi perro', 'El vecino', 'Mi abuela', 'Un alien', 'El profe', 'Mi hermano'];
const action = ['se comio', 'borro', 'escondio', 'rompio', 'perdio', 'olvido'];
const what = ['mi tarea', 'mi laptop', 'mi celular', 'mis apuntes', 'el router', 'el proyecto final'];
const when = ['hoy', 'ayer', 'esta manana', 'anoche', 'hace cinco minutos', 'justo antes de clase'];

function generateExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  const excuse = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen + '.';
  return excuse;
}

if (require.main === module) {
  const excuse = generateExcuse();
  console.log(excuse);
}

module.exports = { generateExcuse };
