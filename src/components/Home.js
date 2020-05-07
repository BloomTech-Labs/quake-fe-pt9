import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import WorldMap from "./WorldMap";


const Home = () => {
  return (
    <div className="home">
      <Header/>
      
      <div className="img-div">
        <WorldMap />
        {/* <Login /> */}
      </div>
      <h1>Preparedness</h1>

      <div className="prepare">
        <div className="p-div">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            ullamcorper diam. Praesent ullamcorper neque sit amet cursus
            consectetur. Curabitur consequat nec lorem sed pharetra. Quisque
            pretium urna at pulvinar feugiat. Maecenas nec augue a tellus
            placerat sollicitudin. Curabitur eu lacus eget magna consequat
            cursus et vel nulla. Vestibulum vel enim mauris. Maecenas ex arcu,
            rhoncus at nibh sed, laoreet congue nulla. Ut sit amet lacus nec ex
            malesuada sollicitudin. Fusce eu maximus erat, ac elementum ligula.
            Pellentesque in vulputate est. Aliquam vel nunc tempor, convallis
            quam lobortis, dignissim orci. Nam gravida nisi id felis
            sollicitudin fringilla. Nunc libero sem, auctor vitae lectus
            tincidunt, malesuada lobortis erat. Fusce lorem sem, aliquet eget
            iaculis eget, scelerisque eget diam. Quisque tincidunt aliquet
            ultrices.
          </p>
        </div>
        <div className="p-div">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
            ullamcorper diam. Praesent ullamcorper neque sit amet cursus
            consectetur. Curabitur consequat nec lorem sed pharetra. Quisque
            pretium urna at pulvinar feugiat. Maecenas nec augue a tellus
            placerat sollicitudin. Curabitur eu lacus eget magna consequat
            cursus et vel nulla. Vestibulum vel enim mauris. Maecenas ex arcu,
            rhoncus at nibh sed, laoreet congue nulla. Ut sit amet lacus nec ex
            malesuada sollicitudin. Fusce eu maximus erat, ac elementum ligula.
            Pellentesque in vulputate est. Aliquam vel nunc tempor, convallis
            quam lobortis, dignissim orci. Nam gravida nisi id felis
            sollicitudin fringilla. Nunc libero sem, auctor vitae lectus
            tincidunt, malesuada lobortis erat. Fusce lorem sem, aliquet eget
            iaculis eget, scelerisque eget diam. Quisque tincidunt aliquet
            ultrices.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
