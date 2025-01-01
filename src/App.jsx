import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import EndUserDocsLayout from "./layouts/EndUserDocsLayout";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import GuidePage from "./pages/GuidePage";
import DynamicDocsPage from "./pages/DynamicDocsPage";
import DocsPage from "./pages/DocsPage";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Route>
      <Route path="/docs" element={<EndUserDocsLayout />}>
        <Route index element={<DocsPage />} />
        <Route path=":command" element={<DynamicDocsPage />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
