
import Membership from '../Membership/Membership';
import About from './About/About';
import Banner from './Banner';
import MealCategories from './MealCategories/MealCategories';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealCategories></MealCategories>
            <Membership></Membership>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;