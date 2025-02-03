import React from 'react';
import './App.css';
function startOnboarding() {
    const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNmeDlpMiIsImhhc2giOiIxNzI4NWYyZGI3MDRlYWMzZjU5M2I0OTQyZjQ1YzFlMDMzYTdkM2ViYzRjNzI2ZDY4YjBlYzllNzQ2NWEyYjQ2IiwiaWF0IjoxNzM4NTc0NTY5LCJleHAiOjE3Mzg2MTc3NjksImp0aSI6IjFjODYyNDY0LTEyOGMtNDE2ZS1hNjc3LTU2YTQ2MTU5MzUwYyJ9.eAsKAn-JY9mRy35TykNVU_ljajVUdBkq3hMttenoFAIn0H0flCLBRS_b6G-rHccOoICpeiaGnYBB8LDvvdJZASfB2dFknScmZUOcqxczGt8Q8iE3y7gi9WK_lhoUg21rJk-z84FU3j8pp4_zuLshaY4cBDWUfcLkcd4oSzMvT4Y";
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
    <div id="root">
      <h1>Driver Onboarding</h1>
      <button onClick={startOnboarding}>Start KYC</button>
      <p className="read-the-docs">
        Click on the button to start the KYC process.
      </p>
    </div>
  );
};
export default App






