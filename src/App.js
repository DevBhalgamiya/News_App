
// import './App.css';



// import React, { Component } from 'react';
// import LoadingBar from 'react-top-loading-bar';
// import Navbar from './components/Navbar';
// import News from './components/News';

// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";

// export default class App extends Component {
// pageSize=5;
// apiKey= process.env.REACT_APP_NEWS_API;
// state={
//   process: 0,
// }
// setProgress =  (process)=>{
//   this.setState({process:process})
// }
//   render() {
//     return (
//       <div>
//       <BrowserRouter>
//       <Navbar/>
//       <LoadingBar
//         color='#f11946'
//         height={3}
        
//         progress={this.state.process}
      
//       />
//       <Routes>

//         <Route exact path="/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize}  country="us" category="general"/>} />
//         <Route exact path="/business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize}  country="us" category="business"/>} />
//         <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>} />
//         <Route exact path="/general" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize}  country="us" category="general"/>} />
//         <Route exact path="/health" element={  <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize}  country="us" category="health"/>} />
//         <Route exact path="/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize}  country="us" category="science"/>} />
//         <Route exact path="/sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize}  country="us" category="sports"/>} />
//         <Route exact path="/technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize}  country="us" category="technology"/>} />



        
//       </Routes>
  
//     </BrowserRouter>
//       </div>
//     )
//   }
// }





import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import News from './components/News';


export default function App(){
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize=5
  const [selectedCountry, setCountry]=useState('in')
  return (
    <div>
      <BrowserRouter>
        <Navbar selectedCountry={selectedCountry} onCountryChanged={(country)=>{
          console.log(country);
          setCountry(country);
        }} />
        {/* <LoadingBar color="#f11946" height={3} progress={30} />
         */}
        <News setProgress={()=>{}} apiKey={apiKey} key="Home" pageSize={pageSize} country={selectedCountry} category="Home" />
        <News setProgress={()=>{}} apiKey={apiKey} key="business" pageSize={pageSize} country={selectedCountry} category="business" />
        <News setProgress={()=>{}} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={selectedCountry} category="entertainment" />
        <News setProgress={()=>{}} apiKey={apiKey} key="general" pageSize={pageSize} country={selectedCountry} category="general" />
        <News setProgress={()=>{}} apiKey={apiKey} key="health" pageSize={pageSize} country={selectedCountry} category="health" />
        <News setProgress={()=>{}} apiKey={apiKey} key="science" pageSize={pageSize} country={selectedCountry} category="science" />
        <News setProgress={()=>{}} apiKey={apiKey} key="sports" pageSize={pageSize} country={selectedCountry} category="sports" />
        <News setProgress={()=>{}} apiKey={apiKey} key="technology" pageSize={pageSize} country={selectedCountry} category="technology" />
        
      </BrowserRouter>
    </div>
  );
}




