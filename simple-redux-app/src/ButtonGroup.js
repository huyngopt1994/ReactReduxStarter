import React from "react";
import { setTechnology } from "./actions";
import { store }from "./store";

function dispatchBtnAction(event) {
    // get value of tech of  this button
    const tech = event.target.dataset.tech;
    // dispatch actions to reducer
    store.dispatch(setTechnology(tech));
}

const ButtonGroup = ({technologies}) => (
    <div>
        {technologies.map((tech) => (
            <button
                data-tech={tech}
                key={`btn-${tech.id}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
);

export default ButtonGroup;
