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

//This is a simple script that shims node_modules
// into an electron browser window.
// Essentially, it uses require API instead of loading by
// the absolute file path like traditional web page includes

//For jQuery (which we include first) we set the default window variables that jquery would set
window.$ = window.jQuery = require('jquery');
//For bootstrap (inserted after jQuery because Bootstrap depends on JQuery) we set the
// window Bootstrap variable (even though its not needed)
window.Bootstrap = require('bootstrap');
//Also include the jquery-electron-statusbar plugin
// this automatically hooks in the JQuery fn object so we just need to require it
require('jquery-electron-statusbar');