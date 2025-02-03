import React from 'react';
import './App.css';
function startOnboarding() {
    const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNmeDlpMiIsImhhc2giOiIxNzI4NWYyZGI3MDRlYWMzZjU5M2I0OTQyZjQ1YzFlMDMzYTdkM2ViYzRjNzI2ZDY4YjBlYzllNzQ2NWEyYjQ2IiwiaWF0IjoxNzM3ODcwMzg2LCJleHAiOjE3Mzc5MTM1ODYsImp0aSI6IjcyNjEzMDA3LTlmNjgtNDRiYy1iNzc0LWFlOGY5M2RhMjUzYiJ9.JLRwFxxDSapef-UDR1eErrDwwiRHEjmCembGXIe74fkRx24dGUlzmS_59VoCAo2qGX-mclWLEgiQAr-gzT_GFux3cWKmGHNKGafjiB3arMW5J4i0zqRDA5ceoktNtTAu9qy1gvamnjhKIeCovlXuMQfZKvNbG_aNbRCXUFSb_p4";
    const workflowId = "kycFlow";
    const transactionId = "riya";
    const hyperKycConfig = new window.HyperKycConfig(accessToken, workflowId, transactionId);
    
    const inputs = {
        name: "riya",
        phone: "1234"
      };
      hyperKycConfig.setInputs(inputs);
      const handler = (HyperKycResult) => {
        switch (HyperKycResult.status) {
          case "user_cancelled":
            console.log("User cancelled the workflow");
            break;
          case "error":
            alert("Error");
            console.log(HyperKycResult);
            break;
          case "auto_approved":
            alert("User approved");
            break;
          case "auto_declined":
            console.log("Workflow auto-declined");
            break;
          case "needs_review":
            console.log("Workflow needs manual review");
            break;
          default:
            console.warn("Unknown status:", HyperKycResult.status);
            break;
        }
      };
      window.HyperKYCModule.launch(hyperKycConfig, handler);
}
const App = () => {
  return (
    <div>
        <button onClick={startOnboarding}>Driver Onboarding</button>
    </div>
  )
}
export default App






