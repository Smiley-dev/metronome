import React from "react";

import Metronome from "./components/Metronome/Metronome";

import GlobalStyle from "./GlobalStyle";

const App: React.FC = () => {
      return (
            <>
                  <Metronome />
                  <GlobalStyle />
            </>
      );
};

export default App;
