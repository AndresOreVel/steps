# MultiSteps

Este es un proyecto que implementa un flujo de formulario dividido en 4 pasos, diseñado para guiar al usuario de manera sencilla y validada hasta la confirmación final. 

## 1. Información personal

Nombre, email y número de teléfono.
Cada campo cuenta con validación estricta. Si algún dato no es válido, no es posible avanzar al siguiente.

## 2. Selección de plan

El segundo paso ofrece tres planes de pago: arcade, advance y pro.
Además, el usuario puede elegir entre facturación mensual o anual, actualizando los precios dinámicamente.

## 3. Complementos (Add-ons)

El tercer paso permite añadir uno o varios complementos opcionales:
servicio online, mayor almacenamiento y perfil personalizado.
Cada complemento incluye su propio precio, que se suma al total del resumen.

## 4. Resumen y confirmación

En el último paso se muestra un resumen completo de la selección del usuario, calculando el precio final.
Al hacer clic sobre el botón de finalizar, aparece un mensaje de agradecimiento
confirmando el proceso