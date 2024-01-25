import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { Main } from "./pages/Main/Main";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
import { Playlist } from "./pages/Playlist/Playlist";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = ({ loading, user }) => {
  return (
    <Routes>
      <Route
        element={<ProtectedRoute isAllowed={Boolean(user)}></ProtectedRoute>}
      >
        <Route path="/" element={<Main loading={loading} />}></Route>
        <Route
          path="/favorites"
          element={<Playlist loading={loading} />}
        ></Route>
        <Route
          path="/category/:id"
          element={<Playlist loading={loading} />}
        ></Route>
      </Route>
      <Route path="/register" element={<Signup />}></Route>
      <Route path="/login" element={<Signin />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
