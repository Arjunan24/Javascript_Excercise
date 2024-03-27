import React from "react"

import {create,act} from 'react-test-renderer'
import Myscreen frpm "./path"

const tree = create(<Myscreen/>)

test('snapShot',()=>{
    excpect(tree).toMatchSnapShot()
})

// button click
test('button press',()=>{
    const button  = tree.root.findByProps({testID:"my-button"}).props;
    act(()=>button.onPress());

    const text  = tree.root.findByProps({testID:"my-text"}).props;
    expect(text.children).toEqual("button pressed")

})
