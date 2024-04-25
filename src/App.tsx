import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ClerkProvider, SignedIn, SignedOut, SignInButton} from '@clerk/clerk-react'
import RootLayout from './layouts/RootLayout';


const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || '';
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <>HI HOME  <div>
    </div></> },
      { path: "/contact", element: <>HI CONTACT</> },
      { path: "/sign-in/*", element: <>HI SIGN IN</> },
      { path: "/sign-up/*", element: <>HI SIGN UP</> },
    ]
  }
])
function App() {
  return (
    <>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <SignedOut>
      <SignInButton/>
    </SignedOut>
    <SignedIn>
      <RouterProvider router={router}/>
    </SignedIn>
    </ClerkProvider>
    </>
  );
}

export default App;
