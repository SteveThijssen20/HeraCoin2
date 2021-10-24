import ThankYouImg from '../../assets/thank_you.svg';
import ThankYouMessage from '../../assets/thank_you_message.svg';
import StoriesButton from '../../assets/see_stories_button.svg'
import Tabbar from '../../assets/tabbar.svg';
import TabbarInsights from '../../assets/tabbar_insights.svg';
import './ThankYou.css';
import { useHistory } from 'react-router-dom';

export function ThankYou() {
    let history = useHistory();


    return (
        <div className="page thanks">
             <img className="top" src={ThankYouImg} />
             <img className="thank-you-message" src={ThankYouMessage} />
             <span className="spacer"></span>
             <img onClick={() => history.push("/stories")} className="stories-button" src={StoriesButton}/>
             <img className="tabbar" src={TabbarInsights} />
        </div>
    );
}
  