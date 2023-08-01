### Proyecto final GeeksHubs Academy:
# Backend Barbería con BD.
<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#finalidad">Objetivo</a></li>
    <li><a href="#acerca-de">Acerca de</a></li>
    <li><a href="#tecnologías-utilizadas">Tecnologías utilizadas</a></li>
    <li><a href="#diagrama-er">Diagrama Entidad Relación</a></li>
    <li><a href="#instalación-en-local">Instalación en local</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#repositorio">Contacto</a></li>
    <li><a href="#estado">Estado</a></li>
  </ol>
</details>

## Objetivo:
El objetivo de este proyecto es crear una Base de Datos y una API funcional para gestionar clientes, citas, empleados y servicios de una barbería que actualmente ya está en funcionamiento.

## Acerca de:
He desarroyado esta API como proyecto final del ***Bootcamp de Full Stack Developer de GeeksHubs Academy***. Se basa en un backend de una barbería. Se ha usado ***Postman*** para hacer las consultas y ***Workbench*** para consultar la BD en el desarrollo.

## Tecnologías utilizadas:
<img src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642" data-canonical-src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/a101467fe68ef07bba498b3e4a62a62e861ef0fe93302a1076b01ae7893af544/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3032364530303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145" alt="JavaScript" data-canonical-src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808612-8d3f0fee-99d9-45d8-8274-6584c9ac0b38.svg" style="max-width: 100%;"> <img src="https://user-images.githubusercontent.com/121863208/227808620-cd6e5d5c-dd63-4a9d-b19d-0983807cae95.svg" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/b184cf7adbab9f5464e80c0f5dd32c85393f6248499a57d743e619f4214391c4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f636b65722d3234393645443f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465" alt="DOCKER" data-canonical-src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&amp;logo=docker&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/902ef9f04d190cba77c41b8dc217260698573f992a2d46bf37e75161912caadd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3345364539333f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MYSQL" data-canonical-src="https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/c0303b8bf28065067be013ecbfa1447392b6d328a38362de9beb6d14f810544f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73657175656c697a652d3343373643333f7374796c653d666f722d7468652d6261646765266c6f676f3d73657175656c697a65266c6f676f436f6c6f723d7768697465" alt="SEQUELIZE" data-canonical-src="https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&amp;logo=sequelize&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/3f0e26b0951bab845a1bb9a7198ecca0da272e462921b6edd85879f3673b6927/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465" alt="Postman" data-canonical-src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73" alt="JWT" data-canonical-src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens" style="max-width: 100%;">

## Diagrama Entidad Relación:
![diagrama](./readmeImg/diagramaEntidadRelacionWorkbench.png)

## Instalación en local
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos
4. Ejecutamos las migraciones
` $ sequelize db:migrate `
5. Ejecutamos los seeders
` $ sequelize db:seed:all `
6. Levantamos el servidor de express
` $ npm run dev `

## <summary>Endpoints:</summary>

<details>
<summary>Endpoints</summary>

- **Auth**
    - **Register:**
    **/auth/registro**
    {
    "nombre": "Roberto",
    "apellido": "Delgado",
    "email": "roberto@mail.com",
    "telefono": "722653007",
    "codigo_postal": 46900,
    "contraseña": "admin123"
    }
    - **Login:**
    **/auth/login**

        {
    "email": "roberto@mail.com",
    "contraseña": "admin123"
    }

    - **Token** 
Copias el token de aquí:
![token](/readmeImg/token.png)
Y lo pegas aquí:
![bearer-token](/readmeImg/bearerToken.png)

- **Usuario(como usuario)**
    - **Ver mi perfil de usuario:**    
    **/usuario/perfilUsuario**
    {}
    -----------------------------
    - **Modificar mi perfil de usuario:**
    **/usuario/modificarPerfil**

    {
    "nombre": "Roberto",
    "apellido": "Delgado",
    "email": "roberto@mail.com",
    "telefono": "722653007",
    "codigo_postal": 46900,
    "contraseña": "admin123"
    }
    - **Solicitar una cita:**
    **/cita/solicitarCita**

    {
    "empleado_id": 1,
    "fecha": "2023-08-09T16:30:00",
    "servicio_id": 11,
    "comentario": "Quiero tintarme la barba"
    }
    - **Ver mis citas:**
    **/cita/misCitas**
    {}
    - **Cancelar una cita por id:**
    **/cita/cancelarCita/1 <=(ID)**
    {}

    - **Ver empleados:**
    **/usuario/verEmpleados**
    {}

    - **Ver servicios:**
    **/usuario/verServicios**
    {}

- **Empleado(como empleado)**
    - **Ver todas las citas pendientes**
    **/empleado/todasLasCitas**
    {}
    - **Modificar citas por id:**
    **/empleado/modificarCita/4 <= (ID)**
    - {
    "empleado_id": 1,
    "fecha": "2023-08-10T17:30:00",
    "servicio_id": 9,
    "comentario": "Quiero decolorarme el pelo color platino"
    "cita_estado_id": 2
    }

    - **Cancelar citas por id:**
    **/empleado/cancelarCita/4 <=(ID)**
    {}

    - **Filtrar citas por nombre usuario**
    **/empleado/citasPorUsuario/Roberto <=(Nombre Usuario)**
    {}

    - **Obtener estados cita:**
    **/empleado/obtenerEstados**
    {}

- **Admin(como admin)**
    - **Ver todos los usuarios:**
    **/admin/todosLosUsuarios**
    {}
    - **Eliminar usuarios por id:**
    **/eliminarUsuario/5 <=(ID)**
    {}

- ***Se van a agregar mas endpoints, pero primero voy a hacer el minimo producto viable y ya se iran añadiendo muchos mas.***
</details>

## Agradecimientos:
**Agradezco a mis profesores la paciencia y la ayuda que me han mostrado durante todo el bootcamp. También el buen rollo que crean en clase y todo lo que me han enseñado estos últimos meses.**

**Agradezco también a todos mis compañeros la ayuda recibida durante estos meses, en parte gracias a ellos hoy he podido hacer este proyecto por mi cuenta y aun me siguen ayudando en todo lo que pueden. Mil gracias.**

## Repositorio:
https://github.com/xIMet3/backendPeluqueria

## Estado:
### 🚧🚧En desarollo🚧🚧

