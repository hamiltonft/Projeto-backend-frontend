import DataTable from "components/DataTable";
import NavBar from "components/NavBar";
import Rodape from "components/rodape";


const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="text-primary" >Olá Mundo!!</h1>
      </div>
      <DataTable/>
      <Rodape />
    </>
  );
}

export default App;
