import { Route, Routes } from 'react-router-dom'

import { List, Detail } from '../../pages'

const Body = () => {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/list' element={<List />} />
      <Route path='/detail/:pk' element={<Detail />} />
    </Routes>
  )
}

export default Body
