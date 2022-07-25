import React, { useState } from "react";
import { configs } from "../types";
import Head from "next/head";
import HomePage from "../components/Layouts/HomePage";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Chartify</title>
      </Head>
      <HomePage />
    </>
  );
};
export default IndexPage;
