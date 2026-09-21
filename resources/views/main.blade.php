@include('./layout/header');
<body>
        <!--*******************
        Preloader start
    ********************-->
        <div id="preloader">
            <div class="sk-three-bounce">
                <div class="sk-child sk-bounce1"></div>
                <div class="sk-child sk-bounce2"></div>
                <div class="sk-child sk-bounce3"></div>
            </div>
        </div>
        <!--*******************
        Preloader end
    ********************-->

        <!--**********************************
        Main wrapper start
    ***********************************-->
        <div id="main-wrapper">
            <!--**********************************
            Nav header start
        ***********************************-->
        @include('./layout/navbar')
        

            <!--**********************************
            Sidebar start
        ***********************************-->
     
         @include('./layout/sidebar')

            <!--**********************************
            Content body start
        ***********************************-->
            <div class="content-body">
     

                <div class="container-fluid">
                    @yield('content')
                 
                    </div>
                </div>
            </div>
            <!--**********************************
            Content body end
        ***********************************-->

            <!--**********************************
            Footer start
        ***********************************-->
    @include('layout/footer')