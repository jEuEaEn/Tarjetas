import Saludo from "./Saludo.jsx"
import Tarjeta from "./Tarjeta.jsx"
import Lillian from "./assets/lillianBench.png"
import Ryley from "./assets/RyleyRobinson.png"

function App() {
  return (<>
        <Saludo saludo = "Jole"/>
        <div className="tarjetas-container">
          <Tarjeta imagen={Lillian} nombre={"Lillian Bench"} rol={"Xenobiologa"}/>
          <Tarjeta imagen={Ryley} nombre={"Ryley Robinson"} rol={"Jefe de Mantenimiento de Sistemas No Esenciales"}/>
          
        </div>
    </>
  )
}

export default App
