# Bitacora
Aborde el problema dividiéndolo en partes,  analizando la información y lo que el desafío requería, luego cree los componentes necesarios para mostrar la primera página de la aplicación y a medida que avanzaba creaba los demás componentes necesarios para continuar y posteriormente terminar el desafío.

## 1er
Primero que los estados para manejar la información obtenida de la API, utilice una async function para realizar el llamado, de esta forma obtuve un código más legible y más síncrono, utilizando el React Hook useEffect para mostrar la información en los componentes luego de que se renderizaran.
Cree un componente para mostrar en una Card la información relevante sobre los productos.

Utilizando CSS-in-JS estilice los componentes, además de crear un archivo de css  llamado ("global.css") donde cree las variables, estilos predeterminados para ciertas etiquetas, además de clases reutilizables; Esto me ayudo a obtener un CSS más organizado y una forma más ágil de darle estilos a ciertas etiquetas y evitar repetir muchas líneas de CSS.

En cuanto al CSS-in-JS de los componentes utilice clases con la convención BEM dejando así una forma sencilla de poder leer los estilos y poder aplicarlos sin dañar la jerarquía, otro beneficio de usar CSS-in-JS fue que cada componente que realice es 100% responsive y tiene HTML Semántico que ayuda a la accesibilidad.
 
 ## 2do
 Para la navegación instale react-router-dom y utilice los hook de Link, Browser, Route y Swicth para maquetar la navegación estática para la página del Carrito y dinámica para mostrar una página con cada detalle del producto seleccionado.
 Tuve problemas al momento de usar useParams para utilizar las paginas dinámicas, fue un problema respecto a la versión de react que usaba, luego de unas horas de lidiar con este error y buscar en la documentación me di cuenta que había instalado la dependencia en la carpeta raíz del proyecto y no en la carpeta de front donde estaba trabajando una vez solventado el problema pude terminar de hacer funcionar la navegación dinámica para mostrar los detalles de cada producto consultado.

## 3ro
Luego de terminar la navegación funcional continúe con la ultima parte de la prueba y la más complejo para mi, la funcionalidad del carrito.
Nunca antes había realizado esa clase de componente y fue retador, analice como se podría hacerlo y me documente sin embargo solo logre entender algunas cosas no fue capaz de implementarlo.
Intente utilizar el useReducer pero manejar los estados pero no fue capaz de hacer que el item que seleccionara fuera al carrito tampoco fui capaz de hacer que los elementos se renderizaran, actualmente a la aplicación se le puede agregar un único elemento al carrito y se puede observar, pero es una forma no muy practica, poco funcional y para nada escalable, pase todo un día intentando implementar la forma con useReducer pero fui incapaz y pienso que es la mejor de manejar el componente del carrito  y su estado porque hace el código más reutilizable y más escalable.

# Dependencias necesarias
Para que el proyecto corra de forma correcta en cualquier maquina, se debe instalar las siguientes dependencias  de la siguiente forma.
### 1ro
En la carpeta root de la aplicación correr el comando `npm install`
### 2do
En el directorio front correr también el comando `npm install`
### 3ro
Además correr en el directorio raíz y el directorio front el comando `npm install react-router-dom --save`