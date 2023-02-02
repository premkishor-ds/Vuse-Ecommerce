import { useState } from "react";


export default function Productprice(price: any) {
    const [tripType, setTripType] = useState("oneWay");

    const newprice = price.price;
    let convertto = newprice.replace("$", "");
    let value = parseInt(convertto, 10);
    const discount = value / 100 * 5;
    const discountedvalue = value - discount;

    return (
        <div className="App">
            <div className="radio-btn-container">
                <div
                    className="radio-btn"
                    onClick={() => {
                        setTripType("oneWay");
                    }}
                >
                    <input
                        type="radio"
                        value={tripType}
                        name="tripType"
                        checked={tripType == "oneWay"}
                    />
                    one Time Purchase ${price.price}
                </div>
                <div
                    className="radio-btn"
                    onClick={() => {
                        setTripType("roundTrip");
                    }}
                >
                    <input
                        type="radio"
                        value={tripType}
                        name="tripType"
                        checked={tripType == "roundTrip"}
                    />
                    subscription  ${discountedvalue}
                </div>
            </div>
        </div>
    );
}
