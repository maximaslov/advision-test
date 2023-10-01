import "./App.css";
import DevicesTopBlock from "./blocks/DevicesTopBlock/DevicesTopBlock";
import FilterBlock from "./blocks/FilterBlock/FilterBlock";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <MainLayout>
      <DevicesTopBlock />
      <FilterBlock />
    </MainLayout>
  );
}

export default App;
