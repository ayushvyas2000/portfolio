import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <aside className="app__navigation">
        {['home','about','skills','projects','contact'].map((item,index)=>{
            return(
                <a 
                href={`#${item}`}
                key={item+index}
                className='app__navigation-dot'
                style={active===item?{backgroundColor:'#313BAC'}:{}}
                >
                </a>
                )})
            }
    </aside>
  )
}

export default NavigationDots