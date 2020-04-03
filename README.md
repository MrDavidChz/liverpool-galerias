# Prueba Técnica Backend

Objetivo: Crear una API REST con operaciones CRUD, contemplando los siguientes endpoints. La información deberá estar alojada en MongoDB Atlas.


    • CentrosComerciales (Nombre, Dirección, Teléfono, Horario, Estatus)
    • Locales (NoLocal, CentroComercial, Dimensiones)
    • Marcas (Nombre, Logo, Descripción)
    • Tiendas (Marca, Local, Teléfono)
    • Usuarios (Nombre, Correo, Password, Perfil)
    • Inquilino (Nombre, Tienda)


## Instrucciones para la instalación

- Clonar el repositorio a la PC O MAC.
```
git@github.com:MrDavidChz/liverpool-galerias.git
```

- Instalar dependencias npm
```
npm -i
```

- Estando en la raíz del proyecto hay un archivo llamado .env.example, para efectos de evaluación ya trae la cadena de conexion de MongoDB AtlaS solo hay que renombrarlo por .env.

```
si esta usando una terminal linux se puede correr el siguiente comando
cp .env.example .env 
```

- Para correr el proyecto en modo desarrollo ejecutar :

```
npm start
```

- El proyecto incorpora pm2 por el cual se puede ejecutar el siguiente comando

```
npm run production
```


- Para consumir los servicios en producción esta disponible la siguinete URL

```
URL : https://liverpool-galerias.herokuapp.com/api/v1/
```

- Se preparó la documentación en postman con variables globales {{token}} y {{URL}} , para no ingresar manualmente dichas variables.

```
URL : https://documenter.getpostman.com/view/10961843/SzYbxc7P?version=latest
```
