import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

 const API = "https://fakestoreapi.com/products";
// const API = "https://api.pujakaitem.com/api/products";


const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_API_DATA", payload: data });

      //  setProducts(data);
      // fetch(url)
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
      //   dispatch({ type: "SET_API_DATA", payload: data });
      // })

      // const res = await axios.get(url);
      // const products = await res.data;
      // dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // API call for single product
  const getSingleProduct = async(url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: data });



      // fetch(url)
      // .then((response) => {
      //   return response.json();
      // })
      // .then((data) => {
      //   dispatch({ type: "SET_SINGLE_PRODUCT", payload: data });
      // })
      // const res = await axios.get(url);
      // const singleProduct = await res.data;
      // dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });

    }
    catch(error){
      dispatch({ type: "SET_SINGLE_ERROR" });

    }

  }

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct}}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };