import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Java Stack Developer with a Passion for Spring",
              "Spring Aficionado and React Enthusiast",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
          }}
        />
      )
}

export default Type