# 📚 Entregable 1 - Simulador de Librería

**Autor:** Nicolás Báez  
**Curso:** JavaScript Flex - Coderhouse  
**Entrega:** Primera Entrega (Simulador - Lógica JS)

---

## 📝 Descripción del proyecto

Este proyecto consiste en un **simulador de librería**, pensado como herramienta interna para una empresa que gestiona su base de datos de libros. El sistema permite cargar libros nuevos, filtrar por precio, buscar por autor y generar resúmenes.

Está desarrollado únicamente con **JavaScript puro**, interactuando con el usuario a través de **prompt, alert y console.log**, tal como exige la consigna.

---

## 🎯 Funcionalidades principales

1. **Carga de libros al sistema**  
   - El usuario puede ingresar varios libros, incluyendo: nombre, precio, autor y stock.
   - Se validan campos vacíos, duplicados y valores inválidos.

2. **Filtrado por precio**  
   - Se muestran los libros cuyo precio supera los $5000, utilizando `.filter()` y `.map()`.

3. **Búsqueda por autor**  
   - Mediante un ciclo `while`, el usuario puede buscar libros por autor, usando `.find()`.

4. **Estadísticas**  
   - Se muestra la cantidad total de títulos cargados.
   - Se suma el stock total disponible.
   - Se genera un resumen personalizado por cada libro (`map()`).

---

## 🧠 Herramientas y conceptos utilizados

- Variables (`let`, `const`)
- Condicionales (`if`, `else`)
- Estructuras repetitivas (`for`, `while`)
- Métodos de arrays (`push`, `filter`, `map`, `find`)
- Funciones con parámetros y retorno
- Interacción por consola y diálogos (`prompt`, `alert`, `console.log`)
- Validación de entradas
- Formato camelCase

---

## 💬 Nota

Este proyecto no utiliza DOM ni estilos. Está enfocado únicamente en la **lógica de programación** en JavaScript, cumpliendo todos los lineamientos de la Primera Entrega del curso.
