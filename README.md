# 🎨 Generador de Paletas de Colores

Este proyecto es una herramienta interactiva que permite generar, bloquear y copiar colores en una paleta visual estilo columna. Ideal para inspirarse en combinaciones de colores o definir una base para proyectos de diseño.

---

## 🚀 Funcionalidades

- 🔁 **Generación aleatoria de colores** en columnas
- 🔒 **Bloqueo de colores** individuales para que no cambien
- ♻️ **Botón "Cambiar"** para generar nuevos colores solo en columnas desbloqueadas
- 📋 **Copia al portapapeles** del valor RGB con un clic en el ícono de clipboard
- 🎯 **Al recargar la página**, todo se reinicia automáticamente

---

## ⚙️ Estructura del proyecto
- index.html → Estructura básica de las columnas e iconos
- styles.css → Estilos visuales, sombras, posicionamiento y feedback
- scripts.js → Lógica principal: generación, bloqueo, copia, sesión

- ## 🧠 Cómo funciona

1. Al cargar la página (`onload`), se generan 5 colores aleatorios.
2. Cada columna tiene:
   - Un icono 📋 para copiar
   - Un icono 🔒 para bloquear/desbloquear
   - Una caja blanca con el valor RGB
3. Si bloqueas un color y haces clic en **"Cambiar"**, ese color se mantiene.
4. Si recargas la página, se reinician todos los colores (incluso los bloqueados).
5. Al hacer clic en el icono de copiar, el valor RGB se guarda en el portapapeles.

---

## 🛠️ Tecnologías usadas

- HTML5
- CSS3 (Flexbox y diseño responsive)
- JavaScript (ES6+)
- Font Awesome (íconos de clipboard y candado)

---

## 📦 Cómo usar

1. Clona o descarga el repositorio.
2. Abre `index.html` en tu navegador.
3. Empieza a generar y bloquear colores. ¡Listo!

---

## 👨‍💻 Autor

Desarrollado por Claudia Candelas Oviedo.

