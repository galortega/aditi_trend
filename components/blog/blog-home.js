import React from "react";
import _ from "lodash";
import moment from "moment";

import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import BlockTitle from "../block-title";
import BlogCard from "./blog-card";

const { MEDIA_URL } = process.env;

const BlogHome = ({ posts, grid }) => {
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
              title={`Últimas noticias y artículos  \n de nuestro blog.`}
              tagLine="Blog Posts"
            />
          </Col>
          <Col lg={5} className="d-flex">
            <div className="my-auto">
              <p className="block-text pr-10 mb-0">
                Compartiremos con nuestra comunidad todas las semanas artículos
                relacionados con moda, lifestyle y cultura, si te interesan
                estos temas suscríbete a nuestro newsletter!{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Swiper {...blogCarouselOptions}>
          {grid ? (
            <Row className="row-eq-height">
              posts.map( (
              {(imagen, title, _created, excerpt, slug, commentCount, author)},
              index ) => (
              <Col sm="4" key={index}>
                <BlogCard
                  image={imagen[0]}
                  title={title}
                  date={_.startCase(moment(_created).format("D MMMM"))}
                  excerpt={excerpt}
                  slug={slug}
                  commentCount={commentCount}
                  author={author}
                />
              </Col>
              ) )
            </Row>
          ) : (
            posts.map(
              (
                {
                  imagen,
                  title,
                  _created,
                  excerpt,
                  slug,
                  commentCount,
                  author
                },
                index
              ) => (
                <SwiperSlide key={index}>
                  <BlogCard
                    image={imagen[0]}
                    title={title}
                    date={_.startCase(moment(_created).format("D MMMM"))}
                    excerpt={excerpt}
                    slug={slug}
                    commentCount={commentCount}
                    author={author}
                  />
                </SwiperSlide>
              )
            )
          )}
        </Swiper>
      </Container>
    </section>
  );
};

export default BlogHome;
