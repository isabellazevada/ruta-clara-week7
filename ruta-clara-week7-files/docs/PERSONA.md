# Prueba de persona · Ruta Clara

**25 de septiembre de 2026 · Prueba sintética, no entrevista con conductora real.**

## Persona y método

María, conductora ficticia de colectivo de 46 años, usa un Android antiguo, tiene poco tiempo para leer y teme que una alerta errónea afecte sus ingresos. En un chat nuevo se le mostraron cuatro capturas consecutivas: consentimiento, ruta, alerta de frenada y resultado tras responder. Se le pidió pensar en voz alta como usuaria primeriza. Las observaciones siguientes son respuestas de la persona simulada, no evidencia de campo.

## Confusiones registradas

| Pantalla | Lo que dijo María | Riesgo |
| --- | --- | --- |
| Consentimiento | “Veo ‘Ver viaje simulado’ y eso tocaría, pero está apagado. Ah, primero tengo que marcar la casilla.” | Fricción inicial; texto abundante. |
| Ruta | “Tocaría [el signo rojo] porque parece que pasó algo. Si no responde, buscaría más abajo.” | El marcador parece interactivo sin serlo. |
| Alerta | “¿99%? ¿Eso quiere decir que ya decidieron que frené mal? [...] Antes de elegir, querría saber quién va a leer mi respuesta y si puede afectar mi trabajo.” | El porcentaje se interpreta como juicio laboral. |
| Resultado | “Abajo todavía aparece ‘1 sin resolver’, aunque ya contesté. Pensaría que mi respuesta no sirvió y quizá tocaría ‘Deshacer mi respuesta’ para intentarlo otra vez.” | Riesgo principal: deshacer una respuesta correcta o abandonar. |

**Punto de abandono declarado:** “Abandonaría la tarea si, después de contestar, sigue diciendo ‘sin resolver’ y no encuentro una explicación clara de qué pasa con mi respuesta.”

## Corrección realizada

- El contador conserva el valor **1** porque no existe cierre humano, pero ahora se llama **“pendiente de revisión”**. El texto debajo aclara que la respuesta sí suma a **“con contexto”** y que esta demo no tiene revisor activo.
- El estado de respuesta dice **“Respuesta guardada en esta demo”** y explica que solo vive en pantalla, se borra al recargar y nadie externo la recibe. Diferencia la demostración de un eventual piloto real.
- Junto al porcentaje se aclara que proviene de datos inventados y que no prueba mala conducta. La cifra se presenta como señal de frenada, no como probabilidad de culpa.

## Comprobación y límite

`npm test`: **3/3 pruebas pasan** después del cambio (clasificador, validación de telemetría y proyección del mapa). Se revisaron las cadenas de interfaz y el estado calculado; **no se ha hecho una segunda prueba de persona ni se ha redeplegado esta corrección**. El marcador rojo y la carga de lectura inicial quedaron como oportunidades posteriores. El URL público puede seguir mostrando la versión anterior hasta publicar este commit.
