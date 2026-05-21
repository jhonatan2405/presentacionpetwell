# Contenido Textual de las Diapositivas - PetWell

A continuación se transcribe **literalmente** todo el texto que aparece escrito en cada una de las 14 diapositivas de la presentación.

---

## Diapositiva 1: Portada
**Título Central:** PetWell — Plataforma Veterinaria
**Subtítulo:** Sustentación Final · Arquitectura de Software
**Miembros del Equipo (Tarjetas):**
*   Jhonatan Barrera (jhonatan2405) - Ingeniero de Software
*   Juan Arguelles (juanxpz1) - Ingeniero de Software
*   Jhon Garrido (jhoning-21) - Ingeniero de Software
**Tecnologías:** Next.js, Node.js, TypeScript, PostgreSQL, Supabase, Docker, GitHub Actions, Vercel, Railway, Render
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
En una aplicación monolítica tradicional, un error en el módulo de facturación puede hacer caer toda la plataforma. Con microservicios, logramos aislar las fallas y mantener los servicios vitales (como el historial médico) reducir el impacto de fallos en otros módulo.

---

## Diapositiva 4: Arquitectura General
**Header:** Arquitectura General del Sistema | Momento 2 de 5 — Diagrama de infraestructura

*(Diagrama Interactivo de Topología de Red - Capas)*
*   **Capa 1: Frontend** (React, Next.js, Vercel). Interfaz web. No se comunica directamente con las bases de datos; todas las peticiones pasan primero por el API Gateway.
*   **Capa 2: API Gateway** (NodeJS, http-proxy, Railway). Única puerta de entrada. Enruta las peticiones al microservicio correspondiente y aplica seguridad CORS.
*   **Capa 3: 8 Microservicios** (Node.js, Express, TS). Desplegados en Render y Railway. Se comunican por HTTP utilizando una firma interna compartida para procesos automáticos.
*   **Capa 4: Bases de Datos** (PostgreSQL, Supabase). Aislamiento de datos. Cada servicio tiene su propia base de datos PostgreSQL, asegurando la privacidad del historial médico.

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
*   **Analytics Service (3008 - Render):** Genera métricas y dashboards para la administración.

---

## Diapositiva 6: Seguridad
**Header:** Autenticación, Autorización y Seguridad | Momento 2 de 5

*   **Validación JWT Local:** El token contiene el ID del usuario y su rol. Cada microservicio valida el token localmente sin hacer llamadas adicionales, lo que hace el sistema más rápido. Si el token no es válido, se bloquea la solicitud inmediatamente.
*   **Control por Roles:** El dueño de mascota solo ve su propia información. El veterinario accede a historiales clínicos pero no a la facturación. El administrador tiene control sobre la agenda y métricas de su clínica.
*   **Llamadas Internas S2S:** Para procesos automáticos entre servicios (ej. confirmar pago), usamos una cabecera interna firmada. Esto evita que usuarios externos puedan activar estos flujos de forma manual.
*   **Seguridad CORS:** El API Gateway solo acepta peticiones desde nuestro dominio frontend oficial. Cualquier intento desde otro origen es rechazado automáticamente.

---

## Diapositiva 7: Patrón SAGA
**Header:** Patrón SAGA para Coordinación entre Servicios | Momento 2 de 5
*   *(Visual de la Imagen del Flujo SAGA)*
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

*   **Lenguajes (TypeScript, JavaScript):** TypeScript nos ayuda a detectar errores antes de ejecutar el código en producción, asegurando contratos claros entre servicios.
*   **Frameworks (Next.js, Express, Node.js):** Next.js para el frontend web y Express en el backend para construir APIs ligeras y rápidas en cada microservicio.
*   **Bases de Datos (PostgreSQL, Supabase):** PostgreSQL por su robustez transaccional y seguridad, alojada y administrada en la nube mediante Supabase.
*   **DevOps (GitHub Actions, Docker):** GitHub Actions para despliegue automático. Docker se usó exclusivamente para encapsular el entorno de monitoreo (Prometheus y Grafana).
*   **Librerías (PDFKit, Jest, Supertest):** PDFKit para generar expedientes médicos. Jest y Supertest para pruebas automatizadas que garantizan la calidad del software.
*   **Cloud (Vercel, Railway, Render):** Vercel aloja el frontend. Render y Railway alojan los microservicios backend de forma distribuida e independiente.

