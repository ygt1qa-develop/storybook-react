import React from 'react'
import Input from './Input'

export default {
    title: 'form/Input',
    component: Input,
}

export const Small = () => <Input variant='small'>Small size</Input>
export const Medium = () => <Input variant='medium'>Medium size</Input>
export const Large = () => <Input variant='large'>Large size</Input>

Small.storyName = 'Small Input'