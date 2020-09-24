import React from 'react';
import styled from 'styled-components';

import PageWrapper from 'components/PageWrapper';
import bgImage from 'assets/images/bg.jpg';
import Logo from 'components/Logo';
import Avatar from 'components/Avatar';
import Lead from 'components/Lead';

const Cover = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  background-position: bottom left;
  background-size: cover;
  background: url(${bgImage}) no-repeat;
  color: #fff;
  display: grid;
  height: 100%;
  text-align: center;
`;

export default function Home(props) {
  return (
    <>
      <PageWrapper>
        <Cover>
          <section>
            <Avatar width="10em" marginBottom="md" />
            <div>
              <Logo
                width="35%"
                marginBottom="lg"
                color1="#cdcdcd"
                color2="#fff"
              />
            </div>
            <Lead width="50vw" textAlign="center" margin="0 auto">
              Experto en karate bajo el agua, apasionado lector de cajas de
              cereal y superheroe asintomático.
            </Lead>
          </section>
        </Cover>
      </PageWrapper>
    </>
  );
}
