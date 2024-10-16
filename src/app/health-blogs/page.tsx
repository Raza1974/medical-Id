import Image from "next/image";
import React from "react";

// Define the type for each blog entry
type IData = {
    title: string;
    description: string;
    image: string;
};

// Sample data: an array of blog entries
const data: IData[] = [
    {
        title: "Fitness",
        description: "Fitness and Exercise: Health Benefits, How to Get Started.",
        image: "/image/fitness.png",
    },
    {
        title: "Heart Health",
        description: "You can help prevent heart disease by following a heart-healthy lifestyle.",
        image: "/image/heart health.jpg",
    },
    {
        title: "Diabetes",
        description: "Lose extra weight. Losing weight reduces the risk of diabetes.",
        image: "/image/diabetes.jpg",
    },
    {
        title: "Heart Disease",
        description: "An enlarged heart means you have a condition that has increased the size of your heart.",
        image: "/image/heart disease.jpg",
    },
    {
        title: "Dengue Prevention",
        description: "An enlarged heart means you have a condition that has increased the size of your heart.",
        image: "/image/dengue.jpg",
    },
    {
        title: "chikungunya",
        description: "An enlarged heart means you have a condition that has increased the size of your heart.",
        image: "/image/chikungunya.jpg",
    },
    {
        title: "Diarrhea",
        description: "An enlarged heart means you have a condition that has increased the size of your heart.",
        image: "/image/diarrhea.jpg",
    },
    {
        title: "Malaria",
        description: "An enlarged heart means you have a condition that has increased the size of your heart.",
        image: "/image/malaria.jpg",
    },
    {
        title: "Typhiod",
        description: "An enlarged heart means you have a condition that has increased the size of your heart.",
        image: "/image/typhiod.jpg",
    },
];

export default function HealthBlog() {
    return (
        <div className="parentContainer">
            {data.map((entry, index) => (
                <div className="childContainer bounce-in-right bg-gradient-to-r from-green-400 via-blue-500 to-purple-600" key={index}>
                    <div className="imageContainer">
                        <Image
                            src={entry.image}
                            alt={entry.title}
                            width={600} // Specify the width
                            height={400} // Specify the height
                            className="object-cover w-full h-30 sm:h-48 md:h-52 lg:h-56"
                        />
                    </div>
                    <h1 className="title">{entry.title}</h1>
                    <p className="description">{entry.description}</p>
                    <button className="readMore">Read More</button>
                </div>
            ))}
        </div>
    );
}
