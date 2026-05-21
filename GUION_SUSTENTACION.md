# Guion de Sustentación - PetWell: Arquitectura de Software

Este documento contiene una propuesta textual (lo que puedes decir en voz alta) para acompañar cada diapositiva de la presentación. La idea es que suene natural, profesional y técnico, pero fácil de seguir para el profesor.

---

### Diapositiva 1: Portada
**Lo que debes decir:**
"Buenos días. Nosotros somos Jhonatan Barrera, Juan Arguelles y Jhon Garrido. Hoy venimos a sustentar nuestro proyecto final de arquitectura de software: **PetWell**, una plataforma veterinaria multitenant."

---

### Diapositiva 2: Momento 1 de 5 - Contexto del Problema y Necesidades
**Lo que debes decir:**
"Para entender por qué creamos PetWell, primero identificamos cuatro problemas críticos en las clínicas veterinarias actuales: agendas llevadas en papel que generan dobles reservas, historiales clínicos dispersos, cobros informales sin conciliación y servicios de telemedicina por WhatsApp que no dejan registro legal.
Para solucionar esto, diseñamos un ecosistema para tres actores principales: el dueño de mascota, que necesita agendar citas y pagar en un solo lugar; el veterinario, que requiere un expediente electrónico seguro; y el administrador de la clínica, que controla los ingresos y la operación."

---

### Diapositiva 3: Momento 1 de 5 - Objetivos, Justificación y Alcance
**Lo que debes decir:**
"Nuestro objetivo principal fue digitalizar estas clínicas mediante una arquitectura de microservicios. ¿Por qué microservicios y no un monolito tradicional? Porque en un sistema veterinario de alta concurrencia, si el módulo de pagos falla, no podemos permitir que las agendas o historiales dejen de funcionar.
Logramos esto bajo 4 pilares: Independencia de módulos, Aislamiento de datos médicos, Despliegue independiente y Coordinación en transacciones. Nuestro alcance abarcó el desarrollo de 8 microservicios puestos en producción, integraciones de terceros como Bold y Daily.co, y todo un sistema de monitoreo automatizado."

---

### Diapositiva 4: Momento 2 de 5 - Arquitectura General del Sistema
**Lo que debes decir:**
"A nivel de infraestructura, nuestra topología de red cuenta con cuatro capas de aislamiento estricto. La Capa 1 es el cliente Next.js en Vercel, que JAMÁS toca nuestras bases de datos. Todo pasa por la Capa 2: nuestro API Gateway desplegado en Railway, que es la única puerta de entrada y se encarga del enrutamiento. 
La Capa 3 contiene nuestros 8 microservicios ejecutándose en la nube (Render y Railway). Y la Capa 4 son nuestras bases de datos distribuidas. La comunicación funciona de dos maneras: a través del API Gateway por protocolo HTTP REST hacia el exterior, y de forma interna entre servicios usando llamadas S2S con una llave criptográfica."

---

### Diapositiva 5: Momento 2 de 5 - Función de cada Microservicio
**Lo que debes decir:**
"El dominio de negocio fue dividido en 8 servicios autónomos. El *User Service* gestiona la autenticación, el *Pet Service* guarda los perfiles animales y el *EHR Service* almacena el expediente clínico con auditoría. Por otro lado, tenemos el *Appointment* para agendamiento, *Billing* para procesar pagos y *Telemed* para levantar las salas de videollamada. Adicionalmente, creamos servicios de soporte como el de *Notificaciones* por correo y un *Analytics* que recolecta métricas globales de lectura para el administrador."

---

### Diapositiva 6: Momento 2 de 5 - Autenticación, Autorización y Seguridad
**Lo que debes decir:**
"En un sistema de salud la seguridad es primordial. En la primera línea tenemos reglas estrictas de CORS en el API Gateway, aceptando tráfico únicamente de nuestro dominio oficial. 
Implementamos un sistema JWT descentralizado: el User Service emite un token, y cualquier microservicio puede validarlo localmente sin hacer llamadas a la red extra, reduciendo latencia. Además, contamos con Control de Acceso por Roles (RBAC) con 5 niveles de permisos para garantizar que un dueño solo acceda a su información, y un veterinario a la de su clínica."

---

