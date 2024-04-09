import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id: 1, brand: "Fiat", model: "247", color: "Branco", km: 2000},
    {id: 2, brand: "Renault", model: "Orochi", color: "Vermelho", km: 23000},
    {id: 3, brand: "Chevrolet", model: "Corsa", color: "Chumbo", km: 120000},
    {id: 4, brand: "Fiat", model: "Toro", color: "Preto", km: 40000},
  ]
  return (
    <div className="App">
      <h1 className='title'>Carros</h1>
      {cars.map((cars) => (
        <CarDetails 
            key={cars.id}
            brand={cars.brand}
            model={cars.model}
            color={cars.color}
            km={cars.km}
        />
      ))}
    </div>
  );
}

export default App;
