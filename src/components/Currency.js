import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}
	

  return (
		<div className='alert alert-secondary'>
        <span>Currency
      <select name="currency" id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' }}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>	
      </span>	
    </div>
	);
};

export default Currency;