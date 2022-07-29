import React, { useEffect, useState } from "react";
import ChartCreator from "../components/Layouts/ChartCreator";
import Docs from "../components/Layouts/Docs";
import MyCharts from "../components/Layouts/SavedCharts";
import Page from "../components/Layouts/Sidebar";

const AppPage = () => {
  return null;
  // useEffect(() => {
  //   localStorage.removeItem("chakra-ui-color-mode");
  // }, []);

  // const [pages, setPages] = useState({
  //   home: true,
  //   docs: false,
  //   savedcharts: false,
  // });
  // return (
  //   <Page setPage={setPages}>
  //     {pages.home && <ChartCreator />}
  //     {/* {pages.docs && <Docs />} */}
  //     {pages.savedcharts && <MyCharts />}
  //   </Page>
  // );
};
export default AppPage;
