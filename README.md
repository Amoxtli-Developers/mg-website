# Sitio Web de Propiedades Inmobiliarias

Este es un proyecto creado con Next.js 14 que utiliza el nuevo App Router y está configurado con TypeScript. Es un sitio web de una sola página que incluye diversas secciones como Servicios, Historia, Portafolio de Propiedades, Testimonios y Contacto.

## Tecnologías Utilizadas

- **Next.js 14** con App Router
- **TypeScript**
- **Radix UI** para componentes básicos
- **Framer Motion** para animaciones
- **SwiperJS** para carruseles
- **React Hook Form** para formularios
- **Tailwind CSS** para estilos
- **Zod** para validación de formularios

## Estructura del Proyecto

```
/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── app/            # Aplicación Next.js
│   │   ├── api/        # API Routes
│   │   │   └── contact/# API para formulario de contacto
│   │   ├── layout.tsx  # Layout global
│   │   └── page.tsx    # Página principal
│   ├── components/     # Componentes React
│   │   ├── sections/   # Secciones principales
│   │   └── ui/         # Componentes de UI reutilizables
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilidades
│   ├── styles/         # Estilos globales
│   └── types/          # TypeScript types
└── package.json        # Dependencias del proyecto
```

## Instalación y Uso

1. Clona este repositorio
2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   # o
   pnpm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Características

- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Animaciones**: Implementadas con Framer Motion
- **Formulario de Contacto**: Con validación y manejo de errores
- **Carruseles**: Para mostrar propiedades y testimonios
- **Navegación por Secciones**: Con scroll suave

## Personalización

Puedes personalizar este sitio web modificando:

- Los colores y estilos en `tailwind.config.js`
- Las fuentes en `src/app/layout.tsx`
- El contenido de cada sección en sus respectivos componentes

## Licencia

[MIT](LICENSE)
# mg-website
