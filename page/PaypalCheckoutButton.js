import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

const PaypalCheckoutButton = (props) => {
    const { product } = props;

    
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        setPaidFor(true);
    }

    if (paidFor) {
        alert("Cảm ơn bạn đã mua hàng!!!!! ");
    }
    
    if (error) {
        alert(error);
    }

    return (
        <PayPalScriptProvider>
            <PayPalButtons
                onClick={(data, actions) => {
                    const hasAlreadyBoughtCourse = false;
                    if (hasAlreadyBoughtCourse) {
                        setError("Bạn đã mua sản phẩm !!!!!");
                        return actions.reject();
                    } else {
                        return actions.resolve();
                    }
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                name:product.username,
                                email:product.email,
                                phone:product.phone,
                                address:product.address,
                                description: product.description,
                                method:product.method,
                                amount: {
                                    value: product.price,
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (data, action) => {
                    const order = await action.order.capture();
                    console.log("order", order);
                    let formData = new FormData();
                    formData.append('name', product.name )
                    formData.append('email', product.email)
                    formData.append('phone', product.phone)
                    formData.append('address', product.address)
                    formData.append('product', product.description)
                    formData.append('cost', product.price)
                    formData.append('method', product.method)
                    handleApprove(data.orderID);
                    axios({
                        method: 'post',
                        url: 'http://localhost/php_login/paypal.php',
                        data: formData,
                        config: { headers: { 'Content-Type': 'multipart/form-data' } }
                    })
                        .then(function (response) {
                            //handle success
                            console.log(response)
                            alert('New Contact Successfully Added.');
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response)
                        });    
                }}
                onCancel={() => { }}
                onError={(err) => {
                    setError(err);
                    console.log("Lỗi!!!!!", err);
                }}
            />
        </PayPalScriptProvider>
    )
}

export default PaypalCheckoutButton