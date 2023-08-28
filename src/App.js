import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useEffect, useState } from 'react';

function App() {

  const [stores, setStores] = useState([])
  // console.log(stores)
  const [query, setQuery] = useState("")

  useEffect (() =>{

    fetch('http://localhost:8085/stores')
    .then(response => response.json())
    .then(stores => {setStores(stores)})}, [])


    const onAddStore = event => {
      event.preventDefault();
      const newStore = {
        "name": event.target.name.value, 
        "image": event.target.image.value,
        "season": event.target.season.value,
        "episode": event.target.episode.value,
        "episodeUrl": "https://bobsburgers-api.herokuapp.com/episodes",
        "url": "https://bobsburgers-api.herokuapp.com/storeNextDoor"
      };

      setStores([...stores, newStore]);
      fetch('http://localhost:8085/stores', {
        method: "POST",
        headers: {
          
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(newStore)
      }).then(response => response.json())
      .then(newStore => setStores([...stores, newStore]));
      
    };

    const onUpdateQuery= event => setQuery(event.target.value)

    const filterStores = stores.filter(store =>{
      if (query === "")
      return true 
    else 
    return store.name.toLowerCase().includes(query.toLowerCase())
    })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search query={query} onUpdateQuery={onUpdateQuery}/>
      <NewStoreForm onAddStore={onAddStore} />
      <StoreList stores={filterStores}/>
    </div>
  );
}

export default App;
