import { storiesOf } from '@storybook/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

import * as Forms from '../src/styles/forms';

storiesOf('Forms', module)
  .add('Basic Form', () => 
    <Forms.StyledForm onSubmit={e => e.preventDefault()}>
        <label>Firstname</label>
        <p className="description">Tell us your firstname</p>
        <input name="firstname" type="text" />
        <p className="error">This field is required!</p>
        <label>Lastname</label>
        <input name="lastname" type="text" />

        <label>Firstname</label>
        <select name="occupation">
            <option>Designer</option>
            <option>Developer</option>
        </select>
        <input className="primary" type="submit" value="Submit" />
    </Forms.StyledForm>
    );