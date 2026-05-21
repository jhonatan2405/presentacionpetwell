# Presentación de PetWell: Plataforma Veterinaria Distribuida

¡Bienvenido al proyecto de presentación interactiva de **PetWell**! Este es un sitio web moderno e interactivo construido con **Next.js**, **React**, **Framer Motion** y **TailwindCSS** que sirve como soporte visual y presentación técnica para exponer la arquitectura distribuida y las características del sistema de gestión veterinaria **PetWell**.

---

## 🛠️ Cómo Ejecutar el Proyecto

Dado que ya hemos instalado todas las dependencias del proyecto utilizando `pnpm` (que es el gestor de paquetes recomendado para este proyecto por su archivo de bloqueo `pnpm-lock.yaml`), puedes iniciar el servidor de desarrollo de inmediato.

### Iniciar el Servidor de Desarrollo
Ejecuta el siguiente comando en tu terminal dentro de la carpeta del proyecto para iniciar la presentación:

```bash
pnpm dev
```

*(Si prefieres usar npm, también puedes correr `npm run dev` ahora que las dependencias están sincronizadas).*

### Acceder en tu Navegador
Una vez iniciado el servidor, abre tu navegador y ve a:
👉 [**http://localhost:3000**](http://localhost:3000)

Ahí verás la presentación interactiva. Puedes usar las **flechas izquierda/derecha de tu teclado** o la **barra espaciadora** para cambiar de diapositiva de forma fluida con hermosas animaciones de transición.

---

## 📁 Estructura Completa del Proyecto

A continuación, se detalla qué contiene cada una de las carpetas y archivos clave de este proyecto:

### 1. `/app` (Rutas y Páginas Principales)
Esta es la carpeta principal de la estructura de Next.js (App Router):
*   **`page.tsx`**: El núcleo de la presentación. Contiene el componente principal `PetWellPresentation` y el código de cada una de las 15 diapositivas animadas, integrando controles de teclado, progreso visual en la parte superior y lógica de navegación interactiva con Framer Motion.
*   **`layout.tsx`**: El diseño base de la aplicación. Configura la tipografía (Inter, Roboto, etc.), metadatos básicos y envuelve el proyecto con los proveedores necesarios.
*   **`globals.css`**: Contiene la configuración global de estilos y directivas de TailwindCSS.

### 2. `/components` (Componentes Reutilizables)
*   **`theme-provider.tsx`**: Administra los temas del sistema (Modo claro/oscuro) para garantizar una visualización cómoda y premium.
*   **`/ui`**: Contiene componentes estilizados y modulares de alta calidad, basados en **Radix UI** y **shadcn/ui**. Estos componentes proporcionan una interfaz sofisticada con transiciones suaves y micro-interacciones:
    *   *Navegación e Interacción:* `accordion`, `alert-dialog`, `alert`, `avatar`, `badge`, `breadcrumb`, `button`, `button-group`, `calendar`, `card`, `carousel`, `dropdown-menu`, `drawer`, `sheet`, `sidebar`, `tabs`, `tooltip`.
    *   *Formularios y Entradas:* `checkbox`, `form`, `input`, `input-group`, `input-otp`, `label`, `radio-group`, `select`, `switch`, `textarea`, `slider`.
    *   *Visualización de Datos y Carga:* `chart`, `progress`, `resizable`, `scroll-area`, `separator`, `table`, `skeleton`, `spinner`, `empty`.
    *   *Notificaciones:* `sonner`, `toast`, `toaster`, `use-toast`.
    *   *Utilitarios:* `command`, `context-menu`, `hover-card`, `menubar`, `navigation-menu`, `pagination`, `kbd`, `item`, `field`.

### 3. `/lib` (Librerías y Utilidades)
*   **`utils.ts`**: Contiene la función utilitaria `cn` para la combinación dinámica y condicional de clases CSS con Tailwind CSS y `tailwind-merge`.

### 4. `/hooks` (Hooks de React Personalizados)
*   **`use-mobile.ts`**: Hook para detectar resoluciones móviles de forma reactiva y adaptar el diseño responsivo.
*   **`use-toast.ts`**: Hook personalizado para disparar notificaciones flotantes interactivas en pantalla.

### 5. `/styles` (Estilos Adicionales)
*   **`globals.css`**: Define estilos CSS específicos y variables personalizadas para la paleta de colores corporativa y tipográfica del proyecto.

### 6. `/public` (Recursos Estáticos)
Contiene las imágenes, iconos y logotipos utilizados en la presentación.

### 7. Archivos de Configuración (Raíz)
*   **`package.json`**: Define el nombre del proyecto, scripts (`dev`, `build`, `start`, `lint`) y todas las dependencias del frontend (Framer Motion, Lucide React, Radix UI, Recharts, Tailwind, etc.).
*   **`pnpm-lock.yaml`**: Archivo de bloqueo de dependencias que garantiza que todas las librerías se instalen de manera exacta y reproducible.
*   **`tsconfig.json`**: Configuración para el compilador de TypeScript, asegurando la consistencia estricta del tipado de datos.
*   **`next.config.mjs`**: Configuración de compilación y optimización de Next.js.
*   **`postcss.config.mjs` & `components.json`**: Configuraciones de procesamiento CSS y de la biblioteca de componentes UI.

---

## 📊 Contenido de las Diapositivas (app/page.tsx)

La presentación está compuesta por **15 diapositivas (slides)** técnicamente detalladas y bellamente animadas que exponen el ecosistema PetWell:

1.  **Slide 1: Hero (Portada)**
    *   *Título:* "Plataforma Veterinaria Distribuida"
    *   *Detalles:* Logotipo oficial de PetWell, subtítulo interactivo sobre la Arquitectura de Microservicios, y badges con las tecnologías núcleo (Next.js, Node.js, PostgreSQL, Docker, Supabase).
2.  **Slide 2: Contexto del Problema**
    *   *Detalles:* Los cuatro desafíos principales detectados en clínicas tradicionales: Gestión Manual, Datos Dispersos, Experiencia Limitada del Cliente y Falta de Analíticas de Negocio.
3.  **Slide 3: Objetivos del Proyecto**
    *   *Detalles:* Enfoque doble que muestra los objetivos técnicos (escalabilidad, tolerancia a fallos, resiliencia) junto con el desglose de los tres tipos de usuarios clave (Dueños de Mascotas, Veterinarios y Administradores).
4.  **Slide 4: Arquitectura General**
    *   *Detalles:* Imagen ilustrativa premium que detalla la arquitectura de red distribuida e interactiva de PetWell.
5.  **Slide 5: Microservicios (El Núcleo)**
    *   *Detalles:* Tarjetas interactivas de los **8 microservicios independientes** desplegados en la nube (Render) con sus respectivos puertos de red y características principales:
        *   👤 *Usuarios (Puerto 3003):* JWT, roles y gestión de clínicas.
        *   🐾 *Mascotas (Puerto 3002):* Datos biológicos e historial de propietarios.
        *   📄 *Historia Clínica Electrónica (HCE) (Puerto 3004):* Expedientes y reportes PDF.
        *   📅 *Citas (Puerto 3005):* Agendamiento inteligente y control de agenda.
        *   💳 *Facturación (Puerto 3009):* Gestión de cobros e integración con pasarela de pago Bold.
        *   📹 *Telemedicina (Puerto 3006):* Videollamadas a través de WebRTC.
        *   🔔 *Notificaciones (Puerto 3007):* Envío automático de correos (SMTP).
        *   📈 *Analítica (Puerto 3008):* Tableros de control con KPIs clave de negocio.
6.  **Slide 6: Seguridad**
    *   *Detalles:* Detalla las cuatro capas de seguridad robusta del sistema: Autenticación JWT, Control de Acceso basado en Roles (RBAC), Protección CORS a nivel de servidor, y el uso de un API Gateway centralizado para enrutamiento seguro.
7.  **Slide 7: Patrón SAGA**
    *   *Detalles:* Diagrama del flujo de transacciones distribuidas de creación de cita y flujo de pago, explicando cómo se coordinan los microservicios sin acoplamiento y cómo se resuelven fallos mediante compensación.
8.  **Slide 8: Database-per-Service (Base de datos por Servicio)**
    *   *Detalles:* Soporte visual del patrón de base de datos dedicada para garantizar independencia de despliegue, escalabilidad y aislamiento de datos entre microservicios.
9.  **Slide 9: Stack Tecnológico Detallado**
    *   *Detalles:* Tarjetas que clasifican las tecnologías utilizadas por capas:
        *   *Frontend:* Next.js 14, TailwindCSS, TypeScript, React Query.
        *   *Backend:* Node.js, Express, JWT, Prisma ORM.
        *   *Bases de Datos:* PostgreSQL, Supabase, Redis.
        *   *DevOps:* Docker, GitHub Actions, Vercel, Render.
10. **Slide 10: DevOps y CI/CD**
    *   *Detalles:* Mapea visualmente el pipeline automatizado desde el commit en GitHub, ejecución de pruebas automáticas, compilación de imágenes Docker hasta el despliegue automático continuo.
11. **Slide 11: Monitoreo y Observabilidad**
    *   *Detalles:* Métricas de salud del sistema expuestas (Uptime de 99.9%, Latencia promedio de 45ms, Tasa de errores del 0.1%) y las tecnologías de observabilidad: Prometheus, Grafana, y logs centralizados.
12. **Slide 12: Pruebas (Testing)**
    *   *Detalles:* Gráficos interactivos de cobertura de pruebas: Unitarias (85% de cobertura), Integración (78%), y Pruebas de Extremo a Extremo - E2E (65%).
13. **Slide 13: Demo Funcional**
    *   *Detalles:* Resume las capacidades del sistema en vivo para el agendamiento interactivo de citas, telemedicina, HCE y pasarela de cobros, con un botón de acción.
14. **Slide 14: Conclusiones**
    *   *Detalles:* Los cuatro grandes beneficios cosechados con la arquitectura propuesta: Escalabilidad horizontal independiente, mantenibilidad simplificada, resiliencia total ante fallas y uso de tecnologías cloud-native.
15. **Slide 15: Cierre / Preguntas y Respuestas**
    *   *Detalles:* Logotipo de despedida, invitación a preguntas finales, y enlaces de navegación del proyecto (GitHub, Demo, Documentación).

---

## 🎨 Aspectos Destacados de Diseño
Este proyecto sigue estándares premium de diseño web:
*   **Aero y Glassmorphism:** Menús flotantes con fondos desenfocados (`backdrop-blur`) y bordes suaves.
*   **Animaciones Fluidas:** Framer Motion se encarga de suavizar cada entrada de texto, gráficos y cambio de diapositiva con aceleraciones físicas y amortiguación elástica.
*   **Interactividad:** Cada tarjeta cuenta con efectos hover de elevación de escala y sombras dinámicas al pasar el mouse por encima.
