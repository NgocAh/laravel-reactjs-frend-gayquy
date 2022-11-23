import React from 'react'
import Post from '../component/Post';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import ReactHtmlParser from 'html-react-parser';


function Stories  () {
  document.title = "Nụ Cười Sáng - Những câu chuyện"; 
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    axios.get(`/api/view-blog`).then(res=>{
        if(res.data.status === 200)
        {
            setBlog(res.data.blogs)
            setLoading(false);                   

        }
        else 
        {
           console.log('false')
        }
    });
}, []);

var display_Blogdata = "";
if(loading)
{
    return <h4>View Blog Loading...</h4>
}
else
{
    display_Blogdata = blog.map( (item) => {
        
        return (

          <div className="post"  key={item.id}>
          <img className="post__postImg" src={`http://localhost/laravel-react-backend/public/${item.image}`} alt="" />
          <div className="post__postInfo">
            <span className="post__postInfo__postTitle">
              <Link to={`/stories/${item.slug}`}> {item.title}</Link>
            </span>
            <hr />
            {/* <span className="post__postInfo__postDate">1 hour ago</span> */}
          </div>
          <p className="post__postDesc">
            {ReactHtmlParser(item.description)}
          </p>
        </div>
        )
    });
}

  return (
    <div className="Stories">
      <div className="Stories__header">
        <div className="Stories__header__headerTitles">
          <span className="Stories__header__headerTitles__headerTitleSm">
            Những câu chuyện & những hành trình
          </span>
          <span className="Stories__header__headerTitles__headerTitleLg">
            BLOG
          </span>
        </div>
        <img className="Stories__header__headerImg" src={`http://localhost/laravel-react-backend/public/uploads/imgblog.jpg`} alt="" />
      </div>
      <div className="Stories__blog">
        <div className="Stories__blog__posts">
         
        {/* <div className="post">
      <img className="post__postImg" src="" alt="" />
      <div className="post__postInfo">
        <span className="post__postInfo__postTitle">
          <Link to="/stories/singlePost">Lorem ipsum dolor sit amet</Link>
        </span>
        <hr />
        <span className="post__postInfo__postDate">1 hour ago</span>
      </div>
      <p className="post__postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div> */}
          {display_Blogdata}
           
        </div>
        {/* <div className="Stories__blog__sidebar">
          <div className="Stories__blog__sidebar__sidebarItem">
            <span className="Stories__blog__sidebar__sidebarItem__sidebarTitle">
              ABOUT ME
            </span>

            <img src={logo} className="" alt="" />
            <p>
              Nụ Cười Sáng là nền tảng giúp bạn dễ dàng chung tay quyên góp tiền
              cùng hàng triệu người, giúp đỡ các hoàn cảnh khó khăn trên khắp cả
              nước. Hãy cũng Nụ Cười Sáng trao đi những yêu thương, tạo nên
              nhiều giá trị cho cuộc sống
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Stories