import React from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import NavBar from './components/Navbar.jsx'
import Events from './components/Events.jsx'
import Story from './components/Story.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Tickets from './components/Tickets.jsx'
import Journal from './components/Journal.jsx'

const App = () => {
  return (
	<main className="relative min-h-screen w-screen overflow-x-hidden">
		<NavBar />
		<Hero />
		<About />
		<Events />
		<Tickets />
		<Story />
		<Journal />
		<Contact />
		<Footer />
	</main>
  )
}

export default App