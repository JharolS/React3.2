import React from 'react';
import './index.css'
import PropTypes from "prop-types";

const Profile = (props) =>{
    const {src, name, state, money, transaction, balance, additional, showAdditional} = props
    return (
        <div className="profile">
            <div className="user">
                <img style={{height: 80, weight: 80}} 
                alt='' src={src}/>
                <h2>{name}</h2>
                <p>{state}</p>  
                <div style={{display: 'flex'}}>
                <button className="pen"></button>
                {additional && (
                    <button
                    onClick={() => showAdditional(additional)}
                    >More full perfile</button>
                )}
                </div>
            </div>
            <div className="economic">
                <k1>Money: {money}</k1>
                <k2>Transactions: {transaction}</k2>
                <k3>Balance: {balance}</k3>
            </div>
        </div>
    )
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    money: PropTypes.number.isRequired,
    transaction: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    additional: PropTypes.shape({
        last: PropTypes.string,
        age: PropTypes.number
    }),
    showAdditional: PropTypes.func.isRequired
}

Profile.defaultProps = {
    additional: {
        notes: "No information"
    }
}

export default Profile;