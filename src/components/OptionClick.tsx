import { useEffect, useState } from "react";

function OptionClick(props: any) {
    const [colorid, setColorId] = useState("");
    const [sizeid, setSizeId] = useState("");

    const [imageToggle, setimageToggle] = useState(false);

    const [childImage, setChildImage] = useState("");
    const [childPrice, setChildchildPrice] = useState("");
    const [childId, setchildId] = useState("");

    const [active, setActive] = useState(null)
    const [toggle, setToggle] = useState(null)


    const Sizearray: any = {
        166: "XS",
        167: "S",
        168: "M",
        169: "L",
        170: "XL",
        171: "28",
        172: "29",
        173: "30",
        174: "31",
        175: "32",
        176: "33",
        177: "34",
        178: "36"
    }

    const Colorarray: any = {
        49: "Black",
        51: "Brown",
        50: "Blue",
        52: "Grey",
        53: "Green",
        56: "Orange",
        57: "Pink",
        58: "Red",
        59: "White",
        60: "Yellow"
    }

    function changeColor(cid: any) {
        if (cid == colorid) {
            setColorId("");
            setActive(null);
        } else {
            setActive(cid);
            setColorId(cid);
        }
    }

    function changeSize(cid: any) {
        if (cid == sizeid) {
            setSizeId("");
            setToggle(null);
        } else {
            setSizeId(cid);
            setToggle(cid);
        }
    }


    function getProductId() {
        props.product.c_relatedProduct.map((newi: any) => {
            if (newi.c_color == colorid && newi.size == sizeid) {
                setchildId(newi.id)
                setChildchildPrice(newi.sku)
            } else if (newi.c_color == colorid) {
                setChildImage(newi.photoGallery[0].image.url)
            }
        })

    }

    useEffect(() => {
        getProductId()
        props.handleClick(childImage, colorid, sizeid,childId, "tbtyu")
    })




    return (
        <>


            <p>color {Colorarray[colorid]}</p>
            <div className="content-container color">
                {props.product.c_color?.map((i: any) => {
                    return (
                        <div className={`color color${i}  ${active == i ? 'active' : "inactive"}`}  >
                            <button className="option"
                                onClick={() => {
                                    changeColor(i);
                                }} >{i}</button>
                        </div>
                    );
                })}
            </div>

            <p>size {Sizearray[sizeid]}</p>
            <div className="content-container size">
                {props.product.c_size?.map((j: any) => {
                    return (
                        <div className={`size ${toggle == j ? 'toggle' : "intoggle"}`}  >
                            <button className="option"
                                onClick={() => {
                                    changeSize(j);
                                }} >{Sizearray[j]}</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default OptionClick;

