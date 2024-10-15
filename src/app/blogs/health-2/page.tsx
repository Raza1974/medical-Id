import Link from 'next/link'; // Import the Link component from Next.js

export default function H1() {
  return (
    <section className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="container max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">Medical Branch Updates</h1>
        <p className="mb-6 text-gray-700">30 June 2024</p>
        <p className="text-gray-700">
            </p>

        <ol className="mt-4 space-y-4 text-gray-700 list-decimal list-inside">
          <li>
            <h2 className="font-semibold text-gray-900">Overview of Dispensaries</h2>
            <p>
           
    		  Total Dispensaries: 39
    		  Functional: 20
   		    Non-Functional:18
    		  Managed by SENA NGO: 1
     	  (Covering 9 Union Committees of Gadap)
  </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">CURRENT CHALLENGES</h2>
            <p>
          Rehabilitation Needs:
                   Detail the conditions of major dispensaries needing rehabilitation.
                <br></br> 
                   Staff Shortage: 
                   Explain the shortage of paramedical staff and its impact.
                   Note that there is only one Lady Medical Officer.
               <br></br>
                   Medicine Supply:
                   Last purchase was in June 2022.
                   <br></br>
                   Resource Shortages: 
                   Stationery and computers for the medical department are still pending.
                   <br></br>
                   CMO Office Condition:
                   The office is out of order with a damaged roof and inadequate seating.
           
       
 </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Actions Taken</h2>
            <p>
            
            Proposals Submitted: 
            Maintenance and medicine requirements proposed in January 2024.
            <br></br>
            Heat Wave Camps: 
            Successfully managed two heat wave camps in mid-May 2024.
            <br></br>
     	  Medical Board Duties:
     	  Continued performing medical board duties despite challenges.
 </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Proposals and Recommendations</h2>
            <p>
            
     	Rehabilitation Proposal:
     	Detailed plans for rehabilitating major dispensaries.
           Timelines and budget estimates.
           <br></br>
      Staff Recruitment: 
     	Strategies for recruiting additional paramedical staff and medical officers.
            Resource Allocation: 
            Emphasize the urgent need for stationery and computers.
            <br></br>
      Medicine Supply:
      Stress the need for timely procurement of medicines to ensure dispensaries    are adequately stocked.
 </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Expected Outcomes</h2>
            <p>
            
     	Improvements in dispensary operations and patient care.
       <br></br>
    	Enhanced access to medical services for the community.
      <br></br>
     	Better preparedness for future health emergencies.
 </p>
          </li>

          <li>
            <h2 className="font-semibold text-gray-900">Dispensaries Details</h2>
            <p>
            Detail of Dispensaries of TMC Gadap Karachi			
            <br></br>	
	Union Commottee	Dispensary	<br></br>Status	<br></br>Remarks
<br></br>
1	UC Gadap	Pathan Goth	Functional	Road facing
		Mian  Wasayo	Functional	
		Rao Ghoram	Functional	
		Mehan Bikak	Non Functional	
		Kand Jhang	Non Functional	
		Ali Bikak	Non Functional	
		Haji Imam Bux Goth	Non Functional	
		Haji Noor Mohd	Non Functional	
		Abullah Kandro	Non Functional	
		Gadap	Non Functional	
		Kathore	Functional	Road facing
		Umer Jamote	Non Functional	
    <br></br>
2	Shah Mureed	Bun Murad	Non Functional	
		Murad Goth	Non Functional	
		Shah Mureed	Functional	
    <br></br>
3	UC Darsano Channo	Darsano Chano	Functional	Road facing
		Mazar Khan Jokhio	Functional	
		Haji Abul Karim Gabol Disp	Non Functional	
		Konkar 1	Running By NGO	Road facing
		Konkar 2	Non Functional	
		Juma Jokhio	Functional	
		Hashim  Jokhio	Non Functional	
    <br></br>
4	UC Memon Goth	Hashim Khaskhali Dispencery	Functional			
		Memon Goth Disp	Functional	
		Mulla Essa Goth	Functional	
		Soomar Kandani	Functional	
    <br></br>	
5	UC Saleh Muhammad	Kohi Goth Disp	Functional	Road facing		
		Khuda Buksh 	Non Functional	
		Nazer Mohd Salah Mohd Goth	Non Functional	
		Haji Wali Mohd	Functional	
    <br></br>
6	UC Ghahghar	Allah Din Salar	Functional	Road facing
		Ibrahim Johkio Disp	Non Functional	
		Darya Khan 	Non Functional	
		Dodo Salar Disp	Functional	
		Haji Essub Goth	Functional	
    <br></br>
7	UC Pipri	Rice Godown Pipri	Non Functional
<br></br>	
8	 UC Steel Town	Peer Sarhandi	Functional	Road facing
		Jam Khando 	Functional	Road facing
		Usman Jokhoi	Functional	
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


 


