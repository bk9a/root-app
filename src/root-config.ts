import { registerApplication, start } from "single-spa";
import "systemjs";

registerApplication({
  name: "my-microfrontend",
  app: () => System.import("my-microfrontend"),
  activeWhen: () => true,
});

start();
