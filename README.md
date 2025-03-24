# SkyConnect Explorer

## Tecnologías utilizadas

- **React.js**
- **Next.js**
- **Zustand** (gestión de estado de la API y estado de carga)
- **Leaflet con OpenStreetMap** (mapa interactivo)
- **Tailwind CSS** (estilizado)
- **Jest + React Testing Library** (pruebas unitarias e integración)

## Características principales

- Al hacer clic en un aeropuerto, se navega a una página de detalles.
- Se muestra información como:
  - Nombre
  - Código IATA/ICAO
  - Ciudad
  - País
  - Zona horaria
- Se integra un mapa con un marcador en la ubicación del aeropuerto.
- Arquitectura modular con separación de servicios de API, lógica de estado y UI.
- Uso de SSR (Server-Side Rendering).
- Implementación de paginación (6 resultados por página).

## Bonus implementados

- Mejora en la UI con mensajes de carga.
- Historial de búsqueda almacenado en Zustand.
- Pruebas de integración que validan:
  - El hook `useFilteredAirports`.
  - Almacenamiento en `sessionStorage`.
  - Correcta generación de URLs en enlaces (`<a>`).
  - Eventos del usuario (`fireEvent.click`).
- Implementación de diseño responsivo.

## Concepto de la aplicación

SkyConnect Explorer es una aplicación web que ayuda a los usuarios a encontrar datos detallados de aeropuertos a nivel mundial. Permite filtrar resultados desde la página de inicio y desde la tabla paginada.

- La página de detalles tiene un tabulador con 3 secciones:
  1. **General**: Datos como país, código IATA, etc.
  2. **Zona Horaria**: GMT y hora local del aeropuerto.
  3. **Ubicación**: Latitud, longitud y mapa.

## Ajustes realizados

### Input de filtro en `/airports`

- En lugar de un botón de búsqueda, se usa una función **debounce**.
- Se ejecuta la búsqueda automáticamente tras 500ms de inactividad en el input.
- Se implementa el custom hook `useDebounce`.

### Corrección de datos erróneos en la API Aviationstack

- Se detectaron errores en las coordenadas de algunos aeropuertos.
- Para corregirlos, se usa una base de datos interna en formato `.csv` (ubicada en `public/`).
- Si un aeropuerto no está operativo, no se muestra en el mapa.

## Detalles técnicos adicionales

### Paginación

- Se aprovechan los filtros de la API para obtener solo 6 registros por página.

### Almacenamiento y disposición de datos

- Las solicitudes a la API se almacenan en un historial de búsqueda.
- Los datos previamente obtenidos se reutilizan en lugar de hacer nuevas peticiones.
- Se usa `sessionStorage` para persistencia de datos de detalle y evitar pérdida de información.

---

## Archivo .env

Para fines prácticos de la prueba se eliminó del archivo .gitignore el .env

## Instalación y ejecución

Clonar el repositorio y ejecutar los siguientes comandos:

```sh
npm install
npm run dev
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

## Pruebas

Ejecutar las pruebas unitarias e integración con:

```sh
npm test
```

## Deploy

La aplicación ha sido alojada en Vercel para su respectivo deploy

Abrir la aplicación: [https://skyconnect.vercel.app/](https://skyconnect.vercel.app/)
