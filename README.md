Proyectos de Lógica y Desarrollo Frontend - JavaScript Moderno
Este repositorio contiene una colección de tres ejercicios prácticos desarrollados con JavaScript Vanilla, centrados en la manipulación del DOM, el consumo de APIs REST, arquitectura modular y pruebas unitarias.

🚀 Contenido del Repositorio
1. Generador de Contraseñas Seguras (con Testing)
Una herramienta robusta para generar credenciales seguras siguiendo estándares de ciberseguridad.

Características: - Validación de longitud (8-20 caracteres).

Selección de parámetros (mayúsculas, números, símbolos).

Indicador visual de fortaleza de contraseña mediante algoritmos de evaluación.

Función "Copiar al portapapeles" y toggle de visibilidad.

Lo más destacado: Incluye una suite completa de pruebas unitarias con Vitest para asegurar que la lógica de generación y validación es infalible.

<p align="center">
<img src="https://github.com/user-attachments/assets/e1b511b7-e0ee-4541-b9f4-a3abb1466c9b" width="500">


<a href="https://generador-de-clave-segura.vercel.app/">🔗 Ver Demo en Vivo</a>
</p>

2. Explorador de Posts (Consumo de API REST)
Aplicación que gestiona datos asíncronos utilizando la API de JSONPlaceholder.

Características:

Carga dinámica de datos mediante fetch y async/await.

Sistema de filtrado lógico (simulación de posts publicados/borradores).

Navegación entre lista general y detalle de entrada mediante parámetros de URL (URLSearchParams).

Manejo de estados de carga y errores de red. 

<p align="center">
<img src="https://github.com/user-attachments/assets/c52d9320-6be7-4540-9aa7-c4e7e4af5ccb" width="600">


<a href="https://llamadas-api-y-mapeo-de-datos.vercel.app/">🔗 Ver Demo en Vivo</a>
</p>

3. Calculadora Científica Modular
Una calculadora funcional con soporte para operaciones aritméticas básicas y funciones trigonométricas/científicas.

Características:

Operaciones básicas, raíz cuadrada, potencias y trigonometría (sin, cos, tan).

Gestión de historial de operaciones con opción de limpieza.

Manejo de errores matemáticos (ej. división por cero o raíces negativas).

Diseño responsivo y amigable basado en CSS Grid.

🛠️ Tecnologías y Conceptos Aplicados
JavaScript ES6+: Uso de módulos (import/export), map, filter, arrow functions y template literals.

Asincronía: Manejo de promesas y consumo de APIs con fetch.

Arquitectura: Separación de lógica de negocio (helpers/generators) de la lógica de interfaz (DOM).

Unit Testing: Implementación de tests unitarios para garantizar la calidad del software.

UI/UX: Diseño moderno con CSS3, variables visuales para feedback (colores de seguridad) y accesibilidad básica.

<p align="center">
<img src="https://github.com/user-attachments/assets/db2396f6-6ca3-4e51-8818-120db3ffba22" width="400">


<a href="https://calculadora-cientifica-cb.vercel.app/">🔗 Ver Demo en Vivo</a>
</p>

📦 Instalación y Uso
Clonar el repositorio:

Bash
git clone https://github.com/TU_USUARIO/nombre-del-repo.git
Para los ejercicios con Testing (Ejercicio 1):
Asegúrate de tener Node.js instalado, luego ejecuta:

Bash
npm install
npm test
Ejecución local:
Puedes abrir los archivos index.html directamente en tu navegador o usar la extensión Live Server en VS Code para una mejor experiencia con los módulos de JavaScript.

👤 Autor
Camila Bedoya

GitHub: (https://github.com/camila0424)

LinkedIn: (https://www.linkedin.com/in/camila-bedoya/)

Este proyecto fue realizado con fines educativos para demostrar habilidades en el desarrollo de aplicaciones web robustas y escalables con JavaScript puro.
