import React from 'react'
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
    const navigator = useNavigate();
  return (
    <div>Notfound

        <div>
            <button onClick={() => navigator('/')}>Back to home</button>
        </div>
    </div>
  )
}

export default Notfound