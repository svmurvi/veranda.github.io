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
          "РЕСТОРАН Константиныч"
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
              src="https://upload.wikimedia.org/wikipedia/ru/1/1b/%D0%A1%D0%B0%D1%88%D0%B0_%D0%91%D0%B5%D0%BB%D1%8B%D0%B9.jpg"
            />
            <Typography variant="h6">Константиныч</Typography>
            <Typography variant="body1">BOSS</Typography>
          </S.Person>
          <S.Person>
            <Avatar
              src="https://cdni-vm.gcdn.co/2019.09/original/720_5d71664382682c25cdda5cd6.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6">Константиныч 2</Typography>
            <Typography variant="body1">BOSS 2</Typography>
          </S.Person>
          <S.Person>
            <Avatar
              src="https://cdni-vm.gcdn.co/2019.09/original/720_5d71664382682c25cdda5cd6.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6">Константиныч 3</Typography>
            <Typography variant="body1">BOSS 3 </Typography>
          </S.Person>
          <S.Person>
            <Avatar
              src="https://cdni-vm.gcdn.co/2019.09/original/720_5d71664382682c25cdda5cd6.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6">Константиныч 4</Typography>
            <Typography variant="body1">BOSS 4</Typography>
          </S.Person>
          <S.Person>
            <Avatar
              src="https://cdni-vm.gcdn.co/2019.09/original/720_5d71664382682c25cdda5cd6.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6">Константиныч 5</Typography>
            <Typography variant="body1">BOSS 4</Typography>
          </S.Person>
          <S.Person>
            <Avatar
              src="https://cdni-vm.gcdn.co/2019.09/original/720_5d71664382682c25cdda5cd6.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6">Константиныч 6</Typography>
            <Typography variant="body1">BOSS 6</Typography>
          </S.Person>
          <S.Person>
            <Avatar
              src="https://cdni-vm.gcdn.co/2019.09/original/720_5d71664382682c25cdda5cd6.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6">Константиныч 7</Typography>
            <Typography variant="body1">BOSS 7</Typography>
          </S.Person>
        </S.Row>
      </S.Wrap>
    </div>
  );
};

export default Contacts;
