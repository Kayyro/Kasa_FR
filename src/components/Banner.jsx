function Banner({ image, alt = '', children }) {
  return (
    <div className="banner">
      <img src={image} alt={alt} className="banner__img" />
      {children && (
        <p className="banner__text">{children}</p>
      )}
    </div>
  )
}

export default Banner