import React from 'react';
import load from '../../gifs/load.gif';
import './loading.css';

export default function Loading() {
    return (
        <div className="pm-loading-container">
            <img className="pm-loading-conteudo" src={load} width="50px" height="50px" alt="loading..." />
        </div>
    )
}
