import { useEffect, useState } from "react"
import Card from "./Card";
import './App.css'
import SearchBar from "./SearchBar";

function App() {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const getData = async () => {
    const rawData = await fetch('https://rickandmortyapi.com/api/character')
    const prepData = await rawData.json();
    const data = prepData.results.map(item => ({
      status: item.status,
      img: item?.image,
      name: item?.name,
      origin: item?.origin?.name,
      species: item?.species,
      gender: item?.gender
    }))
    setData(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <div className="cards-wrapper">
        {
          data.filter(item => item.name.includes(searchKey))
            .map(item => <Card key={item.name} item={item} />)
        }
      </div>
    </>
  )
}

export default App
