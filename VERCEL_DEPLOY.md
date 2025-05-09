# Guía de Despliegue en Vercel

Este documento proporciona una guía paso a paso para desplegar tu portafolio en Vercel.

## Preparación previa

1. Asegúrate de tener una cuenta en [GitHub](https://github.com/) y [Vercel](https://vercel.com/)
2. Asegúrate de que tu proyecto esté subido a un repositorio de GitHub

## Opción 1: Despliegue automático con GitHub

Esta es la forma más sencilla y recomendada:

1. Accede a [Vercel](https://vercel.com/) e inicia sesión
2. Haz clic en "New Project"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Configuración:
   - Framework Preset: Next.js (detectado automáticamente)
   - Root Directory: `./` (o la carpeta donde se encuentra el proyecto)
   - Build Command: `npm run build` (por defecto)
   - Output Directory: `.next` (por defecto para Next.js)
   - Install Command: `npm install` (por defecto)
6. Haz clic en "Deploy"
7. ¡Espera a que se complete el despliegue y tendrás tu sitio en línea!

## Opción 2: Despliegue con CLI de Vercel

1. Instala la CLI de Vercel:
   ```bash
   npm install -g vercel
   ```

2. Inicia sesión en Vercel desde la terminal:
   ```bash
   vercel login
   ```

3. Navega a la carpeta de tu proyecto y ejecuta:
   ```bash
   vercel
   ```

4. Sigue las instrucciones en la terminal:
   - Configura el proyecto como se te solicite
   - Vercel detectará automáticamente que es un proyecto Next.js

5. Para desplegar en producción:
   ```bash
   vercel --prod
   ```

## Configuración adicional

### Dominio personalizado

1. En el dashboard de Vercel, selecciona tu proyecto
2. Ve a "Settings" > "Domains"
3. Añade tu dominio personalizado y sigue las instrucciones para verificarlo

### Variables de entorno

Si tu proyecto usa variables de entorno:

1. En el dashboard de Vercel, selecciona tu proyecto
2. Ve a "Settings" > "Environment Variables"
3. Añade tus variables de entorno (con su nombre y valor)
4. Redespliega el proyecto para aplicar los cambios

### Configuración de GitHub

Para automatizar el despliegue con cada push:

1. En el dashboard de Vercel, selecciona tu proyecto
2. Ve a "Settings" > "Git"
3. Configura las opciones según tus preferencias

## Solución de problemas comunes

- **Error durante la construcción**: Asegúrate de que todos los paquetes estén instalados correctamente
- **Problemas con rutas**: Verifica la configuración en `next.config.js` y `vercel.json`
- **Error 404 en rutas dinámicas**: Asegúrate de que las rutas estén configuradas correctamente

## Recursos adicionales

- [Documentación oficial de Vercel](https://vercel.com/docs)
- [Documentación de Next.js en Vercel](https://nextjs.org/docs/deployment)
