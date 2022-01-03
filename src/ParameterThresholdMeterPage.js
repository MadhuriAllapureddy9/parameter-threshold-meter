import './App.css';
import * as React from 'react';
import PTMCard from './ParameterThresholdMeterChildComponents/PTMCard';
import ParameterThresholdAppBar from './ParameterThresholdMeterChildComponents/ParameterThresholdAppBar';


function ParameterThresholdMeterPage() {
  return (
    <div >
     <ParameterThresholdAppBar />
     <PTMCard />
    </div>
  );
}

export default ParameterThresholdMeterPage;