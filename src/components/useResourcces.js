import {useState,useEffect} from 'react';
import axios from 'axios';
 //for  making custom hooks
 
const useResources=(resourceName)=>{
    const [resources,setResources]=useState([]);
   const fetchResources=async (resourceName)=>{
     const response=await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
   
     setResources(response.data)
    }
     useEffect( ()=>{        
        fetchResources(resourceName) //ccallback function
     },[resourceName]) //only execute if resoureName vvalue change
   
 return resources
   }
   export default useResources;