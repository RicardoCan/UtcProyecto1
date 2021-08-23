<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Gestión de Salas UTC</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta content="" name="keywords">
  <meta content="" name="description">

  <!-- Favicons -->
  <link href="img/logoutc.png" rel="icon">
  <link href="img/logoutc.png" rel="logoutc.png">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700|Raleway:300,400,400i,500,500i,700,800,900" rel="stylesheet">

  <!-- Bootstrap CSS File -->
  <link href="css2/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Libraries CSS Files -->
  <link href="css2/lib/nivo-slider/css/nivo-slider.css" rel="stylesheet">
  <link href="css2/lib/owlcarousel/owl.carousel.css" rel="stylesheet">
  <link href="css2/lib/owlcarousel/owl.transitions.css" rel="stylesheet">
  <link href="css2/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <link href="css2/lib/animate/animate.min.css" rel="stylesheet">
  <link href="css2/lib/venobox/venobox.css" rel="stylesheet">

  <!-- Nivo Slider Theme -->
  <link href="css2/css/nivo-slider-theme.css" rel="stylesheet">

  <!-- Main Stylesheet File -->
  <link href="css2/css/style.css" rel="stylesheet">

  <!-- Responsive Stylesheet File -->
  <link href="css2/css/responsive.css" rel="stylesheet">
</head>

<body data-spy="scroll" data-target="#navbar-example">

  <div id="preloader"></div>

  <header>
    <!-- header-area start -->
    <div id="sticker" class="header-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">

            <!-- Navigation -->
            <nav class="navbar navbar-default">
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                <ul class="nav navbar-nav navbar-right">
                  <li class="active">
                    <a class="page-scroll" href="inicio">Inicio</a>
                  </li>
                  <li>
                    <a class="page-scroll" href="#about">Calendario</a>
                  </li>
                  <li>
                    <a class="page-scroll" href="galeria">Galeria</a>
                  </li>
                  <li>
                    <a class="page-scroll" href="sesion">Login</a>
                  </li>
                </ul>
              </div>
              <!-- navbar-collapse -->
            </nav>
            <!-- END: Navigation -->
          </div>
        </div>
      </div>
    </div>
    <!-- header-area end -->
  </header>
  <!-- header end -->

   <div id="inicio" class="slider-area">
    <div class="bend niceties preview-2">
      <div id="ensign-nivoslider" class="slides">
        <img src="img/slider/PORTADA.jpg" alt="" title="#slider-direction-1" />
        <!--<img src="img/slider/slider2.jpg" alt="" title="#slider-direction-2" />
        <img src="img/slider/slider3.jpg" alt="" title="#slider-direction-3" />-->
      </div>

 <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <section class="content container-fluid">
      @yield('contenido')
    </section>
  </div>
</body>
 @stack('scripts')

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  <!-- JavaScript Libraries -->
  <script src="css2/lib/jquery/jquery.min.js"></script>
  <script src="css2/lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="css2/lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="css2/lib/venobox/venobox.min.js"></script>
  <script src="css2/lib/knob/jquery.knob.js"></script>
  <script src="css2/lib/wow/wow.min.js"></script>
  <script src="css2/lib/parallax/parallax.js"></script>
  <script src="css2/lib/easing/easing.min.js"></script>
  <script src="css2/lib/nivo-slider/js/jquery.nivo.slider.js" type="text/javascript"></script>
  <script src="css2/lib/appear/jquery.appear.js"></script>
  <script src="css2/lib/isotope/isotope.pkgd.min.js"></script>

  <!-- Contact Form JavaScript File -->
  <script src="css2/contactform/contactform.js"></script>

  <script src="css2/js/main.js"></script>
</body>

</html>
