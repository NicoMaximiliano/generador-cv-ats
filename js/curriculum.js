const user = JSON.parse(localStorage.getItem('curriculum') || '{}');
const fullName = [user.nombre, user.apellido].filter(Boolean).join(' ');
document.querySelector('#nombre-completo').textContent = fullName || 'Tu nombre';
const role = document.querySelector('#puesto');
role.textContent = user.puesto || '';
if (!user.puesto) role.hidden = true;
const contact = [user.ubicacion, user.email, user.telefono, user.linkedin].filter(Boolean);
document.querySelector('#contacto').textContent = contact.join(' | ');
document.querySelector('#perfil').textContent = user.descripcion || '';
if (!user.descripcion) document.querySelector('#perfil-seccion').hidden = true;

function populateList(id, entries) {
  const list = document.querySelector(`#${id}`);
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    const item = document.createElement('li');
    item.textContent = entry;
    list.append(item);
  });
  if (!list.children.length) list.closest('section').hidden = true;
}

populateList('experiencia', user.experiencia);
populateList('educacion', user.educacion);
populateList('habilidades', user.habilidades);
populateList('certificaciones', user.certificaciones);
document.querySelector('#boton-imprimir').addEventListener('click', () => window.print());
