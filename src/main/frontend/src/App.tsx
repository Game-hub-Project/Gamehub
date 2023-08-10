import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [hello, setHello] = useState('');
    console.log(hello);
  useEffect(() => {
      axios.get('/api/hello')
          .then(response => setHello(response.data))
          .catch(error => console.log(error))

  }, []);

  return (
    <>
        백엔드에서 가져온 데이터입니다 : { hello }
    </>
  );
}

export default App;
