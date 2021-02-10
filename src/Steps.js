import React from "react";
import { Button } from "@material-ui/core";
import Step1 from "./Step1";
import Step2 from "./Step2";

const Steps = props => {
  const currentStep = props.currentStep;
  return (
    <>
      {(currentStep === 0 && <Step1 />) || (currentStep === 1 && <Step2 />)}
      {currentStep > 0 ? (
        <Button onClick={() => props.handlePrevStep()}>Wstecz</Button>
      ) : (
        ""
      )}
      {currentStep !== 1 ? (
        <Button onClick={() => props.handleNextStep()}>Dalej</Button>
      ) : (
        ""
      )}
    </>
  );
};

export default Steps;
