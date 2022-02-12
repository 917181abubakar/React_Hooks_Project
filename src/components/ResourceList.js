import React from 'react';
import useResources from '../components/useResourcces';

// class ResourceList extends React.Component {
//   state = {
//     resources: [],
//   }

  // async componentDidMount() {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

  //   this.setState({ resources: response.data });
  // }

  // async componentDidUpdate(prevProps) {
  //   if(prevProps.resourceName !== this.props.resourceName) {
  //     const reesponse = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

  //     this.setState({ resources: response.data });
  //   }
  // }
  //for  making custom hooks
//   const useResources=(resouceName)=>{
//    const [resouces,setResources]=useState([]);
//   const fetchResources=async (resourceName)=>{
//     const response=await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
//     setResources(response.data)
//     useEffect( ()=>{
//       fetchResources(resouceName) //ccallback function
//     },[resouceName]) //only execute if resoureName vvalue change
//   }
// return resouces
//   }
  
const ResourceList=({resourceName})=>{ 
  // without custom hooks
 /* const [resouces,setResources]=useState([]);
  const fetchResources=async (resourceName)=>{
    const response=await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
    setResources(response.data)
    useEffect( ()=>{
      fetchResources(resouceName) //ccallback function
    },[resouceName]) //only execute if resoureName vvalue change
  }
*/
const resources= useResources(resourceName);
    return (
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>{resource.title}</li>
        ))}
      </ul>
    )
  }


export default ResourceList;
