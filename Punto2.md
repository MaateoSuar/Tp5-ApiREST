        ¿Qué diferencias observan entre una arquitectura REST y una arquitectura de microservicios?
Arquitectura REST es un estilo de diseño para servicios web que usa HTTP, con operaciones estándar (GET, POST, PUT, DELETE) y trabaja sobre recursos identificados por URLs. La comunicación es sin estado y usa formatos comunes como JSON.

Arquitectura de microservicios es una forma de estructurar aplicaciones: se crean múltiples servicios pequeños e independientes que se comunican entre sí. Estos servicios pueden usar diferentes tecnologías, bases de datos, y protocolos (HTTP, gRPC, mensajería).

Comparación: REST define cómo comunicarse (protocolo), mientras que microservicios define cómo organizar una aplicación (estructura interna).

        ¿Cuáles creen que serían los desafíos si quisieran dividir su aplicación REST actual en microservicios?
Separar responsabilidades de forma clara entre servicios, evitando dependencias fuertes entre ellos.

Gestionar la comunicación entre múltiples servicios (por ejemplo, manejando latencias, caídas de red y reintentos).

Adaptar la infraestructura para desplegar, monitorear y escalar múltiples servicios en lugar de un único sistema.

Gestionar datos distribuidos, donde cada microservicio pueda necesitar su propia base de datos sin caer en inconsistencias.

        ¿Qué ventajas teóricas ven en los microservicios frente a una API REST monolítica?
Escalabilidad: cada servicio puede escalarse de manera independiente según su necesidad de carga.

Resiliencia: fallos en un servicio no necesariamente afectan a toda la aplicación.

Flexibilidad tecnológica: se pueden usar diferentes lenguajes o bases de datos según lo que mejor se adapte a cada servicio.

Despliegues independientes: permite que equipos diferentes trabajen en servicios separados y desplieguen cambios sin afectar el resto del sistema.

Mantenibilidad: facilita el mantenimiento y evolución de partes específicas de la aplicación sin tocar todo el sistema.
