import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import CaseStudyPage from './pages/CaseStudyPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
