import './App.css';
import { styled } from 'styled-components';
import React, { useState } from 'react';

const Title = styled.h1`
  color: ${(props)=> props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props)=>props.theme.backgroundColor};
`

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`

function App() {
  const [value, setValue] = useState("")
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    const {
      currentTarget: {value},} = event;
      setValue(value)
    }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value)
  }  
 
  return (
    <Wrapper>
      <Title>Hello</Title>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onchange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
      <Container>
        <H1>protected</H1>
      </Container>
    </Wrapper>
  );
}

export default App;
