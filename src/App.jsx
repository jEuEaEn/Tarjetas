import Saludo from "./Saludo.jsx"
import Tarjeta from "./Tarjeta.jsx"
import Lillian from "./assets/lillianBench.png"
import Ryley from "./assets/RyleyRobinson.png"

function App() {

    const characters =[
      {
        
        imagen: Lillian,
        nombre: "Lillian Bench",
        rol: "Xenobiologa"
      },
      {
        
        imagen: Ryley,
        nombre: "Ryley Robinson",
        rol: "Jefe de mantenimiento de Sistemas No Esenciales"
      }
    ]

    function saludo(nombre){
      alert("Hola, " + nombre)
    }

  return (< >
        <Saludo saludo ={"Usuario"}/>
        <div className="tarjetas-container">
          {characters.map((personaje) =>{

           return <Tarjeta imagen={personaje.imagen} nombre={personaje.nombre} rol={personaje.rol} boton={()=>saludo(personaje.nombre)} />
           
          })}
        </div>
        
    </>
  )
}

export default App
