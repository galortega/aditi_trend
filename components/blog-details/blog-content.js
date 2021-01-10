import moment from "moment";
import React from "react";
import blogDetailsImage from "../../assets/images/blog/blog-d-1-1.jpg";
moment.locale("es");
import _ from "lodash"


const BlogContent = ({ data }) => {
  return (
    <div>
      <div className="blog-card__image">
        <img src={data.feature_image} alt="" />
        <div className="blog-card__date">{_.startCase(moment(data.published_at).format("D MMMM"))}</div>
      </div>
      <div className="blog-card__meta d-flex justify-content-start mt-0 mb-0">
        <a href="news-details.html">
          <i className="far fa-user-circle"></i> Admin
        </a>
        <a href="news-details.html">
          <i className="far fa-comments"></i> 2 Comments
        </a>
      </div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
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
