import React from 'react';
import { Switch, Route } from 'react-router';
import Main from './screens/Main';
import About from './screens/About';
import Login from './screens/Login';
import Register from './screens/Register';
import PollView from './screens/PollView';
import Profile from './screens/Profile';
import Chats from './screens/Chats';
import ChatRoom from './screens/ChatRoom';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/polls/:id" component={PollView} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/chats" component={Chats} />
            <Route path="/chats/:id" component={ChatRoom} />
        </Switch>
    );
};

export default Routes;