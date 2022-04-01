import { useQuery } from "@apollo/client";
import Categories from "./CategoriesList";
import {GET_CATEGORIES} from "../../../queries/getCategories"

const CategoriesList = () => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  if (loading) return [];
  return <Categories data={data} />;
};

export default CategoriesList;
