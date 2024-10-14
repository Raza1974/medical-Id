import Link from 'next/link'; // Import the Link component from Next.js

export default function H1() {
  return (
    <section className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="container max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">10 Healthy Choices to Make in 2024</h1>
        <p className="mb-6 text-gray-700">19 December 2023</p>
        <p className="text-gray-700">
          Meaningful, small changes can have a big impact on your overall health and well-being. In 2024, commit to taking small steps to change your daily routines and habits to benefit your health.
        </p>

        <ol className="mt-4 space-y-4 text-gray-700 list-decimal list-inside">
          <li>
            <h2 className="font-semibold text-gray-900">Eat a healthy diet</h2>
            <p>
              What a healthy diet looks like may differ from person to person, depending on your culture, where you live, and what food is locally available. Yet, the principles are the same − making informed choices can help you improve the way you eat. Cutting down on foods high in salt, free sugars, saturated fats, and trans-fatty acids may sound overwhelming at first, but easy steps add up − such as swapping a lunchtime soda for water. Eat at least five portions of a variety of fruits and vegetables every day.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Be active</h2>
            <p>
              Being active every day can be challenging, but did you know that every move counts? Adding a walk after a meal, sweeping floors, or taking the stairs can all help your cardiovascular health. Aim for at least 150 minutes of moderate activity per week if you are an adult.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Avoid harmful use of alcohol</h2>
            <p>
              Did you know that alcohol consumption is a contributor to more than 200 diseases, injuries, and other health conditions? Alcohol consumption increases your risk of injury, as well as longer-term effects like liver damage, cancer, heart disease, and mental illness.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Don’t use tobacco or vape</h2>
            <p>
              The benefits of quitting tobacco begin as quickly as 20 minutes after the last cigarette. Any tobacco use and exposure to tobacco smoke is harmful.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Look out for your sexual health</h2>
            <p>
              Sexual health is essential for a healthy life. Sexual activities involving other partners require explicit consent and should be free from coercion, discrimination, and violence.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Connect in person to support your mental health</h2>
            <p>
              Loneliness is a serious health risk. A large body of research shows that social isolation and loneliness have a serious impact on physical and mental health, quality of life, and longevity.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Get vaccinated</h2>
            <p>
              Make sure you and your family are up-to-date with routine vaccinations. Vaccines reduce the risks of getting a disease by working with your body’s natural defenses to build protection.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Take antimicrobials the right way</h2>
            <p>
              Antimicrobial resistance makes infections harder or sometimes impossible to treat, increasing the risk of diseases spreading, severe illness, and death.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Wash your hands</h2>
            <p>
              Clean hands help stop the spread of infections. Make sure you wash your hands the right way using soap and water or an alcohol-based rub.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Get regular check-ups</h2>
            <p>
              See your health provider for regular, yearly check-ups. These visits can help you monitor your blood pressure to control and prevent hypertension.
            </p>
          </li>
        </ol>

        <p className="mt-6 font-semibold text-gray-900">
          Let’s all choose to be healthier in 2024!
        </p>
        <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </section>
  );
}
