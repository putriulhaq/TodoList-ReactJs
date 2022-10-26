import React, { useState } from "react";
import Form from "../components/form/Form";
// import Header from "../components/header/Header";
// import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "React",
      body: "Belajar React.",
      isDone: false,
    },
    {
      id: 2,
      title: "Css",
      body: "Belajar React.",
      isDone: true,
    },
  ]);

  const Layout = (props) => {
    return <div className="layout">{props.children}</div>;
  };

  function Header() {
    return (
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
    );
  }

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
