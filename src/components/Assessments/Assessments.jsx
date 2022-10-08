import React from "react";
import "./Assessments.css";
import AssessmentCard from "../AssessmentCard/Card";
import TestTypes from "../../Data";

function Assessments() {
  return (
    <section className="assessments-container flex-center">
      {TestTypes.map((test) => {
        return <AssessmentCard img={test.img} key={test.id} />;
      })}
    </section>
  );
}

export default Assessments;
