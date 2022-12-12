import React from 'react'
import chip from '../page/image/chip.png'; // with import
import visa from '../page/image/visa.png'; // with import
import { useState } from 'react';


function Paymencard() {
    const [isRotated, setIsRotated] = React.useState(false);

    const data = {
        cvv: "",
        focus: "",
        name: "",
        number: "",
        month: "",
        year: ""
    };
    const [cardDetails, setCardDetails] = React.useState(data);
    const handleInputFocus = (e) => {
        setCardDetails({ ...cardDetails, focus: e.target.name });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };
    const onRotate = () => setIsRotated((rotated) => !rotated);

    return (
        <div class="container1">
            <div class="card-container">

                <div class="front">
                    <div class="image">
                        <img src={chip} alt="" />
                        <img src={visa} alt="" />
                    </div>
                    <div class="card-number-box" onChange={handleInputChange}
                        onFocus={handleInputFocus} > {cardDetails.number}</div>
                    <div class="flexbox">
                        <div class="box">
                            <span>card holder</span>
                            <div class="card-holder-name" onChange={handleInputChange}
                                onFocus={handleInputFocus}>{cardDetails.name}</div>
                        </div>
                        <div class="box">
                            <span>expires</span>
                            <div class="expiration" onChange={handleInputChange}
                                onFocus={handleInputFocus}>
                                <span class="exp-month" >{cardDetails.month}</span>
                                <span class="exp-year">{cardDetails.year}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="back">
                    <div class="stripe"></div>
                    <div class="box" onChange={handleInputChange}
                        onFocus={handleInputFocus}>
                        <span>{cardDetails.cvv}</span>
                        <div class="cvv-box"></div>
                        <img src={visa} alt="" />
                    </div>
                </div>

            </div>
            <div class="back" style={{ transform: 'perspective(1000px) rotateY(0deg)' }}>
                <div class="stripe" ></div>
                <div class="box" onChange={handleInputChange}
                    onFocus={handleInputFocus} >
                    <span>{cardDetails.cvv}</span>
                    <div class="cvv-box"></div>
                    <img src="image/visa.png" alt="" />
                </div>
            </div>


            <form1>

                <div class="inputBox">
                    <span>card number</span>
                    <input type="text" name="number" id="password" onChange={handleInputChange} maxLength="16"
                        onFocus={handleInputFocus} value={cardDetails.number}
                    />
                </div>
                <div class="inputBox">
                    <span>card holder</span>
                    <input type="text" class="card-holder-input" name="name" onChange={handleInputChange}
                        onFocus={handleInputFocus} value={cardDetails.name} />
                </div>
                <div class="flexbox">
                    <div class="inputBox" onChange={handleInputChange} onFocus={handleInputFocus} value={cardDetails.month}>
                        <span>expiration mm</span>
                        <select name="month" id="" class="month-input" >
                            <option value="month" selected disabled >month</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div class="inputBox" onChange={handleInputChange} onFocus={handleInputFocus} value={cardDetails.year}>
                        <span>expiration yy</span>
                        <select name="year" id="" class="year-input">
                            <option value="year" selected disabled>year</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                    </div>
                    <div class="inputBox">
                        <span>cvv</span>
                        <input type="text" maxlength="4" class="cvv-input" name="cvv" onChange={handleInputChange}
                            onFocus={handleInputFocus} value={cardDetails.cvv} onClick={onRotate} />
                    </div>
                </div>
                <input type="submit" value="submit" class="submit-btn" />
            </form1>

        </div>
    )
}

export default Paymencard