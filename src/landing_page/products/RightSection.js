function RightSection({url,title,paragraph,link,}) {
  return (
    <div className="container mt-5 mb-4 ">
      <div className="row p-2 ">
        {/* First column (image) */}
        <div className="col-md-4  col-sm-12 p-4 d-flex flex-column  justify-content-center">
          <h1>{title}</h1>
          <p className='para'>{paragraph}</p>
            <a href={link.url}>{link.name} →</a>
        </div>
        <div className="col-md-6 col-sm-12 offset-md-1  ">
          <img src={url} alt="" />
        </div>
        
        {/* Second column with offset */}
       
      </div>
    </div>
  );
}

export default RightSection;
