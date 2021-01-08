import React from "react";
import blogDetailsImage from "../../assets/images/blog/blog-d-1-1.jpg";

const BlogContent = (props) => {
  let { post } = props;
  post = {
    image:
      "https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png",
    title: "Writing posts with Ghost ✍️",
    date: "2021-01-06T22:55:15.000+00:00",
    text:
      "Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.",
    link: "/news-details/undefined",
    commentCount: 0,
    author: "Paula Contreras"
  };
  return (
    <div>
      <div className="blog-card__image">
        <img src={blogDetailsImage} alt="" />
        <div className="blog-card__date">20 May</div>
      </div>
      <div className="blog-card__meta d-flex justify-content-start mt-0 mb-0">
        <a href="news-details.html">
          <i className="far fa-user-circle"></i> Admin
        </a>
        <a href="news-details.html">
          <i className="far fa-comments"></i> 2 Comments
        </a>
      </div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <div className="blog-details__meta">
        <ul className="list-unstyled blog-details__category">
          <li>
            <span>Tags:</span>
          </li>
          <li>
            <a href="#">charity</a>
          </li>
          <li>
            <a href="#">donations</a>
          </li>
          <li>
            <a href="#">savelives</a>
          </li>
        </ul>
        <ul className="list-unstyled blog-details__category">
          <li>
            <span>Category:</span>
          </li>
          <li>
            <a href="#">charity</a>
          </li>
          <li>
            <a href="#">childrens</a>
          </li>
        </ul>
      </div>
      <div className="blog-navigations">
        <a href="#">Our donation is hope for poor childrens</a>
        <a href="#">Fundrising for Early Childhood Rise</a>
      </div>
    </div>
  );
};

export default BlogContent;
