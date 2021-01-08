import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import MainSlider from "../components/slider/main-slider";
import VideoCardTwo from "../components/videos/video-card-two";
import ServiceOne from "../components/services/service-one";
import AboutCounter from "../components/about/about-counter";
import CausesHome from "../components/causes/causes-home";
import DonationOptions from "../components/donation-options";
import TeamHome from "../components/team/team-home";
import CallToActionTwo from "../components/call-to-action/call-to-action-two";
import GalleryTestimonials from "../components/gallery/gallery-testimonials";
import GalleryHome from "../components/gallery/gallery-home";
import TestimonialsTwo from "../components/testimonials/testimonials-two";
import BlogHome from "../components/blog/blog-home";
import CallToAction from "../components/call-to-action/call-to-action";
import GoogleMap from "../components/google-map";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import ServiceTwo from "../components/services/service-two";
import AboutTwo from "../components/about/about-two";
import Service from "../components/services/service";
import _ from "lodash";
import getPrevs from "./api/prevs";

export async function getStaticProps() {
  const posts = await getPrevs();
  return {
    revalidate: 10,
    props: { posts }
  };
}

const HomeOne = (props) => {
  return (
    <Layout pageTitle="Home || Áditi Trend || Slow Fashion">
      <HeaderTwo />
      <StickyHeader />
      <MainSlider />

      <Service />

      <VideoCardTwo />
      <BlogHome posts={props.posts} />
      <AboutTwo />
      <CallToActionTwo />

      <TeamHome />
      <GalleryTestimonials>
        <GalleryHome />
        <TestimonialsTwo />
      </GalleryTestimonials>

      {/*<AboutCounter />
      <CausesHome />
      <CallToActionTwo />
      <DonationOptions />
      <GalleryTestimonials>
        <GalleryHome />
        <TestimonialsTwo />
      </GalleryTestimonials>
      <CallToAction />
      <GoogleMap extraClass="home" />
      <BrandCarousel extraClass="client-carousel__has-top-shadow" />*/}
      <Footer />
    </Layout>
  );
};

export default HomeOne;
