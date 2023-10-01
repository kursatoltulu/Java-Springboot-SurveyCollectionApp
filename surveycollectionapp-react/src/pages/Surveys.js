'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Survey() {


    const[surveys,setSurveys]=useState([])

    const {id}=useParams()

    useEffect(()=>{
        loadSurveys();
    }, [])

    const loadSurveys=async()=>{
        const result=await axios.get("http://localhost:8080/surveys")
        setSurveys(result.data);
    };

    const deleteSurvey=async (id)=>{
        await axios.delete(`http://localhost:8080/survey/${id}`)
        loadSurveys()
    }
  
  

  return (
    <>

    <div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center  font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-2">
                    <table class="min-w-max w-full table-auto shadow-2xl shadow-[#3b82f6]">
                        <thead>
                            <tr class="bg-gray-200 text-blue-500 uppercase text-sm leading-normal ">
                                <th class="py-3 px-6 text-left">ID</th>
                                <th class="py-3 px-6 text-left">Anket </th>
                                <th class="py-3 px-6 text-left">Ad</th>
                                <th class="py-3 px-6 text-center">Soyad</th>
                                <th class="py-3 px-6 text-center">iŞLEMLER</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">

                            {
                                surveys.map((survey,index)=>(
                                    
                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-3 px-6 text-center whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="font-medium">{survey.id}</span>
                                        </div>
                                    </td>    
                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                        <div class="flex items-center">
                                            <span class="font-medium">{survey.surveyName}</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-left">
                                        <div class="flex items-center">
                                            <span class="font-medium">{survey.participantName}</span>
                                        </div>
                                    </td>
                                    <td class="py-3 px-6 text-center">
                                        <div class="flex items-center justify-center">
                                            <span class="font-medium">{survey.participantSurname}</span>
                                        </div>
                                    </td>
                                    
                                    <td class="py-3 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                
                                                <Link to={`/viewsurvey${survey.surveyType}/${survey.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </Link>

                                            </div>
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <Link to={`/editsurvey${survey.surveyType}/${survey.id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </Link>
                                            </div>
                                            <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <Link   onClick={()=>deleteSurvey(survey.id)}>

                                               
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </Link>
                                            </div>
                                        </div>
                                    </td>
                                    </tr>
                                ))
                            }
                   
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        
      
    </>
  )
}


