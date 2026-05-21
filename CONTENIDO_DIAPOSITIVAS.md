# Contenido Textual de las Diapositivas - PetWell

A continuación se transcribe **literalmente** todo el texto que aparece escrito en cada una de las 14 diapositivas de la presentación.

---

## Diapositiva 1: Portada
**Título Central:** PetWell — Plataforma Veterinaria
**Subtítulo:** Sustentación Final · Arquitectura de Software
**Miembros del Equipo (Tarjetas con hover elevado y borde teal):**
*   Jhonatan Barrera (jhonatan2405) - Ingeniero de Software → GitHub
*   Juan Arguelles (juanxpz1) - Ingeniero de Software → GitHub
*   Jhon Garrido (jhoning-21) - Ingeniero de Software → GitHub
**Tecnologías (chips con hover teal):** Next.js, Node.js, TypeScript, PostgreSQL, Supabase, Docker, GitHub Actions, Vercel, Railway, Render
**Botón:** Ver Producción: petwell-green.vercel.app

---

## Diapositiva 2: Contexto del Problema y Necesidades
**Header:** Contexto del Problema y Necesidades de Solución | Momento 1 de 5

**El Problema:**
*   **Agendas en papel:** Muchas clínicas manejan sus citas manualmente, lo que causa dobles reservas y desorden operativo.
*   **Historiales dispersos:** La información clínica no está centralizada. Si el paciente cambia de veterinario, se pierde el contexto médico.
*   **Pagos desconectados:** Los cobros manuales o en efectivo dificultan la contabilidad diaria y generan inasistencias.
*   **Telemedicina informal:** Consultas por videollamada externa sin dejar un registro formal en el expediente del animal.

**Los Usuarios:**
*   **Dueño de Mascota:** Busca agendar citas, ver historiales y pagar consultas desde una sola plataforma unificada.
*   **Veterinario:** Necesita registrar consultas y gestionar expedientes sin preocuparse por cruces en la agenda.
*   **Admin de Clínica:** Requiere control sobre tarifas, métricas de ingresos y administración del personal de su sede.

---

## Diapositiva 3: Objetivos y Alcance
**Header:** Objetivos, Justificación y Alcance | Momento 1 de 5
**Frase Central:** Sistema con múltiples clínicas soportado por arquitectura de microservicios.

**Pilares (Tarjetas):**
*   **Independencia:** Cada microservicio funciona de forma aislada. Si el servicio de pagos experimenta un fallo, el agendamiento y el historial siguen operando con normalidad.
*   **Aislamiento:** El historial clínico se guarda en bases de datos separadas. Ningún otro servicio tiene acceso directo a estos datos médicos sin la ruta adecuada.
*   **Despliegue Independiente:** Podemos actualizar y mejorar cada módulo del sistema sin tener que detener ni compilar nuevamente toda la plataforma.
*   **Coordinación:** Usamos el patrón SAGA para que procesos complejos (como reservar una cita y pagarla) se ejecuten paso a paso de forma consistente.

**Alcance:**
*   8 microservicios operando.
*   APIs externas: Bold, Daily.co.
*   Integración y despliegue automatizado.

**¿Por qué microservicios y no un monolito?**
En una aplicación monolítica tradicional, un error en el módulo de facturación puede hacer caer toda la plataforma. Con microservicios, logramos aislar las fallas y mantener los servicios vitales (como el historial médico) reduciendo el impacto de fallos en otros módulos.

---

## Diapositiva 4: Arquitectura General
**Header:** Arquitectura General del Sistema | Momento 2 de 5 — Diagrama de infraestructura

*(Diagrama Interactivo de Topología de Red — se puede hacer clic en cada capa)*
*   **Capa 1: Frontend** (React, Next.js, Vercel). Interfaz web. No se comunica directamente con las bases de datos; todas las peticiones pasan primero por el API Gateway.
*   **Capa 2: API Gateway** (NodeJS, http-proxy, Railway - Port 3001). Única puerta de entrada. Enruta las peticiones al microservicio correspondiente y aplica seguridad CORS.
*   **Capa 3: 8 Microservicios** (Node.js, Express, TS). Desplegados en Render y Railway. Se comunican por HTTP utilizando una firma interna compartida (x-internal-service-key) para procesos automáticos S2S.
*   **Capa 4: Bases de Datos** (PostgreSQL, Supabase). Aislamiento de datos. Cada servicio tiene su propia base de datos PostgreSQL. Analytics no tiene DB propia.

**Chips de Comunicación:**
*   REST via API Gateway — Comunicación HTTP
*   Llamadas internas S2S — x-internal-service-key

