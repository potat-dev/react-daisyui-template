import React from "react";
import { default as Grid } from "react-masonry-css";
import "../styles/Masonry.css";

export default function Masonry(props) {
  return (
    <div className="flex justify-center pl-4 pr-3 md:pr-0">
      <Grid
        breakpointCols={props.masonryColumns}
        className="my-masonry-grid max-w-6xl"
        columnClassName="my-masonry-column"
      >
        {props.children}
      </Grid>
    </div>
  );
}
