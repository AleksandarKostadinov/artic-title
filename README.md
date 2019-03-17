# artic-title
Site simple for articles about sports, programming, science and life as it is.

Routes:
	- '/'
	- '/login'
	- '/register'
	- '/logout'
	- '/articles'
		- '/all'             : Shows all articles listed.	                                    Public
		- '/create'			 : Form for createing an article.                                   Only for registered users		
		- '/details/:slug'   : Shows details of an article.                                     Public
		- '/delete/:slug'	 : Shows form with details of the article with delete functinality. For the author and Admin only.
		- '/edit/:slug'		 : Shows form with details of the article with edit functinality.   For the author and Admin only.
		
TODOs:
-Manage folders.
-Change tab name.
-Implement recursive Bindng Forms
-Abstract Articles crud views
-Abstract NavWithLinks ( fix bad naming)
-Validate Article views
-Implement full functionality of the server: profies, comments, following, tags, 
-Paging