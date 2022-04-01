import {gql} from "@apollo/client"

export const GET_PRODUCT_BY_ID = gql`
    query getProductByID($productID: String!){
            product(id: $productID){
                id,
                name,
                inStock,
                gallery,
                description,
                category,
                attributes{
                    id,
                    name,
                    type,
                    items{
                        displayValue,
                        value,
                        id
                    }
                },
                prices{
                    amount,
                    currency{
                        label,
                        symbol
                    }
                },
                brand
            }
    }
`