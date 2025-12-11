# apiPlantillaNodeVue
Plantilla base para construir APIs con Node.js + Express, preparada para conectarse con un frontend Vue.js y crecer como un proyecto modular.

## Badges
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4+-000000?style=flat&logo=express)
![Vue.js](https://img.shields.io/badge/Vue.js-3+-42b883?style=flat&logo=vue.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Tabla de contenidos
- 🚀 Descripción
- 📂 Estructura del proyecto
- 🛠️ Tecnologías utilizadas
- ⚙️ Instalación y uso
- 🔌 Scripts disponibles
- 🌐 Endpoints básicos
- ✨ Próximas mejoras
- 🤝 Contribución
- 📄 Licencia

## Descripción
apiPlantillaNodeVue es un esqueleto simple y funcional para kickstart de APIs con Node.js.
Incluye estructura organizada, dependencias esenciales y una base sobre la que construir endpoints y lógica backend.

## Estructura del proyecto
apiPlantillaNodeVue/
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── config/
│   └── app.js
│
├── node_modules/
├── .gitignore
├── package.json
├── README.md
└── .env.example

## Tecnologías utilizadas
- Node.js 18+
- Express.js
- Nodemon
- Dotenv
- Vue.js (opcional)

## Instalación y uso
1. git clone https://github.com/Dasge97/apiPlantillaNodeVue.git
2. npm install
3. cp .env.example .env
4. npm run dev

## Scripts disponibles
npm start  
npm run dev

## Endpoints básicos
GET /
Retorna un mensaje de prueba.

## Próximas mejoras
- Controladores
- BD
- Docker
- Tests

## Contribución
Fork + PR

## Licencia
MIT
