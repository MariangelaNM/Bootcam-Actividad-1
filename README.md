# Bootcam-Actividad-1


--Pasos para crear un docker container
    *Abrir en una consola la ruta de la carpeta a utilizar
    *Ejecutar:
            *docker run -d -e MONGO_INITDB_ROOT_USERNAME=adm -e MONGO_INITDB_ROOT_PASSWORD=123 -p 27017:27017 --name mongodb mongo
            * winpty docker exec -it mongodb mongosh -u adm -p 123

            
