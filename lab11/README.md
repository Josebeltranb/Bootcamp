# Ejemplo MongoDB
## Cargar información a las colecciones
### Colección Users
pass: base64::`HolaMundoBootcamp`
```
docker exec -i mongobootcamp sh -c "mongoimport -c users -d bootcamp --jsonArray --drop" < users.json
```
### Colección Products
```
docker exec -i mongobootcamp sh -c "mongoimport -c products -d bootcamp --jsonArray --drop" < products.json
```