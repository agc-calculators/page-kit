import { storiesOf } from '@storybook/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

import * as Cards from '../src/styles/cards';

storiesOf('Cards', module)
  .add('Basic Card', () => 
    <Cards.StyledCard>
        <Cards.StyledCardContent><FontAwesomeIcon icon={faCloudSunRain} /> Card Content</Cards.StyledCardContent>
    </Cards.StyledCard>
    );