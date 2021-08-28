import React from 'react'

const MenuCard = ({data}) => {
    
    return (
          <> 
          <section className="main-card--cointainer" >
          {data.map((curele) => {
              return (
                  <>
                <div className ="card-container" key={curele.id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{curele.id}</span>
                        <span className="card-author subtle"> {curele.category}</span>
                        <h2 className="card-title">{curele.name}</h2>
                        <span className="card-description subtle">{curele.description}</span>
                   <div className="card-read">Read</div>
                    </div>
                    <img src = {curele.image} className="card-media"/>
                    <span className="card-tag subtle">order now</span>
                </div>
            </div>
            </>

              )
          })}

            
       </section> 
    </>
    
    )
}

export default MenuCard
