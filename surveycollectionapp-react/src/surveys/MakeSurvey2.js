"use client"
import axios from 'axios';
import React, {useState} from 'react';


 function MakeSurvey1() {

 

  const [survey,setSurvey]=useState({
    surveyName:"HAYATINIZDAN MEMNUN MUSUNUZ?",
    surveyType:2,
    participantName:"",
    participantSurname:"",
    participantGender:0,
    participantBirthDate:"",
    participantHappiness:0,
    participantHappyThings:"",
    participantSadThings:"",
    participantComment:"",
    surveyorName:"",
    surveyorSurname:"",
  });

  const {
    participantName,
    participantSurname,
    participantGender,
    participantBirthDate,
    participantHappiness,
    participantHappyThings,
    participantSadThings,
    participantComment,
    surveyorName,
    surveyorSurname,
  } = survey;

  const onInputChange=(e)=>{
    setSurvey({...survey, [e.target.name]: e.target.value});
  };

  const onSubmit =async (e) => {
    e.preventDefault ();
    try {
      await axios.post("http://localhost:8080/survey", survey);

     
      alert("Anket başarıyla gönderildi!");
      
      
      setSurvey({
        surveyName:"HAYATINIZDAN MEMNUN MUSUNUZ?",
        participantName:"",
        participantSurname:"",
        participantGender:0,
        participantBirthDate:"",
        participantHappiness:0,
        participantHappyThings:"",
        participantSadThings:"",
        participantComment:"",
        surveyorName:"",
        surveyorSurname:"",
      });
    } catch (error) {
      // Hata mesajı
      alert("Anket gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
    
  };



  return (
    <>
  

      <div className="relative flex flex-col justify-center min-h-screen  overflow-hidden py-10">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-[#3b82f6] ring-2 ring-[#3b82f6] lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-[#2563eb] ">
            HAYATINIZDAN MEMNUN MUSUNUZ?
          </h1>
          <form className="mt-6" onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-2">
              <label>
                <span className="text-black font-bold">İsim</span>
                <input
                  type="text"
                  name="participantName"
                  className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="İsim"
                  value={participantName}
                  onChange={(e)=>onInputChange(e)}
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-black font-bold">Soy İsim</span>
                <input
                  type="text"
                  name="participantSurname"
                  className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Soy İsim"
                  value={participantSurname}
                  onChange={(e)=>onInputChange(e)}
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <p ><span className="text-black font-bold">Cinsiyet</span>       'Erkek:1 Kadın:2'  </p>
                <input
                  type="text"
                  name="participantGender"
                  className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Cinsiyet"
                  value={participantGender}
                  onChange={(e)=>onInputChange(e)}
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-black font-bold">Doğum Tarihi</span>
                <input
                  type="text"
                  name="participantBirthDate"
                  className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Doğum Tarihi"
                  value={participantBirthDate}
                  onChange={(e)=>onInputChange(e)}
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-black font-bold">Mutluluk Orani</span> (1:Çok Mutsuz-10:Çok Mutlu )    
                <input
                  type="text"
                  name="participantHappiness"
                  className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="1-Çok Mutsuz  10-Çok Mutlu"
                  value={participantHappiness}
                  onChange={(e)=>onInputChange(e)}
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span class="text-gray-700 font-bold">Sizi En Mutlu Eden Şeyler</span>
                <textarea
                  name="participantHappyThings"
                  className=" block w-full mt-2 px-16 py-8 border border-blue-500  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200focus:ring-opacity-50"
                  rows="2"
                  value={participantHappyThings}
                  onChange={(e)=>onInputChange(e)}
                ></textarea>
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span class="text-gray-700 font-bold">Sizi En Mutsuz Eden Şeyler</span>
                <textarea
                  name="participantSadThings"
                  className=" block w-full mt-2 px-16 py-8 border border-blue-500  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200focus:ring-opacity-50"
                  rows="2"
                  value={participantSadThings}
                  onChange={(e)=>onInputChange(e)}
                ></textarea>
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span class="text-gray-700 font-bold">Açıklama</span>
                <textarea
                  name="participantComment"
                  className=" block w-full mt-2 px-16 py-8 border border-blue-500  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200focus:ring-opacity-50"
                  rows="2"
                  value={participantComment}
                  onChange={(e)=>onInputChange(e)}
                ></textarea>
              </label>
            </div>

            <div className="flex flex-row">
              <label>
                <span className="text-black font-bold">Anketör</span>
                <input
                  type="text"
                  name="surveyorName"
                  className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Adı"
                  value={surveyorName}
                  onChange={(e)=>onInputChange(e)}
                />
                <input
                  type="text"
                  name="surveyorSurname"
                  className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Soyadı"
                  value={surveyorSurname}
                  onChange={(e)=>onInputChange(e)}
                />
              </label>
            </div>
            

            <div class="mb-6 mt-2">
              <button
                type="submit"
                className=" h-10 px-24 mx-36 text-white bg-[#2563eb] rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 "
              >
                Doldur
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>




  
    </>
  )
}
export default  MakeSurvey1;