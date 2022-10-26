# Aplicación de ejemplo para el manejo de Formularios Anidados en Angular

Esta es una aplicación básica con un formulario de check-out simplificado con direcciones de envío y facturación, la cual usamos como base en este [video](https://youtu.be/R63hcU2wqj0) para mostrar 3 maneras de crear un componente reutilizable para los inputs de las direcciones para evitar la repetición de código sin perder la compatibilidad con las librerias de formularios de Angular.

El repositorio esta divido en 4 ramas, master con el estado inicial de la aplicación y las 3 ramas para cada una de las opciones de manejo.

## Ramas (Branches)

- [Estado inicial](https://github.com/ako-tech/angular-nested-forms)
- [SubForm Dirigidos por plantilla](https://github.com/ako-tech/angular-nested-forms/tree/subform-templatedriven)
- [SubForm Reactivos](https://github.com/ako-tech/angular-nested-forms/tree/subform-reactive)
- [ControlValueAccessor](https://github.com/ako-tech/angular-nested-forms/tree/cva)

## Comandos

El proyecto está realizado sobre la v14.2 de Angular.

Para levantar un servidor de desarrollo usar el comando `ng serve`. Este estará disponible en `http://localhost:4200/`.

Para compilar la aplicación usar el comando `ng build`. Pudiendo usar la opcion `--prod` para compilar la versión de producción. Los archivos de la aplicación estarán disponibles en la carpeta `dist/`.
