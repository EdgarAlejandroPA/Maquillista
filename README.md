# Maquillista - Gestión de Citas en Línea

## Descripción
Este proyecto es una aplicación web diseñada para ayudar a los clientes a agendar citas de manera ordenada y práctica. Proporciona a la maquillista un sistema eficiente para gestionar horarios y servicios, eliminando conflictos en la agenda y mejorando la organización. Los clientes pueden explorar los servicios disponibles y agendar directamente desde la plataforma.

---

## Problema Identificado
Las citas llegaban a la maquillista a través de múltiples plataformas como Facebook, Instagram y WhatsApp, lo que dificultaba el seguimiento y la organización. Además, recibía solicitudes de servicios no ofrecidos, lo que incrementaba su carga administrativa y disminuía la satisfacción tanto de la maquillista como de los clientes.

---

## Solución
La aplicación centraliza la gestión de citas en una plataforma web donde los clientes pueden:
- Explorar los servicios ofrecidos.
- Seleccionar una fecha y horario disponible.
- Agendar citas directamente desde el sitio web.

Esto elimina la dependencia de redes sociales para coordinar citas y asegura una gestión de agenda más eficiente.

---

## Arquitectura
La solución utiliza una arquitectura cliente-servidor basada en las siguientes tecnologías:
- **Frontend**: HTML, CSS, JavaScript (React.js).
- **Backend**: Node.js con better-sqlite3 para la base de datos local.
- **Interacción**: Comunicación mediante API REST para gestionar datos de citas.

---

## Tabla de Contenidos
1. [Descripción](#descripción)
2. [Problema Identificado](#problema-identificado)
3. [Solución](#solución)
4. [Arquitectura](#arquitectura)
5. [Requerimientos](#requerimientos)
6. [Instalación](#instalación)
7. [Configuración](#configuración)
8. [Uso](#uso)
9. [Contribución](#contribución)
10. [Roadmap](#roadmap)

---

## Requerimientos
- **Base de datos**: better-sqlite3 (local).
- **Versión de Node.js**: >=22.12.0.
- **Paquetes adicionales**: npm.
- **Herramientas recomendadas**: 
  - Visual Studio Code o IntelliJ Community.
  - Git Bash para ejecutar comandos.

---

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/EdgarAlejandroPA/Maquillista.git
cd Maquillista

2. Instalar las dependencias
En la carpeta del backend:

cd backend
npm install

En la carpeta del frontend:

cd ../frontend
npm install

3. Iniciar el servidor
Inicia el backend:

cd backend
npm start

Inicia el frontend:

cd ../frontend
npm start


4. Acceder a la aplicación
Abre tu navegador y ve a http://localhost:3000. La aplicación estará lista para usarse.

Configuración
Configuración de base de datos
El proyecto utiliza better-sqlite3 como base de datos local. No se requiere configuración adicional, ya que los datos se almacenan automáticamente en un archivo SQLite.

Verificación de dependencias
Asegúrate de que las versiones de Node.js y npm sean compatibles:

node -v
npm -v

Verifica que better-sqlite3 esté instalado ejecutando:

npm list -g better-sqlite3

Uso
Para el usuario final:
Accede al sitio web en http://localhost:3000.
Navega por los servicios disponibles.
Selecciona una fecha y horario para agendar una cita.
Completa el formulario con tus datos.
Para el administrador (maquillista):
Revisa el listado de citas en la interfaz administrativa.
Organiza los horarios y confirma las citas.
Contribución
Pasos para contribuir:
Clona el repositorio:

git clone https://github.com/EdgarAlejandroPA/Maquillista.git

Crea una nueva rama para tu funcionalidad:

git checkout -b feature/nueva-funcionalidad

Realiza los cambios necesarios y haz un commit:

git commit -m "Descripción de los cambios"

Envía un pull request al repositorio principal y espera la revisión.

Roadmap
Estas son las funcionalidades planeadas para futuras implementaciones:

 Implementar un diseño más atractivo para usuarios finales.
 Migrar la base de datos a la nube para facilitar el acceso remoto.
 Añadir un sistema de registro e inicio de sesión para usuarios.
 Integrar notificaciones por correo electrónico para confirmar o cancelar citas.







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
