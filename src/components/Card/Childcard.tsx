import React from 'react'
import Childcard1 from './Childcard1'
import './css/Childcard.css'

function ChildCard(props:any) {
  return (
    <div className='flex-container'>
      {
        props.data?.map((user:any) => <div key={user.id} className='child-box'>
          <Childcard1 user={user} />
        </div>
      )}
    </div>
  )
}

export default ChildCard


