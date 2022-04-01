import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import Category from "./Category";
import {GET_PRODUCTS_BY_CATEGORY} from "../../queries/getProductsList"



const ProductsContainter = (props) => {
    let title = useParams().categoryId

    const { loading, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {variables: {input: {title}}});
    if (loading) return [];
    return <Category data={data} currentCurrency={props.currentCurrency}/>;

}

export default ProductsContainter;