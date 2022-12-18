import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StoreProvider } from './Providers/Store';
import Home from './Screens/Home';
import Article from './Screens/Article';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import AddArticle from './Screens/AddArticle';


function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <div className='py-3 px-10'>
                    <div>
                        <ul className="flex border-b">
                            <li className="-mb-px mr-1">
                                <Link to="/" className='bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-green-700 font-semibold'>
                                    Home
                                </Link>
                            </li>
                            <li className='-mb-px mr-1'>
                                <Link to="/login" className='bg-white inline-block py-2 px-4 text-green-500 hover:text-green-800 font-semibold'>
                                    Login
                                </Link>
                                <Link to="/signup" className='bg-white inline-block py-2 px-4 text-green-500 hover:text-green-800 font-semibold'>
                                    Sign Up
                                </Link>
                                <Link to="/add-article" className='bg-white inline-block py-2 px-4 text-green-500 hover:text-green-800 font-semibold'>
                                    Add Article
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/articles/:id" element={<Article />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/add-article" element={<AddArticle />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </StoreProvider>
    );
}

export default App;
