# Guion de Sustentación - PetWell: Arquitectura de Software

Este documento contiene una propuesta textual (lo que puedes decir en voz alta) para acompañar cada diapositiva de la presentación. La idea es que suene natural, profesional y técnico, pero fácil de seguir para el profesor.

---

### Diapositiva 1: Portada
**Lo que debes decir:**
"Buenos días. Somos Jhonatan Barrera, Juan Arguelles y Jhon Garrido. Hoy presentamos nuestro proyecto final de Arquitectura de Software: **PetWell**, una plataforma veterinaria que digitaliza la operación de clínicas mediante una arquitectura de microservicios. El sistema ya está en producción en petwell-green.vercel.app."

---

### Diapositiva 2: Momento 1 de 5 — Contexto del Problema y Necesidades
**Lo que debes decir:**
"Para entender por qué creamos PetWell, identificamos cuatro problemas críticos en las clínicas veterinarias actuales: primero, agendas en papel que generan dobles reservas; segundo, historiales clínicos dispersos que se pierden si el paciente cambia de veterinario; tercero, cobros informales sin conciliación contable; y cuarto, consultas de telemedicina por WhatsApp sin ningún registro formal.

Para resolver esto, diseñamos el sistema para tres actores: el **dueño de mascota**, que necesita agendar, pagar y ver historiales en un solo lugar; el **veterinario**, que requiere un expediente clínico seguro; y el **administrador de clínica**, que controla ingresos y operación desde su panel."

---

### Diapositiva 3: Momento 1 de 5 — Objetivos, Justificación y Alcance
**Lo que debes decir:**
"Nuestro objetivo principal fue digitalizar estas clínicas bajo cuatro pilares arquitectónicos. **Independencia**: cada microservicio funciona de forma aislada. **Aislamiento**: el historial clínico vive en su propia base de datos, sin acceso directo desde otros servicios. **Despliegue independiente**: podemos actualizar cualquier módulo sin reiniciar la plataforma completa. Y **Coordinación** mediante el patrón SAGA para transacciones distribuidas complejas.

¿Por qué microservicios y no un monolito? Porque si el módulo de pagos falla en un monolito, toda la plataforma cae. Con microservicios, el agendamiento y el historial médico siguen operando con normalidad. Nuestro alcance abarcó 8 microservicios en producción, integración con Bold y Daily.co, y un pipeline de CI/CD automatizado."

---

### Diapositiva 4: Momento 2 de 5 — Arquitectura General del Sistema
**Lo que debes decir:**
"Nuestra topología de red cuenta con cuatro capas de aislamiento estricto. **Capa 1**: el frontend en Next.js desplegado en Vercel — jamás toca nuestras bases de datos directamente. **Capa 2**: el API Gateway en Railway, que es la única puerta de entrada, aplica CORS y enruta las peticiones. **Capa 3**: los 8 microservicios desplegados entre Render y Railway, que se comunican internamente mediante una firma criptográfica llamada x-internal-service-key para procesos S2S. Y **Capa 4**: las 7 bases de datos PostgreSQL en Supabase, completamente aisladas por dominio.

Pueden hacer clic en los bloques del diagrama para ver el detalle de cada capa."

---

### Diapositiva 5: Momento 2 de 5 — Función de cada Microservicio
**Lo que debes decir:**
"El dominio de negocio quedó dividido en 8 servicios autónomos. El **User Service** gestiona autenticación y emite tokens JWT. El **Pet Service** almacena los perfiles de mascotas. El **EHR Service** guarda el historial clínico con auditoría de cambios. El **Appointment Service** controla la agenda en tiempo real. El **Billing Service** procesa pagos con Bold Checkout. El **Telemed Service** genera salas de videollamada con Daily.co. El **Notification Service** envía correos automáticos. Y el **Analytics Service** agrega métricas para los administradores de clínica, sin base de datos propia."

---

### Diapositiva 6: Momento 2 de 5 — Autenticación, Autorización y Seguridad
**Lo que debes decir:**
"La seguridad tiene cuatro capas. Primera: **CORS** en el API Gateway — solo acepta tráfico de nuestro dominio oficial. Segunda: **JWT descentralizado** — el User Service emite el token y cada microservicio lo valida localmente sin llamadas extra a la red, lo que reduce la latencia. Tercera: **RBAC**, control de acceso por roles — un dueño de mascota solo ve su información; un veterinario accede a historiales pero no a facturación; el administrador controla agenda y métricas de su clínica. Cuarta: **llamadas S2S internas firmadas** que impiden que usuarios externos activen flujos automáticos manualmente."

---

### Diapositiva 7: Momento 2 de 5 — Patrón SAGA
**Lo que debes decir:**
"Al tener servicios aislados, enfrentamos el reto de las transacciones distribuidas. El ejemplo clave es: ¿qué pasa cuando se agenda una cita y el pago falla? Implementamos el **patrón SAGA coreografiado**. El flujo es: una cita se crea en estado 'Pendiente de Pago'. Cuando Bold Checkout confirma el pago exitoso, el Billing Service avisa de forma interna al Appointment Service para confirmar la cita. Si el pago falla o expira, un cron job aplica una **compensación automática** y libera el cupo en la agenda sin intervención humana. Esto garantiza consistencia sin necesidad de una transacción distribuida clásica."

