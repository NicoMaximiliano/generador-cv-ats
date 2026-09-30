const form = document.querySelector('.form-curriculum');
const lists = {
  habilidad: { input: document.querySelector('#habilidad'), list: document.querySelector('.listado-habilidades') },
  educacion: { input: document.querySelector('#educacion'), list: document.querySelector('.listado-educacion') },
  certificacion: { input: document.querySelector('#certificacion'), list: document.querySelector('.listado-certificaciones') },
  experiencia: { input: document.querySelector('#experiencia'), list: document.querySelector('.listado-experiencia') }
};
const data = { habilidades: [], educacion: [], certificaciones: [], experiencia: [] };

document.querySelector('#descripcion').addEventListener('input', (event) => {
  document.querySelector('.numero-caracteres').textContent = event.target.value.length;
});

function addItem(key, arrayKey) {
  const { input, list } = lists[key];
  const value = input.value.trim();
  if (!value) {
    input.focus();
    return;
  }
  data[arrayKey].push(value);
  const item = document.createElement('li');
  item.className = 'elemento-li';
  const text = document.createElement('span');
  text.textContent = value;
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'quitar-item';
  remove.setAttribute('aria-label', `Eliminar ${value}`);
  remove.textContent = 'Eliminar';
  remove.addEventListener('click', () => {
    const index = data[arrayKey].indexOf(value);
    if (index !== -1) data[arrayKey].splice(index, 1);
    item.remove();
  });
  item.append(text, remove);
  list.append(item);
  input.value = '';
  input.focus();
}

const actions = [
  ['#agregar-habilidad', 'habilidad', 'habilidades'],
  ['#agregar-educacion', 'educacion', 'educacion'],
  ['#agregar-certificacion', 'certificacion', 'certificaciones'],
  ['#agregar-experiencia', 'experiencia', 'experiencia']
];
actions.forEach(([button, key, arrayKey]) => {
  document.querySelector(button).addEventListener('click', () => addItem(key, arrayKey));
  lists[key].input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && key !== 'experiencia') {
      event.preventDefault();
      addItem(key, arrayKey);
    }
  });
});

document.querySelector('#boton-generar-curriculum').addEventListener('click', () => {
  const user = {
    nombre: form.nombre.value.trim(),
    apellido: form.apellido.value.trim(),
    ubicacion: form.ubicacion.value.trim(),
    puesto: form.puesto.value.trim(),
    descripcion: form.descripcion.value.trim(),
    telefono: form.telefono.value.trim(),
    email: form.email.value.trim(),
    linkedin: form.linkedin.value.trim(),
    ...data
  };
  localStorage.setItem('curriculum', JSON.stringify(user));
  window.location.href = 'curriculum.html';
});