---

## Diapositiva 5: Los 8 Microservicios
**Header:** Función de cada Microservicio | Momento 2 de 5

*   **User Service (3003 - Railway):** Autenticación y login. Emite tokens JWT con el rol del usuario.
*   **Pet Service (3002 - Render):** Perfiles de mascotas y gestión de dueños.
*   **EHR Service (3004 - Railway):** Gestión del historial clínico y auditoría de cambios.
*   **Appointment (3005 - Render):** Agendamiento y control de horarios en tiempo real.
*   **Billing Service (3009 - Render):** Facturación y procesamiento de pagos con Bold Checkout.
*   **Telemed Service (3006 - Render):** Salas de videollamada generadas bajo demanda con Daily.co.
*   **Notification (3007 - Render):** Envío de correos y notificaciones de citas.
*   **Analytics Service (3008 - Render):** Genera métricas y dashboards para la administración. (Sin DB propia — Read-only aggregator)

---

## Diapositiva 6: Seguridad
**Header:** Autenticación, Autorización y Seguridad | Momento 2 de 5

*   **Validación JWT Local:** El token contiene el ID del usuario y su rol. Cada microservicio valida el token localmente sin hacer llamadas adicionales. Si no es válido, se bloquea inmediatamente.
*   **Control por Roles (RBAC):** El dueño de mascota solo ve su propia información. El veterinario accede a historiales clínicos pero no a la facturación. El administrador tiene control sobre la agenda y métricas de su clínica.
*   **Llamadas Internas S2S:** Para procesos automáticos entre servicios (ej. confirmar pago), se usa una cabecera interna firmada. Esto evita que usuarios externos activen estos flujos manualmente.
*   **Seguridad CORS:** El API Gateway solo acepta peticiones desde el dominio frontend oficial. Cualquier otro origen es rechazado automáticamente.

---

## Diapositiva 7: Patrón SAGA
**Header:** Patrón SAGA para Coordinación entre Servicios | Momento 2 de 5
*   *(Imagen del Flujo SAGA: Cita Pendiente → Pago Confirmado → Cita Confirmada → Compensación si falla)*
*   **Texto inferior:** Llamada interna S2S: Cita CREADA → Pago Confirmado → Cita CONFIRMADA. Compensación automática si el pago falla.

---

## Diapositiva 8: Bases de Datos
**Header:** Manejo de Bases de Datos | Momento 2 de 5 — Database per Service

*   **User Service DB:** Tablas: users, roles, clinics. Información de cuentas, roles de acceso y datos de las clínicas.
*   **Pet Service DB:** Tablas: pets, pet_owners. Perfiles de mascotas y la relación con sus dueños.
*   **EHR Service DB:** Tablas: ehr_records, vaccinations. Historias clínicas electrónicas y registro de vacunas aplicadas.
*   **Appointment DB:** Tablas: appointments, schedules, vetblocks. Gestión de la agenda, horarios disponibles y citas médicas.
*   **Billing DB:** Tablas: invoices, payments, pricing. Facturas generadas, pagos registrados y configuración de tarifas.
*   **Telemed DB:** Tablas: telemed_sessions. Registro y control de acceso a las salas de videollamada.
*   **Notification DB:** Tablas: notifications. Historial de correos y alertas enviadas a los usuarios.

---

## Diapositiva 9: Stack Tecnológico
**Header:** Stack Tecnológico | Momento 3 de 5

*   **Lenguajes (TypeScript, JavaScript):** TypeScript detecta errores antes de producción, asegurando contratos claros entre los 8 servicios.
*   **Frameworks (Next.js, Express, Node.js):** Next.js para el frontend; Express para APIs REST ligeras en cada microservicio.
*   **Bases de Datos (PostgreSQL, Supabase):** PostgreSQL por robustez transaccional y seguridad, administrada en la nube con Supabase.
*   **DevOps (GitHub Actions, Docker):** GitHub Actions para despliegue automático. Docker exclusivamente para el stack de monitoreo (Prometheus y Grafana).
*   **Librerías (PDFKit, Jest, Supertest):** PDFKit genera expedientes médicos en PDF. Jest y Supertest validan la lógica con pruebas automatizadas.
*   **Cloud (Vercel, Railway, Render):** Vercel aloja el frontend. Render y Railway alojan los microservicios backend de forma distribuida.

---

## Diapositiva 10: CI/CD Pipeline
**Header:** Pruebas, Despliegue y Monitoreo | Momento 4 de 5 — CI/CD y GitHub Actions

