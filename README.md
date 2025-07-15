# Angular Material Components Showcase

Este proyecto es una demostración completa de todos los componentes disponibles en [Angular Material](https://material.angular.dev/components/categories). Incluye ejemplos de uso de cada componente de la biblioteca Angular Material para facilitar el aprendizaje y la referencia.

## 📋 Descripción

El proyecto contiene implementaciones de todos los componentes principales de Angular Material, organizados en componentes individuales para facilitar su estudio y reutilización. Cada componente está configurado como un componente Angular independiente que puede ser importado y utilizado en la aplicación principal.

## 🚀 Componentes Incluidos

### Formularios y Controles
- **Autocomplete** (`app-mat-autocomplete`) - Sugerencias automáticas mientras el usuario escribe
- **Button** (`app-button`) - Botones interactivos con diferentes estilos
- **Button Toggle** (`app-button-toggle`) - Botones de alternancia agrupables
- **Checkbox** (`app-check-box`) - Casillas de verificación con estado indeterminado opcional
- **Date Picker** (`app-date-picker`) - Selector de fechas con calendario
- **Form Field** (`app-form-field`) - Contenedor para controles de formulario
- **Input** (`app-input`) - Campos de entrada de texto
- **Radio Button** (`app-radio-button`) - Botones de opción para selección única
- **Select** (`app-select`) - Menús desplegables de selección
- **Slide Toggle** (`app-slide-toggle`) - Interruptores deslizantes
- **Slider** (`app-slider`) - Controles deslizantes para valores numéricos

### Navegación
- **Menu** (`app-menu`) - Menús contextuales y desplegables
- **Sidenav** (`app-sidenav`) - Panel de navegación lateral
- **Tabs** (`app-tabs`) - Pestañas para organizar contenido
- **Toolbar** (`app-toolbar`) - Barra de herramientas superior

### Layout y Estructura
- **Card** (`app-card`) - Contenedores estilizados para contenido
- **Divider** (`app-divider`) - Separadores visuales
- **Expansion Panel** (`app-expacion-panel`) - Paneles expandibles
- **Grid List** (`app-grid-list`) - Listas en formato de cuadrícula
- **List** (`app-list`) - Listas de elementos
- **Stepper** (`app-stepper`) - Asistente paso a paso
- **Tree** (`app-tree`) - Estructura de árbol jerárquica

### Indicadores y Feedback
- **Badge** (`app-badge`) - Indicadores pequeños de estado
- **Chips** (`app-chips`) - Elementos compactos de información
- **Progress Bar** (`app-progres-bar`) - Barras de progreso
- **Progress Spinner** (`app-progress-spinner`) - Indicadores de carga circular
- **Snackbar** (`app-snackbar`) - Notificaciones temporales
- **Tooltip** (`app-tooltip`) - Información contextual al pasar el mouse

### Datos y Tablas
- **Paginator** (`app-paginator`) - Controles de paginación
- **Sort Header** (`app-sort-header`) - Encabezados ordenables
- **Table** (`app-table`) - Tablas de datos

### Modales y Overlays
- **Bottom Sheet** (`app-bottom-sheet`) - Paneles deslizantes desde abajo
- **Dialog** (`app-dialog`) - Ventanas modales

### Elementos Visuales
- **Icon** (`app-icon`) - Iconos de Material Design

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- Angular CLI
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd angular-material-showcase
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar Angular Material**
   ```bash
   ng add @angular/material
   ```

4. **Ejecutar la aplicación**
   ```bash
   ng serve
   ```

5. **Abrir en el navegador**
   Navega a `http://localhost:4200`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── badge/
│   ├── bottom-sheet/
│   ├── button/
│   ├── button-toggle/
│   ├── card/
│   ├── check-box/
│   ├── chips/
│   ├── date-picker/
│   ├── dialog/
│   ├── divider/
│   ├── expancion-panel/
│   ├── form-field/
│   ├── grid-list/
│   ├── icon/
│   ├── input/
│   ├── list/
│   ├── mat-autocomplete/
│   ├── menu/
│   ├── paginator/
│   ├── progress-bar/
│   ├── progress-spinner/
│   ├── radio-button/
│   ├── select/
│   ├── sidenav/
│   ├── slide-toggle/
│   ├── slider/
│   ├── snackbar/
│   ├── sort-header/
│   ├── stepper/
│   ├── table/
│   ├── tabs/
│   ├── toolbar/
│   ├── tooltip/
│   ├── tree/
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.css
└── ...
```

## 🎯 Uso

Cada componente está implementado como un componente Angular independiente. Para usar cualquier componente en tu proyecto:

1. **Importar el componente** en tu módulo o componente padre
2. **Agregar el selector** en tu template HTML
3. **Personalizar** según tus necesidades

### Ejemplo de uso:

```typescript
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-example',
  imports: [ButtonComponent],
  template: '<app-button></app-button>'
})
export class ExampleComponent { }
```

## 📸 Capturas de Pantalla

### Componentes de Botones
![Button Component](/placeholder.svg?height=200&width=400)
*Diferentes variantes de botones: básico, elevado, outlined y text*

### Componentes de Layout
![Card Component](/placeholder.svg?height=300&width=500)
*Tarjetas con contenido, acciones y diferentes layouts*

### Formularios y Controles
![Form Field Component](/placeholder.svg?height=250&width=450)
*Campos de formulario con labels, hints y validación*

![Date Picker Component](/placeholder.svg?height=400&width=350)
*Selector de fechas con calendario desplegable*

### Navegación
![Tabs Component](/placeholder.svg?height=200&width=600)
*Pestañas para organizar contenido en secciones*

![Sidenav Component](/placeholder.svg?height=500&width=700)
*Panel de navegación lateral con menú*

### Datos y Tablas
![Table Component](/placeholder.svg?height=400&width=800)
*Tabla de datos con ordenamiento y paginación*

### Modales y Overlays
![Dialog Component](/placeholder.svg?height=300&width=400)
*Ventana modal con acciones de confirmación*

### Procesos y Flujos
![Stepper Component](/placeholder.svg?height=350&width=600)
*Asistente paso a paso para procesos complejos*

### Elementos Interactivos
![Chips Component](/placeholder.svg?height=150&width=500)
*Chips seleccionables y removibles con diferentes estados*

## 📚 Recursos Adicionales

- [Documentación oficial de Angular Material](https://material.angular.dev/)
- [Guías de componentes](https://material.angular.dev/components/categories)
- [Material Design Guidelines](https://material.io/design)
- [Angular Documentation](https://angular.dev/)

## 🤝 Contribución

Este proyecto está diseñado como una referencia educativa. Si encuentras mejoras o quieres agregar ejemplos adicionales:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 🔗 Enlaces Útiles

- [Angular Material CDK](https://material.angular.dev/cdk/categories)
- [Theming Guide](https://material.angular.dev/guide/theming)
- [Accessibility](https://material.angular.dev/guide/accessibility)

---
## Autor
    Guadalupe DayaniravTorres Quiroz
    correo: torresquirozdayanira@gmail.com
    
**Nota**: Este proyecto utiliza Angular Material v20.1.0 y está optimizado para las últimas versiones de Angular.
```
