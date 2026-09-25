# Ruta Clara · Week 7

Prototipo académico en español: una conductora revisa después de detenerse una alerta de frenada sobre una ruta ficticia, añade contexto y ve el caso pendiente de revisión humana.

## Ejecutar

```bash
npm run start
```

Abrir `http://localhost:8080`. Ejecutar `npm test` para las pruebas del clasificador local y la proyección del mapa.

## Límites

Todo es simulado: doce ventanas de telemetría inventadas, coordenadas ficticias y un evento. El modelo de regresión logística sí entrena e infiere localmente, pero su cifra no tiene validez para conducción real. La interfaz solo usa memoria del navegador y no captura datos personales. No hay sanciones ni entrenamiento autónomo. El piloto real requeriría la gobernanza y las mediciones descritas en [`docs/PACKET.md`](docs/PACKET.md).
