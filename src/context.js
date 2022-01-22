import React, {useContext,useReducer,useEffect} from 'react';
import reducer from './reducer'


const AppContext = React.createContext();
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
    isLoading: true,
    hits:[],
    query: 'react',
    page:0,
    nbPages:0
}
const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer, initialState)

    const fetchStories =async (url)=>{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        dispatch({type:'SET_STORIES',payload:{hits:data.hits,nbPages:data.nbPages}})
    }
    const removeStory = (id) =>{
        dispatch({type:'REMOVE_STORY',payload:id})
    }
    const handleSearch = (query)=>{
        dispatch({type:'HANDLE_SEARCH',payload:query})
    }
    const handlePage = (value)=>{
        dispatch({type:'HANDLE_PAGE',payload:value})
    }
    useEffect(() => {
        fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    },[state.query,state.page])

    return <AppContext.Provider value={{...state,removeStory,handleSearch,handlePage}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext =()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}