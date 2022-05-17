import {
  Card,
  CardMedia,
  CardContent,
  Chip,
  Typography,
  CardActionArea,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import { categories, products } from "../../assets/data/data";
import banner from "../../assets/images/banner.jpeg";
import menu from "../../assets/images/menu.png";
import { Product, ProductCategory } from "../../types";

import * as S from "./styled";

const Main = () => {
  const [activeMenu, setActiveMenu] = useState(ProductCategory.Grill);
  const [modalItem, setModalItem] = useState<Partial<Product> | null>(null);

  const filterCategory = () => products.filter(({ category }) => category === activeMenu);

  return (
    <div>
      <S.Banner>
        <img src={banner} alt="" />
      </S.Banner>
      <S.Wrap>
        <S.BlockTitle>
          <img
            src={menu}
            alt="Menu icon"
            style={{ maxHeight: 38, maxWidth: 38, marginRight: 10 }}
          />
          <Typography variant="h4">Наше меню</Typography>
        </S.BlockTitle>
        <S.ChipsWrap>
          {categories.map(({ name, key }) => (
            <Chip
              label={name}
              style={{ marginRight: 10 }}
              onClick={() => setActiveMenu(key)}
              variant={key === activeMenu ? "filled" : "outlined"}
            />
          ))}
        </S.ChipsWrap>
        <S.ProductsWrap>
          {filterCategory()
            .map((product) => (
              <Card
                style={{
                  width: 290,
                  marginBottom: 10,
                  marginRight: 10,
                }}
                onClick={() => setModalItem(product)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                  />
                  <Typography
                    align="right"
                    variant="subtitle2"
                    style={{ position: "absolute", top: 10, right: 10 }}
                  >
                    {product.price} ₽
                  </Typography>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </S.ProductsWrap>
      </S.Wrap>
      <Modal open={Boolean(modalItem)} onClose={() => setModalItem(null)}>
        <Card
          style={{
            width: 500,
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CardMedia component="img" height="140" image={modalItem?.image} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {modalItem?.title}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {modalItem?.text}
            </Typography>
            <Typography variant="h6">Состав:</Typography>
            <Typography variant="subtitle2">
              {modalItem?.ingredients}
            </Typography>
            <Typography align="right" variant="h5" style={{ marginTop: 20 }}>
              {modalItem?.price} ₽
            </Typography>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default Main;