### Diapositiva 7: Momento 2 de 5 - Patrón SAGA (Coordinación entre Servicios)
**Lo que debes decir:**
"Al tener los servicios aislados, nos encontramos con el reto de las transacciones distribuidas. Por ejemplo, ¿qué pasa cuando agendamos una cita y debemos esperar a que el usuario pague? 
Implementamos el Patrón SAGA de manera coreografiada. Una cita se crea en estado 'Pendiente de Pago'. Cuando el webhook de Bold Checkout confirma que el pago fue exitoso, Billing le avisa de forma interna a Appointment para que confirme la cita. Si el pago falla o expira, un proceso programado o 'Cron job' aplica una compensación automática y libera el cupo en la agenda sin intervención humana."

---

### Diapositiva 8: Momento 2 de 5 - Manejo de Bases de Datos
**Lo que debes decir:**
"Mantuvimos una fidelidad estricta al patrón 'Database-per-Service'. Contamos con 7 bases de datos PostgreSQL físicas alojadas en Supabase, separadas de forma lógica y física. 
Esto significa que el servicio de facturas no tiene forma directa de leer las tablas del historial clínico. Si una base de datos se corrompe, el daño queda encapsulado en ese único dominio de negocio."

---

### Diapositiva 9: Momento 3 de 5 - Stack Tecnológico
**Lo que debes decir:**
"Para las herramientas, apostamos fuertemente por TypeScript en frontend y backend, lo que nos permitió compartir interfaces y detectar errores en tiempo de compilación entre los 8 servicios. 
Para el backend usamos Express en Node.js dada su agilidad para montar APIs REST. Las bases de datos relacionales son PostgreSQL, alojadas en Supabase, lo cual fue crítico por la seguridad que exige un ecosistema médico. Todo nuestro ecosistema 'cloud' está alojado entre Vercel, Railway y Render, mientras que Docker lo empleamos exclusivamente para levantar de forma aislada nuestro entorno de monitoreo con Prometheus y Grafana."

---

### Diapositiva 10: Momento 4 de 5 - Pruebas, Despliegue y Monitoreo (CI/CD)
**Lo que debes decir:**
"Nada de esto se sube de forma manual. Implementamos una cultura DevOps con integración y despliegue continuo mediante GitHub Actions.
Cada vez que hacemos cambios en código, nuestro pipeline ejecuta instalaciones limpias, análisis estático, la compilación completa de TypeScript y toda nuestra suite de pruebas unitarias en Jest (cubriendo más del 80% del negocio). Si todo está en verde, el clúster se despliega automáticamente en caliente. Mantenemos la rama 'main' totalmente protegida para evitar caídas en producción. Como pueden ver en las capturas de la presentación, contamos con evidencia de los pipelines exitosos para cada uno de nuestros microservicios."

---

### Diapositiva 11: Momento 4 de 5 - Monitoreo con Prometheus y Grafana
**Lo que debes decir:**
"El sistema en producción cuenta con instrumentación de métricas. Utilizamos Prometheus para inspeccionar de forma periódica el estado, el procesador (CPU) y el consumo de RAM de cada aplicación de Node.js. 
Estos datos los centralizamos y graficamos en tiempo real con Grafana, alertándonos si un servicio necesita más recursos."

---

### Diapositiva 12: Momento 5 de 5 - Demostración Funcional del Sistema
**Lo que debes decir:**
"*(Durante esta diapositiva, puedes darle play al video de demostración integrado)*. 
En esta demostración validamos nuestros 5 requerimientos clave: (1) El registro de usuarios validado. (2) El motor de agendamiento en tiempo real que previene colisiones y lanza un error HTTP 409 si dos personas eligen la misma hora. (3) El flujo de pagos seguro con Bold. (4) El registro inmutable de vacunas e historiales generando PDFs al vuelo. Y finalmente (5), las salas virtuales de telemedicina con Daily.co."

---

### Diapositiva 13: Evidencia de Despliegue (URLs Verificadas)
**Lo que debes decir:**
"Todo lo expuesto anteriormente no se quedó en diseño local. Aquí mostramos nuestros 10 despliegues en caliente, conformados por el Frontend, el API Gateway central y cada uno de los 8 microservicios. 
Todo el tráfico web y la red interna privada opera bajo URLs públicas y verificadas en este instante, con todo el código fuente transparente y debidamente versionado en nuestros repositorios de GitHub."

---

### Diapositiva 14: Conclusiones
**Lo que debes decir:**
"A modo de balance técnico, PetWell nos demuestra que segmentar responsabilidades paga enormes dividendos. El uso de 8 microservicios, 7 bases de datos distintas, una cobertura de tests de más del 80% y orquestación multi-cloud, resultó en un ecosistema tolerante a fallos, robusto y profesional. Muchas gracias."
