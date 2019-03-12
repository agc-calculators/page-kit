import { storiesOf } from '@storybook/react';
import React from 'react';

import * as Layouts from '../src/styles/layouts';

storiesOf('Layouts', module)
.add('Three Columns', () => 
    <Layouts.StyledLayout>
        <Layouts.StyledLayoutColumnAside>
            Left
        </Layouts.StyledLayoutColumnAside>
        <Layouts.StyledLayoutColumnMain>
            Main
        </Layouts.StyledLayoutColumnMain>
        <Layouts.StyledLayoutColumnAside style={{"--layout-column-aside-order": "3"}}>
            Right
        </Layouts.StyledLayoutColumnAside>
    </Layouts.StyledLayout>
  )
  .add('Two Column Left', () => 
    <Layouts.StyledLayout>
        <Layouts.StyledLayoutColumnAside>
            Left Sidebar
        </Layouts.StyledLayoutColumnAside>
        <Layouts.StyledLayoutColumnMain style={{
            "--layout-column-main-border-right": "none"
        }}>
            Main
        </Layouts.StyledLayoutColumnMain>
    </Layouts.StyledLayout>
    )
    .add('Two Column Right', () => 
        <Layouts.StyledLayout>
            <Layouts.StyledLayoutColumnMain style={{
            "--layout-column-main-border-left": "none",
            "--layout-column-order": "1",
         }}>
                Main
            </Layouts.StyledLayoutColumnMain>
            <Layouts.StyledLayoutColumnAside style={{"--layout-column-aside-order": "2"}}>
                Right Sidebar
            </Layouts.StyledLayoutColumnAside>
        </Layouts.StyledLayout>
    )
    .add('Split Column Layout', () => 
        <Layouts.StyledLayout>
            <Layouts.StyledLayoutColumnAside style={{"--layout-column-aside-width": "50%"}}>
                Left
            </Layouts.StyledLayoutColumnAside>
            <Layouts.StyledLayoutColumnMain style={{
                "--layout-column-main-border-right": "none"
            }}>
                Right
            </Layouts.StyledLayoutColumnMain>

        </Layouts.StyledLayout>)