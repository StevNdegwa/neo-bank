import React from "react";

import { Meta, Story } from "@storybook/react";

import Home from "./Home";

export default {
    component:Home,
    title:"Home Component",
    decorators: [
        (Story)=>(
            <div style={{width:"1300px", height:"400px"}}>
                <Story/>
            </div>
        )
    ]
} as Meta;

export const Default: Story = (props)=>(<Home { ...props }/>)