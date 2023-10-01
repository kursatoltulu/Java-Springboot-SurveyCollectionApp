"use client"
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';


 function ViewSurvey1() {

    const {id}=useParams()

  const [survey,setSurvey]=useState({
    surveyName:"TUTTUĞUNUZ FUTBOL TAKIMI",
    surveyType:1,
    participantName:"",
    participantSurname:"",
    participantGender:0,
    participantBirthDate:"",
    participantTeam:"",
    participantComment:"",
    surveyorName:"",
    surveyorSurname:"",
  });

  const {
    participantName,
    participantSurname,
    participantGender,
    participantBirthDate,
    participantTeam,
    participantComment,
    surveyorName,
    surveyorSurname,
  } = survey;

  const onInputChange=(e)=>{
    setSurvey({...survey, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    loadSurveys();
  }, []);

  const onSubmit =async (e) => {
    e.preventDefault ();
    try {
      await axios.put(`http://localhost:8080/survey/${id}`, survey);

     
      alert("Anket başarıyla gönderildi!");
      
      
      setSurvey({
        surveyName: "TUTTUĞUNUZ FUTBOL TAKIMI",
        participantName: "",
        participantSurname: "",
        participantGender: "",
        participantBirthDate: "",
        participantTeam: "",
        participantComment: "",
        surveyorName: "",
        surveyorSurname: "",
      });
    } catch (error) {
      // Hata mesajı
      alert("Anket gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
    
  };

  const loadSurveys= async ()=>{
    const result=await axios.get(`http://localhost:8080/survey/${id}`)
    setSurvey(result.data)
  }



  return (
    <>
    

<div className="relative flex flex-col justify-center min-h-screen  overflow-hidden py-10">
  <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-[#3b82f6] ring-2 ring-[#3b82f6] lg:max-w-xl">
    <h1 className="text-3xl font-semibold text-center text-[#2563eb] ">
      TUTTUĞUNUZ FUTBOL TAKIMI
    </h1>
    <form className="mt-6" onSubmit={(e)=>onSubmit(e)}>
      <div className="mb-2">
        <label>
          <span className="text-black font-bold">İsim</span>
          <label type="text" className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {participantName}
          </label>
        </label>
      </div>
      <div className="mb-2">
        <label>
          <span className="text-black font-bold">Soy İsim</span>
          <label type="text" className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {participantSurname}
          </label>
        </label>
      </div>
      <div className="mb-2">
        <label>
          <p ><span className="text-black font-bold">Cinsiyet</span>       'Erkek:1 Kadın:2'  </p>
          <label type="text" className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {participantGender}
          </label>
        </label>
      </div>
      <div className="mb-2">
        <label>
          <span className="text-black font-bold">Doğum Tarihi</span>
          <label type="text" className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {participantBirthDate}
          </label>
        </label>
      </div>
      <div className="mb-2">
        <label>
          <span className="text-black font-bold">Tuttuğu Takım</span>
          <label type="text" className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {participantTeam}
          </label>
        </label>
      </div>
      <div className="mb-2">
        <label>
          <span class="text-gray-700 font-bold">Açıklama</span>
          <label type="text" className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {participantComment}
          </label>
        </label>
      </div>
      <div className="flex flex-row">
        <label>
          <span className="text-black font-bold">Anketör</span>
          <label type="text" className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {surveyorName}
          </label>
          <label type="text" className=" w-full block px-16 py-2 mt-2 border border-blue-500 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  {surveyorSurname}
          </label>
        </label>
      </div>
      


      <div></div>
    </form>
  </div>
</div>





    
    </>
  )
}
export default ViewSurvey1;