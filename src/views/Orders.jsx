import {Paper, Table, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useEffect, useState} from "react";
import {fetchOrders} from "../service/apiRequests";
import {Counter} from "../components/Counter";

export const Orders = () => {
    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);

    function myFunction() {
        document.getElementsByTagName("p1").innerHTML = "Your order is placed";
    }

    useEffect(() => {
        setTimeout(() => {
            fetchOrders().then((data) => setOrders(data));
        }, 500);
    }, [])

    useEffect(() => {
        if (orders) {
            setIsLoading(false);
        }
    }, [orders])

    return(
   <div className={"table"}>
       <table>
           <tr>
               <th>ID</th>
               <th>Amount</th>
               <th>Address</th>
           </tr>
           {orders?.map((item) => {
               const {id, totalAmount, address} = item;
               return (
                   <tr key={id}>
                       <td>{id}</td>
                       <td><Counter/></td>
                       <td><input type="text" value={address}/></td>
                   </tr>
               )
           })}

       </table>
       <button id={"orderButton"} onClick={myFunction}>Place Order</button>
       <p1 id={"orderParagraph"}></p1>
   </div>
    )

}