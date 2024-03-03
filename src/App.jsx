import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

// 9885791439
// +79885791439
// 89885791439
// 988-579-1439
// str.replaceAll("-")

function App() {
  const [data, setData] = useState({ name: '', phone: '', code: '' });
  const [message, setMessage] = useState(null);
  async function handleSubmit() {
    try {
      const response = await axios.post(
        'https://cdek-backend-d0211be3db6b.herokuapp.com/cdek/create',
        data
      );
      setMessage(response.data);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h3>ФИО</h3>
      <input onChange={handleChange} type="text" name="name"></input>
      <h3>Номер телефона +7</h3>
      <input onChange={handleChange} type="text" name="phone" required></input>
      <h3>Код ПВЗ:</h3>
      <input onChange={handleChange} type="text" name="code"></input>
      <button onClick={handleSubmit}>Создать</button>
      {message && (
        <div>
          <p>Total Sum: {message.totalSum}</p>
          <p>cdekNumber: {message.cdekNumber}</p>
          <p>Recipient Name: {message.recipientName}</p>
          <p>recipient City: {message.recipientCity}</p>
          <p>_id: {message._id}</p>
          <p>uuid: {message.uuid}</p>
          <p>tariffCode: {message.tariffCode}</p>
          <p>deliveryPoint: {message.deliveryPoint}</p>
          <p>Recipient Number: {message.recipientNumber}</p>
          <p>recipient Address: {message.recipientAddress}</p>
        </div>
      )}
    </div>
  );
}

export default App;
