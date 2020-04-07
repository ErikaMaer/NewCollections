import React from "react";
import './card.css'

<<<<<<< HEAD
=======

>>>>>>> Update app
export const CardItemsList =({items})=> {
    if (!items.length){
        return <p className="center">No items</p>
    }

return (
<<<<<<< HEAD
<table className ="table centered highlight">
    <thead>
    <tr>
        <th>Title</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    { items.map(item=>{
        return (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
            </tr>
        )
    })}
    </tbody>
</table>
=======
<div>
    { items.map(card=>{
        return (
            <div className="collection-item" key={card._id}>
                <p className="collection-header">{card.title}</p>
                <p>{card.description}</p>
            </div>
        )
    })}
</div>
>>>>>>> Update app
)
}
