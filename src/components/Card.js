import stars from '../images/Star-1.svg';

export const Card = (props) => {
  let badgeText
    if (props.info.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.info.location === "Online") {
        badgeText = "ONLINE"
    }

  return(
    <div className="card">
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={props.info.coverImg} alt='' />
        <div className='card--stats'>
          <img src={stars} alt='starts' className='card--star'/>
          <span className='gray'>{props.info.stats.rating}</span>
          <span className='gray'>({props.info.stats.reviewCount}) • </span>
          <span className='gray'> {props.info.location}</span>
        </div>
        <p className="card--title">{props.info.title}</p>
        <p className="card--price"><span className='bold'>From ${props.info.price} </span>/ person</p>
    </div>
  )
}