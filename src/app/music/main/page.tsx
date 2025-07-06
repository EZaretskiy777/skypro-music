"use client";

import React, { useEffect } from "react";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import { tracksApi } from "@services/tracks/tracksApi";

export default function Home() {
  useEffect(() => {
    tracksApi().then((response) => {
      console.log("response", response);
    });
  }, []);

  return <CenterBlock header="Треки" />;
}
