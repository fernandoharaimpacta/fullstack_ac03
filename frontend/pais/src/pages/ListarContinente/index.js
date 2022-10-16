import Header from "../../components/Header";
import {useEffect, useState, useRef} from 'react';

function ListarContinente() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        fetch('http://127.0.0.1:9000/v1/continente/listar_continentes')
            .then(response => response.json())
            .then(response => response.continentes)
            .then(setList);
    }, []);

    return (
        <div>
            <Header />

            <div>
                {list.map(continente => 
                <div key={continente.id}>{continente.nome}</div>)}
            </div>
        </div>
    );
}

export default ListarContinente;