
import { Link } from 'react-router-dom'

import './DailyItem.scss'

export function DailyItem({ href, text, image, altDailyImage, dailyIgameClassName }) {
    return (
        <div className='dailyItem'>
            <Link to={href}>
                <div className='dailyText'>
                    <p>{text}</p>
                </div>
                <div className='divDailyImage'>
                    <img src={image} alt={altDailyImage} className={dailyIgameClassName} />
                </div>
            </Link>
        </div>
    )
}