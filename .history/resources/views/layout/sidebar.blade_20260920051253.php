       <div class="deznav">
           <div class="deznav-scroll">
               <div class="main-profile">
                   <div class="image-bx">
                       <img src={{ asset('images.png') }} alt="" />
                       <a href="javascript:void(0);"><i class="fa fa-cog" aria-hidden="true"></i></a>
                   </div>
                   <h5 class="name"><span class="font-w400">سلام</span> {{auth()->user()->name}}</h5>
                   <p class="email">{{auth()->user()->email}}</p>
               </div>
               <ul class="metismenu" id="menu">
                   <li class="nav-label first">منوی اصلی</li>

                   <li class="nav-label">برنامه ها</li>
                   <li>
                       <a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                           <i class="flaticon-077-menu-1"></i>
                           <span class="nav-text">تکیت ها</span>
                       </a>
                       <ul aria-expanded="false">
                           {{-- @if(auth()->user()->hasRole('customer'))
                               <li><a href={{ route('') }}>ایجاد تکیت</a></li>
                          @else --}}
                           <li><a href={{ url('') }}>لیست تکیت</a></li>
                           <li><a href={{ route('') }}>تکیت ها ارجاع</a></li>
                          {{-- @endif --}}
                       </ul>
                   </li>

               </ul>
               <div class="copyright">
                   <p> توسعه دهنده  <strong>لیما احمدی</strong> </p>
               </div>
           </div>
       </div>
