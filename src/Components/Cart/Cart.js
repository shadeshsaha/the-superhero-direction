import React from 'react';
import '../Cart/Cart.css';

const Cart = (props) => {
    let total = 0;
    // console.log(props.invitation);
    // console.log(props.invitation.Salary);

    // Grand Salary
    for(const guest of props.invitation){
        total = total + guest.Salary;
    }

    return (
        <div>
            <div className="mt-2 p-3 cart">
                <h3>Invitation Cart</h3>
                <h6>Invited Guest : {props.invitation.length} </h6>
                <h6>Grand Salary : ${total}</h6>
            </div>
            
            {/* On Click invitation */}
            <div>
                <ul>
                    <h1>
                        <i>
                            {
                                props.invitation.map(guest=><li>{guest.name}</li>)
                            }
                        </i>
                    </h1>
                </ul>
            </div>
        </div>
    );
};

export default Cart;