import React, { useState, useEffect } from "react";
import icons from "../../assets/icons";
import images from "../../assets/images";
import HomeBanner from '../../components/home/banner'
import JobSearchForm from "../../components/ui/SearchForm";
import TurstedBrands from "../../components/home/TrustedBrands";
import SectionWrapper from "../../components/home/SectionWrapper";
import CustomSlider from "../../components/ui/CustomSlider";
import FeaturedJobs from "../../components/home/FeaturedJobs";
import WhyChoose from "../../components/home/WhyChoose";
import HowWorksCard from "../../components/home/HowWorksCard";
import TestimonialCard from "../../components/ui/TestimonialCard";
import Testimonials from "../../components/home/Testimonials";


const HomePage = () => {
  return (
    <> 
     {/* Banner Section */}
    <HomeBanner/>
     {/* Search Section */}
    <SectionWrapper>
      <JobSearchForm/>
    </SectionWrapper>
    <SectionWrapper>
    <img src={images["Ads_slider01.png"]} className="w-full"/>
    </SectionWrapper>
     {/* Featured Section */}
    <SectionWrapper className="my-section"
        headClass='d-flex justify-content-between'
        headerContent={
          <>
          <h2 className="">Featured Jobs</h2><a href="/showAll/featured-jobs">See All</a>
          </>
        }
        footClass='pt-5'
        footerContent={<a href="/showAll/featured-jobs" className="btn btn-trans btn-rounded seeall">View all companies</a>}
    >
      <FeaturedJobs/>
    </SectionWrapper>

    {/* Trusted Partner */}
    <SectionWrapper className="partners"
        headClass='d-flex justify-content-center'
        headerContent={<h2>OUR TRUSTED PARTNERS</h2>}
    >
      <CustomSlider >
        <div className="">
          <img src={images['tataSteel.svg']} className="h-14 ml-4" alt="Tata Steel"/>
        </div>
        <div className="">
          <img src={images['maxLifeInsurance.svg']} className="h-14 ml-4" alt="Max Life Insurance"/>
        </div>
        <div className="">
          <img src={images['tataDigital.svg']} className="h-14 ml-4" alt="Tata Digital"/>
        </div> 
      </CustomSlider>
    </SectionWrapper>

    <SectionWrapper className="whychoos">
      <WhyChoose/>
    </SectionWrapper>

    <SectionWrapper className="howitowrks"
      headClass='d-flex justify-content-center'
      headerContent={<h2 className="text-center">How It Works</h2>}
      footClass='pt-5'
      footerContent={<a href="" className="btn btn-primary btn-white w-25">Candidate Signup</a>} 
    >
    <div className="text-center">
    <h3 style={{color:'#fff'}}>Catapult your career into D&I job opportunities</h3>
    </div>
      <CustomSlider customSettings={{infinite: false }}>
        <HowWorksCard imageSrc={images["howItWorkds01.png"]} number='1'/>
        <HowWorksCard imageSrc={images["howItWorkds02.png"]} number='2'/>
        <HowWorksCard imageSrc={images["howItWorkds03.png"]} number='3'/>
      </CustomSlider>
    </SectionWrapper>


    <SectionWrapper className="testimonial" 
      headClass='d-flex justify-content-center'
      headerContent={<h2 className="text-center primary">NEWSLETTER</h2>}
      footClass='pt-5'
      footerContent={<a href="" className="btn btn-primary btn-trans me-2  p-2 px-4">Candidate Signup</a>} 
    >
    <p className="text-lg">Join the community of job seekers and stay connected with a range of topics and aspects that revolve around D&I. Receive regular updates and learn how to navigate workplace dynamics</p>              
          <Testimonials/> 
    </SectionWrapper>
    <SectionWrapper>
      <div className="newsletter text-center">
          <div className="section-head mb-2 d-flex justify-content-center">
              <h2>Subscribe to Newsletter</h2>
          </div>
           
            <div className="col-md-4  offset-md-4">
                <input type="email" className="form-control  mb-2"/>
                <button class="btn btn-primary primary-button w-100">Subscribe Now</button>
            </div>
          </div>
    </SectionWrapper>
    </>
  );    
};

export default HomePage;
