  import React from 'react';
  import Loader from './Loader';
  import { ToastContainer, toast, Bounce} from 'react-toastify';

  const Home = ({ images, loader, setSaved, saved }) => {

    const SaveImg = (img) => {
      let flag = true;

      if (saved !== null && saved.length >0){

      for(let i=0; i<saved.length; i++){
        if (saved[i].id===img.id){
          flag=false;
          //console.log("Image is Already Exists")
          toast.info('Image Already Saved !', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
          break;
        }
      }
    }

      if(flag){
        setSaved([...saved, img])
        //console.log("Image Saved")
        toast('Image Saved ! ', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }
    
    };

    return (
      <>
      <ToastContainer/>
        <div className="container-fluid text-center" id='top'>

          {loader ? (<Loader />) : (<>
            <div className="flex">
              {images.map((image) =>
                <div key={image.id} className='items' onClick={() => SaveImg(image)}>
                  <img src={image.src.medium} alt={image.photographer} />

                </div>)}
            </div>

          </>)}

          {images.length != 0 && <a href='#top' className="btn btn-outline-warning my-5">Back to Top</a>
          }

        </div>
      </>
    )
  }

  export default Home
