package com.volthreadTask.SurveyCollectionApp.exception;

public class SurveyNotFoundException extends RuntimeException{
    public SurveyNotFoundException(Long id){
        super("Could not found the survey with id " + id);
    }
}
