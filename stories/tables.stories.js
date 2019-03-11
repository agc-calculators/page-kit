import { storiesOf } from '@storybook/react';
import React from 'react';

import * as Tables from '../src/styles/tables';

storiesOf('Tables', module)
  .add('Basic Table', () => 
    <Tables.StyledTable>
        <thead>
            <tr>
                <th>Name</th>
                <th>Occupation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Jack</td>
                <td>Candlestick Jumper</td>
            </tr>
        </tbody>
    </Tables.StyledTable>
    );