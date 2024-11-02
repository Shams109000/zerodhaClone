function LeftSection({url,title,paragraph,tryDemo,learnMore,googlePlay,appleStore}) {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row p-2 ">
        {/* First column (image) */}
        <div className="col-md-6 col-sm-12  ">
          <img src={url} alt="" />
        </div>
        
        {/* Second column with offset */}
        <div className="col-md-4 offset-md-2 col-sm-12 p-4 d-flex flex-column  justify-content-center">
          <h1>{title}</h1>
          <p className='para'>{paragraph}</p>
          <div>
            {tryDemo?<a href={tryDemo}>Try Demo →</a>:""}
            {learnMore?<a href={learnMore} style={{marginLeft:'50px'}}>Learn More →</a>:""}
          </div>
          <div className='mt-4'>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appleStore} style={{marginLeft:"15px"}}>
              <img src="media/images/appStoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
