import React from "react";
import ReactImageMagnify from "react-image-magnify";

import tshirtImage from "../../assets/tshirt.png";

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

import {
  Container,
  Row,
  Panel,
  Column,
  Galery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Galery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Galery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperanto ou devolvemos seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais dobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      The leading causes of death in the United States are: 1. Heart Disease 2.
      Chuck Norris 3. Cancer Chuck Norris is ten feet tall, weighs two-tons,
      breathes fire, and could eat a hammer and take a shotgun blast standing
      Police label anyone attacking Chuck Norris as a Code 45-11... a suicide.
      Chuck Norris once roundhouse kicked someone so hard that his foot broke
      the speed of light, went back in time, and killed Amelia Earhart while she
      was flying over the Pacific Ocean When the Boogeyman goes to sleep every
      night, he checks his closet for Chuck Norris. Chuck Norris can win a game
      of Connect Four in only three moves, Chuck Norris has two speeds. Walk,
      and Kill.
      <br />
      <br />
      - 1X CAMISETA
      <br />
      <br />
      Contrary to popular belief, Chuck Norris, not the box jellyfish of
      northern Australia, is the most venomous creature on earth. Chuck Norris
      will attain statehood in 2009. His state flower will be the Magnolia,
      Contrary to popular belief, Chuck Norris, not the box jellyfish of
      northern Australia, is the most venomous creature on earth Chuck Norris
      will attain statehood in 2009. His state flower will be the Magnolia. CNN
      was originally created as the "Chuck Norris Network" to update Americans
      with on-the-spot ass kicking in real-time. When Chuck Norris does a
      pushup, he isn't lifting himself up, he's pushing the Earth down, Chuck
      Norris is my Homeboy.
    </p>
  </Description>
);

export default Product;
