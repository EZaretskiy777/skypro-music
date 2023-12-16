import { SkeletonTheme } from "react-loading-skeleton";
import { React, useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { Wrapper } from "./components/Wrapper/Wrapper";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return (
    <>
      <GlobalStyle />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Wrapper loading={loading} />
      </SkeletonTheme>
    </>
  );
}

export default App;
