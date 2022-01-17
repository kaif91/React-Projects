import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  
  if(action.type === LOAD_PRODUCTS){
    let max_price = action.payload.map((p)=>p.price)
    max_price = Math.max(...max_price)
    return {...state,all_products:[...action.payload],
      filtered_products:[...action.payload],
      filters:{
        ...state.filters,
        max_price:max_price,
        price:max_price
      }
    }
  }

  if(action.type === SET_GRIDVIEW){
    return {...state,grid_view:true}
  }
  if(action.type === SET_LISTVIEW){
    return {...state,grid_view:false}
  }
  if(action.type === UPDATE_SORT){
    return {...state, sort:action.payload}
  }
  if(action.type === SORT_PRODUCTS){
    const {sort,filtered_products} = state
    let tempProducts = [...filtered_products];
    if(sort === 'price-lowest'){
       tempProducts = tempProducts.sort((a,b)=>a.price-b.price)
    }
    if(sort === 'price-highest'){
       tempProducts = tempProducts.sort((a,b)=>b.price-a.price)
    }
    if(sort === 'name-a'){
      tempProducts=tempProducts.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      });
    }
    if(sort === 'name-z'){
      tempProducts=tempProducts.sort((a,b)=>{
        return b.name.localeCompare(a.name)
      });
    }
    return {...state,filtered_products:tempProducts}
  }
  if(action.type === UPDATE_FILTERS){
    const {name,value} = action.payload;
    return {...state,
      filters:{...state.filters,
      [name]:value
      }
    }
  }
  if(action.type === FILTER_PRODUCTS){
    const {all_products} = state
    const {text,category,company,color,price,shipping}=state.filters
    let temp = [...all_products];
    if(text){
      temp = temp.filter((p)=>{
        return p.name.toLowerCase().startsWith(text)
      })
    }
    if(category!== 'all'){
      temp = temp.filter((p)=>{
        return p.category === category
      })
    }
    if(company!== 'all'){
      temp = temp.filter((p)=>{
        return p.company === company
      })
    }
    if(color !== 'all'){
      temp = temp.filter((p)=>{
        return p.colors.find((c)=>c === color)
      })
    }

    if(shipping){
      temp =temp.filter((p)=>p.shipping === true)
    }
    temp = temp.filter((p)=>{
      return p.price<= price
    })
    return {...state,filtered_products:temp}
  }
  if(action.type === CLEAR_FILTERS){
    return {...state,
      filters:{
        text:'',
        company:'all',
        category:'all',
        color:'all',
        min_price:0,
        max_price:0,
        price:state.filters.max_price,
        shipping:false
      }
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