---

## Diapositiva 10: CI/CD Pipeline
**Header:** Pruebas, Despliegue y Monitoreo | Momento 4 de 5 — CI/CD y GitHub Actions

**Pruebas:**
*   **Unitarias + Integración:** Suites de prueba con Jest y Supertest para validar la lógica de negocio simulando peticiones HTTP reales.
*   **Mocks:** Las conexiones a bases de datos y servicios externos están mockeadas, permitiendo pruebas rápidas e independientes.
*   **Evidencia:** Cobertura superior al 80% en sentencias y funciones críticas (ej. Billing y Appointment).

**5 Pasos del Pipeline:**
1. Descarga Limpia: Instalación de dependencias exactas para asegurar un entorno idéntico.
2. Análisis Estático: Revisión de código con ESLint para prevenir malas prácticas.
3. TS Compiler: Compilación de TypeScript que falla si detecta errores de sintaxis.
4. Suite de Calidad: Ejecución de pruebas automatizadas. Si alguna falla, se detiene el proceso.
5. Despliegue Automático: Si todo es exitoso, la nueva versión se publica automáticamente en producción.

**Carrusel de Capturas:** Evidencia del CI/CD en producción (Pipelines exitosos)

---

## Diapositiva 11: Monitoreo
**Header:** Monitoreo con Prometheus y Grafana | Momento 4 de 5

**Métricas Instrumentadas:**
*   **Consumo de CPU:** Mide el porcentaje de procesamiento en tiempo real. Un valor alto alerta sobre la necesidad de escalar los recursos.
*   **Memoria RAM:** Monitorea el uso de memoria para prevenir caídas de los microservicios por falta de recursos o picos inesperados.
*   **Estado del Servicio:** Verifica constantemente que el microservicio esté encendido y respondiendo de manera saludable.

**¿Cómo funciona el stack?**
→ Prometheus y Grafana se ejecutan en contenedores Docker independientes.
→ Prometheus recolecta métricas de los servicios y Grafana las dibuja en dashboards en tiempo real.

---

## Diapositiva 12: Demostración
**Header:** Demostración Funcional del Sistema | Momento 5 de 5

1. **Registro de Usuario (Crear cuenta como dueño de mascota):** El usuario se registra en la plataforma. El sistema le asigna automáticamente el rol adecuado para proteger su acceso a los datos.
2. **Agendar Cita (Seleccionar horario disponible):** El dueño selecciona una fecha y el sistema verifica en tiempo real. Si dos usuarios eligen el mismo horario, el segundo recibe un mensaje de conflicto.
3. **Pagar Cita (Procesamiento seguro con Bold):** El usuario realiza el pago. Al confirmarse, el sistema marca la factura como pagada y confirma la cita automáticamente.
4. **Registrar Historial (Veterinario completa el expediente):** Durante la consulta, el veterinario registra diagnósticos y vacunas. El sistema guarda la información y genera un PDF del expediente.
5. **Telemedicina (Videollamada integrada):** El sistema genera salas virtuales temporales y seguras para que el veterinario y el dueño se conecten directamente.

---

## Diapositiva 13: URLs de Producción
**Header:** URLs de Producción Verificadas | Evidencia de despliegue

**Deploys:** Frontend Principal, API Gateway central, User Service micro, EHR Service micro, Pet Service micro, Appointment Service, Billing Service micro, Telemed Service micro, Notification Service, Analytics Service (Todos con estado "✅ OK").
**GitHub:** Repositorios fuente de Jhonatan Barrera, Juan Arguelles y Jhon Garrido.
"Los cambios en la rama principal actualizan todo el clúster al instante."

---

## Diapositiva 14: Conclusiones
**Header:** Conclusiones | Balance técnico final

*   **8 Microservicios** (Negocio aislado)
*   **7 Bases de Datos** (PostgreSQL independiente)
*   **+80% Cobertura de Tests** (Calidad validada)
*   **3 Plataformas Cloud** (Vercel, Railway, Render)
*   "¡Muchas Gracias! Sistema veterinario basado en microservicios con despliegue y monitoreo funcional."
