import React from 'react'
import { Link } from "react-router-dom";
import imgpost from "../assets/images/imgpost.jpg";
const Post = () => {
  return (
    <div className="post">
      <img className="post__postImg" src={imgpost} alt="" />
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
    </div>
  );
}

export default Post