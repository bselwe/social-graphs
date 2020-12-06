import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Sigma,
  ForceAtlas2,
  SigmaGraph,
  EdgeShapes,
  NodeShapes,
  RandomizeNodePositions,
  RelativeSize,
} from "react-sigma";

// class TFTR extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = 
//         { 
//             first_image: null,
//             second_image: null
//         };
//     }

//     handle_pop_vs_rap(e) {
//         e.preventDefault();
//     }

//     render() {
//         <div>
//             <h1>Please select a pair of genres</h1>
//             <img src={this.state.images[0]} alt="pop"/>
//             <img src={this.state.images[1]} alt="rap"/>
//             <button onClick={this.handle_pop_vs_rap}>Pop vs Rap</button>
//         </div>
//     }
// }

import pop from "../media/pop.png";
import rap from "../media/rap.png";

enum ComparedGenres {
    PopRap,
    Second,
    Third
}

const TF_TR: React.FC = () => {
    const [comparedGenres, setComparedGenres] = useState<ComparedGenres>();
    
    return <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
            <h1>Please select a pair of genres</h1>
                
            <button onClick={() => setComparedGenres(ComparedGenres.PopRap)}>Pop vs Rap</button>
            <button onClick={() => setComparedGenres(ComparedGenres.Second)}>Second</button>
            <button onClick={() => setComparedGenres(ComparedGenres.Third)}>Third</button>
        </div>
        <div>{comparedGenres ? displayComparedGenres(comparedGenres) : null}</div>
    </div>;
};

function displayComparedGenres(genres: ComparedGenres) {
    switch (genres) {
        case ComparedGenres.PopRap:
            return (
                <div>
                    <p>Pop vs Rap</p>
                    <img src={pop} alt="pop"/>
                    <img src={rap} alt="rap"/>
                </div>
            );
        default:
            return <div>Empty</div>;
    }
}

export default TF_TR;