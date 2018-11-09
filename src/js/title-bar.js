/****************************************************************************\
    electron-base-project
    Copyright (C) 2018 Jacob Radatz

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
\****************************************************************************/

//Simple helper file that initializes all of the buttons in the title bar
(function(){
	const remote = require("electron").remote;
	$("document").ready(function(){
		$("#developer-btn").click(function(e){
			const window = remote.getCurrentWindow();
			window.toggleDevTools();
		});

		$("#reload-btn").click(function(e){
			const window = remote.getCurrentWindow();
			window.reload();
		});

		$("#min-btn").click(function(e){
			const window = remote.getCurrentWindow();
			window.minimize();
		});

		$("#max-btn").click(function(e){
			const window = remote.getCurrentWindow();
			if (!window.isMaximized()) {
				window.maximize();
				this.children[0].textContent = "filter_none";
				this.children[0].style = "transform: scale(-1, -1);";
			} else {
				window.unmaximize();
				this.children[0].textContent = "crop_square";
				this.children[0].style = "";
			}
		});

		$("#close-btn").click(function(e){
			const window = remote.getCurrentWindow();
			window.close();
		});
	});
})();