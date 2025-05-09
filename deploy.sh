#!/bin/bash

# Script para preparar y desplegar el portafolio a Vercel

echo "=== 🚀 Preparando proyecto para Vercel ==="

# Instalar dependencias
echo "=== 📦 Instalando dependencias ==="
npm install

# Ejecutar tests si existen
if grep -q "\"test\":" package.json; then
  echo "=== 🧪 Ejecutando tests ==="
  npm test
fi

# Construir el proyecto
echo "=== 🔨 Construyendo el proyecto ==="
npm run build

# Iniciar en modo desarrollo para probar localmente
echo "=== 🌐 Iniciando servidor local para pruebas ==="
echo "=== ℹ️ Presiona Ctrl+C cuando hayas terminado de probar ==="
npm run dev

# Instrucciones para desplegar
echo ""
echo "=== 📋 Instrucciones para desplegar a Vercel ==="
echo "1. Asegúrate de tener instalada la CLI de Vercel: npm install -g vercel"
echo "2. Ejecuta 'vercel login' si aún no has iniciado sesión"
echo "3. Ejecuta 'vercel' para desplegar en entorno de pruebas"
echo "4. Ejecuta 'vercel --prod' para desplegar a producción"
echo ""
echo "=== 🎉 ¡Todo listo! ==="