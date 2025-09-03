# PRD: Mario Runner - Juego Arduino Esplora

## 1. Resumen Ejecutivo

**Nombre del Proyecto:** Mario Runner Arduino
**Plataforma:** Arduino Esplora + p5.js
**Tipo de Juego:** Endless Runner en tercera persona
**Duración Estimada de Desarrollo:** 2-3 semanas

### Descripción General
Juego de plataformas tipo "endless runner" donde Mario corre continuamente esquivando obstáculos, controlado mediante sensores físicos del Arduino Esplora para crear una experiencia inmersiva y única.

## 2. Objetivos del Proyecto

### Objetivos Principales
- Crear una experiencia de juego innovadora combinando hardware y software
- Demostrar las capacidades del Arduino Esplora como controlador de juego
- Implementar controles físicos intuitivos para movimiento y salto
- Desarrollar un sistema de juego progresivo y adictivo

### Objetivos Secundarios
- Integración fluida entre Arduino y p5.js mediante p5.serialport
- Interfaz visual atractiva con estética retro de Mario
- Sistema de puntuación y progresión

## 3. Especificaciones Técnicas

### Hardware Requerido
- Arduino Esplora
- Cable USB para conexión con PC
- Computadora con navegador web compatible

### Software y Librerías
- **Motor Gráfico:** p5.js
- **Comunicación:** p5.serialport library
- **Lenguaje:** JavaScript (p5.js) + Arduino C++
- **Navegador:** Chrome/Firefox (con soporte WebSerial)

### Arquitectura del Sistema
```
Arduino Esplora → Serial Port → p5.serialport → p5.js → Canvas HTML5
```

## 4. Controles y Mecánicas de Juego

### Sistema de Control

#### Movimiento Horizontal (Eje X)
- **Sensor:** Linear Potentiometer del Arduino Esplora
- **Función Arduino:** `Esplora.readSlider()`
- **Rango Real:** 0-1023 (10-bit ADC, 0-5V)
- **Resolución:** 4.9mV por unidad
- **Función:** Controla la posición lateral de Mario
- **Responsividad:** Tiempo real, sin lag perceptible

#### Salto (Eje Y)
- **Sensor:** Micrófono del Arduino Esplora
- **Trigger:** Nivel de sonido > umbral configurado
- **Función:** Hace que Mario salte
- **Cooldown:** 0.5 segundos entre saltos para evitar spam

### Mecánicas Core

#### Movimiento Base
- Mario corre automáticamente hacia adelante (velocidad constante)
- Movimiento lateral suave basado en potenciómetro
- Gravedad realista para saltos
- Animación de carrera continua

#### Sistema de Obstáculos
- **Tipos de Obstáculos:**
  - Goombas (enemigos caminando)
  - Tubos verdes (estáticos, requieren salto)
  - Hoyos (requieren salto o movimiento lateral)
  - Bloques suspendidos (requieren agacharse o movimiento lateral)

#### Generación Procedural
- Spawn de obstáculos aleatorio con dificultad progresiva
- Distancia mínima entre obstáculos para mantener jugabilidad
- Patrón de dificultad: fácil → medio → difícil

## 5. Especificaciones Visuales

### Perspectiva y Cámara
- **Vista:** Tercera persona, cámara siguiendo a Mario desde atrás
- **Ángulo:** Ligeramente elevado (isométrico suave)
- **Movimiento de Cámara:** Suave seguimiento del personaje

### Arte y Estética
- **Estilo:** Pixel art 2D con sensación de profundidad
- **Paleta de Colores:** Colores clásicos de Mario (rojo, azul, verde)
- **Sprites:** Mario clásico con animaciones de carrera y salto
- **Fondo:** Paisaje del Reino Champiñón con parallax scrolling

### Elementos UI
- **HUD Superior:**
  - Puntuación actual
  - Mejor puntuación
  - Indicador de velocidad del juego
- **Indicadores de Control:**
  - Visualización del input del potenciómetro
  - Indicador de nivel de micrófono

## 6. Sistema de Puntuación y Progresión

### Mecánica de Puntos
- **Puntos por Tiempo:** +10 puntos por segundo sobrevivido
- **Puntos por Obstáculo:** +50 puntos por obstáculo esquivado
- **Multiplicador:** x2 después de 100 obstáculos esquivados
- **Bonus por Distancia:** +100 puntos cada 500 metros

### Progresión de Dificultad
- **Velocidad Base:** Incremento gradual cada 30 segundos
- **Densidad de Obstáculos:** Aumento progresivo
- **Tipos de Obstáculos:** Introducción de nuevos tipos gradualmente

## 7. Especificaciones de Input

