import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { data } from "./data";
/*images*/

export const App = () => {
  
  const cardElements = data.map(info => 
    {
      return(
      <Card
        key={info.id}
        info={info}
      />
  )});
 

  return(
  <div className="container">
    <Navbar />
    <Hero />
    <section className="cards-list">
      {cardElements}
    </section>
  </div>
)};