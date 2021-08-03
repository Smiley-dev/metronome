import React from "react";

//Components
import Standard from "./Standard/Standard";
import Custom from "./Custom/Custom";

import { Wrapper, Tabs, Content, Tab } from "./Metronome.style";

const Metronome: React.FC = () => {
      return (
            <Wrapper>
                  <Tabs>
                        <Tab type="radio" id="standard-tab" name="tabs" checked={true} />
                        <label htmlFor="standard-tab">Standard</label>
                        <Content>
                              <Standard />
                        </Content>
                        <Tab type="radio" id="custom-tab" name="tabs" />
                        <label htmlFor="custom-tab">Custom</label>
                        <Content>
                              <Custom />
                        </Content>
                  </Tabs>
            </Wrapper>
      );
};

export default Metronome;
