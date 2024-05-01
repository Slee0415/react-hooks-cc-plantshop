import React, { useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[pd, spd] = useState([])
  const[search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then((p) => spd(p))
  }, [])

  function addPlant (newPlant) {
    spd([...pd, newPlant])
  }

  const visiblePlants = pd.filter((p) => {
    return p.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch} search={search} />
      <PlantList ps={visiblePlants} />
    </main>
  );
}

export default PlantPage;
