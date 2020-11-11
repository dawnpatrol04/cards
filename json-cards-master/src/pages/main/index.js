import React from 'react';
import RecipeReviewCard from '../../components/Card';

import file from '../../files/file.json'
import { Container } from './styles';

function Main() {
  return (
    <Container>
      {
        file.map(item => {
          
          const title = item.name || '-'
          const image = item.image || '-'

          return (
            <div>
              <RecipeReviewCard
                title={title}
                image={image}
              />
            </div>
          )
        })
      }
    </Container>
  );
}

export default Main;