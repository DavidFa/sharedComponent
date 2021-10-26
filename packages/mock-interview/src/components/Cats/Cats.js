import { useCats } from './hooks/useCats';
import './Cats.css'


export default function Cats() {

    const { cats, editCatHandler, getCat } = useCats();

    return (
        <>
            {getCat()}
            <div className="Cats" data-testid="wrapper">
                {cats.catList.length > 1 && cats.catList.map(cat => <div key={cat.id} onClick={() => editCatHandler(cat.id)}>
                    <span>{cat.id}</span>
                    <span style={{ color: 'red' }}>{cat.color}</span>
                    <span>{cat.age}</span>
                </div>)}
            </div>
        </>
    )
}
