package com.covidroomtracker.models;

public class CovidResults {
    private boolean result;

    public CovidResults(){}
    public CovidResults(boolean result) {
        this.result = result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public boolean isResult() {
        return result;
    }
}
