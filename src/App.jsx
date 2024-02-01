import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

// pages
import HomePage from "./pages/HomePage";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<RootLayout />}>
                    <Route index={true} path="/" element={<HomePage />} />
                </Route>
            </>,
        ),
    );

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
