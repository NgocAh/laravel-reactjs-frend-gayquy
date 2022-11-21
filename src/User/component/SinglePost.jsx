import React from 'react'
import imgpost from "../assets/images/imgpost.jpg";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePost__singlePostWrapper">
        <img
          className="singlePost__singlePostWrapper__singlePostImg"
          src={imgpost}
          alt=""
        />
        <h1 className="singlePost__singlePostWrapper__singlePostTitle">
          Lorem ipsum dolor
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
          <span>1 day ago</span>
        </div>
        <p className="singlePost__singlePostWrapper__singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
}

export default SinglePost