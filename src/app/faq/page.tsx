export default function FAQ() {
    return (
        <div className="parentContainer">

            {/* Fitness Section */}
            <div className="childContainer bounce-in-right">
                <div className="imageContainer">
                    <img
                        src="/image/fitness.png"
                        alt="Health Fitness"
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h6 className="title">Fitness</h6>
                <p className="description">
                    Fitness and Exercise: Health Benefits, How to Get Started.
                </p>
                <a href="https://www.everydayhealth.com/fitness/guide/" className="readMoreLink">
                    <button className="readMore">Read More</button>
                </a>
            </div>

            {/* Heart Health Section */}
            <div className="childContainer bounce-in-right">
                <div className="imageContainer">
                    <img
                        src="/image/heart health.jpg"
                        alt="Heart Health"
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h1 className="title">Heart Health</h1>
                <p className="description">
                    You can help prevent heart disease by following a heart-healthy lifestyle.
                </p>
                <a href="https://www.healthline.com/nutrition/heart-healthy-foods" className="readMoreLink">
                    <button className="readMore">Read More</button>
                </a>
            </div>

            {/* Diabetes Section */}
            <div className="childContainer bounce-in-right">
                <div className="imageContainer">
                    <img
                        src="/image/diabetes.jpg"
                        alt="Diabetes Care"
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h1 className="title">Diabetes</h1>
                <p className="description">
                    Lose extra weight. Losing weight reduces the risk of diabetes.
                </p>
                <a href="https://diabetesjournals.org/care" className="readMoreLink">
                    <button className="readMore">Read More</button>
                </a>
            </div>

            {/* Heart Disease Section */}
            <div className="childContainer bounce-in-right">
                <div className="imageContainer">
                    <img
                        src="/image/heart disease.jpg"
                        alt="Heart Disease"
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h1 className="title">Heart Disease</h1>
                <p className="description">
                    An enlarged heart means you have a condition that has increased the size of your heart.
                </p>
                <a href="https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/causes/2008195" className="readMoreLink">
                    <button className="readMore">Read More</button>
                </a>
            </div>

            {/* Additional Blog Titles */}
            <div className="childContainer bounce-in-right">
                <h1 className="title">Blog Title</h1>
                <p className="description">
                    Example blog content for this section.
                </p>
                <button className="readMore">Read More</button>
            </div>

            <div className="childContainer bounce-in-right">
                <h1 className="title">Blog Title</h1>
                <p className="description">
                    Sample description text for another blog.
                </p>
                <button className="readMore">Read More</button>
            </div>

            <div className="childContainer bounce-in-right">
                <h1 className="title">Blog Title</h1>
                <p className="description">
                    Blog section content here.
                </p>
                <button className="readMore">Read More</button>
            </div>

            <div className="childContainer bounce-in-right">
                <h1 className="title">Blog Title</h1>
                <p className="description">
                    Final sample blog content for the FAQ section.
                </p>
                <button className="readMore">Read More</button>
            </div>
        </div>
    );
}
