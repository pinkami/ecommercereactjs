import { useState,useEffect } from 'react';
import React from 'react';
import CardDetail from '../components/CardDetail';
import { useParams } from 'react-router-dom';
import { Ring } from '@uiball/loaders';
import { db } from '../utils/firebaseConfig';
import {doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [datos, setdatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams();//le doy un numero a la variable ID.

    useEffect(() => {

        const firestoreDetail =async()=>{
            //Trae un producto de la base de datos según el idItem que recibe como parametro.Al objeto lo devuelve con el id integrado.
            const docRef = doc(db, "products", idItem);
            const docSnap = await getDoc(docRef);
            return {
                id:idItem,
                ...docSnap.data()
            };
        }
        firestoreDetail()
        .then(result=>{
            setdatos(result);
            setLoading(false);
        })
    }, [idItem]);

    return (
        <div>
            {
                loading
                ?
                <div className='ring'>
                    <Ring size={70}/>
                </div>
                : 
                <CardDetail
                imagen={datos.image}
                marca={datos.name}
                stock={datos.quantity}
                detalle={datos.description}
                precio={datos.precie}
                objeto={datos}
                />
            }
        </div>
        
    );
}

export default ItemDetailContainer;
