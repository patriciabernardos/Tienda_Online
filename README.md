
Para ejecutar el proyecto deben siguirse estos simples pasos:

1- Clonar el repositorio
2- Abrir consola y acceder a la carpeta del proyecto.
3- Instalar dependencias: npm instal
4- Ejecutar del servidor de desarrollo

El proyecto esta compuesto por los siguientes componentes. 

CardProduct: Este componente representa un producto individual y su presentación en forma de tarjeta. Mediante un modal muestra los datos completos del producto: nombre del producto, imagen, código postal, categoria, descripcion y precio. Es utilizado para mostrar múltiples productos en una lista o cuadrícula como hijo de Store.

Store: El componente Store muestra lista de productos disponibles usando el componente CardProduct. Puede utilizar el contexto FilterContext para filtrar la información a mostrar.

FilterNavbar: El componente FilterNavbar se encarga de mostrar opciones de filtrado para los productos como hijo de Header. Contiene el filtros por categoría y por código postal.

Header: El componente Header representa la cabecera de la aplicación. Incluye el nombre de la aplicación y los filtros proporcionados por el componente FilterNavbar.


Tambien contiene un contexto FiltersContext que proporciona estados globales y funciones de actualización para filtros específicos de la aplicación. 

El archivo Products.json proporciona a la aplicación los datos de productos.

Para dar estilos se ha usado Boostrap. 
