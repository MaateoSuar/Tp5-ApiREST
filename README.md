API REST de Productos

Características REST:
- Cada recurso (producto) es representado mediante endpoints HTTP.
- Se utilizan métodos HTTP estándar (`GET`, `POST`, `PUT`, `DELETE`).
- La comunicación es stateless (cada request lleva su propio contexto).
- Las respuestas están en formato JSON.

 Diferencias con la arquitectura de 3 capas anterior:
- En la anterior, la capa de presentación era un servidor HTTP nativo que devolvía vistas o respuestas simples.
- Ahora, la capa de presentación es una API REST estructurada en rutas, usando Express.js.
- El cliente consume datos en formato JSON, no HTML.
- Los controladores ahora manejan códigos de estado HTTP correctos.
