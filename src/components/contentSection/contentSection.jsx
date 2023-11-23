import "./contentSection.css";
import img1 from "../../images/img1.jpeg";
import img2 from "../../images/img2.jpeg";
import img3 from "../../images/img3.jpeg";
import img4 from "../../images/img4.jpeg";
import img5 from "../../images/img5.jpeg";


import Carousel from "../carousel/carousel";
const SLIDES = [img1, img2, img3, img4, img5];

const ContentSection = ({ isCarouselReverse, transitionStyles }) => {
  return (
    <div>
      <div
        className={`container first${
          isCarouselReverse && "carousel-section-reverse"
        }`}
      >
        <div className="row">
          <h1 className="mt-5 heading">This is content Heading</h1>
          <div className="col-4 w-50">
            <div className="fs-5 mt-5 info fw-light">
              freestar freestar Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin velit felis, suscipit in arcu ac,
              scelerisque vehicula ipsum. Etiam id scelerisque leo, sit amet
              accumsan risus. Duis dui quam, suscipit mollis tempor vulputate,
              tempus a arcu.
            </div>
            <div className="fs-5 mt-5 info fw-light">
              freestar freestar Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin velit felis, suscipit in arcu ac,
              scelerisque vehicula ipsum. Etiam id scelerisque leo, sit amet
              accumsan risus. Duis dui quam, suscipit mollis tempor vulputate,
              tempus a arcu.
            </div>
            <div className="fs-5 mt-5 info fw-light">
              freestar freestar Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin velit felis, suscipit in arcu ac,
              scelerisque vehicula ipsum. Etiam id scelerisque leo, sit amet
              accumsan risus. Duis dui quam, suscipit mollis tempor vulputate,
              tempus a arcu.
            </div>
          </div>
          <div className="col-8 vector">
            <Carousel transitionStyles={transitionStyles} slides={SLIDES}  />
           
          </div>
        </div>
      </div>
     
    </div>
  );
};
export default ContentSection;
