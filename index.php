<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Yesler Developer Landing Page</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">


        <header id="header" class="page-header">
            <h1>This is the page header</h1>
        </header><!-- /header -->
        <div class="body">
        <p>what what</p>
        </div>

        </div>




        <footer>

        </footer>


        <script src="js/bower.js"></script>
        <script src="js/main.js"></script>
        <!-- comment out when not using Grunt Watch -->
        <script>
            if (document.location.hostname == "localhost") {
                js_script = document.createElement('script');
                js_script.type = "text/javascript";
                js_script.src = "//localhost:35729/livereload.js";
                document.getElementsByTagName('footer')[0].appendChild(js_script);
            }
        </script>
    </body>
</html>