import React, { useState } from 'react';
import CreatorPicture from './CreatorPicture';
import CreatorInfo from './CreatorInfo'
import CreatorInfoLive from './CreatorInfoLive';
import Confetti from './Confetti';
import CreatorPieChart from './PieChart'; 
import GenderPieChart from './GenderPieChart';

const CreatorPage = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleBookMeClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    return (
        <div className="creator-page">
            {showConfetti && <Confetti show={showConfetti} />}
            <header className="creator-header">
                <h1>Liana Ramirez's Creator Page</h1>
            </header>
            <div className="creator-content">
                <CreatorPicture />
                <CreatorInfo />
                <CreatorInfoLive />
            </div>
            <div className="gender-chart-container">
                <div className="gender-chart">
                    <GenderPieChart />

                </div>
                <p className="gender-chart-text">Gender Demographics (%)</p>
            </div>
            <div className="creator-chart-container">
                <div className="creator-chart">
                    <CreatorPieChart />
                    
                </div>
                <p className="creator-chart-text">Percentage of following in different ranges</p>
            </div>
            <button className="book-me-button" onClick={handleBookMeClick}>
                Book Me
            </button>
        </div>
    );
};

export default CreatorPage;
