import React from 'react';
import CardGride from './home';
import VideoPage from './vedio';
import PageCollections from './collectionMarek';
import CardGrid from './gratuisFormation';
import PageCollectionsCommerce from './collectionCommerce';
import PageCollectionsDev from './collectionDev';
import Photos from './lesimage';
import styled from 'styled-components'; // Importer styled-components pour styliser les composants


// HomeFinal component
const HomeFinal = () => {
  return (
    <Container>
      {/* <Title>Welcome to EduPioneer</Title> */}

      {/* Afficher les composants dans l'ordre souhaité */}
      <Photos />
      <SectionTitle>Featured Collections</SectionTitle>
      <PageCollectionsCommerce />
      <PageCollectionsDev />
      <PageCollections />

      <SectionTitle>Popular Courses</SectionTitle>
      <CardGrid />
      <CardGride />

      <SectionTitle>Featured Videos</SectionTitle>
      <VideoPage />
    </Container>
  );
};

// Styled-components pour styliser les éléments
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #3498db;
  font-family: Calibre, sans-serif;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.8em;
  margin-top: 40px;
  margin-bottom: 20px;
`;

// Exporter le composant HomeFinal
export default HomeFinal;
