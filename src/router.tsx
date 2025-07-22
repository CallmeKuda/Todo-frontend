import { createRouter, createRoute } from '@tanstack/react-router'
import React from 'react'

const Root = () => <div><h1>Todo App</h1><Outlet /></div>
const TodoList = () => <div>Todo List Page</div>
const TodoDetails = () => <div>Todo Details Page</div>

import { Outlet } from 'react-router-dom'


const rootRoute = createRoute({
  getParentRoute: () => null,
  path: '/',
  component: Root,
})


const todosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'todos',
  component: TodoList,
})


const todoDetailsRoute = createRoute({
  getParentRoute: () => todosRoute,
  path: ':todoId',
  component: TodoDetails,
})

export const router = createRouter({
  routeTree: rootRoute.addChildren([todosRoute.addChildren([todoDetailsRoute])]),
})
