import {React , useState} from 'react';
import Card from './Card';
import { FaTimes } from 'react-icons/fa'

const ComentarioItem = ({ comentario, 
                          calificacion,
                          id,
                          handleDelete }) => {

//manejo del esado de un comentario:
//comentario y calificacion como atributos
//mediante el uso de Estados
   const [comment ]=useState(comentario)
   const [rating]=useState(calificacion)
   const [identificacion]=useState(id)
   
   

    return (
        <Card reverse={false}>
            <div className='num-display'>{rating}</div>
            <button 
                onClick={ () =>handleDelete(identificacion)}
                className='close'
                >
            <FaTimes color='purple' />
            </button>
            <div className='text-display'>{comment}</div>
        </Card>
    );
}

export default ComentarioItem;
