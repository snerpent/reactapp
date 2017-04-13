import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";

import Bootstrap from "./vendor/bootstrap-without-jquery.min.js";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";


const app = document.getElementById('app');


ReactDOM.render(
	<Router>
		<div>
			<Route path="/" component={Layout}>
			<Route path="/archives" name="archives" component={Archives} />
			<Route path="/settings" name="settings" component={Settings} />
			</Route>
		</div>
	</Router>,
app);
