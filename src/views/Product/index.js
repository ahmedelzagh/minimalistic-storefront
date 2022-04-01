import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import "./styles.scss"
import {GET_PRODUCT_BY_ID} from "../../queries/getProduct"
import Product from "./Product";



const ProductPageContainer = (props) => {
    let productID = useParams().id

    const { loading, data } = useQuery(GET_PRODUCT_BY_ID, {variables: {productID: productID}});
    if (loading) return [];
    return <Product addToCartHandler={props.addToCartHandler} data={data} currentCurrency={props.currentCurrency} />;

}

export default ProductPageContainer;