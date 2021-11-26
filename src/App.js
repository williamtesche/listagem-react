import "./App.css";
import { useState } from "react";

function App() {
  let [lista, setLista] = useState(["tarefa 1", "tarefa 2"]);
  let [novoItem,setNovoItem] = useState("");

  return (
    <div>
      <h1>To Do List</h1>
      <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" />
      <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      <ul>
        {lista.map((item,index) => (
          <li>
            {item}

            <button onClick={() => deletarItem(index)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>




  );
  function adicionarNovoItem() {
    setLista([...lista,novoItem])
    setNovoItem("");
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }
  
}
export default App;
