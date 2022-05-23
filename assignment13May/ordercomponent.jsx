import React, { Fragment, useState } from "react";
import OrderService from "../../services/orderservice";
const OrderComponent = () => {

    const [order,setOrder] = useState({OrderId:'',CustomerName:'',Quantity:'',ItemName:''});
    const serv = new OrderService();
    const [message, setMessage] = useState("");
    const save= async ()=>{
        try {
           let response = await serv.postData(order);
           setMessage('Add is Successful');
        }catch(ex){
            setMessage(ex.message);
        }    
   };
   const clear=()=>{
    // reset department properties
    setOrder({OrderId:'',CustomerName:'',Quantity:'',ItemName:''});
}

    return(
        <Fragment>
            <div className="container">
                <strong>{message}</strong>
                <h1 className="text-center">Order Data</h1>
            <div className="row g-2"> 
            <div>             
                <div className="col-auto">
                    <label>OrderId</label>
                    <input type="text" value={order.OrderId} onChange={(evt)=>setOrder({...order, OrderId:(evt.target.value)})} className="form-control"></input>
                </div>
                </div> 
             </div>
             <div>   
                <div className="col-auto">
                    <label>Customer Name</label>
                    <input type="text" value={order.CustomerName} onChange={(evt)=>setOrder({...order, CustomerName:(evt.target.value)})} className="form-control"></input>
                </div>
              </div>
              <div>  
                <div className="col-auto">
                    <label>Quantity</label>
                    <input type="text" value={order.Quantity} onChange={(evt)=>setOrder({...order, Quantity:(evt.target.value)})} className="form-control"></input>
                </div>
                <div className="col-auto">
                    <label>Item Name</label>
                    <input type="text" value={order.ItemName} onChange={(evt)=>setOrder({...order, ItemName:(evt.target.value)})} className="form-control"></input>
                </div>
                <div className="col-auto text-center">
                    <button type="button" onClick={save} className="btn btn-primary ">Order</button>
                    <button type="button" onClick={clear} className="btn btn-warning ">Clear</button>
                </div>
            </div>
            </div> 
        </Fragment>
    );
}
export default OrderComponent;