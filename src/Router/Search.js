import React, {useState , useEffect} from "react";
import ImageComponent from "./ImageComponent";

const Search = () => {

    const [img, setImg] = useState("");
    const [res, setRes] = useState([]);
    
    const Access_Key = "DD5dhkJt5KfWt408GCDQLglSZykxIc4dvWR1ug5HUEY";
     const fetchRequest = async () => {
    const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
     console.log(result);
     setRes(result);
     };
     useEffect(() => {
      fetchRequest();
     }, []);
    
    const Submit = () => {
  fetchRequest();
  setImg("");
};

    return (
        <>
            <div className='Navbar_div'>
            
                <div className='Search_div'>
                        <input
                        type="text"
                         placeholder="Search Anything Images..."
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                    <button onClick={Submit} className='btn'>Search</button>
                </div>
            </div>
            <div style={{width : "100vw" , display : "flex" , float : "left" , flexWrap : "wrap"}}>


                {res.map((val) => {
    return (
        <>
            <ImageComponent
            srcValue={val.urls.small}
             altValue={val.alt_description}
        
            />
      </>
    );
  })}
         
            </div>
        </>
    );
}
export default Search;