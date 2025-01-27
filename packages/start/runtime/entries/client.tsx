import { hydrate } from "solid-js/web";
import { MetaProvider } from "solid-meta";
import { Router } from "solid-app-router";
import { StartProvider } from "../../components";
import Root from "~/root";

import type { Component } from "solid-js";
import type { RouteDataFunc } from "solid-app-router";

const Start: Component<{ data?: RouteDataFunc }> = props => (
  <StartProvider>
    <MetaProvider>
      <Router data={props.data}>{props.children}</Router>
    </MetaProvider>
  </StartProvider>
);

hydrate(() => <Root Start={Start} manifest={{}} />, document);
