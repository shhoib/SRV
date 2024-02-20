import Registration from "../Registration/Registration"
import Overview from "../overview/Overview"
import Sidebar from "../sidebar/Sidebar"
import './Home.scss';

const Home = () => {
  return (
    <section className="Home">
      <div className="sideANDoverview">
        <Sidebar/>
        <Overview/>
      </div>
        <Registration/>
    </section>
  )
}

export default Home