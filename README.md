# Sistema de Alertas de Seguridad Ciudadana

Sistema MVP funcional para gestión de alertas de seguridad ciudadana con dashboards diferenciados para autoridades y civiles.

## 🚀 Stack Tecnológico

- **React 18.3.1** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos utilitarios
- **shadcn/ui** - Componentes UI
- **React Router** - Navegación
- **Lucide React** - Iconos

## 📋 Funcionalidades

### Pantalla de Selección de Rol
- Selección entre "Soy Civil" o "Soy Serenazgo"
- Diseño simple y claro

### Dashboard de Autoridades
- Estadísticas de alertas activas
- Botón "Simular Alerta" para crear alertas en tiempo real
- Lista de alertas con diseño tipo card
- Cierre de alertas individuales
- Animaciones suaves al mostrar alertas

### Dashboard Civil
- Botón de pánico SOS
- Formulario para reportar incidentes
- Lista de reportes recientes

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor se iniciará en `http://localhost:8080`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── AuthorityDashboard.tsx    # Dashboard de autoridades
│   ├── CivilDashboard.tsx        # Dashboard para civiles
│   ├── RoleSelection.tsx         # Selección de rol
│   └── ui/                       # Componentes shadcn/ui
├── pages/
│   ├── Index.tsx                 # Rutas principales
│   └── NotFound.tsx              # Página 404
├── lib/
│   └── utils.ts                  # Utilidades (cn function)
├── App.tsx                       # Componente raíz
├── main.tsx                      # Entry point
└── index.css                     # Estilos globales
```

## 🎨 Características Técnicas

- ✅ **Solo Frontend**: Todo funciona sin backend, usando `useState` para estado local
- ✅ **Sin Backend**: No hay conexión a base de datos
- ✅ **Simulación de alertas**: Las alertas se crean y gestionan localmente
- ✅ **Modo Claro Forzado**: Diseño claro sin modo oscuro
- ✅ **Hot Reload**: Vite configurado para desarrollo rápido

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🎯 Próximos Pasos

- Integración con backend real
- Autenticación de usuarios
- Geolocalización para reportes
- Notificaciones push
- Historial de alertas persistente

