import React from "react";
import Head from "next/head";

import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import BlockTitle from "../block-title";
import BlogCard from "./blog-card";

import blogImage1 from "../../assets/images/blog/blog-1-1.jpg";
import blogImage2 from "../../assets/images/blog/blog-1-2.jpg";
import blogImage3 from "../../assets/images/blog/blog-1-3.jpg";

const BlogHome = ({ posts }) => {
  const blogCarouselOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <section className="news-page news-home pt-120 pb-120">
      <Container>
        <Row className="align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={7}>
            <BlockTitle
              title={`Latest news & articles \n directly from the blog.`}
              tagLine="Blog Posts"
            />
          </Col>
          <Col lg={5} className="d-flex">
            <div className="my-auto">
              <p className="block-text pr-10 mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Have you done google research which works all the
                time.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Swiper {...blogCarouselOptions}>
          {posts.map(
            (
              { image, title, date, text, slug, commentCount, author },
              index
            ) => (
              <SwiperSlide key={index}>
                <BlogCard
                  image={image}
                  title={title}
                  date={date}
                  text={text}
                  slug={slug}
                  commentCount={commentCount}
                  author={author}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default BlogHome;
