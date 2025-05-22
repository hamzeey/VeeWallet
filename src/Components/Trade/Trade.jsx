import React from 'react'
import './Trade.css'
import mock from '../../assets/trade.png'
import ios from '../../assets/icon.png'
import android from '../../assets/icon-2.png'
import store from '../../assets/icon-3.png'
import linux from '../../assets/icon-4.png'
import windows from '../../assets/icon-5.png'

const data=[
  {
    id:1,
image:ios,
name:"iOS App"
  },
   {
     id:2,
image:android,
name:"Android"
  },
   {
     id:3,
image:store,
name:"App Store"
  },
   {
     id:4,
image:linux,
name:"Linux"
  },
   {
     id:5,
image:windows,
name:"Windows"
  }
]
function Trade() {
  return (
    <div className='trade'>
       <div className='wrapper'>
        <div className='left'>
<img src={mock} alt="" />
        </div>
<div className='right'>
  <div className='right-txt'>
    <h2>Trade Anywhere, Anytime</h2>
<p>stay in touch across multiple devices and never miss out on opportunities</p>
  </div>
<div className='right-image'>
{
  data.map(({image,name,id}) =>{
return(
  <div className='containerr'key={id} >
<div className='icon-cont'>
<img src={image} alt="" />
</div>
<div className='txxtt'>
<p>{name}</p>
</div>
  </div>
)

  }

  )
}
</div>
</div>
       </div>
    </div>
  )
}

export default Trade