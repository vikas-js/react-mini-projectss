import { useState } from 'react'

import './App.css'
import languagesData from '../LanguageData'
import Card from './components/Card'


function App() {

  return (
    <>
    <h1>Programming Multiverse</h1>
   <div className='container'>
   {
    languagesData.map((language,i)=>{

      return <Card key={i} name={language.name} year={language.year} creator={language.creator} useCase={language.usecase}/>

    })
   }

   </div>
   </>
  )
  
}

export default App
