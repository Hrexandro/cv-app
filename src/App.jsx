import { useState } from 'react'
import './App.css'
import Section from './components/Section'
// 1. Create a new React project.
// 2. Think about how to structure your application into components. Your application should include:
//    1.A section to add general information like name, email and phone number.
//    2.A section to add your educational experience (school name, title of study and date of study)
//    3.A section to add practical experience (company name, position title, main responsibilities
//    of your jobs, date from and until when you worked for that company)
// 3. Be sure to include an edit and submit button for each section or for the whole CV.
//  The submit button should submit your form and display the value of your input fields in HTML elements.
//   The edit button should add back (display) the input fields, with the previously displayed information as
//    values. In those input fields, you should be able to edit and resubmit the label. 
//    You’re going to make heavy use of state and props, so make sure you understood those concepts.
// 4. Create a components directory under your src directory and add your components.
// 5. Include a styles directory under your src directory for your CSS files. You’ll need to import these in the component files to use them.
// 6. Push the results and deploy them with any of the options mentioned below.
//  At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!


//next step - add onSubmit to add values to the lines

//props are changed outside the component, state inside, the input values probably cannot be changed using props :()
function App() {
  const [editMode, setEditMode] = useState(false)

  function handleEditChange(e){
    setEditMode(!editMode)
  }

  return (
    <form>
    {!editMode && <button onClick = {()=>{handleEditChange()}}>edit</button>}
    <Section
    title = "general info"
    editMode = {editMode}
    lines = {[
      { label: "name", id: "name"},
      { label: "email", id: "email"},
      { label: "phone", id: "phone"}]}
    />
    {editMode && <button onClick = {()=>{handleEditChange()}}>Save Changes</button>}
    </form>
  )
}

export default App
