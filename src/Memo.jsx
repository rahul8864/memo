import React, {memo} from 'react'

function Memo(props) {
    console.log('Child Component', props.data)
  return (
    <>
    <h1>Child Component</h1>
    </>
  )
}

export default memo(Memo)
