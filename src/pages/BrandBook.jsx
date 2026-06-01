import { Link } from 'react-router-dom'
import Deck from '../deck/Deck.jsx'
import './brand-book.css'

import Slide01 from './slides/Slide01.jsx'
import Slide02 from './slides/Slide02.jsx'
import Slide03 from './slides/Slide03.jsx'
import Slide04 from './slides/Slide04.jsx'
import Slide05 from './slides/Slide05.jsx'
import Slide06 from './slides/Slide06.jsx'
import Slide07 from './slides/Slide07.jsx'
import Slide08 from './slides/Slide08.jsx'
import Slide09 from './slides/Slide09.jsx'
import Slide10 from './slides/Slide10.jsx'
import Slide11 from './slides/Slide11.jsx'
import Slide12 from './slides/Slide12.jsx'
import Slide13 from './slides/Slide13.jsx'
import Slide14 from './slides/Slide14.jsx'
import Slide15 from './slides/Slide15.jsx'
import Slide16 from './slides/Slide16.jsx'
import Slide17 from './slides/Slide17.jsx'
import Slide18 from './slides/Slide18.jsx'
import Slide19 from './slides/Slide19.jsx'
import Slide20 from './slides/Slide20.jsx'
import Slide21 from './slides/Slide21.jsx'
import Slide22 from './slides/Slide22.jsx'
import Slide23 from './slides/Slide23.jsx'
import Slide24 from './slides/Slide24.jsx'
import Slide25 from './slides/Slide25.jsx'
import Slide26 from './slides/Slide26.jsx'

const SLIDES = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09,
  Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18,
  Slide19, Slide20, Slide21, Slide22, Slide23, Slide24, Slide25, Slide26,
]

export default function BrandBook() {
  return (
    <>
      <Deck slides={SLIDES} width={1920} height={1080} />
      <Link
        to="/"
        className="bb-exit mono"
        title="Back to site"
        aria-label="Back to site"
      >
        ← lindyoperation.com
      </Link>
    </>
  )
}
