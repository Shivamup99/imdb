import React from 'react'
import { CircularProgressbar , buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularBar({ rating }) {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
}
