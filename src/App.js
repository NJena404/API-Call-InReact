import { Getpostapi } from './api/Getpostapi';
import './App.css';
import React, {useEffect,useState} from 'react';
import Postcard from './components/Postcard';
import { GetpostImageapi } from './api/Getpostapi';

function App() {

  const [data, setData] = useState(null);
  const [image,setImage] = useState(null);

  useEffect(()=>
  {
    Getpostapi().then((posts)=> setData(posts));
    GetpostImageapi().then((posts)=> setImage(posts));
  },[]);

  const combineData = ()=>{
    if (!data || !image) return []; 

    return data.map((item,index)=>({
      name:item.name,
      email:item.email,
      imageUrl:image[index].url,
    }))
  }

  return (
    <div className="App">
      {combineData().length > 0 ? (
                combineData().map((item, index) => (
                    <Postcard key={index} name={item.name} email={item.email} image={item.imageUrl} />
                ))
            ) : (
                <h3>No data</h3>
            )}
    </div>
  );
}

export default App;
