import React, { useState, useCallback } from 'react';
import './Cats.css'


const Cat = ({ id, color, age, onEditSubmitHandler }) => {

    const [cat, setCat] = useState({ id, color, age })

    const catEditHandler = useCallback(
        (e) => {
            const key = e.target.name;
            const val = e.target.value;
            const newCat = { ...cat };
            newCat[key] = val;
            setCat(newCat);
        },
        [cat],
    )

    return (
        <div className="Cat">
            <form className="Form" onSubmit={(e) => onEditSubmitHandler(cat, e)}>
                <div>
                    <label htmlFor="catId">ID:</label>
                    <input id="catId" name="id" value={cat.id} disabled={true} />
                </div>
                <div>
                    <label htmlFor="catColor">Color:</label>
                    <input id="catColor" name="color" value={cat.color} onChange={catEditHandler} />
                </div>
                <div>
                    <label htmlFor="catAge">Age:</label>
                    <input id="catAge" name="age" value={cat.age} onChange={catEditHandler} />
                </div>
                <div className="Button">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Cat;
