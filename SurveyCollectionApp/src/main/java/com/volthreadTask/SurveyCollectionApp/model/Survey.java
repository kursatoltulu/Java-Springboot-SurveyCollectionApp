package com.volthreadTask.SurveyCollectionApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;


@Entity
public class Survey {

    @Id
    @GeneratedValue
    private Long id;

    private int surveyType;
    private String surveyName;
    private String participantName;
    private String participantSurname;
    private int participantGender;
    private String participantBirthDate;
    private String participantTeam;
    private String participantComment;
    private String surveyorName;
    private String surveyorSurname;


    private int participantHappiness; // for surveyName = "Hayatınızdan Memnunmusunuz"
    private String participantHappyThings; // for surveyName = "Hayatınızdan Memnunmusunuz"
    private String participantSadThings; // for surveyName = "Hayatınızdan Memnunmusunuz"



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSurveyName() {
        return surveyName;
    }

    public void setSurveyName(String surveyName) {
        this.surveyName = surveyName;
    }

    public String getParticipantName() {
        return participantName;
    }

    public void setParticipantName(String participantName) {
        this.participantName = participantName;
    }

    public String getParticipantSurname() {
        return participantSurname;
    }

    public void setParticipantSurname(String participantSurname) {
        this.participantSurname = participantSurname;
    }

    public int getParticipantGender() {
        return participantGender;
    }

    public void setParticipantGender(int participantGender) {
        this.participantGender = participantGender;
    }

    public String getParticipantBirthDate() {
        return participantBirthDate;
    }

    public void setParticipantBirthDate(String participantBirthDate) {
        this.participantBirthDate = participantBirthDate;
    }

    public String getParticipantTeam() {
        return participantTeam;
    }

    public void setParticipantTeam(String participantTeam) {
        this.participantTeam = participantTeam;
    }

    public String getParticipantComment() {
        return participantComment;
    }

    public void setParticipantComment(String participantComment) {
        this.participantComment = participantComment;
    }

    public String getSurveyorName() {
        return surveyorName;
    }

    public void setSurveyorName(String surveyorName) {
        this.surveyorName = surveyorName;
    }

    public String getSurveyorSurname() {
        return surveyorSurname;
    }

    public void setSurveyorSurname(String surveyorSurname) {
        this.surveyorSurname = surveyorSurname;
    }


    public int getParticipantHappiness() {
        return participantHappiness;
    }

    public void setParticipantHappiness(int participantHappiness) {
        this.participantHappiness = participantHappiness;
    }

    public String getParticipantHappyThings() {
        return participantHappyThings;
    }

    public void setParticipantHappyThings(String participantHappyThings) {
        this.participantHappyThings = participantHappyThings;
    }

    public String getParticipantSadThings() {
        return participantSadThings;
    }

    public void setParticipantSadThings(String participantSadThings) {
        this.participantSadThings = participantSadThings;
    }

    public int getSurveyType() {
        return surveyType;
    }

    public void setSurveyType(int surveyType) {
        this.surveyType = surveyType;
    }
}
