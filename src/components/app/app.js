import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, SingleComic } from '../pages';
// import Page404 from '../pages';

const Page404 = lazy(() => import('../pages/404'))


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback ={<span>Loading...</span>}>
                        <Routes>
                            <Route exact path="/" element={<MainPage />} />
                            <Route path="/comics" element={<ComicsPage />} />
                            <Route path="/comics/:comicId" element={<SingleComic />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>

                </main>
            </div>
        </Router>
    )
}

export default App;