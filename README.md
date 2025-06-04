# 📦 Backend - Sistema de Gestión de Usuarios y Roles

Este backend forma parte del sistema de gestión de usuarios y roles desarrollado con Node.js, Express y MongoDB. Ofrece una API REST que permite:

- Crear y listar roles del sistema.
- Crear usuarios asignando un rol existente.
- Listar usuarios junto a su rol correspondiente.

---

## 📚 Descripción del problema

En los sistemas empresariales es común necesitar control de acceso basado en roles. Este backend proporciona los endpoints necesarios para:

- Crear roles (como "Administrador", "Editor", "Invitado").
- Registrar usuarios seleccionando uno de los roles disponibles.
- Consultar todos los usuarios y roles registrados.

> 🔒 El sistema evita registrar usuarios si no hay roles previamente creados.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- cors

---

## 🧱 Estructura del proyecto
usuarios-roles-backend/
├── controllers/
│ ├── roles.controller.js
│ └── users.controller.js
├── models/
│ ├── Role.js
│ └── User.js
├── routes/
│ ├── roles.routes.js
│ └── users.routes.js
├── config/
│ └── dbConfig.js
├── .env
├── index.js
└── README.md


---

## ⚙️ Configuración e instalación

1. Clona el repositorio:
```bash
   git clone https://github.com/manuelcastro95/role-user-backend
   cd role-user-backend
```  
2. Instala las dependencias 
```bash
   npm install
```
3. Configura el archivo .env
    MONGO_URI=mongodb://localhost:27017/usuarios_roles
    PORT=5000
4. Inicia el servidor
  ```bash
   npm run dev
```  

## 📝 API Endpoints

### Roles
- `GET /api/roles` - Obtener todos los roles
- `POST /api/roles` - Crear un nuevo rol

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `POST /api/users` - Crear un nuevo usuario

