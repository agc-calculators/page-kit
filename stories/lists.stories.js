import { storiesOf } from '@storybook/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

import * as Lists from '../src/styles/lists';

storiesOf('Lists', module)
  .add('List Item', () => 
  <div>
    <Lists.StyledListHeader><span>Styled List</span></Lists.StyledListHeader>
    <Lists.StyledList>
      <Lists.StyledListItem>
        <a href="#">
          <Lists.StyledListItemIcon><FontAwesomeIcon icon={faCoffee} /></Lists.StyledListItemIcon>
          <Lists.StyledListItemText>Item One</Lists.StyledListItemText>
        </a>
      </Lists.StyledListItem>
      <Lists.StyledListItem>
        <a href="#">
          <Lists.StyledListItemIcon><FontAwesomeIcon icon={faCloudSunRain} /></Lists.StyledListItemIcon>
          <Lists.StyledListItemText>Item Two</Lists.StyledListItemText>
        </a>
      </Lists.StyledListItem>
    </Lists.StyledList>
  </div>)
  .add('Active List Item', () => <div>
    <Lists.StyledListHeader><span>Active Styled List</span></Lists.StyledListHeader>
    <Lists.StyledList>
  <Lists.StyledListItem className="active">
    <a href="#">
      <Lists.StyledListItemIcon><FontAwesomeIcon icon={faCoffee} /></Lists.StyledListItemIcon>
      <Lists.StyledListItemText>Item One</Lists.StyledListItemText>
    </a>
  </Lists.StyledListItem>
  <Lists.StyledListItem>
      <a href="#">
        <Lists.StyledListItemIcon><FontAwesomeIcon icon={faCloudSunRain} /></Lists.StyledListItemIcon>
        <Lists.StyledListItemText>Item Two</Lists.StyledListItemText>
      </a>
    </Lists.StyledListItem>
</Lists.StyledList>
</div>)
.add('Inline List', () => <Lists.InlineStyledList>
  <Lists.InlineStyledListItem>
    <a href="#">Dogs</a>
  </Lists.InlineStyledListItem>
  <Lists.InlineStyledListItem>
    <a href="#">Cats</a>
  </Lists.InlineStyledListItem>
  <Lists.InlineStyledListItem>
    <a href="#">Birds</a>
  </Lists.InlineStyledListItem>
  <Lists.InlineStyledListItem>
    <a href="#">Bats</a>
  </Lists.InlineStyledListItem>
</Lists.InlineStyledList>)
.add('Active Inline List', () => <Lists.InlineStyledList>
<Lists.InlineStyledListItem>
  <a href="#">Dogs</a>
</Lists.InlineStyledListItem>
<Lists.InlineStyledListItem className="active">
  <a href="#">Cats</a>
</Lists.InlineStyledListItem>
<Lists.InlineStyledListItem>
  <a href="#">Birds</a>
</Lists.InlineStyledListItem>
<Lists.InlineStyledListItem>
  <a href="#">Bats</a>
</Lists.InlineStyledListItem>
</Lists.InlineStyledList>)
