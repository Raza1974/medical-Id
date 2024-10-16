import Image from "next/image";
import React from "react";

export default function HealthBlog() {
    return (
        <div className="parentContainer">
            {/* Fitness Section */}
            <div className="childContainer bounce-in-right">
                <div className="imageContainer">
                    <Image
                        src="/image/fitness.png"
                        alt="Health Fitness"
                        width={600} // Specify the width
                        height={400} // Specify the height
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h2 className="title">Fitness</h2>
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
                    <Image
                        src="/image/heart health.jpg"
                        alt="Heart Health"
                        width={600} // Specify the width
                        height={400} // Specify the height
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h2 className="title">Heart Health</h2>
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
                    <Image
                        src="/image/diabetes.jpg"
                        alt="Diabetes Care"
                        width={600} // Specify the width
                        height={400} // Specify the height
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h2 className="title">Diabetes</h2>
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
                    <Image
                        src="/image/heart disease.jpg"
                        alt="Heart Disease"
                        width={600} // Specify the width
                        height={400} // Specify the height
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h2 className="title">Heart Disease</h2>
                <p className="description">
                    An enlarged heart means you have a condition that has increased the size of your heart.
                </p>
                <a href="https://www.mayoclinic.org/diseases-conditions/heart-disease/symptoms-causes/causes/2008195" className="readMoreLink">
                    <button className="readMore">Read More</button>
                </a>
            </div>

            {/* Additional Blog Titles */}
            <div className="childContainer bounce-in-right">
                <div className="imageContainer">
                    <Image
                        src="/image/heart disease.jpg"
                        alt="Heart Disease"
                        width={600} // Specify the width
                        height={400} // Specify the height
                        className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                    />
                </div>
                <h2 className="title">Blog Title</h2>
                <p className="description">
                    Example blog content for this section.
                </p>
                <button className="readMore">Read More</button>
            </div>

            {/* Repeated Blog Titles */}
            {[...Array(3)].map((_, index) => (
                <div className="childContainer bounce-in-right" key={`blog-${index}`}>
                    <div className="imageContainer">
                        <Image
                            src="/image/heart disease.jpg"
                            alt="Heart Disease"
                            width={600} // Specify the width
                            height={400} // Specify the height
                            className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                        />
                    </div>
                    <h2 className="title">Blog Title</h2>
                    <p className="description">
                        Sample description text for another blog.
                    </p>
                    <button className="readMore">Read More</button>
                </div>
            ))}
        </div>
    );
}
