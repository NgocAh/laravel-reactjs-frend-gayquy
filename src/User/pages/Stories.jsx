import React from 'react'
import Post from '../component/Post';
import imgblog from "../assets/images/imgblog.jpg";

const Stories = () => {
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
        <img className="Stories__header__headerImg" src={imgblog} alt="" />
      </div>
      <div className="Stories__blog">
        <div className="Stories__blog__posts">
          <Post />
          <Post />
          <Post />
          {/* <Post />
          <Post />
          <Post /> */}
          
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