---

### Diapositiva 8: Momento 2 de 5 — Manejo de Bases de Datos
**Lo que debes decir:**
"Aplicamos fielmente el patrón **Database-per-Service**. Tenemos 7 bases de datos PostgreSQL físicas en Supabase, separadas lógica y físicamente. El Billing Service no puede leer directamente las tablas del EHR Service. Si una base de datos se corrompe, el daño queda encapsulado en ese único dominio, sin afectar al resto del sistema. Pueden hacer clic en cada servicio para ver sus tablas principales."

---

### Diapositiva 9: Momento 3 de 5 — Stack Tecnológico
**Lo que debes decir:**
"Para el stack, apostamos fuertemente por **TypeScript** en frontend y backend, lo que nos permitió detectar errores en tiempo de compilación y compartir interfaces entre los 8 servicios. El backend usa **Express con Node.js** para APIs REST ligeras. Las bases de datos son **PostgreSQL en Supabase**, crítico por la seguridad que exige un ecosistema de salud. Para DevOps, **GitHub Actions** automatiza el despliegue y **Docker** levanta de forma aislada nuestro stack de monitoreo con Prometheus y Grafana. Las librerías **PDFKit**, **Jest** y **Supertest** cubren generación de documentos y pruebas automatizadas."

---

### Diapositiva 10: Momento 4 de 5 — Pruebas, Despliegue y CI/CD
**Lo que debes decir:**
"Nada se despliega de forma manual. Implementamos una cultura DevOps completa con GitHub Actions. Cada push a la rama principal ejecuta 5 pasos: instalación limpia de dependencias, análisis estático con ESLint, compilación de TypeScript, suite completa de pruebas con Jest y Supertest — con cobertura superior al 80% en funciones críticas — y finalmente el despliegue automático en caliente si todo pasa. La rama main está protegida. En el carrusel de la derecha pueden ver las capturas de los pipelines exitosos de cada uno de los 8 microservicios."

---

### Diapositiva 11: Momento 4 de 5 — Monitoreo con Prometheus y Grafana
**Lo que debes decir:**
"El sistema en producción cuenta con instrumentación de métricas en tiempo real. Utilizamos **Prometheus** para hacer scraping periódico del estado de cada servicio Node.js: CPU, RAM y disponibilidad. Esos datos los centralizamos y visualizamos en **Grafana**, que nos alerta si algún servicio requiere más recursos. Ambas herramientas corren en contenedores Docker independientes. En la diapositiva pueden alternar entre la vista del dashboard de Grafana y el panel de targets de Prometheus."

---

### Diapositiva 12: Momento 5 de 5 — Demostración Funcional del Sistema
**Lo que debes decir:**
"Ahora les mostraremos el sistema funcionando en producción mediante 5 videos del flujo real. El orden es el flujo natural de un usuario nuevo:

**① Registro de Usuario**: el usuario crea su cuenta y el sistema le asigna automáticamente el rol de dueño de mascota.

**② Registro de Mascota**: el dueño registra a su mascota con especie, raza y datos básicos, vinculándola a su perfil.

**③ Agendamiento de Cita**: el dueño selecciona un horario disponible. El sistema verifica en tiempo real — si otro usuario toma el mismo horario primero, se dispara un error 409 de conflicto.

**④ Pago de Cita**: el usuario completa el pago con Bold Checkout. Al confirmarse, el SAGA actualiza automáticamente la factura y confirma la cita.

**⑤ Historial Médico**: el dueño o veterinario descarga el expediente clínico completo de la mascota en formato PDF.

Pueden hacer clic en 'Ampliar' para ver cada video en pantalla completa, y usar la barra de progreso para navegar el video."

---

### Diapositiva 13: Evidencia de Despliegue — URLs Verificadas
**Lo que debes decir:**
"Todo lo expuesto no quedó en diseño local. En este momento tenemos 10 servicios activos: el Frontend en Vercel, el API Gateway en Railway, y cada uno de los 8 microservicios desplegados en Render y Railway con sus URLs públicas verificadas. Todo el código fuente está versionado y transparente en nuestros repositorios de GitHub. Los cambios en la rama main disparan automáticamente el pipeline de CI/CD y actualizan los servicios en caliente."

---

### Diapositiva 14: Conclusiones
**Lo que debes decir:**
"A modo de balance técnico, PetWell demuestra que segmentar responsabilidades en microservicios produce dividendos reales: **8 microservicios** con lógica de negocio aislada, **7 bases de datos** PostgreSQL independientes, **más del 80% de cobertura** en pruebas automatizadas, y **3 plataformas cloud** coordinadas — Vercel, Railway y Render — resultaron en un ecosistema tolerante a fallos, profesional y en producción real. Muchas gracias."
