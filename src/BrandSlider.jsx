

const BrandSlider = ({item}) => {
    const {image1,image2,image3}=item;
    console.log(item);
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item lg:object-cover relative w-full">
          <img  src={item.images1} className="lg:w-full  lg:p-44" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-red-600">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-600">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item lg:object-cover relative w-full">
          <img src={item.images2}  className="w-full  lg:p-44" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-red-600">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-red-600">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item lg:object-cover relative w-full">
          <img src={item.images3}  className="w-full  lg:p-44" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-red-600">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-red-600">❯</a>
          </div>
        </div> 
       
      </div>
    );
};

export default BrandSlider;