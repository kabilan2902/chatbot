import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
        { text: "NEP", handler: () => { }, id: 1, },
        { text: "Demographic", handler: () => { }, id: 2 },
        { text: "Politics", handler: () => { }, id: 3 },
        { text: "IPL", handler: () => { }, id: 4 },
        { text: "Future of AI", handler: () => { }, id: 5 },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;