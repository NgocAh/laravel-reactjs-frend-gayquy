import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import ReactHtmlParser from 'html-react-parser';

function SinglePost  () {
  const params = useParams();
  const navigate=useNavigate();
  const [blog, setBlog] = useState({
    title_blog: '',
    description: '',
    
  });
  const [loading, setLoading] = useState(true);

  useEffect( () => {
  const blog_slug = params.slug;
    
    axios.get(`/api/view-blog/${blog_slug}`).then(res=>{
        if(res.data.status === 200)
        {
            // console.log(res.data.product);
            setBlog(res.data.blog);
            console.log(res.data.blog)
        }
        else if(res.data.status === 404)
        {
            swal("Error",res.data.message,"error");
            navigate('/admin/view-slider');
        }
        setLoading(false);
    });
}, [params.slug]);



  return (
    <div className="singlePost">
      <div className="singlePost__singlePostWrapper">
        <img
          className="singlePost__singlePostWrapper__singlePostImg"
          src={`http://localhost/laravel-react-backend/public/${blog.slider}`} 
          alt=""
        />
        <h1 className="singlePost__singlePostWrapper__singlePostTitle">
                {blog.title_blog}
          {/* <div className="singlePost__singlePostWrapper__singlePostTitle__singlePostEdit">
            <i className="singlePost__singlePostWrapper__singlePostTitle__singlePostEdit__singlePostIcon far fa-edit"></i>
            <i className="singlePost__singlePostWrapper__singlePostTitle__singlePostEdit__singlePostIcon far fa-trash-alt"></i>
          </div> */}
        </h1>
        <div className="singlePost__singlePostWrapper__singlePostInfo">
          {/* <span>
            Author:
            <b className="singlePost__singlePostWrapper__singlePostInfo__singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span> */}
          {/* <span>1 day ago</span> */}
        </div>
        <p className="singlePost__singlePostWrapper__singlePostDesc">
        {/* {ReactHtmlParser(item.description)} */}

          <br />
          <br />
          {ReactHtmlParser(blog.description)}

        </p>
      </div>
    </div>
  );
}

export default SinglePost