### Calibración del Potenciómetro
- **Rango de Lectura:** 0-1023 (ADC 10-bit)
- **Zona Muerta Central:** ±5% para evitar jitter
- **Suavizado:** Promedio móvil de últimas 3 lecturas
- **Mapeo:** Posición lateral del personaje (-width/3 a +width/3)

### Detección de Sonido
- **Umbral Base:** Configurable (default: 30% del rango máximo)
- **Filtrado:** Eliminación de ruido de fondo
- **Duración Mínima:** 50ms de sonido continuo para registrar salto
- **Cooldown:** 500ms entre saltos válidos

## 8. Estados del Juego

### Estados Principales
1. **Menú Principal**
   - Pantalla de inicio con logo
   - Instrucciones de control
   - Mejor puntuación

2. **Calibración**
   - Configuración de umbral de micrófono
   - Prueba de rango del potenciómetro
   - Verificación de conexión Arduino

3. **Gameplay**
   - Juego principal activo
   - Procesamiento de inputs en tiempo real
   - Renderizado continuo

4. **Game Over**
   - Pantalla de puntuación final
   - Comparación con mejor puntuación
   - Opción de reiniciar

5. **Pausa**
   - Pausar/reanudar con tecla específica
   - Mantener conexión con Arduino

## 9. Requerimientos de Performance

### Frame Rate
- **Target:** 60 FPS consistente
- **Mínimo Aceptable:** 30 FPS
- **Optimización:** Límite de objetos en pantalla simultáneamente

### Latencia de Input
- **Potenciómetro:** < 16ms (1 frame)
- **Micrófono:** < 50ms
- **Serial Communication:** 115200 baud rate

### Memoria y Recursos
- **Sprites:** Precargar todos los assets al inicio
- **Garbage Collection:** Reutilización de objetos de obstáculos
- **Canvas:** Resolución optimizada para performance

## 10. Plan de Desarrollo

### Fase 1: Fundamentos (Semana 1-2)
- [x] Configuración de comunicación Arduino-p5.js
- [x] Lectura básica de sensores
- [x] Renderizado básico de Mario
- [x] Movimiento fundamental

### Fase 2: Mecánicas Core (Semana 3-4)
- [ ] Sistema de obstáculos básico
- [ ] Detección de colisiones
- [ ] Sistema de puntuación
- [ ] Estados de juego básicos

### Fase 3: Polish y Features (Semana 5-6)
- [ ] Efectos visuales y animaciones
- [ ] Sistema de dificultad progresiva
- [ ] Optimización de performance
- [ ] Testing y bug fixes

## 11. Criterios de Éxito

### Funcionalidad Mínima Viable (MVP)
- ✅ p5.serialport app instalada y funcionando en localhost:8080
- ✅ Comunicación serial estable (115200 baud) via WebSocket
- ✅ Lectura correcta de `Esplora.readSlider()` y `Esplora.readMicrophone()`
- ✅ Parsing de datos "slider,mic\n" en p5.js con eventos serial
- ✅ Mario se mueve lateralmente con el potenciómetro (0-1023 → posición X)
- ✅ Mario salta con input de micrófono (umbral > 300)
- [ ] Obstáculos aparecen y se mueven hacia el jugador
- [ ] Detección de colisiones funcional
- [ ] Sistema básico de puntuación

### Funcionalidad Completa
- [ ] Múltiples tipos de obstáculos
- [ ] Progresión de dificultad suave
- [ ] Efectos visuales pulidos
- [ ] Sistema de mejor puntuación persistente
- [ ] Experiencia de usuario fluida

## 12. Riesgos y Mitigaciones

### Riesgos Técnicos
- **Latencia Serial:** Usar buffer y polling optimizado
- **Ruido en Sensores:** Implementar filtros digitales
- **Performance p5.js:** Optimizar rendering y game loop

### Riesgos de UX
- **Dificultad de Calibración:** UI intuitiva para setup inicial
- **Fatiga del Jugador:** Balancear sensibilidad de controles
- **Accesibilidad:** Controles alternativos para diferentes capacidades

## 13. Testing y QA

### Testing de Hardware
- Verificar lectura consistente de sensores
- Probar en diferentes condiciones de ruido ambiental
- Validar durabilidad de conexión USB

### Testing de Software
- Probar en diferentes navegadores
- Verificar performance en hardware diverso
- Testing de edge cases (valores extremos de sensores)

### Testing de Gameplay
- Balanceo de dificultad
- Tiempo de respuesta de controles
- Experiencia de usuario general

---

**Documento creado por:** JORGE ROMERO
**Fecha:** Septiembre 2025  
**Versión:** 1.0
