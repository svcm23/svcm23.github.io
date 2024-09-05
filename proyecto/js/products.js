document.addEventListener("DOMContentLoaded", () => {
    const apiAutos =
      "https://japceibal.github.io/emercado-api/cats_products/101.json";
  
    const cargarProductos = () => {
      fetch(apiAutos)
        .then((respuesta) => {
          if (!respuesta.ok) {
            throw new Error(
              "Se produjo un error al intentar cargar los resultados"
            );
          }
          return respuesta.json();
        })
        .then((datos) => {
          //recordatorio de uso: "datos" es un objeto y contiene la información de los productos
          const productos = datos.products; //en productos almaceno/asigno el contenido de del objeto "datos"
  
          const listaDeProductos = document.querySelector(".product-list"); //Selecciono el elemento DOM con clase "product-list" (main)....... Selecciono el elemento en donde se mostrarán
  
          productos.forEach((producto) => {
            const elementoProducto = document.createElement("div");
            elementoProducto.className = "claseParaDecorar";//Esta clase es la que se debe utilizar en el css
            
            //La sentencia de abajo es la que mostrará los datos de la API
            elementoProducto.innerHTML = `
                          <img src="${producto.image}" alt="${producto.name}" class="product-image">
                          <div class="product-info">
                              <h2 class="product-name">${producto.name}</h2>
                              <p class="product-description">${producto.description}</p>
                              <p class="product-price">${producto.cost} ${producto.currency}</p>
                              <p class="product-sold-count">Cantidad Vendida: ${producto.soldCount}</p>
                          </div>
                      `;
            listaDeProductos.appendChild(elementoProducto);//Muestra el resultado
          });
        })
        .catch((error) => {
          console.error("Se produjo un error: ", error);
        });
    };
  
    cargarProductos();
  });
  