import { AppBar, Typography } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "../../pages/Contacts";
import Main from "../../pages/Main";
import logo from "../../assets/images/logo.jpeg";
import * as S from "./styled";

const App = () => {
  return (
    <Router>
      <div style={{ background: "#000" }}>
        <AppBar color="inherit">
          <S.Content>
            <S.Row>
              <S.Logo src={logo} alt="" />
              <Typography variant="h6">Кафе Veranda</Typography>
            </S.Row>
            <S.Row>
              <S.CustomLink to="/">Главная</S.CustomLink>
              <S.CustomLink to="/contacts">Контакты</S.CustomLink>
            </S.Row>
          </S.Content>
        </AppBar>
      </div>
      <Routes>
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<Main />} path="*" />
      </Routes>
      <S.Footer>
        <S.Content>
          <Typography variant="body2">
            © Все права защищены {new Date().getFullYear()}. Снежана Александровна
          </Typography>
          <S.Row>
            <S.CustomLink to="/">Главная</S.CustomLink>
            <S.CustomLink to="/contacts">Контакты</S.CustomLink>
          </S.Row>
        </S.Content>
      </S.Footer>
    </Router>
  );
}

export default App;
