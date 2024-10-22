import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes/routes";
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './providers/AuthProvider';





createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
)
