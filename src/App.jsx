import { useState } from 'react'
import { Nav } from './components/Nav.jsx'
import { Button } from './components/Button.jsx';
import { SectionEdit }  from './components/Section-edit'

function App() {
  const [livePreview, setLivePreview] = useState(true);

  const exampleData = {
    name: 'Jane Doe',
    email: 'janeDoe@hotmail.com',
    tel: '584128459878',
  }

  const toggleLivePreview = () => {
    if(livePreview){
      setLivePreview(false);
    } else {
      setLivePreview(true);
    }
  }

  const setExampleData = (e) => {
    let editCont = e.target.parentElement.parentElement;

    // general info
    let [nameIn, emailIn, telIn] = [editCont.querySelector('#name-input'),editCont.querySelector('#email-input'),editCont.querySelector('#tel-input')];
    nameIn.value = exampleData.name;
    emailIn.value = exampleData.email;
    telIn.value = exampleData.tel;
  }

  return (
    <>
      <Nav
       header="CV Maker"
       gitUser="AV-MMI"
       gitUrl="https://github.com/AV-MMI"/>

       <main className="main-grid">
        <div className="edit-container vertical-center-flex">
          <div className="top-buttons horizontal-space-bt-flex ">
            <div className="preview-btns">
              <Button
                title="live preview"
                onClick={toggleLivePreview}
                disabled={!livePreview} />
              
              <Button
                title="manual preview"
                onClick={toggleLivePreview}
                disabled={livePreview} />
            </div>
            <Button
             title="Example data" 
             onClick={setExampleData} />
          </div>
          
          <SectionEdit title="General Info" width={450} manualPreview={!livePreview} open={true}>
            <form action="" className="vertical-flex">
              <label htmlFor="name-input">Name</label>
              <input
                type="text"
                id="name-input" 
                placeholder="name"
                className="edit-input"/>

              <label htmlFor="email-input">Email</label>
              <input
                type="email"
                id="email-input" 
                placeholder="email"
                className="edit-input"/>
              
              <label htmlFor="phone-input">Phone</label>
              <input
                type="tel" 
                id="tel-input" 
                placeholder="phone"
                className="edit-input"/>
            </form>
            {(!livePreview && <Button title="submit"/>)}
            
          </SectionEdit>

          <SectionEdit title="Educational Experience" width={450} manualPreview={!livePreview}>
            <form action="" className="vertical-flex">
              <label htmlFor="school-input">School</label>
              <input
               type="text"
               id="school-input"
               placeholder="School name"
               className="edit-input" />


              <label htmlFor="title-input">Title</label>
              <input
               type="text"
               id="title-input"
               placeholder="Title received"
               className="edit-input" />

              <label htmlFor="data-input">Date</label>
              <input
               type="text"
               id="date-input"
               placeholder="insert your entry and graduation date"
               className="edit-input" />
            </form>
            {(!livePreview && <Button title="Add Education"/>)}
          </SectionEdit>


          <SectionEdit title="Practical Experience" width={450} manualPreview={!livePreview}>
            <form action="" className='vertical-flex'>
              <label htmlFor="company-input">Company</label>
              <input
               type="text"
               id="company-input"
               placeholder="Name of the company"
               className="edit-input" 
               />

              <label htmlFor="position-input">Position</label>
              <input
               type="text"
               id="position-input"
               placeholder="Title of your position"
               className="edit-input" />

              <label htmlFor="responsabilities-input">Responsabilities</label>
              <input
               type="text"
               id="responsabilities-input"
               placeholder="Main responsabilities"
               className="edit-input" />

              <label htmlFor="date-job-f-input">Date From</label>
              <input
               type="date"
               id="date-job-f-input"
               placeholder="Date From"
               className="edit-input" />

              <label htmlFor="date-job-t-input">Date To</label>
              <input
               type="date"
               id="date-job-t-input"
               placeholder="Date To"
               className="edit-input" />
            </form>
            {(!livePreview && <Button title="Add Experience"/>)}
          </SectionEdit>

        </div>

        <div className="preview-container">

        </div>
       </main>
    </>
  )
}

export default App
