# CV Online

Aplicación web para crear y presentar un currículum profesional en español. Permite organizar la información en secciones claras y generar una versión simple, de una sola columna, que facilita la lectura por parte de sistemas de seguimiento de candidatos (ATS).

> La estructura está pensada para ser compatible con lectores ATS, pero cada sistema y proceso de selección puede interpretar los documentos de manera diferente. Conviene adaptar el contenido y las palabras clave a cada oferta laboral.

## Funcionalidades

- Captura de datos de contacto: nombre, apellido, correo, teléfono, ubicación y perfil de LinkedIn o portfolio.
- Campo para indicar el puesto al que se postula; aparece debajo del nombre en el currículum y en la impresión.
- Resumen profesional de hasta 600 caracteres con contador en tiempo real.
- Registro de experiencia laboral, educación, habilidades y certificaciones.
- Limpieza automática del campo al agregar una entrada y opción para eliminar entradas antes de generar el currículum.
- Ocultamiento automático de las secciones sin contenido.
- Vista previa del currículum y opción del navegador para imprimirlo o guardarlo como PDF.
- Diseño adaptable a pantallas pequeñas y estilos de impresión sencillos, en una sola columna.
- Los datos se guardan en `localStorage` del navegador para pasarlos de la página del formulario a la vista del currículum.

## Tecnologías

- **HTML5** para la estructura y los formularios.
- **CSS3** para el diseño adaptable y la presentación de impresión.
- **JavaScript** para gestionar el formulario, guardar los datos y construir la vista del currículum.

No requiere instalación de dependencias, compilación ni servidor backend.

## Estructura del proyecto

```text
.
├── index.html          # Formulario para crear el currículum
├── curriculum.html     # Vista del currículum generado
├── css/
│   └── estilo.css      # Estilos de la aplicación y de impresión
├── js/
│   ├── form.js         # Captura y almacenamiento de los datos
│   └── curriculum.js   # Renderizado e impresión del currículum
└── README.md
```

## Uso local

1. Descarga o clona este repositorio.
2. Abre `index.html` en un navegador moderno.
3. Completa los datos y agrega las entradas de experiencia, educación, habilidades y certificaciones.
4. Selecciona **Generar currículum** para abrir la vista final.
5. Usa **Imprimir / Guardar como PDF** y elige la opción correspondiente en el diálogo del navegador.

También puedes servir la carpeta con cualquier servidor estático local. No hay comandos de instalación o compilación.

## Publicar en GitHub Pages

1. Sube los archivos del proyecto a un repositorio de GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama que contiene el proyecto y la carpeta raíz (`/`), y guarda los cambios.
5. Cuando GitHub Pages termine la publicación, abre la URL que muestra la sección **Pages**.

El archivo de entrada es `index.html`, por lo que el sitio puede publicarse como página estática sin configuración adicional.

## Almacenamiento y privacidad

La información del currículum se guarda en el almacenamiento local (`localStorage`) del navegador, bajo la clave `curriculum`. No se envía a un servidor. Los datos están disponibles desde el mismo navegador y origen donde se generaron; al usar otro navegador o dispositivo, no se transfieren automáticamente. Para borrar los datos guardados, elimina la clave `curriculum` desde las herramientas de almacenamiento del navegador.

## Consejos para un currículum ATS

- Ajusta el puesto, el resumen y las habilidades a cada oferta laboral.
- Usa nombres de cargos, herramientas y competencias que coincidan con tu experiencia y con los requisitos del anuncio.
- Describe responsabilidades con verbos claros y, cuando sea posible, logros medibles.
- Mantén los datos de educación y certificaciones en un formato consistente, por ejemplo: `Título | Institución | Año`.
- Revisa el PDF final antes de enviarlo y sigue siempre las instrucciones de formato del empleador.

## Limitaciones

- La aplicación no valida la veracidad ni la calidad del contenido ingresado.
- No incluye carga de archivos, cuentas de usuario, base de datos ni sincronización entre dispositivos.
- La función de impresión depende de las opciones disponibles en el navegador.

## Autor

Desarrollado por Nicolás M. Orellano.
