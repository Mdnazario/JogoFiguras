import React, { useState } from 'react'
import "./ImagensJogo.css"


function ImagensJogo() {

    const [img, setImg] = useState('')
    const array = ['um.svg', 'dois.svg', 'tres.svg' , 'quatro.svg', 'cinco.svg' , 'seis.svg', 'sete.svg' , 'oito.svg' , 'nove.svg', 
        'dez.svg' , 'onze.svg', 'doze.svg' , 'treze.svg', 'quatorze.svg' , 'quinze.svg' , 'dezesseis.svg', 'dezessete.svg' , 'dezoito.svg', 
        'dezenove.svg' , 'vinte.svg'];

    function imagensAleatoria() {

        const randomIndex = Math.floor(Math.random() * array.length);

        const randomImg = './imagens/'+array[randomIndex];

        setImg(randomImg)

    } return (
        <div className='container-imagensJogo'>
            <button className='container-button' onClick={imagensAleatoria}>SORTEIO</button>
            
            <div className='container-img'><img src={img} alt="" /></div>
        </div>


    )
}

export default ImagensJogo