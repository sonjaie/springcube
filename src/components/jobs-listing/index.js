import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rocketLogo from '../../assets/images/rocket-logo.jpeg'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './style.css';

const JobListing = ({ job, onFavoriteClick, isFavorited }) => {
  
  return (
    <>
    <div className="job-listing">
      <div className="flex-container">
        <div className="job-image-container">
          <img src={rocketLogo} alt="Job Icon" />
        </div>
        <div className="job-details-container">
          <h3>{job?.title}</h3>
          <p><span className="icon company-icon"><BusinessOutlinedIcon /></span>{job?.company}</p>
          <p><span className="icon location-icon"><CalendarMonthOutlinedIcon /></span>{job?.location} ({job?.workType})</p>
          <p><span className="icon time-icon"><PlaceOutlinedIcon /></span>Published {job?.publishedDate}</p>
          <p><AttachMoneyOutlinedIcon /><strong>Salary: {job?.salary}</strong></p>
        </div>
      </div>
      <div className="job-tags">
    {job?.tags?.slice(0, 5).map((tag, index) => (
      <span key={index} className="tag">{tag}</span> // use index as key if tag is not unique
    ))}
  </div>
  <div className="apply-button-container">
    <button className="apply-button">
      Apply Now
    </button>
  </div>
    </div>
    </>
  );
};

function CustomNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

const JobListings = ({ jobs }) => {

  const [favoritedJobs, setFavoritedJobs] = useState(
    jobs.reduce((acc, job) => ({ ...acc, [job.id]: job.favorited }), {})
  );

  const screenWidth = window.innerWidth;
  console.log("screenWidth", screenWidth)

  const toggleFavorite = (jobId) => {
    setFavoritedJobs((prevFavoritedJobs) => ({
      ...prevFavoritedJobs,
      [jobId]: !prevFavoritedJobs[jobId],
    }));
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    <div className="job-listings">
      <p className='new-job-posted'><h1>New jobs posted</h1></p>
      <Slider {...settings}>
        {jobs?.map(job => (
          <div key={job.id}>
            <JobListing job={job} onFavoriteClick={() => toggleFavorite(job.id)} isFavorited={favoritedJobs[job.id]}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobListings;
