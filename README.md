# Bootcam-Actividad-1
¿Como usar esta proyecto?

    -- Instalar Docker
    -- Instalar Node JS
    -- Instalar VS Code
    -- Instalar MongoDB
    -- Postman o alguna aplicacion para respuestas de API (yo instalé la extencion de vs "REST CLIENT" )


--En la carpeta donde se descargo el proyecto ejecutar en una consola (CMD o VS consola) los siguientes comandos:
    * npm install (instala los paquetes de node utilizados en este proyecto)
    * docker compose up -d //(Esto crea el contenedor de Docker con sus demas configuraciones para Mongo DB, si necesita modificar un dato como puerto.... lo puede hacer en el archivo docker-compose.yml )
    * docker ps (Podemos ver el contenedor creado), solo para verificar.

--Existe un Documento llamado callApi.http,copiar las llamadas en postman y probar que las llamadas esten funcionando


--Si desea rellenar la base de mongo con data, puede ingrsar a MONGODB(Aplicacion) en la coleccion usada que es PEOPLE
    precionar ADD DATA, INSERT DOCUMENT y por ultimo copiar el contenido de Bootcam Collection y aceptar.
    


#Material de apoyo utilizado
  * https://www.youtube.com/watch?v=vm3YfOHf_Cc by yoursTRULY
  * https://www.youtube.com/watch?v=PsWeSg38XFY by ProgrammingKnowledge





