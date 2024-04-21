import { useState } from 'react'
import { Nav } from './components/Nav.jsx'
import { Button } from './components/Button.jsx';
import { SectionEdit }  from './components/Section-edit'
import { SectionPreview } from './components/section-preview.jsx';
import { SectionCard } from './components/section-card.jsx';
function App() {

  const [livePreview, setLivePreview] = useState(true);

  const exampleData = {
    name: 'Jane Doe',
    email: 'janeDoe@hotmail.com',
    tel: '584128459878',
    location: 'Caracas',
    education: [{
      name: 'Harvard',
      title: 'Bsc Computer Science',
      from: '2024/04', 
      to: '2024/09',
      location: 'Caracas',
    }],
    practical: [{
      name: 'Hang Khui',
      title: 'Web Developer',
      activities: "Coding with some of the smartest minds around?  That's my day-to-day at Hang Khui. We push the limits here, developing web apps that change the game.",
      from: '2018/07',
      to: '2018/09',
      location: 'Hong Kong'
    }],
  }

  const [userData, setUserData] = useState(exampleData)

  const toggleLivePreview = () => {
    if(livePreview){
      setLivePreview(false);
    } else {
      setLivePreview(true);
    }
  }

  const setExampleData = (e) => {
    setUserData(exampleData);
  }

  const _formatDate = (dateValue) => {
    const selectedDate = new Date(dateValue);
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    const formattedDate = `${year}/${month}`

    return formattedDate;
  }

  const handleGeneralInfo = (e) => {
    let form = e.target.parentElement.querySelector('.form');

    let formObj = {
      name: form.querySelector('#name-input'),
      email: form.querySelector('#email-input'),
      tel: form.querySelector('#tel-input'),
      location: form.querySelector('#location-input'),
    }

    let infoObj = {
      name: formObj.name.value,
      email: formObj.email.value,
      tel: formObj.tel.value,
      location: formObj.location.value,
    }

    let userDataCopy = userData;
    userDataCopy.name = infoObj.name;
    userDataCopy.email = infoObj.email;
    userDataCopy.tel = infoObj.tel;
    userDataCopy.location = infoObj.location;

    setUserData({...userDataCopy});

    for(let prop in formObj){
      formObj[prop].value = '';
    }
  }

  const handleNewEducation = (e) => {
    let form = e.target.parentElement.querySelector('.form');

    let formObj = {
      name: form.querySelector('#school-input'),
      title: form.querySelector('#title-input'),
      from: form.querySelector('#date-education-f-input'),
      to: form.querySelector('#date-education-t-input'),
      location: form.querySelector('#eLocation-input'),
    }

    let educationObj = {
      name: formObj.name.value,
      title: formObj.title.value,
      from: _formatDate(formObj.from.value),
      to: _formatDate(formObj.to.value),
      location: formObj.location.value,
    }

    let userDataCopy = userData;
    userDataCopy.education.push(educationObj)

    setUserData({...userDataCopy});

    for(let prop in formObj){
      formObj[prop].value = '';
    }
  }

  const handleNewExperience = (e) => {
    let form = e.target.parentElement.querySelector('.form');

    let formObj = {
      name: form.querySelector('#company-input'),
      position: form.querySelector('#position-input'),
      activities: form.querySelector('#activities-input'),
      from: form.querySelector('#date-job-f-input'),
      to: form.querySelector('#date-job-t-input'),
    }

    let experienceObj = {
      name: formObj.name.value,
      position: formObj.position.value,
      activities: formObj.activities.value,
      from: _formatDate(formObj.from.value),
      to: _formatDate(formObj.to.value),
    }

    let userDataCopy = userData;
    userDataCopy.practical.push(experienceObj)

    setUserData({...userDataCopy});

    for(let prop in formObj){
      formObj[prop].value = '';
    }

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
            <form action="" className="form vertical-flex">
              <label htmlFor="name-input">Name</label>
              <input
                type="text"
                id="name-input" 
                placeholder="name"
                className="edit-input"
                defaultValue={userData.name}
                onChange={(e) => {
                  if(livePreview){
                    setUserData(
                      {...userData,
                      name: e.target.value})
                  }
                  }}/>

              <label htmlFor="email-input">Email</label>
              <input
                type="email"
                id="email-input" 
                placeholder="email"
                className="edit-input"
                defaultValue={userData.email}
                onChange={(e) => {
                  if(livePreview){
                    setUserData(
                      {...userData,
                      email: e.target.value})
                  }
                  }}/>
              
              <label htmlFor="tel-input">Tel</label>
              <input
                type="tel" 
                id="tel-input" 
                placeholder="tel"
                className="edit-input"
                defaultValue={userData.tel}
                onChange={(e) => {
                  if(livePreview){
                    setUserData(
                      {...userData,
                      tel: e.target.value})
                  }
                  }}/>

              <label htmlFor="location-input">Location</label>
              <input
                type="text" 
                id="location-input" 
                placeholder="tel"
                className="edit-input"
                defaultValue={userData.location}
                onChange={(e) => {
                  if(livePreview){
                    setUserData(
                      {...userData,
                      location: e.target.value})
                  }
                  }}/>
            </form>
            {(!livePreview && <Button title="submit" onClick={handleGeneralInfo}/>)}
            
          </SectionEdit>

          <SectionEdit title="Educational Experience" width={450} manualPreview={!livePreview}>
            <form action="" className="form vertical-flex">
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

              <label htmlFor="eLocation-input">Location</label>
              <input
               type="text"
               id="eLocation-input"
               placeholder="Location"
               className="edit-input" />

              <label htmlFor="date-education-f-input">Date From</label>
              <input
               type="date"
               id="date-education-f-input"
               placeholder="Date From"
               className="edit-input"
                />

              <label htmlFor="date-education-t-input">Date To</label>
              <input
               type="date"
               id="date-education-t-input"
               placeholder="Date To"
               className="edit-input" />
            </form>
            <Button className="form-btn" title="Add Education" onClick={handleNewEducation}/>
          </SectionEdit>


          <SectionEdit title="Practical Experience" width={450} manualPreview={!livePreview}>
            <form action="" className='form vertical-flex'>
              <label htmlFor="company-input">Company Name *</label>
              <input
               type="text"
               id="company-input"
               placeholder="Name of the company"
               className="edit-input"
               required 
               />

              <label htmlFor="position-input">Position *</label>
              <input
               type="text"
               id="position-input"
               placeholder="Title of your position"
               className="edit-input"
               required 
              />

              <label htmlFor="activities-input">Activities during your role *</label>
              <input
               type="text"
               id="activities-input"
               placeholder="Main activities"
               className="edit-input" 
               required 
              />

              <label htmlFor="date-job-f-input">Date From *</label>
              <input
               type="date"
               id="date-job-f-input"
               placeholder="Date From"
               className="edit-input"
               required 
              />

              <label htmlFor="date-job-t-input">Date To *</label>
              <input
               type="date"
               id="date-job-t-input"
               placeholder="Date To"
               className="edit-input"
               required
               />
            </form>
            <Button className="form-btn" title="Add Experience" onClick={handleNewExperience}/>
          </SectionEdit>

        </div>

        <div className="preview-container horizontal-center-flex">
          <div className="paper-cont">
            <SectionPreview className="vertical-center-flex">
              <h1 style={{'text-align': 'center'}}>{userData.name}</h1>
              <div className="general-info-cont">
                <ul className="horizontal-ul horizontal-center-flex">
                  <li id="email-li">{userData.email}</li>
                  <li id="tel-li">{userData.tel}</li>
                  <li id="location-li">{userData.location}</li>
                </ul>
              </div>
            </SectionPreview>

            <SectionPreview className="education-section" title="Education">
            {(userData.education.map((item) => <SectionCard from={item.from} to={item.to} location={item.location} header={item.name} subHeader={item.title} />))}
            </SectionPreview>

            <SectionPreview title="Experience">
            {(userData.practical.map((item) => <SectionCard from={item.from} to={item.to} location={item.location} header={item.name} subHeader={item.position} ><p>{item.activities}</p></SectionCard> ) )}
            </SectionPreview>
          </div>
        </div>
       </main>
    </>
  )
}

export default App
