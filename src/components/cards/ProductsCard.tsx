import {
  CompositionMethod,
  useComposedCssClasses,
} from "../../hooks/useComposedCssClasses";
import { CardProps } from "../../models/cardComponent";
import "../../sass/style.css";
import React, { SetStateAction, useState } from "react";
import OptionClick from "../OptionClick";
import StarRating from "../StarRating";
import Productprice from "../ProductPrice";
import arrowicon from "../../icons/righticon.svg"




export interface StandardCardConfig {
  showOrdinal?: boolean;
}

export interface StandardCardProps extends CardProps {
  configuration: StandardCardConfig;
  customCssClasses?: StandardCardCssClasses;
  cssCompositionMethod?: CompositionMethod;
}

export interface StandardCardCssClasses {
  container?: string;
  header?: string;
  body?: string;
  descriptionContainer?: string;
  ctaContainer?: string;
  cta1?: string;
  cta2?: string;
  ordinal?: string;
  title?: string;
  ctaButton?: string;
  ProductPriceClass?: string;
  rating?: number;
  levelicon?: any;
  price?: any;
}
// interface IState {
//   count: number;
// }



const builtInCssClasses: StandardCardCssClasses = {
  container:
    "justify-between border rounded-lg mb-3 p-4 shadow-sm flex flex-row ProductVerticalContainer",
  header: "text-grey-800 ProductHeaderClass",
  body: "flex justify-end pt-2.5",
  descriptionContainer: "w-full text-base",
  ctaContainer: "flex flex-col justify-end ml-4",
  cta1: "min-w-max bg-blue-600 text-white font-medium rounded-lg py-2 px-5 shadow",
  cta2: "min-w-max bg-white text-blue-600 font-medium rounded-lg py-2 px-5 mt-2 shadow",
  ordinal: "mr-1.5 text-lg font-medium",
  title: "text-lg font-bold text-black-800",
  ctaButton:
    "flex justify-center border-2 w-full rounded-md self-center	align-middle mt-4 hover:bg-green-900",
  ProductPriceClass: "ProductPrice flex flex-row mb-2 mt-1 font-bold",
};

// interface CtaData {
//   label: string;
//   link: string;
//   linkType: string;
// }


/**
 * This Component renders the base result card.
 *
 * @param props - An object containing the result itself.
 */
