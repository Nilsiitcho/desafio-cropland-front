// import './reset.css';
import './App.css';
import Formulario from "./Formulario";
import Tabela from "./Tabela";
import Cabecalho from "./Cabecalho";

function App() {
    return (
        <div className="App">
            <Cabecalho/>
            <div className={'container'}>
                <Formulario/>
                <Tabela/>
            </div>
        </div>
    );
}

export default App;
