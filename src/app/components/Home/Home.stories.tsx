import React from "react";

import { Meta, Story } from "@storybook/react";

import Home from "./Home";

export default {
    component:Home,
    title:"Pages/App/Home",
    decorators: [
        (Story)=>(
            <div style={{width:"1300px", height:"600px"}}>
                <Story/>
            </div>
        )
    ]
} as Meta;

export const Default: Story = (props)=>(<Home { ...props }/>)