export function ProductsCard(
  this: {
    id: string;
    CardComponent: (props: StandardCardProps) => JSX.Element;
    showOrdinal: false;
  },
  props: StandardCardProps
): JSX.Element {
  const { configuration, result, customCssClasses, cssCompositionMethod } =
    props;
  const cssClasses = useComposedCssClasses(
    builtInCssClasses,
    customCssClasses,
    cssCompositionMethod
  );



  const [childImage, setchildImage] = useState("");
  const [ProductColor, setProductColor] = useState("");
  const [ProductSize, setProductSize] = useState("");
  const [ChildProductId, setChildProductId] = useState("");

  const handleClick = (data: any, data2: any, data3: any, data4: any) => {
    setchildImage(data)
    setProductColor(data2)
    setProductSize(data3)
    setChildProductId(data4)
  };



  const Products: any = result.rawData;
  const ProductSku = Products.id;
  const ProductsDec = Products.richTextDescription;
  const ProductLandingPage = Products.slug ? Products.slug : "#";
  const ProductPrice = Products.c_prices ? Products.c_prices : "23";
  const photogallery = Products.photoGallery;
  const c_rating = Products.c_rating;
  const primaryPhoto = Products.primaryPhoto.image.url;
  const c_offerTitle = Products.c_offerTitle;
  const rating = Products.c_rating


  console.log(Products, "Products")
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }



  // TODO (cea2aj) Update this to render the ordinal once we get mocks from UX
  function renderOrdinal(index: number) {
    // return (
    //   <div className={cssClasses.ordinal}>{index}</div>
    // );
    return null;
  }

  function renderTitle(title: string) {
    return (
      <a href={ProductLandingPage} className={cssClasses.title}>
        {title}
      </a>
    );
  }



  const [count, setCounter] = useState(0);
  // const state: IState = { count: 0 };

  // const [onload, setOnload] = useState(true);
  // const [value, setValue] = React.useState(2);


  // if (onload) {
  //   if (window.parent) {
  //     window.parent.postMessage(
  //       { productId: "0", productColor: "0", productSize: "0", childProductId: "0", qty: "0", actionType: "updateCartData" },
  //       "*"
  //     );
  //     setOnload(false);
  //   }
  // }

  // window.addEventListener("message", function (e) {
  //   const data = e.data;
  //   const decoded = typeof data == "string" ? JSON.parse(data) : data;
  //   if (count > 0) {
  //     setCounter(0);
  //   }
  //   let productArray = [];
  //   if (typeof decoded.cartData != "undefined") {
  //     if (decoded.cartData.length > 0) {

  //       for (let i = 0; i < decoded.cartData.length; i++) {
  //         if (decoded.cartData[i].product_id == ProductSku) {
  //           setCounter(decoded.cartData[i].qty);
  //           productArray.push(ProductSku, ProductColor, ProductSize, ChildProductId);
  //         }
  //       }

  //     }
  //   }
  // });




  const increment = (): any => {
    setCounter(count + 1);
  };


  const decrement = (): any => {
    if (count == 0) {
      // const state: IState = { count: 1 };
    } else {
      setCounter(count - 1);
    }
  };




  const [ToggleState, setToggleState] = useState(1);
  const [firstdefault, setFirstdefault] = useState(true);

  const toggleTab = (index: SetStateAction<number>) => {
    setFirstdefault(false)
    setToggleState(index);
  };







  const getActiveClass = (index: number, className: string) =>
    ToggleState === index ? className : "";



  return (
    <div className="Productcontainer">
        <div className="w-[304px] h-[790px] shadow-md  m-auto ">
          <div className=" p-[20px]">
            <img className="" src={primaryPhoto} alt=""></img>
            <div>
              <a className="text-base text-[#3d3d3f] tracking-wider" href="">{configuration.showOrdinal &&
                result.index &&
                renderOrdinal(result.index)}
                {result.name && renderTitle(result.name)}</a>
            </div>
            <button className="text-xs font-bold border border-black my-2.5 px-[5px] py-[5px] w-[264px] ">{c_offerTitle}</button>
            {/* rating */}
            <div className="content-container">
              {c_rating?.map((i: any, index: Number) => {
                return (
                  <div className={`review flex items-center ProductsImage content ${getActiveClass(i.review, "active-content")} ${index == 0 && firstdefault ? "active-content" : ''}`}>
                    <StarRating rating={i.rating} noofrating={i.noOfRating} />
                  </div>
                );
              })}
            </div>
            {/* NICOTINE LEVEL */}
            <div className="level py-[10px]">
              <span className="text-xs text-[#6e6e6e] font-semibold">NICOTINE LEVEL</span>
              <div>
                <ul className="toggle-icon flex justify-evenly border border-border-[#D9D9D9]">
                  {photogallery?.map((i: any, index: Number) => {
                    return (
                      <li
                        className={`tabs flex justify-center border-r border-[#D9D9D9] h-[42px] w-[70.55px] ${getActiveClass(i.image.alternateText, "active-tabs")} ${index == 0 && firstdefault ? "active-tabs" : ''}`}
                        onClick={() => toggleTab(i.image.alternateText)}
                      >
                        <img className=" " src={i.image.url} alt="" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <Productprice price={ProductPrice} />
            <div className="border border-[#6e6e6e] rounded-full p-2.5 flex justify-between items-center  ">
              <button className="pl-3"><span className="text-lg font-extrabold" onClick={decrement}>-</span></button>
              <div data-productId={ProductSku} key={count} className="text-lg text-[#6e6e6e] font-normal"> {count}</div>
              <button className="pr-3"><span className="text-lg font-extrabold" onClick={increment}>+</span></button>
            </div>
            <div className="ProductCta">
              <button className="pl-3">
                <a
                  target="top"
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.parent) {
                      window.parent.postMessage(
                        {
                          productId: ProductSku,
                          productColor: ProductColor,
                          productSize: ProductSize,
                          childProductId: ChildProductId,
                          qty: { count },
                          actionType: "addtocart",
                        },
                        "*"
                      );
                    }
                  }}
                >
                  <div className="my-[10px] bg-[#F5A022] rounded-full p-2.5 flex justify-center items-center">
                    <div className="Addtocart text-xs font-bold -tracking-wides">Add to Basket</div>
                  </div>
                </a>
              </button>
            </div>
            <button>
              <a href=""><span className="text-blue-400 text-base font-semibold">{Products.stockStatus}</span></a>
            </button>
            <div>
              <button className="flex items-center ">
                <a href=""><span className="text-[#6e6e6e] text-base font-semibold">{Products.c_subscription.label}</span></a>
                <img className=" " src={arrowicon} width="28" height="28" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
