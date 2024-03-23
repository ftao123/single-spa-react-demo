import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

const domElementGetter = () => {
  let el = document.getElementById("micro-content");
  if (!el) {
    el = document.createElement("div");
    el.id = "micro-content";
    document.body.appendChild(el);
  }

  return el;
};

export const singleSpaPacker = (rootComponent) => {
  const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter,
  });

  const bootstrap = (props) => {
    return reactLifecycles.bootstrap(props);
  };

  const mount = (props) => {
    return reactLifecycles.mount(props);
  };

  const unmount = (props) => {
    return reactLifecycles.unmount(props);
  };

  return { bootstrap, mount, unmount };
};
