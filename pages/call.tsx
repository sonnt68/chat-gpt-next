/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useEffect } from 'react';

const call = () => {
  const getData = async () => {
    const res = await axios.get('/api/call', {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/plain, */*' },
    });
    console.log('response', res);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>call</div>;
};

export default call;
