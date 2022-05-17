import { Avatar, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/images/banner.jpeg";
import contacts from "../../assets/images/contacts.png";
import team from "../../assets/images/team.png";
import * as S from "./styled";

const Contacts = () => {
  return (
    <div>
      <S.Banner>
        <img src={banner} alt="" />
      </S.Banner>
      <S.Wrap>
        <S.BlockTitle>
          <img
            src={contacts}
            alt="Menu icon"
            style={{ maxHeight: 38, maxWidth: 38, marginRight: 10 }}
          />
          <Typography variant="h4">Наши контакты</Typography>
        </S.BlockTitle>
        <Typography align="center" variant="h6">
          "Кафе Veranda"
        </Typography>
        <Typography align="center" variant="body2">
          г. Ульяновск, ул. Кирова 20а
        </Typography>
        <Typography align="center" variant="body2">
          Режим работы доставки и самовывоза: ПН-ВС: 11:00 - 23:00.
        </Typography>
        <Typography align="center" variant="h6">
          8 (8422) 99-55-55
        </Typography>
        <S.BlockTitle>
          <img
            src={team}
            alt="Menu icon"
            style={{ maxHeight: 38, maxWidth: 38, marginRight: 10 }}
          />
          <Typography variant="h4">Наша команда</Typography>
        </S.BlockTitle>
        <S.Row>
          <S.Person>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src="https://delai-vibor.com/wp-content/uploads/2018/03/%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80-2.jpg"
            />
            <Typography variant="h6">Пушкина С. А.</Typography>
            <Typography variant="body1">Директор</Typography>
          </S.Person>
          <S.Person>
            <Avatar
              src="https://proforientator.ru/upload/iblock/7d8/7d81cc0431e80332734c943b7a32073c.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6">Гущин С. К.</Typography>
            <Typography variant="body1">Менеджер</Typography>
          </S.Person>
        </S.Row>
      </S.Wrap>
    </div>
  );
};

export default Contacts;
