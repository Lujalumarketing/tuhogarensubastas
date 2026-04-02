# Javier Martinez | Tu Hogar en Subastas

Landing one page creada con React 19 + TypeScript estricto + Vite 8 + Tailwind CSS 4.2.2, preparada para desplegar en Cloudflare Pages.

## Stack

- React 19
- TypeScript (strict)
- Vite 8
- Tailwind CSS 4.2.2 (`@tailwindcss/vite`)
- UI components estilo Shadcn con primitives Radix (`Button`, `Card`, `Accordion`)

## 1) Instalacion

```bash
npm install
```

## 2) Ejecutar en local

```bash
npm run dev
```

Vite mostrara una URL local (normalmente `http://localhost:5173`).

## 3) Build de produccion

```bash
npm run build
```

El resultado se genera en la carpeta `dist`.

## 4) Despliegue en Cloudflare Pages

### Opcion A: Conectar repositorio (recomendado)
1. Sube este proyecto a GitHub/GitLab.
2. En Cloudflare Pages, crea un nuevo proyecto y conecta el repo.
3. Configura:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Guarda y despliega.

### Opcion B: Direct Upload
1. Genera build local:

```bash
npm run build
```

2. Sube la carpeta `dist` mediante el flujo de Direct Upload en Cloudflare Pages.

Opcional con Wrangler:

```bash
npx wrangler pages deploy dist
```

## 5) Configuracion Cloudflare Pages requerida

- Framework preset: `Vite` (si aplica)
- Build command: `npm run build`
- Build output directory: `dist`

## 6) Que editar antes de publicar

Archivo principal de configuracion: `src/data/siteConfig.ts`

Actualiza:
- `whatsAppNumber`: numero en formato internacional sin `+` ni espacios
- `instagramUrl`: URL real de Instagram
- `founderImagePath`: ruta de la imagen principal (actual `/foto javi camisa blanca-1536.webp`)
- `defaultWhatsAppMessage`: mensaje por defecto de contacto
- textos generales de Hero, Training, Story y CTA final

## 7) Como cambiar textos y precios

- Servicios y precios: `src/data/services.ts`
- Preguntas frecuentes: `src/data/faqs.ts`
- Textos generales de marca: `src/data/siteConfig.ts`

## 7.1) Guia de estilo de copy (obligatoria)

- Titulos y labels cortos: sin punto final.
- Parrafos completos: con punto final.
- Preguntas: siempre con signos de apertura y cierre (`¿ ... ?`).
- Tildes y ortografia: mantener espanol correcto en todo el contenido visible.
- Consistencia: conservar el mismo tono cercano y profesional en todos los bloques.

Ejemplos:
- Correcto label: `Servicios`
- Incorrecto label: `Servicios.`
- Correcto parrafo: `Opciones claras para que avances con confianza, segun tu momento.`

## 8) Archivos de deploy SPA para Cloudflare

- `public/_redirects` incluye: `/* /index.html 200`
- `public/_headers` incluye cabeceras basicas de seguridad y cache para assets

## 9) Estructura principal

```txt
/src
  /components
  /data
  /assets
  App.tsx
  main.tsx
  styles.css
/public
  _redirects
  _headers
  founder-placeholder.jpg
README.md
package.json
vite.config.js
```
