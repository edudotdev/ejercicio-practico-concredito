# Ejercicio práctico concredito

### Como ejecutarlo:

1. Clona el repositorio y ábrelo en tu editor de código, en mi caso utilicé VScode.

2. En la raíz del proyecto instala las dependencias necesarias para el frontend y backend con el siguiente comando:
`$ npm install`

3. Una vez instaladas las dependencias, ve al directorio del servidor "/apps/server/" y ejecuta el servidor en docker con el siguiente comando:
`$ docker compose up --build`
Listo el servidor estará activo.

4. En una nueva terminal ve al directorio del cliente "/apps/client/" y construye la aplicación con el siguiente comando:
`$ npm run build`
Seguido corre la aplicación con el siguiente comando:
`$ npm run preview`
En consola se mostrará el enlace de la preview, visita el enlace con control + clic izquierdo.

5. Ya puedes probar la aplicación.

### Tecnologías usadas
####frontend:
Vite, React, TypeScript, Tailwindcss
####backend:
Nodejs, MySQL