**Pruebas:**
*   **Unitarias + Integración:** Jest y Supertest simulan peticiones HTTP reales para validar la lógica de negocio.
*   **Mocks:** Conexiones a bases de datos y servicios externos mockeadas para pruebas rápidas e independientes.
*   **Evidencia:** Cobertura superior al 80% en sentencias y funciones críticas (ej. Billing y Appointment).

**5 Pasos del Pipeline:**
1. Descarga Limpia: Instalación de dependencias exactas para entorno idéntico.
2. Análisis Estático: Revisión de código con ESLint para prevenir malas prácticas.
3. TS Compiler: Compilación de TypeScript — falla si hay errores de sintaxis.
4. Suite de Calidad: Pruebas automatizadas completas. Si alguna falla, el proceso se detiene.
5. Despliegue Automático: Si todo pasa, la nueva versión se publica en producción automáticamente.

**Carrusel de Capturas (rotación automática cada 4s):** Pipelines exitosos de los 8 microservicios en GitHub Actions. Botón "Ampliar" para ver en pantalla completa.

---

## Diapositiva 11: Monitoreo
**Header:** Monitoreo con Prometheus y Grafana | Momento 4 de 5

**Métricas Instrumentadas:**
*   **Consumo de CPU:** Mide el procesamiento en tiempo real. Un valor alto alerta sobre necesidad de escalar.
*   **Memoria RAM:** Monitorea el uso de memoria para prevenir caídas por recursos insuficientes.
*   **Estado del Servicio:** Verifica constantemente que el microservicio esté encendido y respondiendo.

**¿Cómo funciona el stack?**
→ Prometheus y Grafana se ejecutan en contenedores Docker independientes.
→ Prometheus recolecta métricas de los servicios; Grafana las visualiza en dashboards en tiempo real.

*(Tabs interactivos: "NodeJS Application (Grafana)" y "Target Health (Prometheus)")*

---

## Diapositiva 12: Demostración Funcional del Sistema
**Header:** Demostración Funcional del Sistema | Momento 5 de 5

**Player de video con 5 flujos reales grabados en producción:**

1. **① Registro de Usuario** *(registro de usuario.mp4)*
   - Subtítulo: Crear cuenta como dueño de mascota
   - El usuario se registra; el sistema le asigna automáticamente el rol de dueño de mascota.

2. **② Registro de Mascota** *(registro de mascota.mp4)*
   - Subtítulo: Vincular mascota al perfil del dueño
   - El dueño registra especie, raza y datos básicos. El sistema asocia la mascota a su cuenta.

3. **③ Agendamiento de Cita** *(Agendamiento de cita.mp4)*
   - Subtítulo: Seleccionar horario disponible
   - El sistema verifica disponibilidad en tiempo real. Conflictos producen error HTTP 409.

4. **④ Pago de Cita** *(Pago de cita.mp4)*
   - Subtítulo: Procesamiento seguro con Bold
   - Al confirmarse el pago, el SAGA marca la factura como pagada y confirma la cita automáticamente.

5. **⑤ Historial Médico** *(Descargar historial medico.mp4)*
   - Subtítulo: Descargar expediente del paciente
   - El dueño o veterinario descarga el historial clínico completo en formato PDF.

**Controles del player:** Play/Pause, barra de progreso (timeline scrubber), tiempo actual/total, botón "Ampliar" → pantalla completa con su propia barra de control. Loop automático. Sin sonido.

---

## Diapositiva 13: URLs de Producción
**Header:** URLs de Producción Verificadas | Evidencia de despliegue

**Deploys activos (todos con estado "✅ OK"):**
Frontend Principal, API Gateway central, User Service, EHR Service, Pet Service, Appointment Service, Billing Service, Telemed Service, Notification Service, Analytics Service.

**GitHub:** Repositorios fuente de Jhonatan Barrera (jhonatan2405), Juan Arguelles (juanxpz1) y Jhon Garrido (jhoning-21).
"Los cambios en la rama principal actualizan automáticamente los servicios desplegados."

---

## Diapositiva 14: Conclusiones
**Header:** Conclusiones | Balance técnico final

*   **8 Microservicios** — Negocio aislado por dominio.
*   **7 Bases de Datos** — PostgreSQL independiente por servicio.
*   **+80% Cobertura de Tests** — Calidad validada con Jest y Supertest.
*   **3 Plataformas Cloud** — Vercel, Railway, Render.
*   "¡Muchas Gracias! Sistema veterinario basado en microservicios con despliegue y monitoreo funcional."
