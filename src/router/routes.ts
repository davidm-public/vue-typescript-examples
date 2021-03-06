import * as Components from "@/components"
import { RouteConfig } from "vue-router"

export const routes: RouteConfig[] = [
        {
                path: "/",
                name: "Home",
                component: Components.HomePage,
        },
        {
                path: "/forms",
                name: "Forms (with and without custom Vue  inputs)",
                component: Components.ParentForm,
        },
        {
                path: "/dependency-injection",
                name: "Dependency Injection",
                component: Components.ParentDependencyInjection,
        },
        {
                path: "/custom-directives",
                name: "Directives",
                component: Components.DirectiveExample,
        },
        {
                path: "/custom-decorator",
                name: "Custom TypeScript Decorator",
                component: Components.ParentCustomVueTsDecorator,
        },
        {
                path: "/style",
                name: "Style: CSS, SCSS, Scoped, CSS-in-TS/JS",
                component: Components.ParentCustomVueTsDecorator,
        },
        {
                path: "/animation",
                name: "Animation",
                component: Components.AnimationExample,
                children: [
                        {
                                path: "css",
                                name: "Animation with CSS",
                                component: Components.AnimationExampleCSS,
                        },
                        {
                                path: "js",
                                name: "Animation with JS",
                                component: Components.AnimationExampleJS,
                        },
                        {
                                path: "third-party-library",
                                name: "Animation with Third Party Library",
                                component:
                                        Components.AnimationExampleThirdPartyLibrary,
                        },
                ],
        },
        {
                path: "/lifecycles",
                name: "Lifecycles (takes up to 3 seconds to load)",
                component: Components.LifecycleExamples,
        },
        {
                path: "/data-binding",
                name: "Data Binding",
                component: Components.DataBindingExample,
        },
        {
                path: "/methods",
                name: "Methods",
                component: Components.MethodsExample,
        },
        {
                path: "/event-emitting",
                name: "Event Emitting",
                component: Components.EventEmittingExample,
        },
        {
                path: "/passing-properties",
                name: "Passing Properties Down to Components",
                component: Components.PassingPropertiesDownExample,
        },
        {
                path: "/watch",
                name: "Watch (..for changes to data, and respond)",
                component: Components.WatchExample,
        },
        {
                path: "/computed-properties",
                name: "Computed Properties",
                component: Components.ComputedPropertiesExample,
        },
        {
                path: "/filters",
                name: "Filters",
                component: Components.FiltersExample,
        },
        {
                path: "/plugins",
                name: "Plugins",
                component: Components.PluginsExample,
        },
        {
                path: "/router",
                name: "Router",
                component: Components.RoutingExample,
                children: [
                        {
                                path: "one",
                                name: "Routing Example One",
                                component: Components.RoutingNestedExampleOne,
                        },
                        {
                                path: "two",
                                name: "Routing Example Two",
                                component: Components.RoutingNestedExampleTwo,
                        },
                ],
        },
        {
                path: "/store",
                name: "Store (State Management - Vuex)",
                component: Components.StoreExample,
        },
        {
                path: "/async-code-splitting",
                name: "Async Code Splitting Components",
                component: Components.AsyncCodeSplittingExample,
        },
]
