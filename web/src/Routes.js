import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="QrCodes" titleTo="qrCodes" buttonLabel="New QrCode" buttonTo="newQrCode">
      </Set>
      <Route path="/" page={HomePage} name="home" />
      {/* <Routes path="/posts" page={getPosts} name="posts" /> */}
      {/* */}
    </Router>
  )
}

export default Routes
