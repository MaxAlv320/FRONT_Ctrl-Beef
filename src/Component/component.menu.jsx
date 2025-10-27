import React from 'react';

const menu = ({
products
}) => {
    const {
        name,
        description,
        img
    } = products;

    return (
        <div className='col-6 mx-auto mt-5'>
            <div className='card bg-white'>
                <div className="card">
                    <img className="card-img-top" src={img} alt="Card image" style={{height: '250px'}}/>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default menu;