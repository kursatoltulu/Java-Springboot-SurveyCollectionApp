package com.volthreadTask.SurveyCollectionApp.controller;

import com.volthreadTask.SurveyCollectionApp.exception.SurveyNotFoundException;
import com.volthreadTask.SurveyCollectionApp.model.Survey;
import com.volthreadTask.SurveyCollectionApp.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class SurveyController {

    @Autowired
    private SurveyRepository surveyRepository;

    @PostMapping("/survey")
    Survey newSurvey(@RequestBody Survey newSurvey){
        return surveyRepository.save(newSurvey);
    }

    @GetMapping("/surveys")
    List<Survey> getAllSurveys(){

        return surveyRepository.findAll();
    }

    @GetMapping("/survey/{id}")
    Survey getSurveyById(@PathVariable Long id){
        return surveyRepository.findById(id)
                .orElseThrow(()->new SurveyNotFoundException(id));
    }

    @PutMapping("/survey/{id}")
    Survey updateSurvey(@RequestBody Survey newSurvey,@PathVariable Long id){
        return surveyRepository.findById(id)
                .map(survey -> {
                    survey.setParticipantName(newSurvey.getParticipantName());
                    survey.setParticipantSurname(newSurvey.getParticipantSurname());
                    survey.setParticipantGender(newSurvey.getParticipantGender());
                    survey.setParticipantBirthDate(newSurvey.getParticipantBirthDate());
                    survey.setParticipantTeam(newSurvey.getParticipantTeam());
                    survey.setParticipantComment(newSurvey.getParticipantComment());
                    survey.setParticipantComment(newSurvey.getParticipantComment());
                    survey.setSurveyorName(newSurvey.getSurveyorName());
                    survey.setSurveyorSurname(newSurvey.getSurveyorSurname());
                    survey.setParticipantHappiness(newSurvey.getParticipantHappiness());
                    survey.setParticipantHappiness(newSurvey.getParticipantHappiness());
                    survey.setParticipantSadThings(newSurvey.getParticipantSadThings());
                    return  surveyRepository.save(survey);
                }).orElseThrow(() -> new SurveyNotFoundException(id));
    }

    @DeleteMapping("survey/{id}")
    String deleteSurvey(@PathVariable Long id){
        if (!surveyRepository.existsById(id)){
            throw new SurveyNotFoundException(id);
        }
        surveyRepository.deleteById(id);
        return "Survey with id " + id + " has been deleted success.";
    }
}
