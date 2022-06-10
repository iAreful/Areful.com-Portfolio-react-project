import React from 'react'
import GeoLocation from './Funyionality/GeoLocation';
// import IP from './Funyionality/ip-address';
import { withNamespaces } from 'react-i18next';

function TextMessage() {
    var myDate = new Date();
      var hrs = myDate.getHours();
      const Message = hrs < 12 ? 
      `"Good Morning"
      আসালামু-আলাইকুম
      `
       :  
       hrs >= 12 && hrs <= 17 ? 
       "Good Afternoon" 
       : 
       hrs >= 17 && hrs <= 24 ? 
       `Good Evening
       আসালামু-আলাইকুম` 
       : "Have A Good Day";
  
    return (
      <div className="mx-auto w-2/3">
        <h1 className="dark:text-white text-white my-4 text-2xl sm:text-3xl font-bold">
       {Message}</h1>
      </div>
    );
  }

function DevSection({ t }) {
  return (
    <div className=' dark:bg-[#1d4289] bg-blue-400  pt-6'>
        <h2 className='text-white dark:text-white mt-4 text-2xl sm:text-4xl font-bold border-b-2 pb-2 w-[22rem] sm:w-[30rem] mx-auto '>Developer Information</h2>
        <TextMessage/>
        {/* <IP/> */}
        <GeoLocation/>
        <p className='text-white dark:text-white'>This site made with React</p> <p className='text-white dark:text-white'>And i am a React.Js Developer.</p>
        <h2 className='text-2xl font-bold py-6 text-white'>{t('Thank You')}</h2>
    </div>
  )
}

export default withNamespaces()(DevSection);