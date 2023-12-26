Crear un método getCitiesBySurface(surface) -> el mismo recibirá la supercie como parametro y deberá devolver un array con todas las ciudades que posean mayor o igual superficie que la pasada por parametro. Los elementos del array deben tener solo tres propiedades: "nombre", "superficie_km2" y "habitantes".
[ { "nombre": "Buenos aires", "superficie_km2": 19283189, "habitantes": 12387192 }, { "nombre": "Santa Fe", "superficie_km2": 81289, "habitantes": 91919 } ]

Crear un método que se llame getToursByCapital(capital) -> Esta función debe retornar el array con todos los puntos turisticos.
[ { "nombre": "Parque Nacional El Palmar", "tipo": "Parque Nacional", "atracciones": ["Palmares", "Senderismo"] }, { "nombre": "Rosario", "tipo": "Ciudad", "atracciones": ["Monumento a la Bandera", "Parque Independencia"] } ]

Cuando ejecuto desde el index este metodo "npm run dev m2 'La plata'" le debe mostrar al cliente por la consola:

Parque Nacional El Palmar: Palmares, Senderismo. Rosario: Monumento a la Bandera, Parque Independencia.

Responsabilidades de cada archivo:
Model:
Ejecuta acciones en los recursos (base de datos).

Controlador:
Maneja las respuestas (caso de éxito o caso de no éxito).

Index:
Decidimos como cliente como mostramos la data.

Objeto de respuesta
Caso de éxito
Busqueda en la base de datos por la cápital "La Plata"
{ code: 200, response: [ { "nombre": "Parque Nacional El Palmar", "tipo": "Parque Nacional", "atracciones": ["Palmares", "Senderismo"] }, { "nombre": "Rosario", "tipo": "Ciudad", "atracciones": ["Monumento a la Bandera", "Parque Independencia"] } ] }

Caso de no éxito
Busqueda en la base de datos por la cápital "Rawson"
404 - No se puede encontrar el recurso en la base de datos.

Estructura de proyecto NODE
https://github.com/backend-ada/backend-14-m4-c8