import React from 'react';

const filterReducer = (state, action) => {
 switch(action.type) {
    case "LOAD_FILTER_PRODUCTS":
        return {
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload]
        }

    case "SET_GRID_VIEW":
        return {
            ...state,
            grid_view: true,
        }

    case "SET_LIST_VIEW":
        return {
            ...state,
            grid_view: false,
        }

    case "GET_SORT_VALUE": {
        // let userSortValue = document.getElementById("sort");
        // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        // console.log(sort_value);

        return {
            ...state,
            sorting_value: action.payload, 
        }
    }

    case "SORTING_PRODUCTS":
        let newSortData;
        // let tempSortProduct = [...action.payload];
  
        const { filter_products, sorting_value } = state;
        let tempSortProduct = [...filter_products];
  
        const sortingProducts = (a, b) => {
          if (sorting_value === "lowest") {
            return a.price - b.price;
          }
  
          if (sorting_value === "height") {
            return b.price - a.price;
          }
  
          if (sorting_value === "a-z") {
            return a.category.localeCompare(b.category);
          }
  
          if (sorting_value === "z-a") {
            return b.category.localeCompare(a.category);
          }
        };
  
        newSortData = tempSortProduct.sort(sortingProducts);
  
        return {
          ...state,
          filter_products: newSortData,
        };

      case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
      
    case "FILTER_PRODUCTS":
      let {all_products} = state;
      let tempFilterProducts = [...all_products];
      const {text, category}=state.filters;

      if(text) {
        tempFilterProducts=tempFilterProducts.filter((curElm)=>{
          return curElm.title.toLowerCase().includes(text);
        });
      }

      if(category!=="all") {
        tempFilterProducts=tempFilterProducts.filter((curElm)=>{
          return curElm.category===category;

      });
    }
      return {
        ...state,
        filter_products: tempFilterProducts,
      }

    default:
        return state;

 }
}

export default filterReducer;