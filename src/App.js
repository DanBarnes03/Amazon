import React from 'react';
import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';
import { Card } from './Components/Card';
import { Data } from './Data';
import { Slideshow } from './Components/Slideshow';
import { Footer } from './Components/Footer';
import './App.css';

function App() {
  const renderCards = Data.map(Data => {
    return(

      <Card
      data={Data}
      />

    )
  })

  return(

    <div>

    <Header/>

    <Sidebar/>

    <Slideshow
          imgs={[
            'https://www.thespruce.com/thmb/vf_MEDifLRzzmQNjMyUDR1FGA14=/3000x0/filters:no_upscale():max_bytes(150000):strip_icc()/tips-for-decorating-a-beautiful-bedroom-1976169-hero-e960fbb8311c4b9b875a1813962d34eb.jpg',
            'https://www.wrenkitchens.com/blog/wp-content/uploads/2021/12/2022-kitchen-design-trends-dark-kitchen-scaled.jpg',
            'https://www.bhg.com/thmb/dgy0b4w_W0oUJUxc7M4w3H4AyDo=/1866x0/filters:no_upscale():strip_icc()/living-room-gallery-shelves-l-shaped-couch-ELeyNpyyqpZ8hosOG3EG1X-b5a39646574544e8a75f2961332cd89a.jpg',
            'https://drif6qt34c9xw.cloudfront.net/wp-content/uploads/aluminium-conservatory-5-1024x512.jpg',
            'https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg',
            'https://www.oakfurnitureland.co.uk/blog/wp-content/uploads/2021/08/235909722_10160105506378118_2907713057664711930_n.jpg',
            'https://www.ikea.com/images/a-high-tech-gaming-room-with-blue-led-lighting-and-two-monit-23ed288777b713ae985cbe0cecc77a69.jpg?f=xxxl',
            'https://images.ctfassets.net/g44e4oo0e2sa/5tvDeKAKSGZdXDajkgMmWs/1d8952769220498c8a6f653df19ca291/Rhea_Suite_Main_Image_1500px.jpg?fm=webp&q=75&r=4',
            'https://ychef.files.bbci.co.uk/976x549/p0cd5zbl.jpg'
          ]}
          />

    <main>
      {renderCards}
    </main>

    <Footer/>

    </div>

  )
}


export default App;
