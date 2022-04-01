import { useQuery } from "@apollo/client";

import { GET_CURRENCIES } from "../../../queries/getCurrencies";
import Currencies from "./CurrenciesList";


const CurrenciesList = (props) => {
  const { loading, data } = useQuery(GET_CURRENCIES);
  if(loading) return []
  return <Currencies data={data} changeCurrencyHandler={props.changeCurrencyHandler} currentCurrency={props.currentCurrency}/>;
};

export default CurrenciesList;
