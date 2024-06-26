import { BrowserRouter, Routes, Route } from "react-router-dom"

//Lessons
// import Lesson16 from "./lessons/Lesson16/Lesson16"

//Homeworks
// import Homework16 from "homeworks/Homework16/Homework16"
// import Homework17 from "homeworks/Homework17/Homework17"

//Consultations
// import Consult18 from 'consultation/Consult18/Consult18'
// import Lesson19 from 'lessons/Lesson19/Lesson19'

import Layout from "pages/WeatherApp/Layout/Layout"
import Home from "pages/WeatherApp/Home/Home"
import Weather from "pages/WeatherApp/Weather/Weather"

// import Layout from "pages/UsersApp/Layout/Layout"
// import Home from "pages/UsersApp/Home/Home"
// import Users from "pages/UsersApp/Users/Users"

function App() {
  return (
    <BrowserRouter>
      {/* <Lesson16 /> */}
      {/* <Homework16 /> */}
      {/* <Homework17 /> */}
      {/* Lesson18 - Layout и его вложенные рауты */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>        
      </Layout> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
      {/* <Consult18 /> */}
      {/* <Lesson19 /> */}
    </BrowserRouter>
  )
}

export default App
