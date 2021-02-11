import React from "react";
import Link from "next/link";

const BlogCard = ({
  image,
  title,
  date,
  excerpt,
  slug,
  commentCount,
  author
}) => {
  return (
    <div className="blog-card">
      <div className="blog-card__inner">
        <div className="blog-card__image">
          <img src={image} alt="" />
          <div className="blog-card__date">{date}</div>
        </div>
        <div className="blog-card__content">
          <div className="blog-card__meta">
            <Link href="/post/[slug]" as={`/post/${slug}`}>
              <a>
                <i className="far fa-user-circle"></i> {author}
              </a>
            </Link>
            <Link href="/post/[slug]" as={`/post/${slug}`}>
              <a>
                <i className="far fa-comments"></i> {commentCount}
              </a>
            </Link>
          </div>
          <h3>
            <Link href="/post/[slug]" as={`/post/${slug}`}>
              <a>{title}</a>
            </Link>
          </h3>
          <p>{excerpt}</p>
          <Link href="/post/[slug]" as={`/post/${slug}`}>
            <a className="blog-card__more">
              <i className="far fa-angle-right"></i>Ver más
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
