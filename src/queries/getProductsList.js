import {gql} from "@apollo/client"

export const GET_PRODUCTS_BY_CATEGORY = gql`
    query getProductsByCategories($input: CategoryInput!){
        category(input: $input){
            name,
            products{
                id,
                name,
                inStock,
                gallery,
                category,
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
    }
`