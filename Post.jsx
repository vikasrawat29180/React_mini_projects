import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import axios from 'axios';
import "./Post.css"

const Post = () => {
const[data,setData]=useState([]);
const[PageNu,setPageNu]=useState(1);


useEffect(() => {
  axios
  .get(`https://picsum.photos/v2/list?page=${PageNu}&limit=4`).then((res)=>setData(res.data))

}, [PageNu])
  return (
    
      <div className="contain">
        <div className="post-container">
            {data.map((item,index)=>{
                return<img src={item.download_url}/>

            })}
        </div>
<Pagination  PageNu={PageNu} setPageNu={setPageNu}  />
</div>
  )
}
export default Post
