import { useState,useEffect} from 'react';
import React from 'react';
import Card from '../components/card';
import { NavLink, useParams } from 'react-router-dom';
import { Ring } from '@uiball/loaders';
import { db } from '../utils/firebaseConfig';
import { collection, getDocs,query,where} from "firebase/firestore";

const ItemListContainer = () => {

    const [datos, setdatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategory} = useParams();

    useEffect(() => {
        
        setLoading(true)
        const  firestoreFetch = async ()=>{

            let q
            if (idCategory) {
                q = query(collection(db, "products"),where('category','==',parseInt(idCategory)))
            }
            const querySnapshot = await getDocs(q)
            const dataFromFirestore = querySnapshot.docs.map((document) => ({
                id:document.id,
                ...document.data()
            }));
            return dataFromFirestore;
        }
        firestoreFetch()
        .then(result=>{
            setdatos(result);
            setLoading(false);
        })
    }, [idCategory]);
    return (
        <div className='conteiner-products'>
            {
            loading? 
            <div className='ring-product'>
                <Ring size={80}/>
            </div>
            : datos.map((elemento) => (
                <Card
                    key={elemento.id}
                    imagen={elemento.image}
                    marca={elemento.name}
                    modelo={elemento.precie}
                    detalle={<NavLink className="card-link" to={`/detalle/${elemento.id}`}>Comprar</NavLink>}
                    //el navlink recibe como paramtro el id del producto y al hacer click,lo lleva al detalle del producto que alla seleccionado.
                />
            ))
        }
        </div>
    );
}

export default ItemListContainer;
