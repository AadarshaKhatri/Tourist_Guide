

const Banner = () => {
  const BannerImageStyle = {
    backgroundImage : "url(/assets/TouristBanner.jpg)",
    backgroundSize : "cover",
    backgroundPosition:"center",
    width:"100%",
    height : "300px",

  }
  return (
    <>
    <section style={BannerImageStyle}>
      <div className='w-full h-full flex flex-col justify-center items-center' style = {{backgroundColor:"rgba(0,0,0,0.4)"}}>
        <h2 className='text-7xl text-white font-primary font-bold text-center'>Be daring.Be impulsive</h2>
        <h4 className='text-7xl text-white font-primary font-bold text-center pb-5 '>Welcome to the unexpected.</h4>
        <button className=" w-60 border border-white rounded-3xl font-primary font-semibold text-2xl py-3 text-white bg-transparent hover:bg-white hover:text-black transition duration-200 ease-in-out">
          Book Your Vacation
        </button>


      </div>
     
    </section>
    
    </>
  )
}

export default Banner